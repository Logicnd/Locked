import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

import { useStore } from '../../store/useStore';
import CyberButton from '../ui/CyberButton';

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(0.98); }
`;

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.background};
  z-index: 2000;
  display: flex;
  flex-direction: column;
  padding: 80px 20px 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-family: ${props => props.theme.fontDisplay};
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  
  .live {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: #ff0040;
    border-radius: 50%;
    animation: ${pulse} 1s infinite;
  }
`;

const RaceTimer = styled.div`
  font-family: ${props => props.theme.fontDisplay};
  font-size: 36px;
  font-weight: 700;
  color: ${props => props.theme.primary};
  text-align: center;
`;

const MainArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  flex: 1;
  overflow: hidden;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PuzzleArea = styled.div`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  padding: 30px;
  overflow-y: auto;
`;

const OpponentsPanel = styled.div`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (max-width: 900px) {
    display: none;
  }
`;

const Opponent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.isPlayer ? props.theme.primary : props.theme.border};
  
  .avatar {
    width: 40px;
    height: 40px;
    background: ${props => props.theme.border};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  
  .info {
    flex: 1;
    
    .name {
      font-weight: 600;
      font-size: 14px;
    }
    
    .progress {
      font-size: 11px;
      color: ${props => props.theme.textMuted};
    }
  }
  
  .rank {
    font-family: ${props => props.theme.fontDisplay};
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.rank === 1 ? '#ffd700' : props.rank === 2 ? '#c0c0c0' : props.rank === 3 ? '#cd7f32' : props.theme.textMuted};
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${props => props.theme.background};
  margin-top: 8px;
  
  .fill {
    height: 100%;
    width: ${props => props.percent}%;
    background: ${props => props.color || props.theme.primary};
    transition: width 0.5s ease;
  }
`;

const ChatBox = styled.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid ${props => props.theme.border};
`;

const ChatMessages = styled.div`
  height: 150px;
  overflow-y: auto;
  font-size: 12px;
  margin-bottom: 10px;
  
  .message {
    padding: 4px 0;
    
    .name {
      color: ${props => props.theme.primary};
      font-weight: 600;
    }
    
    .text {
      color: ${props => props.theme.textMuted};
    }
  }
`;

const ChatInput = styled.div`
  display: flex;
  gap: 8px;
  
  input {
    flex: 1;
    padding: 8px;
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.border};
    color: ${props => props.theme.text};
    font-size: 12px;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.primary};
    }
  }
`;

const ResultsOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.background}ee;
  backdrop-filter: blur(10px);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultsCard = styled(motion.div)`
  background: ${props => props.theme.surface};
  border: 2px solid ${props => props.winner ? '#ffd700' : props.theme.border};
  padding: 40px;
  text-align: center;
  max-width: 500px;
  width: 90%;
  
  .trophy {
    font-size: 80px;
    margin-bottom: 20px;
  }
  
  h2 {
    font-family: ${props => props.theme.fontDisplay};
    font-size: 32px;
    margin-bottom: 20px;
    color: ${props => props.winner ? '#ffd700' : props.theme.text};
  }
  
  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 30px 0;
    
    .stat {
      .value {
        font-size: 28px;
        font-weight: 700;
        color: ${props => props.theme.primary};
      }
      
      .label {
        font-size: 11px;
        color: ${props => props.theme.textMuted};
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
    }
  }
`;

const LeaderboardPreview = styled.div`
  margin: 20px 0;
  
  .row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px;
    font-size: 13px;
    
    &.you {
      background: ${props => props.theme.primary}20;
      border-left: 3px solid ${props => props.theme.primary};
    }
    
    .pos {
      width: 30px;
      font-weight: 700;
    }
    
    .name {
      flex: 1;
    }
    
    .time {
      color: ${props => props.theme.textMuted};
    }
  }
`;

// Mock race data
const MOCK_OPPONENTS = [
  { id: '1', name: 'CyberNinja', avatar: '🥷', level: 12 },
  { id: '2', name: 'CodeBreaker', avatar: '💻', level: 15 },
  { id: '3', name: 'MatrixMind', avatar: '🧠', level: 10 },
  { id: '4', name: 'GlitchHunter', avatar: '👾', level: 18 },
];

