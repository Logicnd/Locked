document.addEventListener('DOMContentLoaded', async () => {
  // Require authentication
  const auth = await Auth.check();
  if (!auth) {
    window.location.href = '/pages/login.html';
    return;
  }

  const binaryData = document.getElementById('binaryData');
  const form = document.getElementById('puzzleForm');
  const answer = document.getElementById('answer');
  const feedback = document.getElementById('feedback');
  const attemptCount = document.getElementById('attemptCount');
  const hintBtn = document.getElementById('hintBtn');
  const hintDisplay = document.getElementById('hintDisplay');

  let attempts = 0;
  let puzzleLoaded = false;

  // Load puzzle data
  loadPuzzle();

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const ans = answer.value.trim();
    if (!ans) {
      feedback.className = 'feedback error';
      Typewriter.write('Enter the decoded message.', feedback);
      return;
    }

    try {
      const res = await fetch('/api/puzzle3/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer: ans })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        feedback.className = 'feedback success';
        feedback.style.color = 'var(--accent)';
        Typewriter.write(
          `${data.message} You ranked #${data.rank}!`,
          feedback,
          30
        );

        setTimeout(() => {
          window.location.href = '/pages/leaderboard.html';
        }, 2000);
      } else {
        attempts = data.attempts || attempts + 1;
        attemptCount.textContent = attempts;
        
        feedback.className = 'feedback error';
        feedback.style.color = '';
        Typewriter.write(data.error || 'Incorrect. Study the binary.', feedback);
      }
    } catch (err) {
      feedback.className = 'feedback error';
      Typewriter.write('System error. Try again.', feedback);
    }
  });

  // Hint button
  let hintLevel = 0;
  hintBtn.addEventListener('click', () => {
    hintLevel++;
    const hints = [
      'Each 8-bit binary sequence represents one ASCII character.',
      'Try converting each binary byte to its decimal value, then to ASCII.',
      'The message starts with WELCOME_',
      `Your identity in uppercase is involved...`,
    ];
    
    if (hintLevel <= hints.length) {
      hintDisplay.textContent = `HINT ${hintLevel}: ${hints[hintLevel - 1]}`;
    }
  });

  async function loadPuzzle() {
    try {
      const res = await fetch('/api/puzzle3');
      if (res.ok) {
        const data = await res.json();
        binaryData.textContent = data.data;
        puzzleLoaded = true;
      } else {
        binaryData.textContent = 'ERROR LOADING';
      }
    } catch (err) {
      binaryData.textContent = 'ERROR LOADING';
    }
  }
});

// Typewriter fallback (if auth.js not loaded)
const Typewriter = window.Typewriter || {
  timeout: null,
  write(text, element, speed = 35) {
    clearTimeout(this.timeout);
    element.textContent = '';
    element.classList.add('typewriter');
    let i = 0;
    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        this.timeout = setTimeout(type, speed);
      }
    };
    type();
  }
};
