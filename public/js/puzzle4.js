// Phase 4: Base64 Decoder

document.addEventListener('DOMContentLoaded', async () => {
  // Require authentication and user
  const auth = await Auth.check();
  if (!auth || !auth.user || !auth.user.username) {
    window.location.href = '/pages/login.html';
    return;
  }

  const base64Data = document.getElementById('base64Data');
  const form = document.getElementById('puzzle4Form');
  const answer = document.getElementById('answer');
  const feedback = document.getElementById('feedback');
  const hintBtn = document.getElementById('hintBtn');
  const hintDisplay = document.getElementById('hintDisplay');

  // Load puzzle data
  loadPuzzle();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const ans = answer.value.trim();
    if (!ans) {
      feedback.className = 'feedback error';
      Typewriter.write('Enter the decoded message.', feedback);
      return;
    }
    try {
      const res = await fetch('/api/puzzle4/verify', {
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
        feedback.className = 'feedback error';
        feedback.style.color = '';
        Typewriter.write(data.error || 'Incorrect. Study the base64.', feedback);
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
      'Base64 encodes ASCII text into a special alphabet.',
      'Try an online base64-to-ASCII converter.',
      'The message starts with WELCOME_',
      `Your identity in uppercase is involved...`,
    ];
    if (hintLevel <= hints.length) {
      hintDisplay.textContent = `HINT ${hintLevel}: ${hints[hintLevel - 1]}`;
    }
  });

  async function loadPuzzle() {
    try {
      const res = await fetch('/api/puzzle4');
      if (res.ok) {
        const data = await res.json();
        if (data.data) {
          base64Data.textContent = data.data;
        } else {
          base64Data.textContent = 'No transmission for user.';
        }
      } else if (res.status === 401) {
        window.location.href = '/pages/login.html';
      } else {
        base64Data.textContent = 'ERROR LOADING';
      }
    } catch (err) {
      base64Data.textContent = 'ERROR LOADING';
    }
  }
});