const RaceManager = ({ puzzleType, onClose, onComplete }) => {
  const { user, addXP } = useStore();
  const [raceState, setRaceState] = useState('waiting'); // waiting, racing, finished
  const [raceTimer, setRaceTimer] = useState(0);
  const [opponents, setOpponents] = useState([]);
  const [playerProgress, setPlayerProgress] = useState(0);
  const [solved, setSolved] = useState(false);
  const [rank, setRank] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [racePuzzle, setRacePuzzle] = useState(null);
  
  const timerRef = useRef(null);
  const socketRef = useRef(null);

  // Initialize race
  useEffect(() => {
    // Initialize opponents with random progress
    const initialOpponents = MOCK_OPPONENTS.map(opp => ({
      ...opp,
      progress: 0,
      finished: false,
      finishTime: null
    }));
    setOpponents(initialOpponents);
    
    // Generate race puzzle
    generatePuzzle();
    
    // Start countdown
    setTimeout(() => {
      setRaceState('racing');
      startTimer();
      simulateOpponents();
    }, 3000);
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const generatePuzzle = () => {
    // Generate a random race puzzle based on type
    const puzzles = {
      hex: () => {
        const word = 'RACE' + Math.floor(Math.random() * 999);
        return {
          type: 'hex',
          data: word.split('').map(c => c.charCodeAt(0).toString(16).toUpperCase()).join(' '),
          answer: word
        };
      },
      math: () => {
        const a = Math.floor(Math.random() * 50) + 10;
        const b = Math.floor(Math.random() * 50) + 10;
        const op = Math.random() > 0.5 ? '+' : '*';
        const answer = op === '+' ? a + b : a * b;
        return {
          type: 'math',
          data: `${a} ${op} ${b} = ?`,
          answer: answer.toString()
        };
      },
      binary: () => {
        const num = Math.floor(Math.random() * 255);
        return {
          type: 'binary',
          data: num.toString(2).padStart(8, '0'),
          answer: num.toString()
        };
      }
    };
    
    const generator = puzzles[puzzleType] || puzzles.hex;
    setRacePuzzle(generator());
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setRaceTimer(t => t + 1);
    }, 1000);
  };

  // Simulate opponent progress
  const simulateOpponents = () => {
    const interval = setInterval(() => {
      setOpponents(prev => {
        const updated = prev.map(opp => {
          if (opp.finished) return opp;
          
          // Random progress increment
          const increment = Math.random() * 15;
          const newProgress = Math.min(opp.progress + increment, 100);
          
          if (newProgress >= 100 && !opp.finished) {
            return {
              ...opp,
              progress: 100,
              finished: true,
              finishTime: raceTimer + Math.floor(Math.random() * 5)
            };
          }
          
          return { ...opp, progress: newProgress };
        });
        
        // Check if all finished
        const allFinished = updated.every(o => o.finished) && solved;
        if (allFinished && raceState === 'racing') {
          setTimeout(() => finishRace(updated), 1000);
        }
        
        return updated;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  };

  const finishRace = (finalOpponents) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setRaceState('finished');
    
    // Calculate rank
    const finishedCount = finalOpponents.filter(o => o.finished).length;
    const playerRank = solved ? finishedCount + 1 : finishedCount + 2;
    setRank(playerRank);
    
    // Award XP
    const xpGain = playerRank === 1 ? 500 : playerRank === 2 ? 350 : playerRank === 3 ? 250 : 150;
    addXP(xpGain);
    
    // Celebration for winner
    if (playerRank === 1) {
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#ffaa00', '#ffffff']
      });
    }
  };

  const handleAnswerSubmit = (answer) => {
    if (!racePuzzle || solved) return;
    
    if (answer.toUpperCase() === racePuzzle.answer.toUpperCase()) {
      setSolved(true);
      setPlayerProgress(100);
      
      // Add system message
      addChatMessage('System', `${user?.username} solved the puzzle!`);
    }
  };

  const addChatMessage = (name, text) => {
    setChatMessages(prev => [...prev.slice(-19), { name, text, time: Date.now() }]);
  };

  const sendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    addChatMessage(user?.username, chatInput);
    setChatInput('');
    
    // Mock opponent responses
    setTimeout(() => {
      const responses = [
        'Nice try!',
        'Too slow!',
        'I\'m almost done...',
        'This is tough!',
        'Good luck!'
      ];
      const randomOpp = opponents[Math.floor(Math.random() * opponents.length)];
      if (randomOpp && Math.random() > 0.7) {
        addChatMessage(randomOpp.name, responses[Math.floor(Math.random() * responses.length)]);
      }
    }, 1500);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate standings
  const standings = [
    ...opponents.filter(o => o.finished).map(o => ({ ...o, isPlayer: false })),
    ...(solved ? [{ id: 'player', name: user?.username, finishTime: raceTimer, isPlayer: true, progress: 100, finished: true }] : [])
  ].sort((a, b) => (a.finishTime || 999) - (b.finishTime || 999));

  return (
    <Container
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <Header>
        <Title>
          <span className="live" />
          LIVE RACE
        </Title>
        <RaceTimer>{formatTime(raceTimer)}</RaceTimer>
        <CyberButton size="small" onClick={onClose}>
          Leave Race
        </CyberButton>
      </Header>

      <MainArea>
        <PuzzleArea>
          {raceState === 'waiting' ? (
            <div style={{ textAlign: 'center', padding: '60px' }}>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                style={{ fontSize: '60px', marginBottom: '20px' }}
              >
                🏁
              </motion.div>
              <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>
                Race Starting Soon...
              </h3>
              <p style={{ color: '#666' }}>Get ready to solve!</p>
            </div>
          ) : racePuzzle ? (
            <div>
              <h3 style={{ fontSize: '14px', color: '#666', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                Solve this {racePuzzle.type} puzzle:
              </h3>
              
              <div style={{
                background: '#0a0a0a',
                border: '1px solid #00ff41',
                padding: '40px',
                textAlign: 'center',
                fontSize: '28px',
                fontFamily: 'JetBrains Mono, monospace',
                color: '#00ff41',
                marginBottom: '30px'
              }}>
                {racePuzzle.data}
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                handleAnswerSubmit(e.target.answer.value);
              }}>
                <input
                  name="answer"
                  type="text"
                  placeholder="Enter answer..."
                  disabled={solved}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: '#0a0a0a',
                    border: '1px solid #333',
                    color: '#fff',
                    fontSize: '18px',
                    fontFamily: 'JetBrains Mono, monospace',
                    marginBottom: '16px'
                  }}
                  autoComplete="off"
                />
                <CyberButton
                  type="submit"
                  disabled={solved}
                  style={{ width: '100%' }}
                >
                  {solved ? '✓ SOLVED!' : 'Submit Answer'}
                </CyberButton>
              </form>

              {solved && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: '20px',
                    padding: '20px',
                    background: '#00ff4120',
                    border: '1px solid #00ff41',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎉</div>
                  <div style={{ color: '#00ff41', fontWeight: 600 }}>
                    Correct! Waiting for others...
                  </div>
                </motion.div>
              )}
            </div>
          ) : null}
        </PuzzleArea>

        <OpponentsPanel>
          <h3 style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Live Standings
          </h3>
          
          {standings.map((opp, i) => (
            <Opponent key={opp.id} isPlayer={opp.isPlayer} rank={i + 1}>
              <div className="avatar">{opp.isPlayer ? '👤' : opp.avatar}</div>
              <div className="info">
                <div className="name">{opp.name} {opp.isPlayer && '(You)'}</div>
                <div className="progress">
                  {opp.finished ? `Finished in ${formatTime(opp.finishTime)}` : 'Racing...'}
                </div>
                <ProgressBar percent={opp.progress || 0} color={opp.isPlayer ? '#00ff41' : '#666'} />
              </div>
              <div className="rank">#{i + 1}</div>
            </Opponent>
          ))}

          {/* Show racing opponents */}
          {opponents.filter(o => !o.finished && !solved).map((opp, i) => (
            <Opponent key={opp.id} rank={standings.length + i + 1}>
              <div className="avatar">{opp.avatar}</div>
              <div className="info">
                <div className="name">{opp.name}</div>
                <div className="progress">Racing...</div>
                <ProgressBar percent={opp.progress} color="#666" />
              </div>
            </Opponent>
          ))}

          <ChatBox>
            <h4 style={{ fontSize: '11px', color: '#666', marginBottom: '10px', textTransform: 'uppercase' }}>
              Race Chat
            </h4>
            <ChatMessages>
              {chatMessages.map((msg, i) => (
                <div key={i} className="message">
                  <span className="name">{msg.name}:</span>{' '}
                  <span className="text">{msg.text}</span>
                </div>
              ))}
            </ChatMessages>
            <form onSubmit={sendChat}>
              <ChatInput>
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Send message..."
                  maxLength={50}
                />
                <CyberButton type="submit" size="small">Send</CyberButton>
              </ChatInput>
            </form>
          </ChatBox>
        </OpponentsPanel>
      </MainArea>

      <AnimatePresence>
        {raceState === 'finished' && (
          <ResultsOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ResultsCard
              winner={rank === 1}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="trophy">
                {rank === 1 ? '🏆' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '🏁'}
              </div>
              <h2>
                {rank === 1 ? 'VICTORY!' : `Rank #${rank}`}
              </h2>
              
              <LeaderboardPreview>
                {standings.slice(0, 5).map((s, i) => (
                  <div key={s.id} className={`row ${s.isPlayer ? 'you' : ''}`}>
                    <div className="pos">#{i + 1}</div>
                    <div className="name">{s.name} {s.isPlayer && '(You)'}</div>
                    <div className="time">{formatTime(s.finishTime)}</div>
                  </div>
                ))}
              </LeaderboardPreview>
              
              <div className="stats">
                <div className="stat">
                  <div className="value">#{rank}</div>
                  <div className="label">Rank</div>
                </div>
                <div className="stat">
                  <div className="value">{formatTime(raceTimer)}</div>
                  <div className="label">Time</div>
                </div>
                <div className="stat">
                  <div className="value">+{rank === 1 ? 500 : rank === 2 ? 350 : rank === 3 ? 250 : 150}</div>
                  <div className="label">XP</div>
                </div>
              </div>
              
              <CyberButton size="large" onClick={onClose}>
                Continue
              </CyberButton>
            </ResultsCard>
          </ResultsOverlay>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default RaceManager;
