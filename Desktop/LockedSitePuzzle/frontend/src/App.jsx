import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import styled, { ThemeProvider } from 'styled-components';

// Components
import MatrixRain from './components/effects/MatrixRain';
import ParticleField from './components/effects/ParticleField';
import Terminal from './components/terminal/Terminal';
import Navigation from './components/layout/Navigation';
import NotificationCenter from './components/ui/NotificationCenter';
import CutsceneManager from './components/cutscenes/CutsceneManager';
import RaceManager from './components/racing/RaceManager';

// Pages
import Login from './pages/Login';
import Phase2 from './pages/Phase2';
import Phase3 from './pages/Phase3';
import Unlocked from './pages/Unlocked';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Guilds from './pages/Guilds';
import RaceLobby from './pages/RaceLobby';
import Practice from './pages/Practice';

// Hooks
import { useStore } from './store/useStore';
import { useSocket } from './hooks/useSocket';
import { useAudio } from './hooks/useAudio';

// Themes
const themes = {
  cyber: {
    primary: '#00ff41',
    secondary: '#008f11',
    accent: '#ff00ff',
    warning: '#ffaa00',
    danger: '#ff0040',
    gold: '#ffd700',
    background: '#050505',
    surface: '#0a0a0a',
    surfaceHover: '#111111',
    border: '#1a1a1a',
    text: '#e0e0e0',
    textMuted: '#666666',
    font: "'JetBrains Mono', monospace",
    fontDisplay: "'Orbitron', sans-serif"
  },
  matrix: {
    primary: '#00ff00',
    secondary: '#003300',
    accent: '#00ff41',
    warning: '#ffff00',
    danger: '#ff0000',
    gold: '#00ff00',
    background: '#000000',
    surface: '#001100',
    surfaceHover: '#002200',
    border: '#003300',
    text: '#00ff00',
    textMuted: '#008800',
    font: "'Share Tech Mono', monospace",
    fontDisplay: "'Share Tech Mono', monospace"
  },
  amber: {
    primary: '#ffb000',
    secondary: '#804600',
    accent: '#ffcc00',
    warning: '#ff8800',
    danger: '#ff4400',
    gold: '#ffb000',
    background: '#1a0f00',
    surface: '#2a1a00',
    surfaceHover: '#3a2a00',
    border: '#4a3a00',
    text: '#ffb000',
    textMuted: '#996600',
    font: "'JetBrains Mono', monospace",
    fontDisplay: "'Orbitron', sans-serif"
  },
  minimal: {
    primary: '#ffffff',
    secondary: '#666666',
    accent: '#cccccc',
    warning: '#ffaa00',
    danger: '#ff4444',
    gold: '#ffcc00',
    background: '#0a0a0a',
    surface: '#141414',
    surfaceHover: '#1e1e1e',
    border: '#2a2a2a',
    text: '#ffffff',
    textMuted: '#888888',
    font: "'JetBrains Mono', monospace",
    fontDisplay: "'JetBrains Mono', monospace"
  }
};

const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.font};
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primary};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.accent};
  }

  ::selection {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.background};
  }

  .glitch-text {
    position: relative;
    
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &::before {
      left: 2px;
      text-shadow: -2px 0 ${props => props.theme.danger};
      clip: rect(24px, 550px, 90px, 0);
      animation: glitch-anim-1 2s infinite linear alternate-reverse;
    }

    &::after {
      left: -2px;
      text-shadow: -2px 0 ${props => props.theme.accent};
      clip: rect(85px, 550px, 140px, 0);
      animation: glitch-anim-2 2s infinite linear alternate-reverse;
    }
  }

  @keyframes glitch-anim-1 {
    0% { clip: rect(20px, 9999px, 50px, 0); }
    20% { clip: rect(80px, 9999px, 120px, 0); }
    40% { clip: rect(10px, 9999px, 60px, 0); }
    60% { clip: rect(70px, 9999px, 100px, 0); }
    80% { clip: rect(30px, 9999px, 80px, 0); }
    100% { clip: rect(90px, 9999px, 130px, 0); }
  }

  @keyframes glitch-anim-2 {
    0% { clip: rect(60px, 9999px, 90px, 0); }
    20% { clip: rect(10px, 9999px, 40px, 0); }
    40% { clip: rect(50px, 9999px, 80px, 0); }
    60% { clip: rect(20px, 9999px, 70px, 0); }
    80% { clip: rect(100px, 9999px, 130px, 0); }
    100% { clip: rect(40px, 9999px, 60px, 0); }
  }

  .scanline {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 50%
    );
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.3;
  }

  .crt-flicker {
    animation: flicker 0.15s infinite;
  }

  @keyframes flicker {
    0% { opacity: 0.97; }
    50% { opacity: 1; }
    100% { opacity: 0.98; }
  }
