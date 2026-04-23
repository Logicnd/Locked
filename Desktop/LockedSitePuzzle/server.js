const express = require('express');
const crypto = require('crypto');
const fs = require('fs').promises;
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;
const DATA_FILE = './users.json';

// In-memory storage with file persistence
let users = new Map();

// Simple hash function using crypto
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Load users from file
async function loadUsers() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const parsed = JSON.parse(data);
    users = new Map(Object.entries(parsed));
  } catch (err) {
    users = new Map();
  }
}

// Save users to file
async function saveUsers() {
  const obj = Object.fromEntries(users);
  await fs.writeFile(DATA_FILE, JSON.stringify(obj, null, 2));
}

// Generate puzzle password from username (reversed)
function generatePuzzlePassword(username) {
  return username.toLowerCase().split('').reverse().join('');
}

// Get messages
function getTaunt(username, attemptCount) {
  const taunts = [
    `So close, ${username}... yet so far.`,
    `${username}, you're making this harder than it needs to be.`,
    `Persistence is key, ${username}.`,
    `${username}, the answer is staring at you.`,
    "Maybe look at your name differently?",
    `The system recognizes you, ${username}. But do you recognize it?`,
    `${username}, reverse your thinking.`,
    `Patterns, ${username}. Look for patterns.`,
    `Each failure teaches, ${username}.`,
    `${username}, think backwards.`
  ];
  return taunts[Math.floor(Math.random() * taunts.length)];
}

function getHint(username, attemptCount) {
  const reversed = username.toLowerCase().split('').reverse().join('');
  const hints = [
    "There's something backwards about this...",
    "Try reading it in reverse.",
    `The last letter is '${username.slice(-1)}'`,
    `The first letter should be '${username.slice(-1)}'`,
    "Think mirror...",
    `It starts with '${reversed[0]}' and ends with '${reversed.slice(-1)}'`,
    "What if you spelled your name backwards?",
    "The key is the mirror of your identity."
  ];
  return hints[Math.min(attemptCount - 1, hints.length - 1)];
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'locked-site-secret-' + Math.random().toString(36),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
}));

// Serve static files
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/pages', express.static('public/pages'));

// Redirect root to login
app.get('/', (req, res) => {
  res.redirect('/pages/login.html');
});

// Routes
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Identity and key required' });
  }
  
  const lowerUsername = username.toLowerCase();
  const user = users.get(lowerUsername);
  const puzzlePassword = generatePuzzlePassword(lowerUsername);
  
  // New user - check if they solved the puzzle
  if (!user) {
    if (password.toLowerCase() === puzzlePassword) {
      // Auto-register on correct puzzle answer
      const id = uuidv4();
      const hash = hashPassword(password);
      
      users.set(lowerUsername, {
        id,
        username: lowerUsername,
        password_hash: hash,
        attempts: 0,
        created_at: Date.now()
      });
      
      await saveUsers();
      req.session.userId = id;
      
      return res.json({ 
        success: true, 
        message: 'Puzzle solved. Access granted.',
        user: { id, username: lowerUsername }
      });
    }
    
    // Wrong answer
    return res.status(403).json({
      error: 'Access denied',
      taunt: getTaunt(lowerUsername, 1),
      hint: null,
      attemptCount: 1
    });
  }
  
  // Existing user - verify password
  const inputHash = hashPassword(password);
  
  if (inputHash !== user.password_hash) {
    user.attempts = (user.attempts || 0) + 1;
    await saveUsers();
    
    let response = {
      error: 'Access denied',
      attemptCount: user.attempts
    };
    
    if (user.attempts === 1) {
      response.message = "Hm, that wasn't it...";
    } else if (user.attempts === 2) {
      response.message = "The key has a connection to your identity...";
    } else if (user.attempts % 3 === 0) {
      response.hint = getHint(lowerUsername, user.attempts);
    } else {
      response.taunt = getTaunt(lowerUsername, user.attempts);
    }
    
    return res.status(403).json(response);
  }
  
  // Success
  user.attempts = 0;
  await saveUsers();
  req.session.userId = user.id;
  
  res.json({ 
    success: true, 
    message: 'Access granted.',
    user: { id: user.id, username: user.username }
  });
});

