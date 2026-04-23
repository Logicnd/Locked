import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';

import { useStore } from '../store/useStore';
import GlitchText from '../components/ui/GlitchText';
import CyberButton from '../components/ui/CyberButton';

const Container = styled.div`
  min-height: 100vh;
  padding: 100px 24px 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const PhaseBadge = styled.div`
  display: inline-block;
  padding: 8px 24px;
  border: 1px solid ${props => props.theme.primary};
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${props => props.theme.primary};
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fontDisplay};
  font-size: clamp(32px, 6vw, 48px);
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textMuted};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ChallengeBox = styled(motion.div)`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  padding: 40px;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, 
      ${props => props.theme.primary}, 
      ${props => props.theme.accent},
      ${props => props.theme.primary}
    );
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const HexDisplay = styled.div`
  font-family: ${props => props.theme.font};
  font-size: 24px;
  letter-spacing: 0.2em;
  color: ${props => props.theme.primary};
  text-align: center;
  padding: 40px;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  margin-bottom: 24px;
  user-select: all;
  cursor: text;
  
  span {
    display: inline-block;
    animation: pulse 2s infinite;
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 16px 20px;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.text};
  font-family: ${props => props.theme.font};
  font-size: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 20px ${props => props.theme.primary}20;
  }
`;

const HintBox = styled(motion.div)`
  padding: 16px 20px;
  background: ${props => props.theme.warning}10;
  border-left: 3px solid ${props => props.theme.warning};
  margin-bottom: 24px;
  font-size: 14px;
  color: ${props => props.theme.text};
`;

const AttemptCounter = styled.div`
  text-align: center;
  font-size: 12px;
  color: ${props => props.theme.textMuted};
  letter-spacing: 0.1em;
  margin-top: 16px;
`;

const DecoderTool = styled.div`
  margin-top: 40px;
  padding: 24px;
  background: ${props => props.theme.background};
  border: 1px dashed ${props => props.theme.border};
`;

const DecoderTitle = styled.h3`
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${props => props.theme.textMuted};
  margin-bottom: 16px;
`;

const DecoderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 8px;
  font-size: 11px;
  
  div {
    padding: 8px;
    background: ${props => props.theme.surface};
    text-align: center;
    
    span {
      display: block;
      color: ${props => props.theme.primary};
      font-weight: 600;
      margin-bottom: 2px;
    }
    
    small {
      color: ${props => props.theme.textMuted};
    }
  }
`;

const Phase2 = () => {
  const navigate = useNavigate();
  const { 
    user, 
    setPhase, 
    addXP, 
    addBadge, 
    incrementAttempts,
    attempts,
    startTimer,
    stopTimer,
    timer 
  } = useStore();
  
  const [hexData, setHexData] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [hint, setHint] = useState(null);
  const [hintLevel, setHintLevel] = useState(0);

  useEffect(() => {
    startTimer();
    fetchPuzzle();
    return () => stopTimer();
  }, []);

  const fetchPuzzle = async () => {
    try {
      const response = await fetch('/api/puzzle2');
      if (response.ok) {
        const data = await response.json();
        setHexData(data.data);
      }
    } catch (err) {
      setError('Failed to load puzzle data');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/puzzle2/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        stopTimer();
        
        // Celebration
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00ff41', '#ff00ff', '#ffd700']
        });

        // Add XP and badges
        const xpGained = Math.max(500 - timer * 2, 100);
        addXP(xpGained);
        
        if (timer < 30) addBadge('⚡ Speed Demon');
        if (attempts >= 5) addBadge('🎯 Persistence');
        
        toast.success(`✓ Phase 2 Complete! +${xpGained} XP`, {
          icon: '🎉',
          duration: 5000
        });

        setPhase(3);
        
        setTimeout(() => {
          navigate('/unlocked');
        }, 2000);
      } else {
        incrementAttempts();
        setError(data.error || 'Incorrect. Study the hex values.');
        
        // Show hints after multiple failures
        if (attempts >= 2 && hintLevel < 1) {
          setHint('💡 Each pair of hex digits represents one ASCII character');
          setHintLevel(1);
        } else if (attempts >= 4 && hintLevel < 2) {
          setHint('💡 41 in hex = A, 42 = B, 43 = C... The message starts with WELCOME_');
          setHintLevel(2);
        }
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const hexToAscii = (hex) => {
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
      const byte = parseInt(hex.substr(i, 2), 16);
      if (byte) str += String.fromCharCode(byte);
    }
    return str;
  };

  // Generate decoder reference
  const decoderRef = [];
  for (let i = 65; i <= 90; i++) {
    decoderRef.push({ char: String.fromCharCode(i), hex: i.toString(16).toUpperCase() });
  }
  for (let i = 48; i <= 57; i++) {
    decoderRef.push({ char: String.fromCharCode(i), hex: i.toString(16).toUpperCase() });
  }
  decoderRef.push({ char: '_', hex: '5F' });

  return (
    <Container>
      <Header>
        <PhaseBadge>Phase 2 of 3</PhaseBadge>
        <Title>
          <GlitchText>Hex Decoder</GlitchText>
        </Title>
        <Description>
          The System speaks in hexadecimal. Convert the transmission data 
          to ASCII characters to prove your worth.
        </Description>
      </Header>

      <ChallengeBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 style={{ 
          fontSize: '12px', 
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#666',
          marginBottom: '16px'
        }}>
          📡 Incoming Transmission
        </h3>

        <HexDisplay>
          {hexData || 'Loading...'}
        </HexDisplay>

        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value.toUpperCase())}
              placeholder="Enter decoded message..."
              disabled={isLoading}
            />
            <CyberButton
              type="submit"
              loading={isLoading}
              disabled={!answer}
            >
              {isLoading ? 'Verifying...' : 'Transmit'}
            </CyberButton>
          </InputGroup>
        </form>

        <AnimatePresence>
          {hint && (
            <HintBox
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {hint}
            </HintBox>
          )}
        </AnimatePresence>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              color: '#ff0040', 
              textAlign: 'center',
              marginTop: '16px' 
            }}
          >
            ⚠ {error}
          </motion.div>
        )}

        <AttemptCounter>
          Attempt {attempts + 1} • Time: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
        </AttemptCounter>
      </ChallengeBox>

      <DecoderTool>
        <DecoderTitle>ASCII Reference Table</DecoderTitle>
        <DecoderGrid>
          {decoderRef.map(({ char, hex }) => (
            <div key={hex}>
              <span>{hex}</span>
              <small>{char}</small>
            </div>
          ))}
        </DecoderGrid>
      </DecoderTool>
    </Container>
  );
};

export default Phase2;
