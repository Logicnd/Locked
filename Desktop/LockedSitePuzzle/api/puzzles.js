const crypto = require('crypto');

// Puzzle generators
const puzzleGenerators = {
  // Classic reverse username
  mirror: (username) => {
    const password = username.split('').reverse().join('');
    return {
      type: 'mirror',
      hint: 'Look backwards to see your reflection',
      answer: password,
      difficulty: 1
    };
  },

  // Hex decoder
  hex: (username) => {
    const secret = `WELCOME_TO_PHASE2_${username.toUpperCase()}`;
    const hex = secret.split('').map(c => 
      c.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')
    ).join(' ');
    return {
      type: 'hex',
      data: hex,
      hint: 'Each pair of hex digits represents one character',
      answer: secret,
      difficulty: 2
    };
  },

  // Binary cipher chain
  binary: (username) => {
    const secret = `PHASE3_COMPLETE_${username.toUpperCase()}_THE_END`;
    const rot13 = secret.replace(/[a-zA-Z]/g, c => {
      const base = c <= 'Z' ? 65 : 97;
      return String.fromCharCode((c.charCodeAt(0) - base + 13) % 26 + base);
    });
    const b64 = Buffer.from(rot13).toString('base64');
    const binary = b64.split('').map(c =>
      c.charCodeAt(0).toString(2).padStart(8, '0')
    ).join(' ');
    return {
      type: 'binary',
      data: binary,
      stages: ['Binary → Base64 → ROT13'],
      hint: 'Decode: Binary → ASCII → Base64 decode → ROT13',
      answer: secret,
      difficulty: 3
    };
  },

  // Math challenge
  math: (username) => {
    const a = Math.floor(Math.random() * 50) + 10;
    const b = Math.floor(Math.random() * 50) + 10;
    const c = Math.floor(Math.random() * 20) + 5;
    const answer = a * b + c;
    return {
      type: 'math',
      data: `${a} × ${b} + ${c} = ?`,
      hint: 'Order of operations: Multiply first, then add',
      answer: answer.toString(),
      difficulty: 2
    };
  },

  // Sequence puzzle
  sequence: (username) => {
    const sequences = [
      { seq: '2, 4, 8, 16, ?', answer: '32', rule: '×2' },
      { seq: '1, 1, 2, 3, 5, ?', answer: '8', rule: 'Fibonacci' },
      { seq: '3, 6, 12, 24, ?', answer: '48', rule: '×2' },
      { seq: '1, 4, 9, 16, ?', answer: '25', rule: 'Squares' },
      { seq: '2, 6, 12, 20, ?', answer: '30', rule: '+4, +6, +8, +10' },
      { seq: '1, 8, 27, 64, ?', answer: '125', rule: 'Cubes' }
    ];
    const selected = sequences[Math.floor(Math.random() * sequences.length)];
    return {
      type: 'sequence',
      data: selected.seq,
      hint: `Pattern: ${selected.rule}`,
      answer: selected.answer,
      difficulty: 2
    };
  },

  // Pattern recognition
  pattern: (username) => {
    const patterns = [
      { data: '☀ ☀ ☀ ☀\n☀ ☀ ☀ ☀\n☀ ☀ ☀ ☀\n☀ ☀ ☀ ?', answer: '☀', rule: 'All suns' },
      { data: '🔴 🔴 🔴 🔴\n🔴 🔵 🔵 🔴\n🔴 🔵 🔵 🔴\n🔴 🔴 🔴 ?', answer: '🔴', rule: 'Square border' },
      { data: '1, 2, 3, 4\n2, 4, 6, 8\n3, 6, 9, ?', answer: '12', rule: 'Multiplication table' },
      { data: '🅰 🅱 🅲 🅳\n🅴 🅵 🅶 🅷\n🅸 🅹 🅺 ?', answer: '🅻', rule: 'Alphabet sequence' }
    ];
    const selected = patterns[Math.floor(Math.random() * patterns.length)];
    return {
      type: 'pattern',
      data: selected.data,
      hint: selected.rule,
      answer: selected.answer,
      difficulty: 2
    };
  },

  // Caesar cipher
  caesar: (username) => {
    const shift = Math.floor(Math.random() * 10) + 3;
    const plaintext = `SECRET_${username.toUpperCase()}`;
    const encrypted = plaintext.replace(/[A-Z]/g, c => {
      const code = ((c.charCodeAt(0) - 65 + shift) % 26) + 65;
      return String.fromCharCode(code);
    });
    return {
      type: 'caesar',
      data: encrypted,
      hint: `Caesar cipher with shift of ${shift}`,
      answer: plaintext,
      difficulty: 2,
      shift
    };
  },

  // Morse code
  morse: (username) => {
    const morseMap = {
      'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
      'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
      'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
      'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
      'Y': '-.--', 'Z': '--..', '_': '_'
    };
    const text = `SOS_${username.toUpperCase()}`;
    const morse = text.split('').map(c => morseMap[c] || c).join(' ');
    return {
      type: 'morse',
      data: morse,
      hint: 'Morse code: dot (.) dash (-), space between letters',
      answer: text,
      difficulty: 2
    };
  },

  // RGB color mixing
  rgb: (username) => {
    const colors = [
      { r: 255, g: 0, b: 0, name: 'RED', mix: '255 0 0' },
      { r: 0, g: 255, b: 0, name: 'GREEN', mix: '0 255 0' },
      { r: 0, g: 0, b: 255, name: 'BLUE', mix: '0 0 255' },
      { r: 255, g: 255, b: 0, name: 'YELLOW', mix: '255 255 0' },
      { r: 255, g: 0, b: 255, name: 'MAGENTA', mix: '255 0 255' },
      { r: 0, g: 255, b: 255, name: 'CYAN', mix: '0 255 255' }
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return {
      type: 'rgb',
      data: `RGB(${color.mix}) = ?`,
      hint: 'What color is produced by these RGB values?',
      answer: color.name,
      difficulty: 1,
      preview: `rgb(${color.r}, ${color.g}, ${color.b})`
    };
  },

  // Reverse words
  reverse: (username) => {
    const words = ['PUZZLE', 'HACKER', 'SYSTEM', 'SECURE', 'DECODE', 'MATRIX'];
    const word = words[Math.floor(Math.random() * words.length)];
    const reversed = word.split('').reverse().join('');
    return {
      type: 'reverse',
      data: reversed,
      hint: 'Read it backwards',
      answer: word,
      difficulty: 1
    };
  },

  // Anagram
  anagram: (username) => {
    const words = ['LOCKED', 'PUZZLE', 'SYSTEM', 'HACKER', 'CYBER', 'MATRIX'];
    const word = words[Math.floor(Math.random() * words.length)];
    const scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
    return {
      type: 'anagram',
      data: scrambled,
      hint: 'Unscramble the letters',
      answer: word,
      difficulty: 2
    };
  },

  // Logic gate
  logic: (username) => {
    const gates = [
      { data: '1 AND 1 = ?', answer: '1', gate: 'AND' },
      { data: '1 OR 0 = ?', answer: '1', gate: 'OR' },
      { data: '1 XOR 1 = ?', answer: '0', gate: 'XOR' },
      { data: 'NOT 1 = ?', answer: '0', gate: 'NOT' },
      { data: '0 AND 1 = ?', answer: '0', gate: 'AND' },
      { data: '1 OR 1 = ?', answer: '1', gate: 'OR' }
    ];
    const gate = gates[Math.floor(Math.random() * gates.length)];
    return {
      type: 'logic',
      data: gate.data,
      hint: `Logic gate: ${gate.gate}`,
      answer: gate.answer,
      difficulty: 2
    };
  },

  // Base64 simple
  base64: (username) => {
    const text = `STAGE_${Math.floor(Math.random() * 9) + 1}`;
    const encoded = Buffer.from(text).toString('base64');
    return {
      type: 'base64',
      data: encoded,
      hint: 'Decode this Base64 string',
      answer: text,
      difficulty: 2
    };
  },

  // Coordinate puzzle
  coordinate: (username) => {
    const coords = [
      { x: 3, y: 4, answer: '12', formula: 'x² + y²' },
      { x: 5, y: 12, answer: '169', formula: 'x² + y²' },
      { x: 6, y: 8, answer: '100', formula: 'x² + y²' },
      { x: 2, y: 3, answer: '13', formula: 'x² + y² + 1' }
    ];
    const coord = coords[Math.floor(Math.random() * coords.length)];
    return {
      type: 'coordinate',
      data: `(${coord.x}, ${coord.y}) → ?`,
      hint: `Formula: ${coord.formula}`,
      answer: coord.answer,
      difficulty: 3
    };
  },

  // Time calculation
  time: (username) => {
    const scenarios = [
      { q: 'Start: 14:30, Duration: 45min, End = ?', a: '15:15' },
      { q: 'Start: 09:15, Duration: 2h 30min, End = ?', a: '11:45' },
      { q: 'Start: 23:45, Duration: 30min, End = ?', a: '00:15' },
      { q: 'Start: 16:00, Duration: 90min, End = ?', a: '17:30' }
    ];
    const s = scenarios[Math.floor(Math.random() * scenarios.length)];
    return {
      type: 'time',
      data: s.q,
      hint: 'Add the duration to the start time',
      answer: s.a,
      difficulty: 2
    };
  }
};

// Generate a puzzle
function generatePuzzle(type, username) {
  const generator = puzzleGenerators[type];
  if (!generator) {
    return puzzleGenerators.hex(username); // Default fallback
  }
  return generator(username);
}

// Generate a random puzzle based on difficulty
function generateRandomPuzzle(username, difficulty = 1) {
  const types = Object.keys(puzzleGenerators);
  const filtered = types.filter(type => {
    const test = puzzleGenerators[type](username);
    return test.difficulty <= difficulty + 1 && test.difficulty >= difficulty - 1;
  });
  
  const type = filtered.length > 0 
    ? filtered[Math.floor(Math.random() * filtered.length)]
    : types[Math.floor(Math.random() * types.length)];
    
  return generatePuzzle(type, username);
}

// Generate a race puzzle (quick, 1-2 difficulty)
function generateRacePuzzle(username) {
  const raceTypes = ['math', 'sequence', 'pattern', 'reverse', 'anagram', 'hex', 'base64'];
  const type = raceTypes[Math.floor(Math.random() * raceTypes.length)];
  return generatePuzzle(type, username);
}

// Verify answer
function verifyAnswer(puzzle, answer) {
  if (!puzzle || !answer) return false;
  return answer.toUpperCase().trim() === puzzle.answer.toUpperCase().trim();
}

// Get all puzzle types
function getPuzzleTypes() {
  return Object.keys(puzzleGenerators).map(type => ({
    type,
    ...puzzleGenerators[type]('demo')
  })).map(({ type, difficulty, hint }) => ({ type, difficulty, hint }));
}

module.exports = {
  generatePuzzle,
  generateRandomPuzzle,
  generateRacePuzzle,
  verifyAnswer,
  getPuzzleTypes,
  puzzleGenerators
};
