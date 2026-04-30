document.addEventListener('DOMContentLoaded', () => {
  Auth.requireGuest();

  const form = document.getElementById('loginForm');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const toggleBtn = document.getElementById('togglePwd');
  const feedback = document.getElementById('feedback');
  const attemptTracker = document.getElementById('attemptTracker');
  const protocolTag = document.getElementById('protocolTag');
  const profileClue = document.getElementById('profileClue');
  const profileCore = document.getElementById('profileCore');
  const profileLength = document.getElementById('profileLength');
  const profileStructure = document.getElementById('profileStructure');

  let attempts = 0;
  let profileTimer = null;
  let requestToken = 0;

  const defaultProfile = {
    protocol: 'Awaiting identity',
    clue: 'Enter an identity to load the active protocol summary for that user.',
    identityCore: '-',
    keyLength: '-',
    structure: 'The profile will describe the shape of the key without revealing the answer.'
  };

  function renderProfile(profile) {
    const nextProfile = profile || defaultProfile;
    protocolTag.textContent = nextProfile.protocol || defaultProfile.protocol;
    profileClue.textContent = nextProfile.clue || defaultProfile.clue;
    profileCore.textContent = nextProfile.identityCore || defaultProfile.identityCore;
    profileLength.textContent = nextProfile.keyLength || defaultProfile.keyLength;
    profileStructure.textContent = nextProfile.structure || defaultProfile.structure;
  }

  async function loadProfile(rawUsername) {
    const identity = rawUsername.trim();
    const currentToken = ++requestToken;

    if (!identity) {
      renderProfile(defaultProfile);
      return;
    }

    try {
      const res = await fetch(`/api/key-profile?username=${encodeURIComponent(identity)}`);
      const data = await res.json();

      if (currentToken !== requestToken) {
        return;
      }

      if (res.ok && data.profile) {
        renderProfile(data.profile);
      } else {
        renderProfile(defaultProfile);
      }
    } catch (err) {
      if (currentToken === requestToken) {
        renderProfile(defaultProfile);
      }
    }
  }

  function scheduleProfileLoad() {
    clearTimeout(profileTimer);
    profileTimer = setTimeout(() => {
      loadProfile(username.value);
    }, 180);
  }

  function updateAttempts() {
    if (attempts > 0) {
      attemptTracker.textContent = `Attempt ${attempts}`;
      attemptTracker.classList.add('show');
    } else {
      attemptTracker.textContent = '';
      attemptTracker.classList.remove('show');
    }
  }

  toggleBtn.addEventListener('click', () => {
    const isHidden = password.type === 'password';
    password.type = isHidden ? 'text' : 'password';
    toggleBtn.textContent = isHidden ? 'Hide' : 'Show';
  });

  username.addEventListener('input', () => {
    feedback.textContent = '';
    attempts = 0;
    updateAttempts();
    scheduleProfileLoad();
  });

  username.addEventListener('blur', () => {
    loadProfile(username.value);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

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
        feedback.className = 'feedback success';
        Typewriter.write(data.message || 'Access granted. Redirecting...', feedback, 24);

        setTimeout(() => {
          window.location.href = '/pages/unlocked.html';
        }, 900);
        return;
      }

      attempts = data.attemptCount || attempts + 1;
      updateAttempts();

      if (data.profile) {
        renderProfile(data.profile);
      }

      feedback.className = 'feedback error';

      if (data.hint) {
        Typewriter.write(data.hint, feedback, 26);
      } else if (data.message) {
        Typewriter.write(data.message, feedback, 28);
      } else if (data.taunt) {
        Typewriter.write(data.taunt, feedback, 30);
      } else {
        Typewriter.write('Access denied.', feedback);
      }
    } catch (err) {
      feedback.className = 'feedback error';
      Typewriter.write('System error. Try again.', feedback);
    }
  });

  renderProfile(defaultProfile);
});
