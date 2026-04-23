import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Tilt from 'react-parallax-tilt';

import { useStore } from '../store/useStore';
import GlitchText from '../components/ui/GlitchText';
import CyberButton from '../components/ui/CyberButton';

const Container = styled.div`
  min-height: 100vh;
  padding: 100px 24px 40px;
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const WelcomeText = styled.h1`
  font-family: ${props => props.theme.fontDisplay};
  font-size: clamp(32px, 8vw, 56px);
  margin-bottom: 16px;
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textMuted};
  letter-spacing: 0.1em;
`;

const Dashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const Card = styled(motion.div)`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  padding: 24px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.accent || props.theme.primary};
    box-shadow: 0 0 20px ${props => props.accent || props.theme.primary};
  }
  
  h3 {
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${props => props.theme.textMuted};
    margin-bottom: 16px;
  }
`;

const StatValue = styled.div`
  font-family: ${props => props.theme.fontDisplay};
  font-size: ${props => props.size || '36px'};
  font-weight: 700;
  color: ${props => props.color || props.theme.primary};
  display: flex;
  align-items: baseline;
  gap: 8px;
  
  span {
    font-size: 14px;
    color: ${props => props.theme.textMuted};
    font-weight: 400;
  }
`;

const ProgressContainer = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto;
`;

const PhaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const PhaseCard = styled(Tilt)`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.locked ? props.theme.border : props.theme.primary};
  padding: 32px;
  cursor: ${props => props.locked ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.locked ? 0.6 : 1};
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.locked ? props.theme.border : props.theme.accent};
    box-shadow: ${props => props.locked ? 'none' : `0 0 30px ${props.theme.primary}20`};
  }
`;

const PhaseNumber = styled.div`
  font-family: ${props => props.theme.fontDisplay};
  font-size: 48px;
  font-weight: 900;
  color: ${props => props.locked ? props.theme.textMuted : props.theme.primary};
  margin-bottom: 16px;
`;

const PhaseTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const PhaseDesc = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textMuted};
  line-height: 1.6;
  margin-bottom: 16px;
`;

const PhaseStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.completed ? props.theme.primary : props.locked ? props.theme.textMuted : props.theme.warning};
`;

const BadgeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Badge = styled(motion.div)`
  padding: 8px 16px;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    border-color: ${props => props.theme.gold};
  }
`;

const ChallengeLink = styled.div`
  background: ${props => props.theme.background};
  border: 1px dashed ${props => props.theme.border};
  padding: 16px;
  font-size: 12px;
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.textMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  
  code {
    color: ${props => props.theme.primary};
    font-size: 11px;
  }
  
  button {
    background: ${props => props.theme.surface};
    border: 1px solid ${props => props.theme.border};
    color: ${props => props.theme.text};
    padding: 6px 12px;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      border-color: ${props => props.theme.primary};
      color: ${props => props.theme.primary};
    }
  }
`;

const Unlocked = () => {
  const navigate = useNavigate();
  const { 
    user, 
    currentPhase, 
    totalPhases,
    xp,
    level,
    streak,
    badges,
    setPhase
  } = useStore();
  
  const [challengeUrl, setChallengeUrl] = useState('');

  useEffect(() => {
    // Trigger confetti on mount
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (user) {
      setChallengeUrl(`${window.location.origin}/challenge/${user.username}`);
    }
  }, [user]);

  const phases = [
    {
      number: 1,
      title: 'The Mirror',
      desc: 'Your password is your identity reversed. Look backwards to move forwards.',
      completed: true,
      locked: false
    },
    {
      number: 2,
      title: 'Hex Decoder',
      desc: 'The System speaks in hexadecimal. Convert the transmission to ASCII.',
      completed: currentPhase >= 2,
      locked: false
    },
    {
      number: 3,
      title: 'The Final Lock',
      desc: 'Binary cipher chain: ROT13 → Base64 → Binary. Only the worthy shall pass.',
      completed: currentPhase >= 3,
      locked: currentPhase < 2
    }
  ];

  const copyChallenge = () => {
    navigator.clipboard.writeText(challengeUrl);
    // Could show toast here
  };

  const handlePhaseClick = (phase) => {
    if (phase.locked) return;
    
    if (phase.number === 2) navigate('/phase2');
    if (phase.number === 3) navigate('/phase3');
  };

  return (
    <Container>
      <Header>
        <WelcomeText>
          WELCOME, <GlitchText size="inherit">{user?.username}</GlitchText>
        </WelcomeText>
        <Subtitle>You have proven worthy of the system.</Subtitle>
      </Header>

      <Dashboard>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3>Experience Points</h3>
          <StatValue color="#ffd700">
            {xp}
            <span>XP</span>
          </StatValue>
        </Card>

        <Card
          accent="#00ff41"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Current Level</h3>
          <StatValue>
            {level}
            <span>LV</span>
          </StatValue>
        </Card>

        <Card
          accent="#ff00ff"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Login Streak</h3>
          <StatValue color="#ff00ff">
            {streak}
            <span>days</span>
          </StatValue>
        </Card>

        <Card
          accent="#00aaff"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Overall Progress</h3>
          <ProgressContainer>
            <CircularProgressbar
              value={(currentPhase / totalPhases) * 100}
              text={`${currentPhase}/${totalPhases}`}
              styles={buildStyles({
                textColor: '#00ff41',
                pathColor: '#00ff41',
                trailColor: '#1a1a1a',
                textSize: '24px',
              })}
            />
          </ProgressContainer>
        </Card>
      </Dashboard>

      <PhaseGrid>
        {phases.map((phase, index) => (
          <PhaseCard
            key={phase.number}
            locked={phase.locked}
            onClick={() => handlePhaseClick(phase)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            glareEnable={!phase.locked}
            tiltEnable={!phase.locked}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <PhaseNumber locked={phase.locked}>
              {phase.locked ? '🔒' : phase.completed ? '✓' : `0${phase.number}`}
            </PhaseNumber>
            <PhaseTitle>{phase.title}</PhaseTitle>
            <PhaseDesc>{phase.desc}</PhaseDesc>
            <PhaseStatus completed={phase.completed} locked={phase.locked}>
              {phase.locked && '🔒 LOCKED'}
              {phase.completed && '✓ COMPLETED'}
              {!phase.locked && !phase.completed && '► AVAILABLE'}
            </PhaseStatus>
          </PhaseCard>
        ))}
      </PhaseGrid>

      <Dashboard>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>🏆 Achievement Badges</h3>
          <BadgeGrid>
            {badges.length > 0 ? badges.map((badge, i) => (
              <Badge
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                {badge}
              </Badge>
            )) : (
              <p style={{ color: '#666', fontSize: '14px' }}>
                No badges yet. Complete puzzles to earn them!
              </p>
            )}
          </BadgeGrid>
        </Card>

        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3>🔗 Challenge Link</h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
            Share this link with friends to challenge them with your exact puzzles.
          </p>
          <ChallengeLink>
            <code>{challengeUrl}</code>
            <button onClick={copyChallenge}>Copy</button>
          </ChallengeLink>
        </Card>
      </Dashboard>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <CyberButton
          size="large"
          onClick={() => navigate('/leaderboard')}
          icon="🏆"
        >
          View Leaderboard
        </CyberButton>
      </div>
    </Container>
  );
};

export default Unlocked;