`;

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const MainContent = styled.main`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 10;
  overflow-y: auto;
  overflow-x: hidden;
`;

const TerminalHint = styled(motion.div)`
  position: fixed;
  bottom: 80px;
  right: 20px;
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.primary};
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 12px;
  color: ${props => props.theme.text};
  max-width: 280px;
  z-index: 1000;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 0 20px ${props => props.theme.primary}40;
  
  .key {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.background};
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 10px;
  }
  
  code {
    color: ${props => props.theme.primary};
    background: ${props => props.theme.background};
    padding: 2px 6px;
    border-radius: 3px;
    font-family: ${props => props.theme.font};
  }
  
  &:hover {
    border-color: ${props => props.theme.accent};
    box-shadow: 0 0 30px ${props => props.theme.accent}50;
  }
`;

function App() {
  const { 
    theme, 
    isAuthenticated, 
    matrixEnabled, 
    particlesEnabled,
    user,
    addNotification,
    toggleTerminal,
    showCutscene,
    currentCutscene,
    hideCutscene,
    raceMode,
    raceType,
    endRace
  } = useStore();

  // Terminal hint shown to new users
  const [showTerminalHint, setShowTerminalHint] = useState(false);
  const currentTheme = themes[theme] || themes.cyber;
  
  // Initialize socket connection for real-time features
  useSocket();
  
  // Initialize audio system
  useAudio();

  // Global timer tick
  useEffect(() => {
    const interval = setInterval(() => {
      useStore.getState().tickTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Welcome notification and terminal hint on first load
  useEffect(() => {
    const hasVisited = localStorage.getItem('locked-visited');
    if (!hasVisited) {
      addNotification({
        id: Date.now(),
        type: 'system',
        message: '🔒 WELCOME TO LOCKED ULTIMATE',
        timestamp: Date.now()
      });
      localStorage.setItem('locked-visited', 'true');
      
      // Show terminal hint after 5 seconds
      setTimeout(() => {
        setShowTerminalHint(true);
        setTimeout(() => setShowTerminalHint(false), 8000);
      }, 5000);
    }
  }, [addNotification]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <AppContainer>
        {/* Background Effects */}
        {matrixEnabled && <MatrixRain />}
        {particlesEnabled && <ParticleField />}
        
        {/* CRT Scanline Effect */}
        <div className="scanline" />
        
        <Router>
          <Navigation />
          
          <MainContent>
            <AnimatePresence mode="wait">
              <Routes>
                <Route 
                  path="/" 
                  element={isAuthenticated ? <Navigate to="/unlocked" /> : <Login />} 
                />
                <Route 
                  path="/phase2" 
                  element={isAuthenticated ? <Phase2 /> : <Navigate to="/" />} 
                />
                <Route 
                  path="/phase3" 
                  element={isAuthenticated ? <Phase3 /> : <Navigate to="/" />} 
                />
                <Route 
                  path="/unlocked" 
                  element={isAuthenticated ? <Unlocked /> : <Navigate to="/" />} 
                />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route 
                  path="/profile" 
                  element={isAuthenticated ? <Profile /> : <Navigate to="/" />} 
                />
                <Route path="/guilds" element={<Guilds />} />
                <Route path="/race" element={isAuthenticated ? <RaceLobby /> : <Navigate to="/" />} />
                <Route path="/practice" element={isAuthenticated ? <Practice /> : <Navigate to="/" />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </AnimatePresence>
          </MainContent>
          
          <Terminal />
          <NotificationCenter />
          
          {/* Terminal Hint Toast */}
          {showTerminalHint && (
            <TerminalHint onClick={() => {
              toggleTerminal();
              setShowTerminalHint(false);
            }}>
              <span className="key">▼</span>
              <span>Press the terminal button or type <code>term</code> to open the command interface!</span>
            </TerminalHint>
          )}
          
          {/* Cutscene Manager */}
          {showCutscene && currentCutscene && (
            <CutsceneManager 
              type={currentCutscene} 
              onComplete={hideCutscene}
            />
          )}
          
          {/* Race Manager */}
          {raceMode && (
            <RaceManager
              puzzleType={raceType}
              onClose={endRace}
              onComplete={(result) => {
                // Handle race completion
                endRace();
              }}
            />
          )}
        </Router>
        
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: currentTheme.surface,
              color: currentTheme.text,
              border: `1px solid ${currentTheme.primary}`,
              fontFamily: currentTheme.font,
            },
          }}
        />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
