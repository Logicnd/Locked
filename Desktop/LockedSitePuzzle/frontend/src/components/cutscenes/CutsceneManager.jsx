import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const flicker = keyframes`
  0%, 100% { opacity: 1; }
  41.99% { opacity: 1; }
  42% { opacity: 0; }
  43% { opacity: 0; }
  43.01% { opacity: 1; }
  47.99% { opacity: 1; }
  48% { opacity: 0; }
  49% { opacity: 0; }
  49.01% { opacity: 1; }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  0%, 100% { border-color: transparent; }
  50% { border-color: #00ff41; }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.bg || '#000'};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Scanlines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 255, 65, 0.03) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  animation: ${flicker} 4s infinite;
`;

const MovingScanline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 255, 65, 0.1),
    transparent
  );
  animation: ${scanline} 4s linear infinite;
  pointer-events: none;
`;

const Vignette = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  pointer-events: none;
`;

const Content = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 40px;
  z-index: 10;
`;

const GlitchTitle = styled(motion.h1)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(40px, 10vw, 80px);
  font-weight: 900;
  letter-spacing: 0.2em;
  color: ${props => props.color || '#00ff41'};
  text-transform: uppercase;
  text-shadow: 
    2px 2px 0px #ff00ff,
    -2px -2px 0px #00ffff;
  margin-bottom: 30px;
  position: relative;
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  &::before {
    animation: ${flicker} 2s infinite linear alternate-reverse;
    color: #ff00ff;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
    transform: translate(-3px, -2px);
  }
  
  &::after {
    animation: ${flicker} 3s infinite linear alternate-reverse;
    color: #00ffff;
    z-index: -2;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
    transform: translate(3px, 2px);
  }
`;

const TypewriterText = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  color: #00ff41;
  line-height: 1.8;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #00ff41;
  animation: 
    ${typewriter} 2s steps(40, end),
    ${blink} 0.75s step-end infinite;
  margin: 20px auto;
  max-width: fit-content;
`;

const ProgressBar = styled.div`
  width: 300px;
  height: 4px;
  background: #1a1a1a;
  margin: 30px auto;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: #00ff41;
    box-shadow: 0 0 10px #00ff41;
    transition: width 0.3s ease;
  }
`;

const SkipButton = styled.button`
  position: absolute;
  bottom: 40px;
  right: 40px;
  background: transparent;
  border: 1px solid #333;
  color: #666;
  padding: 8px 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #00ff41;
    color: #00ff41;
  }
`;

const UnlockSequence = styled(motion.div)`
  font-family: 'Orbitron', monospace;
  font-size: 24px;
  color: #ffd700;
  letter-spacing: 0.3em;
`;

const UnlockDigit = styled(motion.span)`
  display: inline-block;
  margin: 0 4px;
