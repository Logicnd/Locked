document.addEventListener('DOMContentLoaded', async () => {
  // Require authentication
  const auth = await Auth.check();
  if (!auth) {
    window.location.href = '/pages/login.html';
    return;
  }

  // Display identity
  const identityDisplay = document.getElementById('identityDisplay');
  identityDisplay.textContent = `Welcome, ${auth.user.username}`;

  // Logout button
  document.getElementById('logoutBtn').addEventListener('click', () => Auth.logout());

  // Check puzzle 2 status
  checkPhase2Status();
});

async function checkPhase2Status() {
  try {
    const res = await fetch('/api/puzzle2/status');
    if (res.ok) {
      const data = await res.json();
      const nextUnlock = document.getElementById('nextUnlock');
      
      if (data.solved) {
        nextUnlock.textContent = 'Phase 2 completed. Elite status achieved.';
        nextUnlock.parentElement.classList.remove('pulse');
      }
    }
  } catch (err) {
    console.error('Failed to check phase 2 status');
  }
}
