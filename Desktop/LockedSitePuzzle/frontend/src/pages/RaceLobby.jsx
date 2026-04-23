import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fontDisplay};
  font-size: clamp(36px, 8vw, 64px);
  margin-bottom: 16px;
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textMuted};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const RaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const RaceCard = styled(motion.div)`
  background: ${props => props.theme.surface};
  border: 2px solid ${props => props.active ? props.theme.primary : props.theme.border};
  padding: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  ${props => props.active && `
    box-shadow: 0 0 30px ${props.theme.primary}30;
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.active ? props.theme.primary : 'transparent'};
    box-shadow: ${props => props.active ? `0 0 10px ${props.theme.primary}` : 'none'};
  }
  
  &:hover {
    border-color: ${props => props.theme.primary}60;
  }
  
  .icon {
    font-size: 48px;
    margin-bottom: 16px;
  }
  
  .name {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  .difficulty {
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${props => props.theme.textMuted};
    margin-bottom: 16px;
  }
  
  .players {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: ${props => props.theme.textMuted};
  }
`;

const StatsPanel = styled.div`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  padding: 24px;
  margin-bottom: 40px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
`;

const Stat = styled.div`
  text-align: center;
  
  .value {
    font-family: ${props => props.theme.fontDisplay};
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.theme.primary};
  }
  
  .label {
    font-size: 11px;
    color: ${props => props.theme.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 4px;
  }
`;

const HowItWorks = styled.div`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  padding: 30px;
  margin-top: 40px;
`;

const HowTitle = styled.h3`
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${props => props.theme.textMuted};
  margin-bottom: 20px;
  text-align: center;
`;

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const Step = styled.div`
  text-align: center;
  
  .number {
    width: 40px;
    height: 40px;
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.border};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${props => props.theme.fontDisplay};
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.theme.primary};
    margin: 0 auto 12px;
  }
  
  .text {
    font-size: 13px;
    color: ${props => props.theme.text};
  }
`;

const LiveIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${props => props.theme.primary};
  margin-bottom: 20px;
  
  .dot {
    width: 8px;
    height: 8px;
    background: ${props => props.theme.primary};
    border-radius: 50%;
    animation: pulse 1s infinite;
    
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
    }
  }
`;

const RaceLobby = () => {
  const navigate = useNavigate();
  const { startRace, user } = useStore();
  const [selectedRace, setSelectedRace] = useState(null);
  const [raceStats, setRaceStats] = useState({
    racesPlayed: 0,
    wins: 0,
    top3: 0,
    bestTime: null
  });

  // Load race stats
  useEffect(() => {
    const stats = localStorage.getItem('locked-race-stats');
    if (stats) {
      setRaceStats(JSON.parse(stats));
    }
  }, []);

  const raceTypes = [
    {
      id: 'quick',
      icon: '⚡',
      name: 'Quick Race',
      difficulty: 'Easy',
      maxPlayers: 4,
      description: 'Fast puzzles, perfect for beginners'
    },
    {
      id: 'standard',
      icon: '🏁',
      name: 'Standard Race',
      difficulty: 'Medium',
      maxPlayers: 6,
      description: 'Balanced difficulty for all skill levels'
    },
    {
      id: 'elite',
      icon: '👑',
      name: 'Elite Race',
      difficulty: 'Hard',
      maxPlayers: 4,
      description: 'For Phase 3 completers only'
    }
  ];

  const handleStartRace = () => {
    if (!selectedRace) return;
    
    // Show cutscene first
    startRace(selectedRace);
  };

  return (
    <Container>
      <Header>
        <LiveIndicator>
          <span className="dot" />
          <span>LIVE MULTIPLAYER</span>
        </LiveIndicator>
        <Title>
          <GlitchText alwaysGlitch>RACE</GlitchText> MODE
        </Title>
        <Subtitle>
          Compete against other hackers in real-time puzzle races.
          First to solve wins XP and glory!
        </Subtitle>
      </Header>

      <StatsPanel>
        <StatsGrid>
          <Stat>
            <div className="value">{raceStats.racesPlayed}</div>
            <div className="label">Races Played</div>
          </Stat>
          <Stat>
            <div className="value">{raceStats.wins}</div>
            <div className="label">Wins</div>
          </Stat>
          <Stat>
            <div className="value">{raceStats.top3}</div>
            <div className="label">Top 3 Finishes</div>
          </Stat>
          <Stat>
            <div className="value">
              {raceStats.bestTime ? `${raceStats.bestTime}s` : '-'}
            </div>
            <div className="label">Best Time</div>
          </Stat>
        </StatsGrid>
      </StatsPanel>

      <RaceGrid>
        {raceTypes.map((race, index) => (
          <RaceCard
            key={race.id}
            active={selectedRace === race.id}
            onClick={() => setSelectedRace(race.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="icon">{race.icon}</div>
            <div className="name">{race.name}</div>
            <div className="difficulty">{race.difficulty} • Max {race.maxPlayers} players</div>
            <div className="players">
              <span>●</span>
              <span>0 / {race.maxPlayers} players waiting</span>
            </div>
          </RaceCard>
        ))}
      </RaceGrid>

      <div style={{ textAlign: 'center' }}>
        <CyberButton
          size="large"
          onClick={handleStartRace}
          disabled={!selectedRace}
        >
          {selectedRace ? '🏁 START RACE' : 'SELECT A RACE TYPE'}
        </CyberButton>
      </div>

      <HowItWorks>
        <HowTitle>How Racing Works</HowTitle>
        <Steps>
          <Step>
            <div className="number">1</div>
            <div className="text">Join a race room with other players</div>
          </Step>
          <Step>
            <div className="number">2</div>
            <div className="text">Race starts when room is full or timer expires</div>
          </Step>
          <Step>
            <div className="number">3</div>
            <div className="text">Solve the puzzle as fast as possible</div>
          </Step>
          <Step>
            <div className="number">4</div>
            <div className="text">Earn XP based on your rank and time</div>
          </Step>
        </Steps>
      </HowItWorks>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <CyberButton onClick={() => navigate('/unlocked')}>
          ← Back to Hub
        </CyberButton>
      </div>
    </Container>
  );
};

export default RaceLobby;