`;

// Cutscene definitions
const CUTSCENES = {
  login: {
    bg: '#000',
    scenes: [
      { text: 'INITIALIZING SECURE CONNECTION...', duration: 2000 },
      { text: 'HANDSHAKE COMPLETE', duration: 1500 },
      { text: 'ENCRYPTION: AES-256-GCM', duration: 1500 },
      { text: 'AWAITING IDENTITY VERIFICATION', duration: 2000 }
    ]
  },
  
  phase2_unlock: {
    bg: '#0a0a0a',
    title: 'PHASE 2',
    subtitle: 'HEX DECODER',
    color: '#00ff41',
    unlockCode: '57 45 4C 43 4F 4D 45',
    scenes: [
      { text: '🔓 ACCESS GRANTED', duration: 1500 },
      { text: 'Loading Phase 2 protocols...', duration: 2000 },
      { text: 'Hex decoding systems online', duration: 1500 },
      { text: 'New challenge awaiting...', duration: 2000 }
    ]
  },
  
  phase3_unlock: {
    bg: '#0f0a00',
    title: 'PHASE 3',
    subtitle: 'THE FINAL LOCK',
    color: '#ffd700',
    unlockCode: 'ELITE',
    scenes: [
      { text: '⭐ ELITE ACCESS GRANTED', duration: 1500 },
      { text: 'Loading cipher chain...', duration: 2000 },
      { text: 'Binary → Base64 → ROT13', duration: 1500 },
      { text: 'Ultimate challenge awaits', duration: 2000 }
    ]
  },
  
  completion: {
    bg: '#001a00',
    title: 'SYSTEM',
    subtitle: 'BREACHED',
    color: '#00ff41',
    scenes: [
      { text: '🏆 ALL PHASES COMPLETE', duration: 2000 },
      { text: 'Achievements unlocked...', duration: 2000 },
      { text: 'You are now ELITE', duration: 2000 },
      { text: 'Welcome to the inner circle', duration: 2500 }
    ]
  },
  
  race_start: {
    bg: '#1a0000',
    title: 'RACE',
    subtitle: 'INITIATED',
    color: '#ff0040',
    scenes: [
      { text: '⚡ MULTIPLAYER RACE STARTING', duration: 1500 },
      { text: 'Synchronizing with opponents...', duration: 2000 },
      { text: '3...', duration: 800 },
      { text: '2...', duration: 800 },
      { text: '1...', duration: 800 },
      { text: 'GO!', duration: 1000 }
    ]
  }
};

const CutsceneManager = ({ type, onComplete, skipEnabled = true }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);
  
  const cutscene = CUTSCENES[type] || CUTSCENES.login;
  const scenes = cutscene.scenes || [];
  
  useEffect(() => {
    let timeouts = [];
    let progressInterval;
    
    const runSequence = async () => {
      let totalDuration = 0;
      scenes.forEach(scene => totalDuration += scene.duration);
      
      // Progress bar animation
      let elapsed = 0;
      progressInterval = setInterval(() => {
        elapsed += 100;
        setProgress((elapsed / totalDuration) * 100);
      }, 100);
      
      // Scene sequence
      for (let i = 0; i < scenes.length; i++) {
        setCurrentScene(i);
        
        await new Promise(resolve => {
          const timeout = setTimeout(resolve, scenes[i].duration);
          timeouts.push(timeout);
        });
      }
      
      clearInterval(progressInterval);
      setProgress(100);
      
      // End cutscene
      await new Promise(resolve => {
        const timeout = setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 500);
        timeouts.push(timeout);
      });
    };
    
    runSequence();
    
    return () => {
      timeouts.forEach(t => clearTimeout(t));
      clearInterval(progressInterval);
    };
  }, [type, onComplete, scenes]);
  
  const handleSkip = useCallback(() => {
    setIsVisible(false);
    onComplete?.();
  }, [onComplete]);
  
  if (!isVisible) return null;
  
  const currentSceneData = scenes[currentScene] || {};
  
  return (
    <Overlay
      bg={cutscene.bg}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Scanlines />
      <MovingScanline />
      <Vignette />
      
      <Content>
        {cutscene.title && (
          <GlitchTitle
            color={cutscene.color}
            data-text={cutscene.title}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {cutscene.title}
          </GlitchTitle>
        )}
        
        {cutscene.subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '18px',
              letterSpacing: '0.5em',
              color: cutscene.color,
              marginBottom: '40px',
              textTransform: 'uppercase'
            }}
          >
            {cutscene.subtitle}
          </motion.h2>
        )}
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {cutscene.unlockCode && currentScene === 0 ? (
              <UnlockSequence>
                {cutscene.unlockCode.split('').map((char, i) => (
                  <UnlockDigit
                    key={i}
                    initial={{ opacity: 0, rotateX: -90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {char}
                  </UnlockDigit>
                ))}
              </UnlockSequence>
            ) : (
              <TypewriterText key={currentScene}>
                {currentSceneData.text}
              </TypewriterText>
            )}
          </motion.div>
        </AnimatePresence>
        
        <ProgressBar progress={progress} />
      </Content>
      
      {skipEnabled && (
        <SkipButton onClick={handleSkip}>
          Press ESC to skip
        </SkipButton>
      )}
    </Overlay>
  );
};

export default CutsceneManager;
export { CUTSCENES };
