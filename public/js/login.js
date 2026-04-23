document.addEventListener('DOMContentLoaded', () => {
  // Always start with light theme

  // Redirect if already logged in
  Auth.requireGuest();

  const form = document.getElementById('loginForm');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const toggleBtn = document.getElementById('togglePwd');
  const feedback = document.getElementById('feedback');


  // Toggle password visibility
  toggleBtn.addEventListener('click', () => {
    const isHidden = password.type === 'password';
    password.type = isHidden ? 'text' : 'password';
  });

  // Add focus/input listeners for input-mode
  [username, password].forEach(input => {
    input.addEventListener('focus', () => {
      input.classList.add('input-active');
    });
    input.addEventListener('input', () => {
      input.classList.add('input-active');
    });
    input.addEventListener('blur', () => {
      if (!input.value) {
        input.classList.remove('input-active');
      }
    });
  });

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const user = username.value.trim();
    const pass = password.value;

    if (!user || !pass) {
      feedback.className = 'feedback error';
      Typewriter.write('Identity and key required.', feedback);
      return;
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password: pass })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Success - redirect to unlocked
        feedback.className = 'feedback success';
        Typewriter.write('Access granted. Redirecting...', feedback, 30);
        setTimeout(() => {
          window.location.href = '/pages/unlocked.html';
        }, 800);
      } else {
        // Failed
        feedback.className = 'feedback error';
        if (data.hint) {
          Typewriter.write(data.hint, feedback, 30);
        } else if (data.taunt) {
          Typewriter.write(data.taunt, feedback, 35);
        } else if (data.message) {
          Typewriter.write(data.message, feedback, 35);
        } else {
          Typewriter.write('Access denied.', feedback);
        }
      }
    } catch (err) {
      feedback.className = 'feedback error';
      Typewriter.write('System error. Try again.', feedback);
    }
  });

});
