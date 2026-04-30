const express = require('express');
const crypto = require('crypto');
const fs = require('fs').promises;
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;
const DATA_FILE = './users.json';
const CURRENT_PASSWORD_SCHEME = 2;

// In-memory storage with file persistence
let users = new Map();

// Simple hash function using crypto
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function normalizeUsername(username = '') {
  return String(username).trim().toLowerCase();
}

function compactIdentity(username) {
  const normalized = normalizeUsername(username);
  const compact = normalized.replace(/[^a-z0-9]/g, '');
  return compact || normalized.replace(/\s+/g, '') || 'cipher';
}

function splitByPass(text) {
  const firstPass = [];
  const secondPass = [];

  for (let index = 0; index < text.length; index += 1) {
    if (index % 2 === 0) {
      firstPass.push(text[index]);
    } else {
      secondPass.push(text[index]);
    }
  }

  return {
    oddPass: firstPass.join(''),
    evenPass: secondPass.join('')
  };
}

function uniqueCharacters(text) {
  const seen = new Set();
  let output = '';

  for (const char of text) {
    if (!seen.has(char)) {
      seen.add(char);
      output += char;
    }
  }

  return output;
}

function alternatingCase(text) {
  let letterIndex = 0;

  return text
    .split('')
    .map((char) => {
      if (!/[a-z]/i.test(char)) {
        return char;
      }

      const output = letterIndex % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      letterIndex += 1;
      return output;
    })
    .join('');
}

function rotateText(text, shift) {
  if (text.length <= 1) {
    return text;
  }

  const normalizedShift = ((shift % text.length) + text.length) % text.length;
  return text.slice(normalizedShift) + text.slice(0, normalizedShift);
}

function getIdentityMetrics(username) {
  const normalized = normalizeUsername(username);
  const base = compactIdentity(normalized);
  const lettersOnly = base.replace(/[^a-z]/g, '');
  const digitsOnly = base.replace(/[^0-9]/g, '');
  const vowelCount = (lettersOnly.match(/[aeiou]/g) || []).length;
  const consonantCount = Math.max(lettersOnly.length - vowelCount, 0);
  const digitSum = digitsOnly.split('').reduce((sum, digit) => sum + Number(digit), 0);
  const checksum = base.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const { oddPass, evenPass } = splitByPass(base);
  const rotation = base.length > 1 ? (checksum % (base.length - 1)) + 1 : 0;
  const rotated = rotateText(base, rotation);
  const unique = uniqueCharacters(base);
  const midpoint = Math.ceil(base.length / 2);

  return {
    normalized,
    base,
    lettersOnly,
    digitsOnly,
    vowelCount,
    consonantCount,
    digitSum,
    checksum,
    oddPass,
    evenPass,
    rotation,
    rotated,
    unique,
    midpoint,
    length: base.length,
    firstChar: base[0] || 'x',
    lastChar: base.slice(-1) || 'x'
  };
}

