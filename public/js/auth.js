// Shared authentication utilities
const Auth = {
  async check() {
    try {
      const res = await fetch('/api/me');
      return res.ok ? await res.json() : null;
    } catch (err) {
      return null;
    }
  },

  async logout() {
    try {
      await fetch('/api/logout', { method: 'POST' });
      window.location.href = '/pages/login.html';
    } catch (err) {
      console.error('Logout failed');
    }
  },

  requireAuth() {
    this.check().then(data => {
      if (!data) {
        window.location.href = '/pages/login.html';
      }
    });
  },

  requireGuest() {
    this.check().then(data => {
      if (data) {
        window.location.href = '/pages/unlocked.html';
      }
    });
  }
};

// Typewriter utility
const Typewriter = {
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
