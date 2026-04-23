import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';
import Tilt from 'react-parallax-tilt';

import { useStore } from '../store/useStore';
import GlitchText from '../components/ui/GlitchText';
import CyberButton from '../components/ui/CyberButton';

const Container = styled.div`
  min-height: 100vh;
  padding: 100px 24px 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const PhaseBadge = styled.div`
  display: inline-block;
  padding: 8px 24px;
  background: ${props => props.theme.gold}20;
  border: 1px solid ${props => props.theme.gold};
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${props => props.theme.gold};
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fontDisplay};
  font-size: clamp(32px, 6vw, 48px);
  margin-bottom: 12px;
  color: ${props => props.theme.gold};
`;

const Description = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textMuted};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CipherChain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const CipherCard = styled(Tilt)`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.active ? props.theme.gold : props.theme.border};
  padding: 24px;
  text-align: center;
  
  ${props => props.active && `
    box-shadow: 0 0 30px ${props.theme.gold}30;
  `}
`;

const CipherIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const CipherName = styled.h3`
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${props => props.active ? props.theme.gold : props.theme.textMuted};
  margin-bottom: 8px;
`;

const CipherDesc = styled.p`
  font-size: 12px;
  color: ${props => props.theme.textMuted};
`;

const BinaryDisplay = styled.div`
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.gold}40;
  padding: 30px;
  margin-bottom: 30px;
  font-family: ${props => props.theme.font};
  font-size: 16px;
  line-height: 1.8;
  color: ${props => props.theme.gold};
  text-align: center;
  overflow-x: auto;
  position: relative;
  
  &::before {
    content: '01001000 01000101 01010010 01000101';
    position: absolute;
    top: 8px;
    left: 16px;
    font-size: 10px;
    color: ${props => props.theme.textMuted};
    opacity: 0.5;
  }
`;

const DecoderSection = styled.div`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  padding: 30px;
  margin-bottom: 30px;
`;

const DecoderTitle = styled.h3`
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${props => props.theme.textMuted};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DecoderInput = styled.div`
  label {
    display: block;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${props => props.theme.textMuted};
    margin-bottom: 8px;
  }
  
  input, textarea {
    width: 100%;
    padding: 12px;
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.border};
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.font};
    font-size: 13px;
    resize: vertical;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.gold};
    }
  }
`;

const Arrow = styled.div`
  text-align: center;
  color: ${props => props.theme.gold};
  font-size: 24px;
  margin: 10px 0;
`;

const FinalAnswer = styled.div`
  margin-top: 30px;
  
  input {
    width: 100%;
    padding: 20px;
    background: ${props => props.theme.background};
    border: 2px solid ${props => props.theme.gold}40;
    color: ${props => props.theme.gold};
    font-family: ${props => props.theme.font};
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    
    &::placeholder {
      color: ${props => props.theme.textMuted};
    }
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.gold};
      box-shadow: 0 0 30px ${props => props.theme.gold}30;
    }
  }
`;

const HintPanel = styled(motion.div)`
  background: ${props => props.theme.warning}10;
  border-left: 4px solid ${props => props.theme.warning};
  padding: 20px;
  margin-bottom: 30px;
  
  h4 {
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${props => props.theme.warning};
    margin-bottom: 12px;
  }
  
  ul {
    list-style: none;
    font-size: 13px;
    color: ${props => props.theme.text};
    line-height: 1.8;
    
    li {
      margin-bottom: 8px;
      
      &::before {
        content: '→ ';
        color: ${props => props.theme.warning};
      }
    }
  }
`;

const Timer = styled.div`
  position: fixed;
  top: 80px;
  right: 24px;
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.gold};
  padding: 12px 20px;
  font-family: ${props => props.theme.fontDisplay};
  font-size: 18px;
  color: ${props => props.theme.gold};
  z-index: 50;
`;

// Helper functions for decoding
const binaryToText = (binary) => {
  return binary.split(' ').map(bin => {
    const byte = parseInt(bin, 2);
    return String.fromCharCode(byte);
  }).join('');
};

const base64Decode = (str) => {
  try {
    return atob(str);
  } catch {
    return '';
  }
};

const rot13 = (str) => {
  return str.replace(/[a-zA-Z]/g, function(chr) {
    var start = chr <= 'Z' ? 65 : 97;
    return String.fromCharCode(start + (chr.charCodeAt(0) - start + 13) % 26);
  });
};

