let currentPhase = 2;
let currentSort = { field: 'rank', order: 'asc' };
let leaderboardData = [];
let currentUser = null;

document.addEventListener('DOMContentLoaded', async () => {
  // Require authentication
  const auth = await Auth.check();
  if (!auth) {
    window.location.href = '/pages/login.html';
    return;
  }
  currentUser = auth.user;

  // Logout
  document.getElementById('logoutBtn').addEventListener('click', () => Auth.logout());

  // Phase tabs
  document.querySelectorAll('.phase-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.phase-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentPhase = parseInt(tab.dataset.phase);
      loadLeaderboard();
    });
  });

  // Sort buttons
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const field = btn.dataset.sort;
      const currentField = currentSort.field;
      
      // Toggle order if same field
      if (field === currentField) {
        currentSort.order = currentSort.order === 'asc' ? 'desc' : 'asc';
      } else {
        currentSort.field = field;
        currentSort.order = 'asc';
      }
      
      // Update UI
      document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update button text with arrow
      updateSortButtonText();
      
      // Sort and render
      sortAndRender();
    });
  });

  // Initial load
  loadLeaderboard();
});

function updateSortButtonText() {
  const texts = {
    rank: { asc: 'RANK ↑', desc: 'RANK ↓' },
    time: { asc: 'TIME ↑', desc: 'TIME ↓' },
    username: { asc: 'NAME A-Z', desc: 'NAME Z-A' }
  };
  
  document.querySelectorAll('.sort-btn').forEach(btn => {
    const field = btn.dataset.sort;
    if (field === currentSort.field) {
      btn.textContent = texts[field][currentSort.order];
    } else {
      btn.textContent = texts[field].asc;
    }
  });
}

async function loadLeaderboard() {
  const totalSolvers = document.getElementById('totalSolvers');
  const yourRank = document.getElementById('yourRank');
  const bestTime = document.getElementById('bestTime');
  const list = document.getElementById('leaderboardList');

  try {
    const endpoint = currentPhase === 3 ? '/api/leaderboard3' : '/api/leaderboard';
    const res = await fetch(endpoint);
    const data = await res.json();
    leaderboardData = data.leaderboard || [];

    // Update stats
    totalSolvers.textContent = leaderboardData.length;
    
    const userEntry = leaderboardData.find(e => e.username === currentUser?.username);
    yourRank.textContent = userEntry ? `#${userEntry.rank}` : 'N/A';
    
    const fastest = leaderboardData[0];
    bestTime.textContent = fastest ? `${fastest.time_taken}s` : '--';

    // Sort and render
    sortAndRender();
  } catch (err) {
    console.error('Failed to load leaderboard');
    list.innerHTML = `
      <div class="list-header">
        <span>RANK</span>
        <span>IDENTITY</span>
        <span>TIME</span>
      </div>
      <div class="leaderboard-entry">
        <span style="grid-column: 1/-1; text-align: center; color: var(--error);">Failed to load leaderboard</span>
      </div>
    `;
  }
}

function sortAndRender() {
  // Sort data
  const sorted = [...leaderboardData].sort((a, b) => {
    let valA, valB;
    
    switch (currentSort.field) {
      case 'rank':
        valA = a.rank;
        valB = b.rank;
        break;
      case 'time':
        valA = a.time_taken;
        valB = b.time_taken;
        break;
      case 'username':
        valA = a.username.toLowerCase();
        valB = b.username.toLowerCase();
        break;
      default:
        return 0;
    }
    
    if (valA < valB) return currentSort.order === 'asc' ? -1 : 1;
    if (valA > valB) return currentSort.order === 'asc' ? 1 : -1;
    return 0;
  });

  renderLeaderboard(sorted);
}

function renderLeaderboard(data) {
  const list = document.getElementById('leaderboardList');
  
  // Update podium (always shows top 3 by time, not sorted view)
  updatePodium(leaderboardData);

  // Clear list (keep header)
  list.innerHTML = `
    <div class="list-header">
      <span>RANK</span>
      <span>IDENTITY</span>
      <span>TIME</span>
    </div>
  `;

  // Render all entries (or show message if empty)
  if (data.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'leaderboard-entry';
    empty.innerHTML = `<span style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No Phase ${currentPhase} completers yet. Be the first.</span>`;
    list.appendChild(empty);
    return;
  }

  data.forEach(entry => {
    const row = document.createElement('div');
    row.className = 'leaderboard-entry';
    if (entry.username === currentUser?.username) {
      row.classList.add('current-user');
    }
    row.innerHTML = `
      <span class="list-rank">#${entry.rank}</span>
      <span class="list-user">${entry.username}</span>
      <span class="list-time">${entry.time_taken}s</span>
    `;
    list.appendChild(row);
  });
}

function updatePodium(leaderboard) {
  const goldName = document.getElementById('goldName');
  const goldTime = document.getElementById('goldTime');
  const silverName = document.getElementById('silverName');
  const silverTime = document.getElementById('silverTime');
  const bronzeName = document.getElementById('bronzeName');
  const bronzeTime = document.getElementById('bronzeTime');

  // Reset
  goldName.textContent = '???';
  goldTime.textContent = '--';
  silverName.textContent = '???';
  silverTime.textContent = '--';
  bronzeName.textContent = '???';
  bronzeTime.textContent = '--';

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
