import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.15;
  pointer-events: none;
`;

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Matrix characters
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?~`アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Drops - one per column
    const drops = [];
    const speeds = [];
    const lengths = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start above screen
      speeds[i] = Math.random() * 2 + 1;
      lengths[i] = Math.floor(Math.random() * 15) + 5;
    }

    let animationId;
    let frameCount = 0;

    const draw = () => {
      frameCount++;
      
      // Only draw every 2nd frame for performance
      if (frameCount % 2 !== 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      // Semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'JetBrains Mono'`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Calculate opacity based on position in stream
        for (let j = 0; j < lengths[i]; j++) {
          const y = (drops[i] - j) * fontSize;
          if (y < 0 || y > canvas.height) continue;
          
          // Head of stream is brightest
          if (j === 0) {
            ctx.fillStyle = '#00ff41';
            ctx.globalAlpha = 1;
          } else if (j < 3) {
            ctx.fillStyle = '#00cc33';
            ctx.globalAlpha = 0.8 - (j * 0.2);
          } else {
            ctx.fillStyle = '#008f11';
            ctx.globalAlpha = Math.max(0.1, 0.5 - (j * 0.05));
          }
          
          ctx.fillText(text, i * fontSize, y);
        }
        
        ctx.globalAlpha = 1;

        // Move drop
        drops[i] += speeds[i] * 0.5;

        // Reset when off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = -lengths[i];
          speeds[i] = Math.random() * 2 + 1;
          lengths[i] = Math.floor(Math.random() * 15) + 5;
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default MatrixRain;
