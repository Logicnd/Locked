import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

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

const Title = styled.h1`
  font-family: ${props => props.theme.fontDisplay};
  font-size: clamp(32px, 6vw, 48px);
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textMuted};
`;

const TypeSelector = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 40px;
`;

const TypeButton = styled.button`
  padding: 12px 24px;
  background: ${props => props.active ? props.theme.primary : 'transparent'};
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.active ? props.theme.background : props.theme.primary};
  font-family: ${props => props.theme.font};
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? props.theme.primary : props.theme.primary}20;
  }
`;

const PuzzleCard = styled(motion.div)`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  padding: 40px;
  margin-bottom: 24px;
`;

const PuzzleDisplay = styled.div`
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.primary}40;
  padding: 30px;
  text-align: center;
  font-family: ${props => props.theme.font};
  font-size: ${props => props.size || '20px'};
  color: ${props => props.theme.primary};
  margin-bottom: 24px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 16px;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.text};
  font-family: ${props => props.theme.font};
  font-size: 16px;
  text-transform: uppercase;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const HintBox = styled(motion.div)`
  background: ${props => props.theme.warning}10;
  border-left: 3px solid ${props => props.theme.warning};
  padding: 16px;
  margin-bottom: 20px;
  font-size: 13px;
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid ${props => props.theme.border};
  font-size: 14px;
  
  &:last-child {
    border-bottom: none;
  }
  
  .label {
    color: ${props => props.theme.textMuted};
  }
  
  .value {
    color: ${props => props.theme.primary};
    font-weight: 600;
  }
`;

