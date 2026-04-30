document.addEventListener('DOMContentLoaded', async () => {
  const auth = await Auth.check();
  if (!auth) {
    window.location.href = '/pages/login.html';
    return;
  }

  const identityDisplay = document.getElementById('identityDisplay');
  const phaseStatus = document.getElementById('phaseStatus');
  const hubNotice = document.getElementById('hubNotice');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const accessTier = document.getElementById('accessTier');
  const phaseAttempts = document.getElementById('phaseAttempts');
  const archiveStatus = document.getElementById('archiveStatus');
  const nextUnlock = document.getElementById('nextUnlock');
  const actionLabel = document.getElementById('actionLabel');
  const actionSub = document.getElementById('actionSub');
  const logoutBtn = document.getElementById('logoutBtn');

  identityDisplay.textContent = `Welcome, ${auth.user.username}.`;
  logoutBtn.addEventListener('click', () => Auth.logout());

  const params = new URLSearchParams(window.location.search);
  if (params.get('phase2') === 'cleared') {
    hubNotice.textContent = 'Phase 2 cleared. Archive channel unlocked.';
    window.history.replaceState({}, document.title, '/pages/unlocked.html');
  } else {
    hubNotice.textContent = 'Identity protocol stable. Phase 2 ready when you are.';
  }

  checkPhase2Status();

  async function checkPhase2Status() {
    try {
      const res = await fetch('/api/puzzle2/status');
      if (!res.ok) {
        return;
      }

      const data = await res.json();
      phaseAttempts.textContent = data.attempts || 0;

      if (data.solved) {
        phaseStatus.textContent = 'Phase 2 cleared';
        phaseStatus.dataset.state = 'complete';
        progressFill.style.width = '66%';
        progressText.textContent = '66% system unlocked';
        accessTier.textContent = 'Level 2';
        archiveStatus.textContent = data.timeTaken ? `${data.timeTaken}s clear` : 'Open';
        nextUnlock.innerHTML = '<span>[00:03]</span> Archive channel open. Phase 3 can slot in cleanly from here.';
        actionLabel.textContent = 'Re-open phase 2';
        actionSub.textContent = 'Review the archive transmission';

        if (!hubNotice.textContent) {
          hubNotice.textContent = 'Archive channel unlocked.';
        }
      } else {
        phaseStatus.textContent = 'Phase 2 pending';
        phaseStatus.dataset.state = 'pending';
        progressFill.style.width = '33%';
        progressText.textContent = '33% system unlocked';
        accessTier.textContent = 'Level 1';
        archiveStatus.textContent = 'Awaiting decode';
        nextUnlock.innerHTML = '<span>[00:03]</span> Phase 2 archive decode awaiting input.';
      }
    } catch (err) {
      hubNotice.textContent = 'Status sync unavailable. Refresh if the hub looks stale.';
    }
  }
});
