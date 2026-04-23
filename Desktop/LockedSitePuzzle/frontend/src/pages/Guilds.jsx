import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

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
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textMuted};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ComingSoon = styled(motion.div)`
  text-align: center;
  padding: 80px 40px;
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: 'COMING SOON';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-15deg);
    font-size: 80px;
    font-weight: 900;
    color: ${props => props.theme.text};
    opacity: 0.03;
    pointer-events: none;
    white-space: nowrap;
  }
`;

const Icon = styled.div`
  font-size: 80px;
  margin-bottom: 24px;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 60px;
`;

const FeatureCard = styled(Tilt)`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  padding: 30px;
  text-align: center;
  
  &:hover {
    border-color: ${props => props.theme.primary}40;
  }
  
  .icon {
    font-size: 48px;
    margin-bottom: 16px;
  }
  
  h3 {
    font-size: 14px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${props => props.theme.text};
    margin-bottom: 12px;
  }
  
  p {
    font-size: 13px;
    color: ${props => props.theme.textMuted};
    line-height: 1.6;
  }
`;

const MockGuildList = styled.div`
  margin-top: 40px;
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  padding: 30px;
`;

const MockGuildTitle = styled.h3`
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${props => props.theme.textMuted};
  margin-bottom: 24px;
  text-align: center;
`;

const MockGuild = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: ${props => props.theme.background};
  margin-bottom: 12px;
  opacity: 0.6;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .rank {
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.gold};
    width: 40px;
  }
  
  .icon {
    font-size: 32px;
  }
  
  .info {
    flex: 1;
    
    .name {
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .members {
      font-size: 12px;
      color: ${props => props.theme.textMuted};
    }
  }
  
  .score {
    font-family: ${props => props.theme.fontDisplay};
    font-size: 20px;
    color: ${props => props.theme.primary};
  }
`;

const Guilds = () => {
  const [activeTab, setActiveTab] = useState('browse');

  const features = [
    {
      icon: '🏰',
      title: 'Create Guilds',
      desc: 'Form your own elite team of puzzle solvers'
    },
    {
      icon: '🤝',
      title: 'Team Challenges',
      desc: 'Solve puzzles together and share rewards'
    },
    {
      icon: '🏆',
      title: 'Guild Rankings',
      desc: 'Compete against other guilds for supremacy'
    },
    {
      icon: '💎',
      title: 'Shared Rewards',
      desc: 'Unlock exclusive guild-only achievements'
    }
  ];

  const mockGuilds = [
    { rank: 1, icon: '🔥', name: 'CodeBreakers', members: 42, score: 15420 },
    { rank: 2, icon: '⚡', name: 'BinaryBandits', members: 38, score: 12890 },
    { rank: 3, icon: '🎯', name: 'CipherSquad', members: 35, score: 11500 },
    { rank: 4, icon: '🚀', name: 'HackElite', members: 29, score: 9870 },
    { rank: 5, icon: '💀', name: 'DarkNet', members: 31, score: 9230 }
  ];

  return (
    <Container>
      <Header>
        <Title>
          <GlitchText alwaysGlitch>⚔️</GlitchText> Guilds
        </Title>
        <Subtitle>
          Join forces with other elite solvers. Form guilds, compete together, 
          and dominate the leaderboards as a team.
        </Subtitle>
      </Header>

      <ComingSoon
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon>🚧</Icon>
        <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>
          <GlitchText>Under Construction</GlitchText>
        </h2>
        <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
          The Guild System is being built. Soon you'll be able to create or join 
          elite teams of puzzle solvers. Stay tuned for the ultimate collaborative 
          puzzle experience!
        </p>
        <div style={{ marginTop: '30px' }}>
          <CyberButton disabled>
            Coming in v3.1
          </CyberButton>
        </div>
      </ComingSoon>

      <Features>
        {features.map((feature, i) => (
          <FeatureCard
            key={i}
            glareEnable
            tiltEnable
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </FeatureCard>
        ))}
      </Features>

      <MockGuildList>
        <MockGuildTitle>Preview: Top Guilds</MockGuildTitle>
        {mockGuilds.map((guild) => (
          <MockGuild key={guild.rank}>
            <div className="rank">#{guild.rank}</div>
            <div className="icon">{guild.icon}</div>
            <div className="info">
              <div className="name">{guild.name}</div>
              <div className="members">{guild.members} members</div>
            </div>
            <div className="score">{guild.score.toLocaleString()} XP</div>
          </MockGuild>
        ))}
      </MockGuildList>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <CyberButton onClick={() => window.location.href = '/unlocked'}>
          ← Back to Hub
        </CyberButton>
      </div>
    </Container>
  );
};

export default Guilds;
