document.addEventListener('DOMContentLoaded', async () => {
  // Require authentication
  const auth = await Auth.check();
  if (!auth) {
    window.location.href = '/pages/login.html';
    return;
  }

  // Logout
  document.getElementById('logoutBtn').addEventListener('click', () => Auth.logout());

  // Load leaderboard
  loadLeaderboard(auth.user);
});

async function loadLeaderboard(currentUser) {
  const totalSolvers = document.getElementById('totalSolvers');
  const yourRank = document.getElementById('yourRank');
  const bestTime = document.getElementById('bestTime');
  const list = document.getElementById('leaderboardList');

  try {
    const res = await fetch('/api/leaderboard');
    const data = await res.json();
    const leaderboard = data.leaderboard;

    // Update stats
    totalSolvers.textContent = leaderboard.length;
    
    const userEntry = leaderboard.find(e => e.username === currentUser.username);
    yourRank.textContent = userEntry ? `#${userEntry.rank}` : 'N/A';
    
    const fastest = leaderboard[0];
    bestTime.textContent = fastest ? `${fastest.time_taken}s` : '--';

    // Update podium
    updatePodium(leaderboard);

    // Update list (skip top 3, they're on podium)
    const rest = leaderboard.slice(3);
    if (rest.length > 0) {
      rest.forEach(entry => {
        const row = document.createElement('div');
        row.className = 'leaderboard-entry';
        row.innerHTML = `
          <span class="list-rank">#${entry.rank}</span>
          <span class="list-user">${entry.username}</span>
          <span class="list-time">${entry.time_taken}s</span>
        `;
        list.appendChild(row);
      });
    } else if (leaderboard.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'leaderboard-entry';
      empty.innerHTML = '<span style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No completers yet. Be the first.</span>';
      list.appendChild(empty);
    }
  } catch (err) {
    console.error('Failed to load leaderboard');
  }
}

function updatePodium(leaderboard) {
  const goldName = document.getElementById('goldName');
  const goldTime = document.getElementById('goldTime');
  const silverName = document.getElementById('silverName');
  const silverTime = document.getElementById('silverTime');
  const bronzeName = document.getElementById('bronzeName');
  const bronzeTime = document.getElementById('bronzeTime');

  if (leaderboard[0]) {
    goldName.textContent = leaderboard[0].username;
    goldTime.textContent = `${leaderboard[0].time_taken}s`;
  }
  if (leaderboard[1]) {
    silverName.textContent = leaderboard[1].username;
    silverTime.textContent = `${leaderboard[1].time_taken}s`;
  }
  if (leaderboard[2]) {
    bronzeName.textContent = leaderboard[2].username;
    bronzeTime.textContent = `${leaderboard[2].time_taken}s`;
  }
}