const keyProtocols = [
  {
    id: 'interlace',
    label: 'Interlace',
    descriptor: 'Two-pass weave',
    description: 'Clean the identity, run the letters in two passes, then sign the result with a short biometric suffix.',
    structure: '1st/3rd/5th characters first, then 2nd/4th/6th, then a metric pair.',
    build: ({ oddPass, evenPass, length, vowelCount }) => `${oddPass}${evenPass}-${length}${vowelCount}`,
    hints: ({ length, vowelCount }) => [
      'Strip spaces and symbols before you start.',
      'Take the 1st, 3rd, 5th characters first, then append the 2nd, 4th, 6th.',
      `Finish with "-${length}${vowelCount}".`
    ]
  },
  {
    id: 'cadence',
    label: 'Cadence',
    descriptor: 'Alternating case',
    description: 'The cleaned identity flips case as it moves, then closes with a punctuation stamp and letter counts.',
    structure: 'Alternating case core, exclamation mark, then vowel and consonant counts.',
    build: ({ base, vowelCount, consonantCount }) => `${alternatingCase(base)}!${vowelCount}${consonantCount}`,
    hints: ({ vowelCount, consonantCount }) => [
      'Strip spaces and symbols before you start.',
      'Alternate the casing of each letter, beginning with uppercase.',
      `End with "!${vowelCount}${consonantCount}".`
    ]
  },
  {
    id: 'orbit',
    label: 'Orbit',
    descriptor: 'Rotated uppercase',
    description: 'Rotate the cleaned identity, convert it to uppercase, then mark it with a short numeric signature.',
    structure: 'Rotated uppercase core, underscore, then a checksum marker.',
    build: ({ rotated, checksum, digitSum, length }) => `${rotated.toUpperCase()}_${(checksum % 7) + 1}${digitSum || length}`,
    hints: ({ rotation, checksum, digitSum, length }) => [
      'Strip spaces and symbols before you start.',
      `Rotate the cleaned identity left by ${rotation} character${rotation === 1 ? '' : 's'}.`,
      `Uppercase it and end with "_${(checksum % 7) + 1}${digitSum || length}".`
    ]
  },
  {
    id: 'splice',
    label: 'Splice',
    descriptor: 'Split-core checksum',
    description: 'The cleaned identity is split in half, the front is elevated, and the whole thing is sealed with a checksum fragment.',
    structure: 'Uppercase front half, lowercase back half, and a two-digit checksum.',
    build: ({ base, midpoint, checksum }) => {
      const front = base.slice(0, midpoint).toUpperCase();
      const back = base.slice(midpoint);
      return `${front}.${back}.${String(checksum % 97).padStart(2, '0')}`;
    },
    hints: ({ midpoint, checksum }) => [
      'Strip spaces and symbols before you start.',
      `Split the cleaned identity after character ${midpoint}.`,
      `Uppercase the front half and end with ".${String(checksum % 97).padStart(2, '0')}".`
    ]
  },
  {
    id: 'prism',
    label: 'Prism',
    descriptor: 'Deduped identity',
    description: 'Repeated characters collapse into a cleaner core, then the key closes with initials from the original identity.',
    structure: 'Deduped core, dash, then the original first and last characters plus length.',
    build: ({ unique, firstChar, lastChar, length }) => `${unique}-${firstChar.toUpperCase()}${lastChar.toUpperCase()}${length}`,
    hints: ({ firstChar, lastChar, length }) => [
      'Strip spaces and symbols before you start.',
      'Keep only the first occurrence of each character, from left to right.',
      `Finish with "-${firstChar.toUpperCase()}${lastChar.toUpperCase()}${length}".`
    ]
  }
];

function getKeyProtocol(username) {
  const metrics = getIdentityMetrics(username);
  const protocol = keyProtocols[metrics.checksum % keyProtocols.length];
  const answer = protocol.build(metrics);

  return {
    ...protocol,
    answer,
    metrics,
    profile: {
      protocol: protocol.label,
      descriptor: protocol.descriptor,
      clue: protocol.description,
      structure: protocol.structure,
      identityCore: metrics.base,
      keyLength: answer.length
    }
  };
}

// Generate puzzle password from the active identity protocol
function generatePuzzlePassword(username) {
  return getKeyProtocol(username).answer;
}

function generateLegacyPuzzlePassword(username) {
  return normalizeUsername(username).split('').reverse().join('');
}

function getPhase1AttemptStore(sessionState) {
  if (!sessionState.phase1Attempts || typeof sessionState.phase1Attempts !== 'object') {
    sessionState.phase1Attempts = {};
  }

  return sessionState.phase1Attempts;
}

function incrementPhase1Attempt(sessionState, username) {
  const attempts = getPhase1AttemptStore(sessionState);
  attempts[username] = (attempts[username] || 0) + 1;
  return attempts[username];
}

function clearPhase1Attempt(sessionState, username) {
  const attempts = getPhase1AttemptStore(sessionState);
  delete attempts[username];
}

function getTaunt(username, attemptCount, protocol) {
  const taunts = [
    `${username}, the ${protocol.label.toLowerCase()} pattern is still misaligned.`,
    'Closer, but the identity signature is drifting.',
    'Right identity, wrong assembly order.',
    `${username}, the system likes precision more than guesswork.`,
    'The key is structured, not random. Read the profile again.',
    'You found the door. Now match the protocol.',
    `${username}, the cipher wants the cleaned identity, not the noisy one.`,
    'The punctuation is part of the key. Do not skip it.'
  ];

  return taunts[(attemptCount - 1) % taunts.length];
}