const Phase3 = () => {
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
  
  const [puzzleData, setPuzzleData] = useState(null);
  const [binaryInput, setBinaryInput] = useState('');
  const [base64Result, setBase64Result] = useState('');
  const [rot13Result, setRot13Result] = useState('');
  const [finalAnswer, setFinalAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    startTimer();
    fetchPuzzle();
    return () => stopTimer();
  }, []);

  const fetchPuzzle = async () => {
    try {
      const response = await fetch('/api/puzzle3');
      if (response.ok) {
        const data = await response.json();
        setPuzzleData(data);
        setBinaryInput(data.binary);
      }
    } catch (err) {
      setError('Failed to load puzzle');
    }
  };

  // Auto-decode as user types
  useEffect(() => {
    if (binaryInput) {
      const cleanBinary = binaryInput.replace(/[^01\s]/g, '');
      try {
        const b64 = binaryToText(cleanBinary);
        setBase64Result(b64);
        
        const rot = base64Decode(b64);
        setRot13Result(rot);
      } catch {
        // Invalid input
      }
    }
  }, [binaryInput]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/puzzle3/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          answer: finalAnswer,
          timeTaken: timer 
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        stopTimer();
        
        // Epic celebration
        const end = Date.now() + 5000;
        const colors = ['#ffd700', '#00ff41', '#ff00ff'];

        (function frame() {
          confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
          });
          confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());

        // Add rewards
        addXP(data.xp || 1000);
        data.badges?.forEach(badge => addBadge(badge));
        setPhase(3);

        toast.success('🏆 PHASE 3 COMPLETE - YOU ARE ELITE!', {
          icon: '🎉',
          duration: 6000
        });

        setTimeout(() => {
          navigate('/unlocked');
        }, 3000);
      } else {
        incrementAttempts();
        setError(data.error || 'The cipher remains locked.');
        
        if (attempts >= 3) {
          setShowHints(true);
        }
      }
    } catch (err) {
      setError('System error. Please retry.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Container>
      <Timer>⏱ {formatTime(timer)}</Timer>

      <Header>
        <PhaseBadge>Final Phase // Elite Only</PhaseBadge>
        <Title>
          <GlitchText>The Final Lock</GlitchText>
        </Title>
        <Description>
          A three-layer cipher chain guards the ultimate secret. 
          Reverse the encoding: Binary → Base64 → ROT13
        </Description>
      </Header>

      <CipherChain>
        <CipherCard active glareEnable tiltEnable>
          <CipherIcon>0️⃣1️⃣</CipherIcon>
          <CipherName active>Binary</CipherName>
          <CipherDesc>8-bit binary encoding</CipherDesc>
        </CipherCard>
        <CipherCard glareEnable tiltEnable>
          <CipherIcon>🔢</CipherIcon>
          <CipherName>Base64</CipherName>
          <CipherDesc>64-character encoding</CipherDesc>
        </CipherCard>
        <CipherCard glareEnable tiltEnable>
          <CipherIcon>🔠</CipherIcon>
          <CipherName>ROT13</CipherName>
          <CipherDesc>Letter substitution cipher</CipherDesc>
        </CipherCard>
      </CipherChain>

      {puzzleData && (
        <BinaryDisplay>
          {puzzleData.binary}
        </BinaryDisplay>
      )}

      <DecoderSection>
        <DecoderTitle>🔓 Cipher Decoder Tool</DecoderTitle>
        
        <InputGrid>
          <DecoderInput>
            <label>1. Binary Input</label>
            <textarea
              rows="4"
              value={binaryInput}
              onChange={(e) => setBinaryInput(e.target.value)}
              placeholder="Paste binary here..."
            />
          </DecoderInput>
          
          <DecoderInput>
            <label>2. Base64 Result</label>
            <textarea
              rows="4"
              value={base64Result}
              readOnly
              placeholder="Base64 decoded..."
            />
          </DecoderInput>
          
          <DecoderInput>
            <label>3. ROT13 Result</label>
            <textarea
              rows="4"
              value={rot13(rot13Result)}
              readOnly
              placeholder="Final decoded message..."
            />
          </DecoderInput>
        </InputGrid>

        <Arrow>⬇</Arrow>

        <FinalAnswer>
          <label style={{ 
            display: 'block', 
            fontSize: '12px', 
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#666',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            Final Answer
          </label>
          <input
            type="text"
            value={finalAnswer}
            onChange={(e) => setFinalAnswer(e.target.value.toUpperCase())}
            placeholder="PHASE3_COMPLETE_..."
          />
        </FinalAnswer>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <CyberButton
            size="large"
            onClick={handleSubmit}
            loading={isLoading}
            disabled={!finalAnswer}
          >
            {isLoading ? 'Verifying...' : '🔓 UNLOCK FINAL PHASE'}
          </CyberButton>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              color: '#ff0040', 
              textAlign: 'center',
              marginTop: '20px' 
            }}
          >
            ⚠ {error}
          </motion.div>
        )}
      </DecoderSection>

      <AnimatePresence>
        {showHints && (
          <HintPanel
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <h4>🔑 Decoding Hints</h4>
            <ul>
              <li>Each 8-bit binary sequence = 1 ASCII character</li>
              <li>Combine all characters to form Base64 string</li>
              <li>Decode Base64 to get ROT13 encoded text</li>
              <li>ROT13: A→N, B→O, C→P... (shift by 13)</li>
              <li>Answer format: PHASE3_COMPLETE_[USERNAME]_THE_END</li>
            </ul>
          </HintPanel>
        )}
      </AnimatePresence>

      <div style={{ textAlign: 'center', color: '#666', fontSize: '12px', marginTop: '40px' }}>
        Attempt {attempts + 1} • Only the worthy shall pass
      </div>
    </Container>
  );
};

export default Phase3;
