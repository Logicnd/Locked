import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Tilt from 'react-parallax-tilt';

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
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  background: ${props => props.theme.surface};
  border: 2px solid ${props => props.theme.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  box-shadow: 0 0 30px ${props => props.theme.primary}30;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h1`
  font-family: ${props => props.theme.fontDisplay};
  font-size: 36px;
  margin-bottom: 8px;
`;

const UserId = styled.div`
  font-size: 12px;
  color: ${props => props.theme.textMuted};
  letter-spacing: 0.1em;
  font-family: ${props => props.theme.font};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  font-size: ${props => props.size || '32px'};
  font-weight: 700;
  color: ${props => props.color || props.theme.text};
  
  span {
    font-size: 14px;
    color: ${props => props.theme.textMuted};
    margin-left: 8px;
  }
`;

const ProgressContainer = styled.div`
  width: 140px;
  height: 140px;
  margin: 0 auto 20px;
`;

const BadgeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Badge = styled(Tilt)`
  padding: 10px 16px;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: default;
  
  &:hover {
    border-color: ${props => props.theme.gold};
  }
`;

const PuzzleProgress = styled.div`
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .name {
    font-size: 13px;
    font-weight: 600;
  }
  
  .status {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${props => props.completed ? props.theme.primary : props.theme.textMuted};
  }
  
  .bar {
    height: 8px;
    background: ${props => props.theme.background};
    overflow: hidden;
    
    .fill {
      height: 100%;
      width: ${props => props.percent};
      background: ${props => props.completed ? props.theme.primary : props.theme.warning};
      transition: width 0.5s ease;
    }
  }
`;

const ActivityLog = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme.border};
  font-size: 13px;
  
  &:last-child {
    border-bottom: none;
  }
  
  .icon {
    font-size: 20px;
  }
  
  .content {
    flex: 1;
  }
  
  .time {
    font-size: 11px;
    color: ${props => props.theme.textMuted};
  }
`;

const Profile = () => {
  const { user, xp, level, streak, badges, currentPhase } = useStore();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch('/api/profile');
      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
      }
    } catch (err) {
      console.error('Failed to load profile');
    }
  };

  const xpPercent = ((xp % 1000) / 1000) * 100;
  const nextLevelXP = (level * 1000) - xp;

  const puzzles = [
    { name: 'Phase 1: The Mirror', completed: true, percent: '100%' },
    { name: 'Phase 2: Hex Decoder', completed: currentPhase >= 2, percent: currentPhase >= 2 ? '100%' : '0%' },
    { name: 'Phase 3: The Final Lock', completed: currentPhase >= 3, percent: currentPhase >= 3 ? '100%' : '0%' }
  ];

  // Mock activity data
  const activities = [
    { icon: '🔓', text: 'Solved Phase 1', time: '2 days ago' },
    { icon: '🏆', text: 'Earned Persistence badge', time: '2 days ago' },
    ...(currentPhase >= 2 ? [{ icon: '🔓', text: 'Solved Phase 2', time: '1 day ago' }] : []),
    ...(currentPhase >= 3 ? [{ icon: '👑', text: 'Became ELITE - Phase 3 Complete!', time: 'Today' }] : [])
  ];

  const copyUserId = () => {
    if (user?.id) {
      navigator.clipboard.writeText(user.id);
    }
  };

  return (
    <Container>
      <Header>
        <Avatar>
          {user?.username?.[0]?.toUpperCase() || '?'}
        </Avatar>
        <UserInfo>
          <UserName>
            <GlitchText size="36px">{user?.username}</GlitchText>
          </UserName>
          <UserId>
            ID: {user?.id?.slice(0, 16)}... 
            <button 
              onClick={copyUserId}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: '#00ff41', 
                cursor: 'pointer',
                marginLeft: '8px'
              }}
            >
              [copy]
            </button>
          </UserId>
        </UserInfo>
      </Header>

      <Grid>
        <Card
          accent="#00ff41"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3>Experience</h3>
          <ProgressContainer>
            <CircularProgressbar
              value={xpPercent}
              text={`Lv.${level}`}
              styles={buildStyles({
                textColor: '#00ff41',
                pathColor: '#00ff41',
                trailColor: '#1a1a1a',
                textSize: '20px'
              })}
            />
          </ProgressContainer>
          <StatValue color="#00ff41">
            {xp}
            <span>/ {level * 1000} XP</span>
          </StatValue>
          <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
            {nextLevelXP} XP to next level
          </div>
        </Card>

        <Card
          accent="#ff00ff"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3>🔥 Login Streak</h3>
          <StatValue color="#ff00ff" size="48px">
            {streak}
            <span>days</span>
          </StatValue>
          <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
            Keep logging in daily to maintain your streak!
          </div>
        </Card>

        <Card
          accent="#ffd700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>🏆 Badges Earned</h3>
          <StatValue color="#ffd700" size="48px">
            {badges.length}
          </StatValue>
          <BadgeGrid style={{ marginTop: '16px' }}>
            {badges.map((badge, i) => (
              <Badge key={i} glareEnable tiltEnable>
                {badge}
              </Badge>
            ))}
          </BadgeGrid>
        </Card>
      </Grid>

      <Grid>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>🎯 Puzzle Progress</h3>
          {puzzles.map((puzzle, i) => (
            <PuzzleProgress 
              key={i}
              completed={puzzle.completed}
              percent={puzzle.percent}
            >
              <div className="header">
                <span className="name">{puzzle.name}</span>
                <span className="status">
                  {puzzle.completed ? '✓ Complete' : '○ Locked'}
                </span>
              </div>
              <div className="bar">
                <div className="fill" />
              </div>
            </PuzzleProgress>
          ))}
        </Card>

        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>📊 Recent Activity</h3>
          <ActivityLog>
            {activities.map((activity, i) => (
              <ActivityItem key={i}>
                <span className="icon">{activity.icon}</span>
                <div className="content">{activity.text}</div>
                <div className="time">{activity.time}</div>
              </ActivityItem>
            ))}
            {activities.length === 0 && (
              <div style={{ color: '#666', fontSize: '13px', padding: '20px 0' }}>
                No activity yet. Start solving puzzles!
              </div>
            )}
          </ActivityLog>
        </Card>
      </Grid>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <CyberButton onClick={() => window.location.href = '/unlocked'}>
          ← Back to Hub
        </CyberButton>
      </div>
    </Container>
  );
};

export default Profile;