function buildPhase1Failure(username, attemptCount) {
  const protocol = getKeyProtocol(username);
  const hints = protocol.hints(protocol.metrics);
  const response = {
    error: 'Access denied',
    attemptCount,
    profile: protocol.profile
  };

  if (attemptCount === 1) {
    response.message = `${protocol.label} protocol active. The key format changed.`;
  } else if (attemptCount <= hints.length + 1) {
    response.hint = hints[attemptCount - 2];
  } else {
    response.taunt = getTaunt(username, attemptCount, protocol);
  }

  return response;
}

function setAuthenticatedSession(req, user) {
  req.session.userId = user.id;
  req.session.user = {
    id: user.id,
    username: user.username
  };
}

function getUserBySession(req) {
  if (!req.session.userId) {
    return null;
  }

  return Array.from(users.values()).find((user) => user.id === req.session.userId) || null;
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

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || `locked-site-secret-${Math.random().toString(36)}`,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production', maxAge: 24 * 60 * 60 * 1000 }
}));

// Serve static files
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/pages', express.static('public/pages'));

// Redirect root to login
app.get('/', (req, res) => {
  res.redirect('/pages/login.html');
});

app.get('/pages/leaderboard.html', (req, res) => {
  res.redirect('/pages/unlocked.html');
});

app.get('/api/key-profile', (req, res) => {
  const username = normalizeUsername(req.query.username || '');

  if (!username) {
    return res.status(400).json({ error: 'Identity required' });
  }

  const protocol = getKeyProtocol(username);
  return res.json({ profile: protocol.profile });
});

// Routes
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Identity and key required' });
  }

  const lowerUsername = normalizeUsername(username);
  const user = users.get(lowerUsername);
  const currentPassword = generatePuzzlePassword(lowerUsername);
  const currentHash = hashPassword(currentPassword);
  const legacyHash = hashPassword(generateLegacyPuzzlePassword(lowerUsername));

  if (!user) {
    if (password === currentPassword) {
      const id = uuidv4();
      const createdAt = Date.now();
      const newUser = {
        id,
        username: lowerUsername,
        password_hash: currentHash,
        password_scheme: CURRENT_PASSWORD_SCHEME,
        attempts: 0,
        created_at: createdAt,
        updated_at: createdAt
      };

      users.set(lowerUsername, newUser);
      await saveUsers();

      clearPhase1Attempt(req.session, lowerUsername);
      setAuthenticatedSession(req, newUser);

      return res.json({
        success: true,
        message: 'Protocol matched. Access granted.',
        user: { id, username: lowerUsername }
      });
    }

    const attemptCount = incrementPhase1Attempt(req.session, lowerUsername);
    return res.status(403).json(buildPhase1Failure(lowerUsername, attemptCount));
  }

  const inputHash = hashPassword(password);
  const matchesStoredPassword = inputHash === user.password_hash;
  const matchesCurrentProtocol = inputHash === currentHash;
  const matchesLegacyProtocol = !user.password_scheme && inputHash === legacyHash;

  if (!matchesStoredPassword && !matchesCurrentProtocol && !matchesLegacyProtocol) {
    user.attempts = (user.attempts || 0) + 1;
    user.updated_at = Date.now();
    await saveUsers();

    return res.status(403).json(buildPhase1Failure(lowerUsername, user.attempts));
  }

  const needsUpgrade = user.password_scheme !== CURRENT_PASSWORD_SCHEME || matchesCurrentProtocol;
  let successMessage = 'Access granted.';

  if (needsUpgrade) {
    user.password_hash = currentHash;
    user.password_scheme = CURRENT_PASSWORD_SCHEME;
    successMessage = matchesStoredPassword && !matchesCurrentProtocol
      ? 'Legacy key accepted. Identity protocol upgraded.'
      : 'Protocol matched. Access granted.';
  }

  user.attempts = 0;
  user.updated_at = Date.now();
  await saveUsers();

  clearPhase1Attempt(req.session, lowerUsername);
  setAuthenticatedSession(req, user);

  return res.json({
    success: true,
    message: successMessage,
    user: { id: user.id, username: user.username }
  });
});

