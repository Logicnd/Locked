// Floating Terminal System
const Terminal = {
  isOpen: false,
  output: null,

  init() {
    // Don't init if already exists
    if (document.querySelector('.terminal-float-btn')) return;

    // Create terminal elements
    const btn = document.createElement('button');
    btn.className = 'terminal-float-btn';
    btn.innerHTML = '⌘';
    btn.title = 'System Terminal';
    btn.onclick = () => this.toggle();

    const panel = document.createElement('div');
    panel.className = 'terminal-panel';
    panel.innerHTML = `
      <div class="terminal-panel-header">
        <span class="terminal-dot red"></span>
        <span class="terminal-dot yellow"></span>
        <span class="terminal-dot green"></span>
        <span class="terminal-panel-title">SYSTEM TERMINAL</span>
      </div>
      <div class="terminal-panel-body">
        <div class="terminal-cmd" onclick="Terminal.run('help')">
          <span class="terminal-cmd-icon">❓</span>
          <span class="terminal-cmd-text">help</span>
          <span class="terminal-cmd-desc">Show commands</span>
        </div>
        <div class="terminal-cmd" onclick="Terminal.run('whoami')">
          <span class="terminal-cmd-icon">👤</span>
          <span class="terminal-cmd-text">whoami</span>
          <span class="terminal-cmd-desc">Current user</span>
        </div>
        <div class="terminal-cmd" onclick="Terminal.run('status')">
          <span class="terminal-cmd-icon">📊</span>
          <span class="terminal-cmd-text">status</span>
          <span class="terminal-cmd-desc">System status</span>
        </div>
        <div class="terminal-cmd" onclick="Terminal.run('puzzle')">
          <span class="terminal-cmd-icon">🧩</span>
          <span class="terminal-cmd-text">puzzle</span>
          <span class="terminal-cmd-desc">Current phase</span>
        </div>
        <div class="terminal-cmd" onclick="Terminal.run('time')">
          <span class="terminal-cmd-icon">🕐</span>
          <span class="terminal-cmd-text">time</span>
          <span class="terminal-cmd-desc">Server time</span>
        </div>
        <div class="terminal-cmd" onclick="Terminal.run('clear')">
          <span class="terminal-cmd-icon">🗑️</span>
          <span class="terminal-cmd-text">clear</span>
          <span class="terminal-cmd-desc">Clear output</span>
        </div>
        <div class="terminal-output" id="terminalOutput">Ready. Select a command...</div>
      </div>
    `;

    document.body.appendChild(panel);
    document.body.appendChild(btn);

    this.output = document.getElementById('terminalOutput');

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (this.isOpen && !panel.contains(e.target) && !btn.contains(e.target)) {
        this.close();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  },

  toggle() {
    this.isOpen = !this.isOpen;
    const panel = document.querySelector('.terminal-panel');
    const btn = document.querySelector('.terminal-float-btn');
    
    if (this.isOpen) {
      panel.classList.add('open');
      btn.classList.add('active');
    } else {
      this.close();
    }
  },

  close() {
    this.isOpen = false;
    const panel = document.querySelector('.terminal-panel');
    const btn = document.querySelector('.terminal-float-btn');
    panel.classList.remove('open');
    btn.classList.remove('active');
  },

  async run(cmd) {
    if (!this.output) return;

    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
    
    switch(cmd) {
      case 'help':
        this.print(`[${timestamp}] AVAILABLE COMMANDS:
  whoami  - Show current user identity
  status  - Display system status
  puzzle  - Show current puzzle phase
  time    - Show current server time
  clear   - Clear this output`);
        break;

      case 'whoami':
        try {
          const auth = await Auth.check();
          if (auth && auth.user) {
            this.print(`[${timestamp}] USER: ${auth.user.username}
  ID: ${auth.user.id}
  STATUS: Authenticated`);
          } else {
            this.print(`[${timestamp}] USER: Guest
  STATUS: Not authenticated
  ACTION: Please login`);
          }
        } catch (e) {
          this.print(`[${timestamp}] ERROR: Cannot fetch user data`);
        }
        break;

      case 'status':
        this.print(`[${timestamp}] SYSTEM STATUS:
  Frontend: Online
  Connection: ${navigator.onLine ? 'Connected' : 'Offline'}
  User Agent: ${navigator.userAgent.split(' ')[0]}
  Screen: ${window.innerWidth}x${window.innerHeight}`);
        break;

      case 'puzzle':
        const path = window.location.pathname;
        let phase = 'Unknown';
        if (path.includes('login')) phase = 'Phase 1 - Authentication';
        else if (path.includes('unlocked')) phase = 'Phase 1 - Complete';
        else if (path.includes('puzzle2')) phase = 'Phase 2 - Hex Decoder';
        else if (path.includes('puzzle3')) phase = 'Phase 3 - Binary Decoder';
        else if (path.includes('leaderboard')) phase = 'Leaderboard';
        this.print(`[${timestamp}] CURRENT PHASE: ${phase}
  Location: ${path}`);
        break;

      case 'time':
        this.print(`[${timestamp}] Local: ${new Date().toLocaleString()}
  Unix: ${Date.now()}`);
        break;

      case 'clear':
        this.output.textContent = 'Ready. Select a command...';
        return;

      default:
        this.print(`[${timestamp}] Unknown command: ${cmd}`);
    }
  },

  print(text) {
    if (this.output) {
      this.output.textContent = text;
    }
  }
};

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  Terminal.init();
});
