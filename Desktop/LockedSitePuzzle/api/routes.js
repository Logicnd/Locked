const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const puzzles = require('./puzzles');

// ===== AUTH MIDDLEWARE =====
const requireAuth = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  }
  res.status(401).json({ error: 'Authentication required' });
};

// ===== NEW API ROUTES =====

// Health check
router.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    version: '3.0.0',
    timestamp: Date.now(),
    uptime: process.uptime()
  });
});

// Get available puzzle types
router.get('/puzzle-types', (req, res) => {
  const types = puzzles.getPuzzleTypes();
  res.json({ types });
});

// Generate a custom puzzle
router.post('/puzzle/generate', requireAuth, async (req, res) => {
  try {
    const { type, difficulty } = req.body;
    const user = req.session.user;
    
    let puzzle;
    if (type) {
      puzzle = puzzles.generatePuzzle(type, user.username);
    } else {
      puzzle = puzzles.generateRandomPuzzle(user.username, difficulty || 1);
    }
    
    // Store puzzle in session for verification
    req.session.currentPuzzle = puzzle;
    
    // Don't send answer to client
    const { answer, ...puzzleData } = puzzle;
    
    res.json({
      success: true,
      puzzle: puzzleData,
      timestamp: Date.now()
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate puzzle' });
  }
});

// Verify puzzle answer
router.post('/puzzle/verify', requireAuth, async (req, res) => {
  try {
    const { answer } = req.body;
    const currentPuzzle = req.session.currentPuzzle;
    
    if (!currentPuzzle) {
      return res.status(400).json({ error: 'No active puzzle' });
    }
    
    const isCorrect = puzzles.verifyAnswer(currentPuzzle, answer);
    
    if (isCorrect) {
      // Clear puzzle from session
      req.session.currentPuzzle = null;
      
      res.json({
        success: true,
        correct: true,
        xp: currentPuzzle.difficulty * 100,
        message: 'Correct! Puzzle solved.'
      });
    } else {
      res.json({
        success: true,
        correct: false,
        message: 'Incorrect. Try again.'
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Verification failed' });
  }
});

// Race puzzle endpoints
router.post('/race/puzzle', requireAuth, (req, res) => {
  try {
    const user = req.session.user;
    const puzzle = puzzles.generateRacePuzzle(user.username);
    
    req.session.racePuzzle = puzzle;
    const { answer, ...puzzleData } = puzzle;
    
    res.json({
      success: true,
      puzzle: puzzleData
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate race puzzle' });
  }
});

router.post('/race/verify', requireAuth, (req, res) => {
  try {
    const { answer, timeTaken } = req.body;
    const racePuzzle = req.session.racePuzzle;
    
    if (!racePuzzle) {
      return res.status(400).json({ error: 'No active race' });
    }
    
    const isCorrect = puzzles.verifyAnswer(racePuzzle, answer);
    
    if (isCorrect) {
      req.session.racePuzzle = null;
      
      const xpGain = Math.max(300 - (timeTaken || 0) * 2, 100);
      
      res.json({
        success: true,
        correct: true,
        xp: xpGain,
        time: timeTaken
      });
    } else {
      res.json({
        success: true,
        correct: false
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Race verification failed' });
  }
});

// Daily puzzle
router.get('/daily', requireAuth, (req, res) => {
  const today = new Date().toDateString();
  const dailySeed = today + (req.session.user?.username || '');
  
  // Deterministic daily puzzle
  const types = Object.keys(puzzles.puzzleGenerators);
  const seed = dailySeed.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const type = types[seed % types.length];
  
  const puzzle = puzzles.generatePuzzle(type, req.session.user.username);
  const { answer, ...puzzleData } = puzzle;
  
  res.json({
    date: today,
    puzzle: puzzleData,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
  });
});

// Practice mode - unlimited puzzles
router.post('/practice', requireAuth, (req, res) => {
  const { difficulty } = req.body;
  const user = req.session.user;
  
  const puzzle = puzzles.generateRandomPuzzle(user.username, difficulty || 1);
  const { answer, ...puzzleData } = puzzle;
  
  req.session.practicePuzzle = puzzle;
  
  res.json({
    puzzle: puzzleData,
    mode: 'practice'
  });
});

router.post('/practice/verify', requireAuth, (req, res) => {
  const { answer } = req.body;
  const puzzle = req.session.practicePuzzle;
  
  if (!puzzle) {
    return res.status(400).json({ error: 'No practice puzzle active' });
  }
  
  const isCorrect = puzzles.verifyAnswer(puzzle, answer);
  
  if (isCorrect) {
    req.session.practicePuzzle = null;
  }
  
  res.json({
    correct: isCorrect,
    answer: puzzle.answer // Show answer in practice mode
  });
});

// User: Reset own progress (soft reset)
router.post('/reset-progress', requireAuth, async (req, res) => {
  try {
    const { confirm } = req.body;
    const { getAllUsers, saveUser } = require('../server');
    
    if (!confirm || confirm !== 'RESET_MY_PROGRESS') {
      return res.status(400).json({ 
        error: 'Confirmation required',
        message: 'Send confirm: "RESET_MY_PROGRESS" to proceed'
      });
    }
    
    const users = await getAllUsers();
    const user = users.find(u => u.id === req.session.userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Keep username, password, id - reset everything else
    user.puzzle2_solved = false;
    user.puzzle2_time = null;
    user.puzzle2_solved_at = null;
    user.puzzle3_solved = false;
    user.puzzle3_time = null;
    user.puzzle3_solved_at = null;
    user.xp = 0;
    user.level = 1;
    user.badges = [];
    user.attempts = 0;
    user.puzzle2_attempts = 0;
    user.puzzle3_attempts = 0;
    
    await saveUser(user);
    
    // Update session
    req.session.user = user;
    
    res.json({
      success: true,
      message: 'Progress reset successfully. Welcome back to Phase 1.',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: 'Reset failed' });
  }
});

// ===== USER STATS & ACHIEVEMENTS =====

// Get detailed user stats
router.get('/user/stats', requireAuth, async (req, res) => {
  try {
    const { getAllUsers } = require('../server');
    const users = await getAllUsers();
    const user = users.find(u => u.id === req.session.userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Calculate rankings
    const allUsers = Array.from(users.values());
    const xpRank = allUsers.filter(u => (u.xp || 0) > (user.xp || 0)).length + 1;
    const phase2Rank = allUsers.filter(u => u.puzzle2_solved && (!user.puzzle2_solved || u.puzzle2_time < user.puzzle2_time)).length + 1;
    const phase3Rank = allUsers.filter(u => u.puzzle3_solved && (!user.puzzle3_solved || u.puzzle3_time < user.puzzle3_time)).length + 1;
    
    const stats = {
      username: user.username,
      id: user.id,
      level: user.level || 1,
      xp: user.xp || 0,
      xpToNext: (user.level || 1) * 1000 - (user.xp || 0),
      streak: user.streak || 1,
      badges: user.badges || [],
      rankings: {
        xp: xpRank,
        phase2: user.puzzle2_solved ? phase2Rank : null,
        phase3: user.puzzle3_solved ? phase3Rank : null
      },
      completions: {
        phase1: true,
        phase2: user.puzzle2_solved || false,
        phase3: user.puzzle3_solved || false
      },
      times: {
        phase2: user.puzzle2_time || null,
        phase3: user.puzzle3_time || null
      },
      attempts: {
        total: (user.attempts || 0) + (user.puzzle2_attempts || 0) + (user.puzzle3_attempts || 0),
        phase1: user.attempts || 0,
        phase2: user.puzzle2_attempts || 0,
        phase3: user.puzzle3_attempts || 0
      },
      joined: user.created_at || Date.now()
    };
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load stats' });
  }
});

// Get user activity feed
router.get('/user/activity', requireAuth, async (req, res) => {
  try {
    const { getAllUsers } = require('../server');
    const users = await getAllUsers();
    const user = users.find(u => u.id === req.session.userId);
    
    // Generate activity feed from user data
    const activities = [];
    
    if (user.puzzle3_solved && user.puzzle3_solved_at) {
      activities.push({
        type: 'achievement',
        icon: '👑',
        text: 'Became ELITE - Phase 3 Complete',
        timestamp: user.puzzle3_solved_at
      });
    }
    
    if (user.puzzle2_solved && user.puzzle2_solved_at) {
      activities.push({
        type: 'achievement',
        icon: '🔓',
        text: 'Solved Phase 2',
        timestamp: user.puzzle2_solved_at
      });
    }
    
    if (user.badges && user.badges.length > 0) {
      activities.push({
        type: 'badge',
        icon: '🏆',
        text: `Earned ${user.badges.length} badge${user.badges.length > 1 ? 's' : ''}`,
        timestamp: user.updated_at || Date.now()
      });
    }
    
    activities.push({
      type: 'join',
      icon: '🎮',
      text: 'Joined LOCKED',
      timestamp: user.created_at || Date.now()
    });
    
    // Sort by timestamp (newest first)
    activities.sort((a, b) => b.timestamp - a.timestamp);
    
    res.json({ activities: activities.slice(0, 20) });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load activity' });
  }
});

// ===== WEBSOCKET PREP =====

// Get race room info (for multiplayer)
router.get('/race/rooms', (req, res) => {
  // This would integrate with WebSocket rooms
  res.json({
    rooms: [
      { id: 'quick', name: 'Quick Race', players: 0, max: 4, difficulty: 1 },
      { id: 'standard', name: 'Standard', players: 0, max: 6, difficulty: 2 },
      { id: 'elite', name: 'Elite Only', players: 0, max: 4, difficulty: 3 }
    ]
  });
});

module.exports = router;