app.get('/api/me', (req, res) => {
  const user = getUserBySession(req);

  if (!user) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  setAuthenticatedSession(req, user);

  return res.json({
    user: {
      id: user.id,
      username: user.username
    }
  });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

app.post('/api/reset', async (req, res) => {
  const username = normalizeUsername(req.body.username || '');
  const user = users.get(username);

  if (user) {
    user.attempts = 0;
    user.updated_at = Date.now();
    await saveUsers();
  }

  clearPhase1Attempt(req.session, username);
  res.json({ success: true });
});

// Generate Puzzle 2 (hex challenge based on username)
function generatePuzzle2(username) {
  const msg = `ARCHIVE_${compactIdentity(username).toUpperCase()}_OPEN`;
  const hex = msg
    .split('')
    .map((char) => char.charCodeAt(0).toString(16).toUpperCase())
    .join(' ');

  return { hex, answer: msg };
}

// Puzzle 2 endpoint
app.get('/api/puzzle2', (req, res) => {
  const user = getUserBySession(req);

  if (!user) {
    return res.status(401).json({ error: 'Access denied' });
  }

  const puzzle = generatePuzzle2(user.username);

  return res.json({
    challenge: 'The archive signal is hex-encoded.',
    hint: 'Convert each hex pair into an ASCII character.',
    data: puzzle.hex,
    example: '41 42 43 = ABC'
  });
});

// Verify Puzzle 2
app.post('/api/puzzle2/verify', async (req, res) => {
  const user = getUserBySession(req);

  if (!user) {
    return res.status(401).json({ error: 'Access denied' });
  }

  const { answer } = req.body;
  const puzzle = generatePuzzle2(user.username);
  const normalizedAnswer = String(answer || '').toUpperCase().replace(/\s/g, '');
  const correctAnswer = puzzle.answer.replace(/_/g, '');

  if (normalizedAnswer === correctAnswer || String(answer || '').toUpperCase() === puzzle.answer) {
    user.puzzle2_solved = true;
    user.puzzle2_solved_at = Date.now();
    user.updated_at = Date.now();
    await saveUsers();

    return res.json({
      success: true,
      message: 'Phase 2 cleared. Archive channel unlocked.'
    });
  }

  user.puzzle2_attempts = (user.puzzle2_attempts || 0) + 1;
  user.updated_at = Date.now();
  await saveUsers();

  return res.status(403).json({
    error: 'Incorrect. Study the hex carefully.',
    attempts: user.puzzle2_attempts
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.status(410).json({ error: 'Leaderboard retired.' });
});

// Check puzzle 2 status
app.get('/api/puzzle2/status', (req, res) => {
  const user = getUserBySession(req);

  if (!user) {
    return res.status(401).json({ error: 'Access denied' });
  }

  res.json({
    solved: !!user.puzzle2_solved,
    attempts: user.puzzle2_attempts || 0,
    solvedAt: user.puzzle2_solved_at || null,
    timeTaken: user.puzzle2_solved_at ? Math.floor((user.puzzle2_solved_at - user.created_at) / 1000) : null
  });
});

// Import new API routes
const apiRoutes = require('./api/routes');

// Mount new API routes
app.use('/api/v2', apiRoutes);

// Initialize and start (only when running locally, not on Vercel)
if (process.env.VERCEL !== '1') {
  loadUsers().then(() => {
    app.listen(PORT, () => {
      console.log(`LOCKED server running on http://localhost:${PORT}`);
      console.log('   Phase 1: identity-specific key protocols enabled');
      console.log('   API v2 available at /api/v2/*');
    });
  });
}

// Export for Vercel serverless
module.exports = app;
module.exports.users = users;
module.exports.getAllUsers = async () => Array.from(users.values());
module.exports.saveUser = async (user) => {
  users.set(normalizeUsername(user.username), user);
  await saveUsers();
};
