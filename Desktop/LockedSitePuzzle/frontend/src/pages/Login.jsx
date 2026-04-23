import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import toast from 'react-hot-toast';

import { useStore } from '../store/useStore';
import GlitchText from '../components/ui/GlitchText';
import CyberButton from '../components/ui/CyberButton';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
`;

const Logo = styled.div`
  font-size: clamp(60px, 15vw, 120px);
  margin-bottom: 20px;
  text-align: center;
  user-select: none;
`;

const Subtitle = styled.div`
  font-family: ${props => props.theme.font};
  font-size: 14px;
  color: ${props => props.theme.textMuted};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 40px;
  text-align: center;
`;

const TerminalBox = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  padding: 40px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 20px;
    right: 20px;
    height: 1px;
    background: ${props => props.theme.primary};
    box-shadow: 0 0 10px ${props => props.theme.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 20px;
    right: 20px;
    height: 1px;
    background: ${props => props.theme.primary};
    box-shadow: 0 0 10px ${props => props.theme.primary};
  }
`;

const InputGroup = styled.div`
  margin-bottom: 24px;
  position: relative;
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${props => props.theme.primary};
  margin-bottom: 8px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.text};
  font-family: ${props => props.theme.font};
  font-size: 16px;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 
      inset 0 0 10px ${props => props.theme.primary}20,
      0 0 20px ${props => props.theme.primary}20;
  }
  
  &::placeholder {
    color: ${props => props.theme.textMuted};
    opacity: 0.5;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Hints = styled.div`
  margin-top: 20px;
  padding: 16px;
  background: ${props => props.theme.background}40;
  border-left: 2px solid ${props => props.theme.warning};
  font-size: 12px;
  color: ${props => props.theme.textMuted};
  line-height: 1.6;
`;

const Attempts = styled.div`
  text-align: center;
  margin-top: 16px;
  font-size: 12px;
  color: ${props => props.theme.textMuted};
  letter-spacing: 0.1em;
`;

const ErrorMessage = styled(motion.div)`
  color: ${props => props.theme.danger};
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
  padding: 12px;
  background: ${props => props.theme.danger}10;
  border: 1px solid ${props => props.theme.danger}40;
`;

const BootSequence = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  z-index: 1000;
  font-family: ${props => props.theme.font};
  font-size: 14px;
  line-height: 1.8;
  overflow: hidden;
`;

const BootLine = styled.div`
  color: ${props => props.success ? props.theme.primary : props.error ? props.theme.danger : props.theme.textMuted};
  opacity: 0;
  animation: fadeIn 0.1s forwards;
  animation-delay: ${props => props.delay}ms;
  
  @keyframes fadeIn {
    to { opacity: 1; }
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [showBoot, setShowBoot] = useState(true);
  const [bootComplete, setBootComplete] = useState(false);
  
  const { setUser, setLoading, theme } = useStore();
  const inputRef = useRef(null);

  // Boot sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setBootComplete(true);
      setTimeout(() => setShowBoot(false), 500);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Focus input after boot
  useEffect(() => {
    if (!showBoot && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showBoot]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success('🔓 ACCESS GRANTED', {
          icon: '🔓',
          style: {
            background: '#00ff41',
            color: '#000',
            fontWeight: 'bold'
          }
        });
        
        setUser(data.user);
        
        // Play unlock sound if enabled
        const audio = new Audio('/sounds/unlock.mp3');
        audio.volume = 0.5;
        audio.play().catch(() => {});
      } else {
        setAttemptCount(data.attemptCount || attemptCount + 1);
        setError(data.message || data.error || 'ACCESS DENIED');
        
        // Play error sound
        const audio = new Audio('/sounds/error.mp3');
        audio.volume = 0.3;
        audio.play().catch(() => {});
      }
    } catch (err) {
      setError('CONNECTION ERROR - SYSTEM UNREACHABLE');
    } finally {
      setIsLoading(false);
      setLoading(false);
    }
  };

  const getHint = () => {
    if (attemptCount === 0) return null;
    if (attemptCount === 1) return "💡 The key is related to your identity...";
    if (attemptCount === 2) return "💡 Try reversing your perspective...";
    if (attemptCount >= 3) return "💡 Your password is your username spelled backwards";
    return null;
  };

  const bootLines = [
    { text: '> INITIALIZING LOCKED PROTOCOL v3.0...', delay: 0 },
    { text: '> Loading encryption modules...', delay: 200, success: true },
    { text: '> Establishing secure connection...', delay: 400, success: true },
    { text: '> Verifying system integrity...', delay: 600, success: true },
    { text: '> WARNING: Unauthorized access will be logged', delay: 1000, error: true },
    { text: '> SYSTEM READY', delay: 1500, success: true },
    { text: '> AWAITING AUTHENTICATION...', delay: 1800 },
  ];

  return (
    <>
      <AnimatePresence>
        {showBoot && (
          <BootSequence
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {bootLines.map((line, i) => (
              <BootLine
                key={i}
                delay={line.delay}
                success={line.success}
                error={line.error}
              >
                {line.text}
              </BootLine>
            ))}
            <BootLine delay={2200}>_</BootLine>
          </BootSequence>
        )}
      </AnimatePresence>

      <Container>
        <Logo>
          <GlitchText 
            size="clamp(60px, 15vw, 120px)" 
            weight="900"
            alwaysGlitch
            intensity="extreme"
          >
            🔒
          </GlitchText>
        </Logo>
        
        <Subtitle>
          <TypeAnimation
            sequence={[
              'THE ULTIMATE PUZZLE',
              2000,
              'PROVE YOUR WORTH',
              2000,
              'UNLOCK THE SYSTEM',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </Subtitle>

        <TerminalBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>Identity</Label>
              <Input
                ref={inputRef}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                placeholder="Enter your codename..."
                disabled={isLoading}
                autoComplete="off"
                spellCheck="false"
              />
            </InputGroup>

            <InputGroup>
              <Label>Key</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="What's your secret?..."
                disabled={isLoading}
                autoComplete="off"
              />
            </InputGroup>

            <CyberButton
              type="submit"
              variant="primary"
              size="large"
              loading={isLoading}
              disabled={!username || !password}
              style={{ width: '100%' }}
            >
              {isLoading ? 'VERIFYING...' : 'INITIATE SEQUENCE'}
            </CyberButton>
          </form>

          <AnimatePresence>
            {error && (
              <ErrorMessage
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                ⚠ {error}
              </ErrorMessage>
            )}
          </AnimatePresence>

          {getHint() && (
            <Hints>
              {getHint()}
            </Hints>
          )}

          {attemptCount > 0 && (
            <Attempts>
              Attempt {attemptCount} • Keep trying...
            </Attempts>
          )}
        </TerminalBox>
      </Container>
    </>
  );
};

export default Login;
