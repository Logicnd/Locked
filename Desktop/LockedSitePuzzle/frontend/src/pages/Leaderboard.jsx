import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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
  
  span {
    color: ${props => props.theme.gold};
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textMuted};
  letter-spacing: 0.1em;
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

const Stat = styled.div`
  text-align: center;
  
  .value {
    font-family: ${props => props.theme.fontDisplay};
    font-size: 36px;
    font-weight: 700;
    color: ${props => props.theme.primary};
  }
  
  .label {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${props => props.theme.textMuted};
    margin-top: 4px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
`;

const Tab = styled.button`
  padding: 12px 32px;
  background: ${props => props.active ? props.theme.primary : 'transparent'};
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.active ? props.theme.background : props.theme.primary};
  font-family: ${props => props.theme.font};
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? props.theme.primary : props.theme.primary}20;
  }
`;

const Podium = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 60px;
  height: 300px;
`;

const PodiumSlot = styled(Tilt)`
  width: 200px;
  background: ${props => {
    switch (props.rank) {
      case 1: return 'linear-gradient(180deg, #ffd70020, #ffd70005)';
      case 2: return 'linear-gradient(180deg, #c0c0c020, #c0c0c005)';
      case 3: return 'linear-gradient(180deg, #cd7f3220, #cd7f3205)';
      default: return props.theme.surface;
    }
  }};
  border: 2px solid ${props => {
    switch (props.rank) {
      case 1: return '#ffd700';
      case 2: return '#c0c0c0';
      case 3: return '#cd7f32';
      default: return props.theme.border;
    }
  }};
  padding: 24px;
  text-align: center;
  height: ${props => {
    switch (props.rank) {
      case 1: return '100%';
      case 2: return '85%';
      case 3: return '70%';
      default: return '60%';
    }
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Rank = styled.div`
  font-family: ${props => props.theme.fontDisplay};
  font-size: 48px;
  font-weight: 900;
  color: ${props => {
    switch (props.rank) {
      case 1: return '#ffd700';
      case 2: return '#c0c0c0';
      case 3: return '#cd7f32';
      default: return props.theme.textMuted;
    }
  }};
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.text};
  word-break: break-word;
`;

const UserStats = styled.div`
  font-size: 12px;
  color: ${props => props.theme.textMuted};
  
  .level {
    color: ${props => props.theme.gold};
    font-weight: 600;
  }
`;

const List = styled.div`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 100px 100px;
  padding: 16px 24px;
  background: ${props => props.theme.background};
  border-bottom: 1px solid ${props => props.theme.border};
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${props => props.theme.textMuted};
  
  @media (max-width: 600px) {
    grid-template-columns: 60px 1fr 80px;
    
    span:last-child {
      display: none;
    }
  }
`;

const ListRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 80px 1fr 100px 100px;
  padding: 16px 24px;
  border-bottom: 1px solid ${props => props.theme.border};
  font-size: 14px;
  align-items: center;
  transition: background 0.2s;
  
  &:hover {
    background: ${props => props.theme.background}40;
  }
  
  .rank {
    font-family: ${props => props.theme.fontDisplay};
    font-weight: 700;
    color: ${props => props.rank <= 3 ? props.theme.gold : props.theme.textMuted};
  }
  
  .name {
    font-weight: 600;
  }
  
  .level {
    color: ${props => props.theme.primary};
  }
  
  .time {
    color: ${props => props.theme.textMuted};
    font-size: 12px;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 60px 1fr 80px;
    
    .time {
      display: none;
    }
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`;

const Badge = styled.span`
  font-size: 10px;
  padding: 2px 6px;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
`;

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('elite');
  const [eliteData, setEliteData] = useState([]);
  const [phase2Data, setPhase2Data] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await fetch('/api/leaderboard/full');
      if (response.ok) {
        const data = await response.json();
        setEliteData(data.elite || []);
        setPhase2Data(data.phase2 || []);
      }
    } catch (err) {
      console.error('Failed to load leaderboard');
    } finally {
      setLoading(false);
    }
  };

  const currentData = activeTab === 'elite' ? eliteData : phase2Data;
  const podium = currentData.slice(0, 3);
  const rest = currentData.slice(3);

  return (
    <Container>
      <Header>
        <Title>
          <GlitchText alwaysGlitch>🏆 ELITE</GlitchText> RANKINGS
        </Title>
        <Subtitle>The fastest minds. The highest achievers.</Subtitle>
      </Header>

      <StatsBar>
        <Stat>
          <div className="value">{eliteData.length}</div>
          <div className="label">Elite Solvers</div>
        </Stat>
        <Stat>
          <div className="value">{phase2Data.length}</div>
          <div className="label">Phase 2 Cleared</div>
        </Stat>
        <Stat>
          <div className="value">{currentData.length > 0 ? currentData.length : '-'}</div>
          <div className="label">Total Ranked</div>
        </Stat>
      </StatsBar>

      <TabContainer>
        <Tab active={activeTab === 'elite'} onClick={() => setActiveTab('elite')}>
          🏆 Elite (Phase 3)
        </Tab>
        <Tab active={activeTab === 'phase2'} onClick={() => setActiveTab('phase2')}>
          📊 Phase 2
        </Tab>
      </TabContainer>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: '#666' }}>
          Loading rankings...
        </div>
      ) : (
        <>
          {podium.length > 0 && (
            <Podium>
              {podium.map((user, index) => (
                <PodiumSlot
                  key={user.id || index}
                  rank={index + 1}
                  glareEnable
                  tiltEnable
                >
                  <div>
                    <Rank rank={index + 1}>
                      {index + 1 === 1 ? '👑' : index + 1}
                    </Rank>
                    <UserName>{user.username}</UserName>
                    <UserStats>
                      <span className="level">LV.{user.level || 1}</span>
                      {' • '}
                      {user.xp || 0} XP
                    </UserStats>
                    {activeTab === 'elite' && user.badges && (
                      <BadgeContainer>
                        {user.badges.slice(0, 3).map((badge, i) => (
                          <Badge key={i}>{badge.split(' ')[0]}</Badge>
                        ))}
                      </BadgeContainer>
                    )}
                  </div>
                </PodiumSlot>
              ))}
            </Podium>
          )}

          <List>
            <ListHeader>
              <span>Rank</span>
              <span>Identity</span>
              <span>{activeTab === 'elite' ? 'Level' : 'Time'}</span>
              <span>XP</span>
            </ListHeader>

            <AnimatePresence>
              {rest.map((user, index) => (
                <ListRow
                  key={user.id || index}
                  rank={index + 4}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="rank">#{index + 4}</span>
                  <span className="name">{user.username}</span>
                  <span className="level">
                    {activeTab === 'elite' ? `Lv.${user.level || 1}` : `${user.time_taken || 0}s`}
                  </span>
                  <span className="time">{user.xp || 0} XP</span>
                </ListRow>
              ))}
            </AnimatePresence>

            {rest.length === 0 && podium.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                No completions yet. Be the first to rank!
              </div>
            )}
          </List>
        </>
      )}

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <CyberButton onClick={() => window.location.reload()}>
          🔄 Refresh Rankings
        </CyberButton>
      </div>
    </Container>
  );
};

export default Leaderboard;
