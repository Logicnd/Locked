document.addEventListener('DOMContentLoaded', async () => {
  const auth = await Auth.check();
  if (!auth) {
    window.location.href = '/pages/login.html';
    return;
  }

  const identityChip = document.getElementById('identityChip');
  const hexData = document.getElementById('hexData');
  const form = document.getElementById('puzzleForm');
  const answer = document.getElementById('answer');
  const feedback = document.getElementById('feedback');
  const attemptCount = document.getElementById('attemptCount');
  const hintBtn = document.getElementById('hintBtn');
  const hintDisplay = document.getElementById('hintDisplay');

  let attempts = 0;
  let hintLevel = 0;

  identityChip.textContent = auth.user.username;

  await Promise.all([loadPuzzle(), loadStatus()]);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const value = answer.value.trim();
    if (!value) {
      feedback.className = 'feedback error';
      Typewriter.write('Enter the decoded message.', feedback);
      return;
    }

    try {
      const res = await fetch('/api/puzzle2/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer: value })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        feedback.className = 'feedback success';
        Typewriter.write(`${data.message} Returning to hub...`, feedback, 24);

        setTimeout(() => {
          window.location.href = '/pages/unlocked.html?phase2=cleared';
        }, 1200);
        return;
      }

      attempts = data.attempts || attempts + 1;
      attemptCount.textContent = attempts;

      feedback.className = 'feedback error';
      Typewriter.write(data.error || 'Incorrect. Study the hex carefully.', feedback, 28);
    } catch (err) {
      feedback.className = 'feedback error';
      Typewriter.write('System error. Try again.', feedback);
    }
  });

  hintBtn.addEventListener('click', () => {
    hintLevel += 1;
    const hints = [
      'Each hex pair becomes one ASCII character.',
      'The phrase starts with ARCHIVE_.',
      'The final word is OPEN.',
      'Your cleaned identity appears in uppercase between those two parts.'
    ];

    hintDisplay.textContent = hints[Math.min(hintLevel - 1, hints.length - 1)];
  });

  async function loadPuzzle() {
    try {
      const res = await fetch('/api/puzzle2');
      if (!res.ok) {
        throw new Error('Puzzle unavailable');
      }

      const data = await res.json();
      hexData.textContent = data.data;
    } catch (err) {
      hexData.textContent = 'Transmission unavailable';
    }
  }

  async function loadStatus() {
    try {
      const res = await fetch('/api/puzzle2/status');
      if (!res.ok) {
        return;
      }

      const data = await res.json();
      attempts = data.attempts || 0;
      attemptCount.textContent = attempts;
    } catch (err) {
      attemptCount.textContent = attempts;
    }
  }
});

const Typewriter = window.Typewriter || {
  timeout: null,
  write(text, element, speed = 35) {
    clearTimeout(this.timeout);
    element.textContent = '';
    element.classList.add('typewriter');

    let index = 0;
    const type = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index += 1;
        this.timeout = setTimeout(type, speed);
      }
    };

    type();
  }
};
