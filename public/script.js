document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const toggleBtn = document.getElementById('togglePwd');
  const message = document.getElementById('message');
  const loginBox = document.getElementById('loginBox');
  const content = document.getElementById('content');
  const logoutBtn = document.getElementById('logoutBtn');
  
  // Puzzle 2 elements
  const nextChallengeBtn = document.getElementById('nextChallengeBtn');
  const puzzle2 = document.getElementById('puzzle2');
  const puzzle2Input = document.getElementById('puzzle2Input');
  const submitPuzzle2Btn = document.getElementById('submitPuzzle2Btn');
  const puzzle2Message = document.getElementById('puzzle2Message');
  const hexDisplay = document.getElementById('hexDisplay');
  const skipToLeaderboardBtn = document.getElementById('skipToLeaderboardBtn');
  
  // Leaderboard elements
  const leaderboard = document.getElementById('leaderboard');
  const leaderboardDisplay = document.getElementById('leaderboardDisplay');
  const backBtn = document.getElementById('backBtn');

  let typewriterTimeout;
  let currentUser = null;

  // Check if already logged in
  checkSession();

  // Event listeners
  usernameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (passwordInput.value) attemptLogin();
      else passwordInput.focus();
    }
  });

  passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') attemptLogin();
  });

  toggleBtn.addEventListener('click', () => {
    const isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
  });

  logoutBtn.addEventListener('click', logout);
  
  // Puzzle 2 event listeners
  nextChallengeBtn.addEventListener('click', loadPuzzle2);
  submitPuzzle2Btn.addEventListener('click', verifyPuzzle2);
  skipToLeaderboardBtn.addEventListener('click', showLeaderboard);
  backBtn.addEventListener('click', () => {
    leaderboard.classList.add('hidden');
    content.classList.remove('hidden');
  });
  
  puzzle2Input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') verifyPuzzle2();
  });

  function typewriter(text, element, speed = 40) {
    clearTimeout(typewriterTimeout);
    element.textContent = '';
    element.classList.add('error');

    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        typewriterTimeout = setTimeout(type, speed);
      }
    }
    type();
  }

  async function checkSession() {
    try {
      const res = await fetch('/api/me');
      if (res.ok) {
        const data = await res.json();
        showContent(data.user);
      }
    } catch (err) {
      console.log('Not authenticated');
    }
  }

  async function attemptLogin() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
      typewriter('Identity and key required.', message);
      return;
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        clearTimeout(typewriterTimeout);
        message.textContent = '';
        message.classList.remove('error');
        showContent(data.user);
      } else {

        if (data.hint) {
          typewriter(data.hint, message, 35);
        } else if (data.taunt) {
          typewriter(data.taunt, message, 40);
        } else if (data.message) {
          typewriter(data.message, message, 40);
        } else {
          typewriter('Access denied.', message);
        }
      }
    } catch (err) {
      typewriter('System error. Try again.', message);
    }
  }


  function showContent(user) {
    currentUser = user;
    loginBox.style.display = 'none';
    content.classList.remove('hidden');
    
    // Add user info to terminal
    const terminal = content.querySelector('.terminal');
    const userLine = document.createElement('p');
    userLine.className = 'terminal-line';
    userLine.textContent = `> Identity verified: ${user.username}`;
    terminal.insertBefore(userLine, terminal.firstChild);
    
    // Check if puzzle 2 already solved
    checkPuzzle2Status();
  }
  
  async function checkPuzzle2Status() {
    try {
      const res = await fetch('/api/puzzle2/status');
      if (res.ok) {
        const data = await res.json();
        if (data.solved) {
          nextChallengeBtn.textContent = 'VIEW LEADERBOARD';
          nextChallengeBtn.onclick = showLeaderboard;
        }
      }
    } catch (err) {
      console.error('Failed to check puzzle 2 status');
    }
  }
  
  async function loadPuzzle2() {
    try {
      const res = await fetch('/api/puzzle2');
      if (res.ok) {
        const data = await res.json();
        content.classList.add('hidden');
        puzzle2.classList.remove('hidden');
        
        // Display hex challenge
        hexDisplay.textContent = data.data;
        
        // Add context to terminal
        const terminal = puzzle2.querySelector('.terminal');
        terminal.innerHTML = `
          <p class="terminal-line">> ${data.challenge}</p>
          <p class="terminal-line">> ${data.hint}</p>
          <p class="terminal-line">> Example: ${data.example}</p>
        `;
      }
    } catch (err) {
      console.error('Failed to load puzzle 2');
    }
  }
  
  async function verifyPuzzle2() {
    const answer = puzzle2Input.value.trim();
    
    if (!answer) {
      typewriter('Enter the decoded message.', puzzle2Message, 40);
      return;
    }
    
    try {
      const res = await fetch('/api/puzzle2/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer })
      });
      
      const data = await res.json();
      
      if (res.ok && data.success) {
        puzzle2Message.classList.remove('error');
        puzzle2Message.style.color = '#4ecdc4';
        typewriter(`${data.message} Rank: #${data.rank}`, puzzle2Message, 35);
        
        setTimeout(() => {
          puzzle2.classList.add('hidden');
          showLeaderboard();
        }, 2000);
      } else {
        puzzle2Message.style.color = '';
        typewriter(data.error || 'Incorrect. Try again.', puzzle2Message, 40);
      }
    } catch (err) {
      typewriter('System error. Try again.', puzzle2Message, 40);
    }
  }
  
  async function showLeaderboard() {
    content.classList.add('hidden');
    puzzle2.classList.add('hidden');
    leaderboard.classList.remove('hidden');
    
    try {
      const res = await fetch('/api/leaderboard');
      const data = await res.json();
      
      if (data.leaderboard.length === 0) {
        leaderboardDisplay.innerHTML = '<p class="terminal-line">> No challengers yet. Be the first.</p>';
      } else {
        leaderboardDisplay.innerHTML = data.leaderboard.map((entry, i) => `
          <div class="leaderboard-entry ${i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : ''}">
            <span class="rank">#${entry.rank}</span>
            <span class="username">${entry.username}</span>
            <span class="time">${entry.time_taken}s</span>
          </div>
        `).join('');
      }
    } catch (err) {
      leaderboardDisplay.innerHTML = '<p class="terminal-line">> Error loading leaderboard.</p>';
    }
  }

  async function logout() {
    try {
      await fetch('/api/logout', { method: 'POST' });
      location.reload();
    } catch (err) {
      console.error('Logout failed');
    }
  }
});
