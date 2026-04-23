import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
`;

class Particle {
  constructor(canvas, theme) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.life = Math.random() * 100 + 50;
    this.maxLife = this.life;
    this.theme = theme;
    
    // Random colors from theme
    const colors = [theme.primary, theme.accent, theme.gold, theme.warning];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
    
    // Wrap around screen
    if (this.x < 0) this.x = this.canvas.width;
    if (this.x > this.canvas.width) this.x = 0;
    if (this.y < 0) this.y = this.canvas.height;
    if (this.y > this.canvas.height) this.y = 0;
  }

  draw(ctx) {
    const alpha = this.life / this.maxLife;
    ctx.globalAlpha = alpha * 0.6;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

class Connection {
  constructor(p1, p2, theme) {
    this.p1 = p1;
    this.p2 = p2;
    this.theme = theme;
    this.distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
  }

  draw(ctx) {
    const maxDistance = 150;
    if (this.distance > maxDistance) return;
    
    const alpha = (1 - this.distance / maxDistance) * 0.3;
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = this.theme.primary;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

const ParticleField = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 25000));
    const theme = {
      primary: '#00ff41',
      accent: '#ff00ff',
      gold: '#ffd700',
      warning: '#ffaa00'
    };
    
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle(canvas, theme));
    }

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationId;
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      
      // Skip frames for performance
      if (frameCount % 2 !== 0) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
        
        // Reset dead particles
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
        }
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const conn = new Connection(particles[i], particles[j], theme);
          conn.draw(ctx);
        }
        
        // Connect to mouse if close
        const dx = mouseRef.current.x - particles[i].x;
        const dy = mouseRef.current.y - particles[i].y;
        const dist = Math.hypot(dx, dy);
        
        if (dist < 200) {
          const alpha = (1 - dist / 200) * 0.5;
          ctx.globalAlpha = alpha;
          ctx.strokeStyle = theme.accent;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
          
          // Slight attraction to mouse
          particles[i].x += dx * 0.01;
          particles[i].y += dy * 0.01;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default ParticleField;