const Practice = () => {
  const { addXP } = useStore();
  const [puzzleTypes, setPuzzleTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('hex');
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [stats, setStats] = useState({
    attempted: 0,
    correct: 0,
    streak: 0
  });
  const [loading, setLoading] = useState(false);

  // Load puzzle types on mount
  useEffect(() => {
    fetchPuzzleTypes();
    generatePuzzle('hex');
  }, []);

  const fetchPuzzleTypes = async () => {
    try {
      const response = await fetch('/api/v2/puzzle-types');
      if (response.ok) {
        const data = await response.json();
        setPuzzleTypes(data.types);
      }
    } catch (err) {
      // Fallback types
      setPuzzleTypes([
        { type: 'hex', difficulty: 2, hint: 'Hex to ASCII conversion' },
        { type: 'math', difficulty: 2, hint: 'Basic arithmetic' },
        { type: 'sequence', difficulty: 2, hint: 'Pattern recognition' },
        { type: 'binary', difficulty: 3, hint: 'Binary decoding' }
      ]);
    }
  };

  const generatePuzzle = async (type) => {
    setLoading(true);
    setAnswer('');
    setShowHint(false);
    
    try {
      const response = await fetch('/api/v2/practice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ difficulty: 2 })
      });
      
      if (response.ok) {
        const data = await response.json();
        setCurrentPuzzle(data.puzzle);
      }
    } catch (err) {
      // Generate local puzzle if API fails
      const localPuzzle = generateLocalPuzzle(type);
      setCurrentPuzzle(localPuzzle);
    } finally {
      setLoading(false);
    }
  };

  const generateLocalPuzzle = (type) => {
    const generators = {
      hex: () => {
        const word = 'PRACTICE';
        return {
          type: 'hex',
          data: word.split('').map(c => c.charCodeAt(0).toString(16).toUpperCase()).join(' '),
          hint: 'Convert hex to ASCII characters',
          answer: word
        };
      },
      math: () => {
        const a = Math.floor(Math.random() * 20) + 10;
        const b = Math.floor(Math.random() * 10) + 5;
        return {
          type: 'math',
          data: `${a} + ${b} = ?`,
          hint: 'Simple addition',
          answer: (a + b).toString()
        };
      },
      sequence: () => {
        const sequences = [
          { seq: '2, 4, 8, 16, ?', answer: '32' },
          { seq: '1, 4, 9, 16, ?', answer: '25' }
        ];
        const s = sequences[Math.floor(Math.random() * sequences.length)];
        return {
          type: 'sequence',
          data: s.seq,
          hint: 'Look for the pattern',
          answer: s.answer
        };
      },
      binary: () => {
        const num = Math.floor(Math.random() * 255);
        return {
          type: 'binary',
          data: `Binary: ${num.toString(2).padStart(8, '0')}`,
          hint: 'Convert binary to decimal',
          answer: num.toString()
        };
      }
    };
    
    return (generators[type] || generators.hex)();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!answer || !currentPuzzle) return;

    try {
      const response = await fetch('/api/v2/practice/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer })
      });

      if (response.ok) {
        const data = await response.json();
        
        if (data.correct) {
          toast.success('✓ Correct! (+10 XP)');
          addXP(10);
          setStats(s => ({
            attempted: s.attempted + 1,
            correct: s.correct + 1,
            streak: s.streak + 1
          }));
          generatePuzzle(selectedType);
        } else {
          toast.error(`✗ Incorrect. Answer was: ${data.answer}`);
          setStats(s => ({
            attempted: s.attempted + 1,
            correct: s.correct,
            streak: 0
          }));
        }
      } else {
        // Local verification
        const correct = answer.toUpperCase().trim() === currentPuzzle.answer.toUpperCase().trim();
        if (correct) {
          toast.success('✓ Correct! (+10 XP)');
          addXP(10);
          setStats(s => ({
            attempted: s.attempted + 1,
            correct: s.correct + 1,
            streak: s.streak + 1
          }));
          generatePuzzle(selectedType);
        } else {
          toast.error(`✗ Incorrect. Answer was: ${currentPuzzle.answer}`);
          setStats(s => ({
            attempted: s.attempted + 1,
            correct: s.correct,
            streak: 0
          }));
        }
      }
    } catch (err) {
      // Local verification fallback
      const correct = answer.toUpperCase().trim() === currentPuzzle.answer.toUpperCase().trim();
      if (correct) {
        toast.success('✓ Correct! (+10 XP)');
        addXP(10);
        generatePuzzle(selectedType);
      } else {
        toast.error(`✗ Incorrect. Answer was: ${currentPuzzle.answer}`);
      }
      setAnswer('');
    }
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    generatePuzzle(type);
  };

  const handleSkip = () => {
    generatePuzzle(selectedType);
    setStats(s => ({ ...s, streak: 0 }));
  };

  return (
    <Container>
      <Header>
        <Title>
          <GlitchText>Practice</GlitchText> Mode
        </Title>
        <Subtitle>
          Unlimited puzzles to sharpen your skills. No pressure, just practice.
        </Subtitle>
      </Header>

      <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', padding: '20px', marginBottom: '30px' }}>
        <StatsRow>
          <span className="label">Puzzles Attempted</span>
          <span className="value">{stats.attempted}</span>
        </StatsRow>
        <StatsRow>
          <span className="label">Correct Answers</span>
          <span className="value">{stats.correct}</span>
        </StatsRow>
        <StatsRow>
          <span className="label">Accuracy</span>
          <span className="value">
            {stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0}%
          </span>
        </StatsRow>
        <StatsRow>
          <span className="label">Current Streak</span>
          <span className="value" style={{ color: stats.streak > 2 ? '#00ff41' : undefined }}>
            {stats.streak} 🔥
          </span>
        </StatsRow>
      </div>

      <TypeSelector>
        {['hex', 'math', 'sequence', 'binary', 'pattern', 'reverse'].map(type => (
          <TypeButton
            key={type}
            active={selectedType === type}
            onClick={() => handleTypeChange(type)}
          >
            {type.toUpperCase()}
          </TypeButton>
        ))}
      </TypeSelector>

      {currentPuzzle && (
        <PuzzleCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={currentPuzzle.data}
        >
          <PuzzleDisplay size={currentPuzzle.type === 'hex' ? '18px' : '24px'}>
            <div>{currentPuzzle.data}</div>
            {currentPuzzle.preview && (
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: currentPuzzle.preview,
                marginTop: '10px',
                border: '1px solid #333'
              }} />
            )}
          </PuzzleDisplay>

          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter your answer..."
                disabled={loading}
              />
              <CyberButton type="submit" disabled={!answer || loading}>
                Submit
              </CyberButton>
              <CyberButton type="button" variant="secondary" onClick={handleSkip}>
                Skip
              </CyberButton>
            </InputGroup>
          </form>

          <AnimatePresence>
            {showHint && (
              <HintBox
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                💡 {currentPuzzle.hint}
              </HintBox>
            )}
          </AnimatePresence>

          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <button
              onClick={() => setShowHint(!showHint)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#666',
                fontSize: '12px',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          </div>
        </PuzzleCard>
      )}
    </Container>
  );
};

export default Practice;
