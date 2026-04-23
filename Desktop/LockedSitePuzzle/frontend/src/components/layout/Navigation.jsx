import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: ${props => props.theme.surface}80;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.theme.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 100;
`;

const Logo = styled.div`
  font-family: ${props => props.theme.fontDisplay};
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: ${props => props.theme.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    text-shadow: 0 0 20px ${props => props.theme.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  padding: 8px 16px;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${props => props.active ? props.theme.primary : props.theme.textMuted};
  text-decoration: none;
  border: 1px solid ${props => props.active ? props.theme.primary : 'transparent'};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.primary}20;
    transition: left 0.3s ease;
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:hover {
    color: ${props => props.theme.primary};
    border-color: ${props => props.theme.primary}40;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LevelBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  font-size: 11px;
  
  span {
    color: ${props => props.theme.gold};
    font-weight: 700;
  }
`;

const XPBar = styled.div`
  width: 100px;
  height: 4px;
  background: ${props => props.theme.border};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.percent}%;
    background: ${props => props.theme.primary};
    box-shadow: 0 0 10px ${props => props.theme.primary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${props => props.theme.primary};
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  background: ${props => props.theme.surface};
  border-bottom: 1px solid ${props => props.theme.border};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 99;
`;

const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid ${props => props.theme.danger};
  color: ${props => props.theme.danger};
  padding: 6px 12px;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  font-family: ${props => props.theme.font};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.danger};
    color: ${props => props.theme.background};
  }
`;

const Navigation = () => {
  const { 
    user, 
    isAuthenticated, 
    logout, 
    level, 
    xp, 
    currentPhase,
    toggleTerminal 
  } = useStore();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const xpPercent = ((xp % 1000) / 1000) * 100;
  
  const navItems = [
    { path: '/unlocked', label: 'Hub', show: isAuthenticated },
    { path: '/race', label: '⚡ Race', show: isAuthenticated },
    { path: '/practice', label: 'Practice', show: isAuthenticated },
    { path: '/phase2', label: 'Phase 2', show: isAuthenticated && currentPhase >= 2 },
    { path: '/phase3', label: 'Phase 3', show: isAuthenticated && currentPhase >= 3 },
    { path: '/leaderboard', label: 'Elite', show: true },
    { path: '/guilds', label: 'Guilds', show: true },
  ];

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <>
      <Nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Logo as="a" href={isAuthenticated ? '/unlocked' : '/'}>
          🔒 LOCKED
        </Logo>

        <NavLinks>
          {navItems.map(item => 
            item.show && (
              <NavLink 
                key={item.path}
                href={item.path}
                active={window.location.pathname === item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </NavLink>
            )
          )}
        </NavLinks>

        <UserInfo>
          {isAuthenticated && (
            <>
              <LevelBadge>
                <span>LV.{level}</span>
                <XPBar percent={xpPercent} />
              </LevelBadge>
              
              <NavLink 
                as="button"
                onClick={() => toggleTerminal()}
                style={{ border: '1px dashed' }}
              >
                TERM
              </NavLink>
              
              <LogoutButton onClick={handleLogout}>
                Logout
              </LogoutButton>
            </>
          )}
        </UserInfo>

        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map(item => 
              item.show && (
                <NavLink 
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  active={window.location.pathname === item.path}
                >
                  {item.label}
                </NavLink>
              )
            )}
            {isAuthenticated && (
              <LogoutButton onClick={handleLogout}>
                Logout
              </LogoutButton>
            )}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