app.get('/api/me', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  
  const user = Array.from(users.values()).find(u => u.id === req.session.userId);
  if (!user) {
    return res.status(401).json({ error: 'Identity not found' });
  }
  
  res.json({ user: { id: user.id, username: user.username } });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

app.post('/api/reset', async (req, res) => {
  const { username } = req.body;
  const user = users.get(username.toLowerCase());
  if (user) {
    user.attempts = 0;
    await saveUsers();
  }
  res.json({ success: true });
});

// Generate Puzzle 2 (hex challenge based on username)
function generatePuzzle2(username) {
  // Create a hex-encoded message based on username
  const msg = `WELCOME_${username.toUpperCase()}`;
  const hex = msg.split('').map(c => c.charCodeAt(0).toString(16).toUpperCase()).join(' ');
  return { hex, answer: msg };
}

// Puzzle 2 endpoint
app.get('/api/puzzle2', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Access denied' });
  }
  
  const user = Array.from(users.values()).find(u => u.id === req.session.userId);
  if (!user) {
    return res.status(401).json({ error: 'Identity not found' });
  }
  
  const puzzle = generatePuzzle2(user.username);
  
  res.json({
    challenge: "The System speaks in hexadecimal.",
    hint: "Convert hex to ASCII. Each pair represents one character.",
    data: puzzle.hex,
    example: "41 42 43 = ABC"
  });
});

// Verify Puzzle 2
app.post('/api/puzzle2/verify', async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Access denied' });
  }
  
  const { answer } = req.body;
  const user = Array.from(users.values()).find(u => u.id === req.session.userId);
  
  if (!user) {
    return res.status(401).json({ error: 'Identity not found' });
  }
  
  const puzzle = generatePuzzle2(user.username);
  const normalizedAnswer = answer.toUpperCase().replace(/\s/g, '');
  const correctAnswer = puzzle.answer.replace(/_/g, '');
  
  if (normalizedAnswer === correctAnswer || answer.toUpperCase() === puzzle.answer) {
    user.puzzle2_solved = true;
    user.puzzle2_solved_at = Date.now();
    await saveUsers();
    
    return res.json({
      success: true,
      message: "Puzzle 2 solved! You've proven worthy of the leaderboard.",
      rank: getLeaderboard().findIndex(u => u.id === user.id) + 1
    });
  }
  
  res.status(403).json({
    error: 'Incorrect. Study the hex carefully.',
    attempts: (user.puzzle2_attempts = (user.puzzle2_attempts || 0) + 1)
  });
});

// Leaderboard
function getLeaderboard() {
  return Array.from(users.values())
    .filter(u => u.puzzle2_solved)
    .sort((a, b) => a.puzzle2_solved_at - b.puzzle2_solved_at)
    .map((u, index) => ({
      rank: index + 1,
      username: u.username,
      solved_at: u.puzzle2_solved_at,
      time_taken: Math.floor((u.puzzle2_solved_at - u.created_at) / 1000)
    }));
}

app.get('/api/leaderboard', (req, res) => {
  res.json({ leaderboard: getLeaderboard() });
});

// Check puzzle 2 status
app.get('/api/puzzle2/status', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Access denied' });
  }
  
  const user = Array.from(users.values()).find(u => u.id === req.session.userId);
  if (!user) {
    return res.status(401).json({ error: 'Identity not found' });
  }
  
  res.json({
    solved: !!user.puzzle2_solved,
    attempts: user.puzzle2_attempts || 0
  });
});

// Import new API routes
const apiRoutes = require('./api/routes');

// Mount new API routes
app.use('/api/v2', apiRoutes);

// Initialize and start
loadUsers().then(() => {
  app.listen(PORT, () => {
    console.log(`🔒 LOCKED server running on http://localhost:${PORT}`);
    console.log('   Puzzle: Your password is your username reversed');
    console.log('   New API v2 available at /api/v2/*');
  });
});

// Export for Vercel and API usage
module.exports = {
  app,
  users,
  getAllUsers: async () => Array.from(users.values()),
  saveUser: async (user) => {
    users.set(user.id, user);
    await saveUsers();
  }
};
