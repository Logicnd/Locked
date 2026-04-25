import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const TerminalContainer = styled(motion.div)`
  position: fixed;
  bottom: ${props => props.isOpen ? '0' : '-100%'};
  left: 0;
  width: 100%;
  height: ${props => props.height || '400px'};
  background: ${props => props.theme.surface};
  border-top: 2px solid ${props => props.theme.primary};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transition: bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 -10px 40px ${props => props.theme.primary}20;
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: ${props => props.theme.background};
  border-bottom: 1px solid ${props => props.theme.border};
`;

const TerminalTitle = styled.div`
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TerminalControls = styled.div`
  display: flex;
  gap: 8px;
`;

const ControlButton = styled.button`
  background: transparent;
  border: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.textMuted};
  padding: 4px 12px;
  font-size: 11px;
  cursor: pointer;
  font-family: ${props => props.theme.font};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.2s;
  
  &:hover {
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.primary};
    background: ${props => props.theme.primary}10;
  }
`;

const TerminalBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  font-family: ${props => props.theme.font};
  font-size: 13px;
  line-height: 1.6;
`;

const Output = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const OutputLine = styled.div`
  margin-bottom: 4px;
  color: ${props => {
    switch (props.type) {
      case 'error': return props.theme.danger;
      case 'success': return props.theme.primary;
      case 'warning': return props.theme.warning;
      case 'info': return props.theme.accent;
      case 'system': return props.theme.textMuted;
      default: return props.theme.text;
    }
  }};
  
  ${props => props.type === 'command' && `
    &::before {
      content: '> ';
      color: ${props.theme.primary};
    }
  `}
  
  ${props => props.type === 'input' && `
    color: ${props.theme.primary};
  `}
`;

const InputLine = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const Prompt = styled.span`
  color: ${props => props.theme.primary};
  font-weight: 600;
  white-space: nowrap;
`;

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: ${props => props.theme.text};
  font-family: ${props => props.theme.font};
  font-size: 13px;
  outline: none;
  padding: 0;
  margin: 0;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 16px;
  background: ${props => props.theme.primary};
  animation: ${blink} 1s infinite;
  margin-left: 2px;
`;

const ToggleButton = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: ${props => props.theme.surface};
  border: 2px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  font-size: 20px;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
  
  &:hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.background};
    box-shadow: 0 0 20px ${props => props.theme.primary}40;
  }
`;

const Terminal = () => {
  const { 
    terminalOpen, 
    toggleTerminal, 
    terminalHistory, 
    addTerminalLine, 
    clearTerminal,
    user,
    xp,
    level,
    badges,
    currentPhase,
    theme: themeState
  } = useStore();
  
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  // Auto-focus input when terminal opens
  useEffect(() => {
    if (terminalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [terminalOpen]);

  // Scroll to bottom on new output
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  // Welcome message
  useEffect(() => {
    if (terminalHistory.length === 0) {
      addTerminalLine({
        type: 'system',
        content: 'LOCKED Terminal v3.0 - Type "help" for commands'
      });
    }
  }, []);

  const commands = {
    help: () => ({
      type: 'system',
      content: `╔════════════════════════════════════════════════╗
║  LOCKED TERMINAL v3.0 - SITE COMMAND INTERFACE ║
╠════════════════════════════════════════════════╣
  NAVIGATION:
    hub      - Go to main hub
    race     - Start multiplayer race  
    practice - Practice puzzles
    lb       - View leaderboard
    profile  - View your profile
    guilds   - View guild system
    
  SYSTEM:
    whoami   - Show current identity
    status   - Show system status
    xp       - Show XP and level
    badges   - Show earned badges
    phases   - Show puzzle progress
    
  CUSTOMIZATION:
    theme    - List/set themes
    matrix   - Toggle matrix rain
    particles- Toggle particle effects
    sound    - Toggle sound effects
    
  UTILITIES:
    clear    - Clear terminal
    echo     - Echo a message
    date     - Show current time
    calc     - Calculator (calc 2+2)
    uuid     - Generate UUID
    fortune  - Random fortune
    
  DANGER ZONE:
    reset    - Reset ALL progress
    logout   - Log out of system
    hack     - ??? (requires ELITE)
  ════════════════════════════════════════════════
  Press the ▼ button in bottom-right to toggle terminal`
    }),
    
    clear: () => {
      clearTerminal();
      return null;
    },
    
    whoami: () => ({
      type: 'info',
      content: user ? `User: ${user.username}\nID: ${user.id}` : 'Not authenticated'
    }),
    
    status: () => ({
      type: 'success',
      content: `System Status:
  Online Users: ${Math.floor(Math.random() * 100) + 50}
  Server Load: ${(Math.random() * 20 + 10).toFixed(1)}%
  Uptime: ${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m
  Version: 3.0.1-ULTIMATE`
    }),
    
    xp: () => ({
      type: 'info',
      content: `XP: ${xp} / ${level * 1000}
Level: ${level}
Progress: ${((xp % 1000) / 10).toFixed(1)}% to next level`
    }),
    
    badges: () => ({
      type: 'success',
      content: badges.length > 0 
        ? `Earned Badges:\n${badges.map(b => `  • ${b}`).join('\n')}`
        : 'No badges earned yet. Complete puzzles to earn them!'
    }),
    
    theme: () => ({
      type: 'info',
      content: `Available themes:
  • cyber   - Default cyberpunk green
  • matrix  - Classic Matrix green
  • amber   - Retro amber terminal
  • minimal - Clean minimal design

Use: theme [name] to change`
    }),
    
    matrix: () => {
      const { toggleMatrix, matrixEnabled } = useStore.getState();
      toggleMatrix();
      return {
        type: 'success',
        content: `Matrix rain ${!matrixEnabled ? 'ENABLED' : 'DISABLED'}`
      };
    },
    
    particles: () => {
      const { toggleParticles, particlesEnabled } = useStore.getState();
      toggleParticles();
      return {
        type: 'success',
        content: `Particles ${!particlesEnabled ? 'ENABLED' : 'DISABLED'}`
      };
    },
    
    logout: () => {
      const { logout } = useStore.getState();
      logout();
      return {
        type: 'warning',
        content: 'Logging out...'
      };
    },
    
    echo: (args) => ({
      type: 'info',
      content: args.join(' ')
    }),
    
    date: () => ({
      type: 'info',
      content: new Date().toString()
    }),
    
    calc: (args) => {
      try {
        const expr = args.join('');
        // Safe eval - only allow numbers and basic operators
        if (!/^[\d+\-*/().\s]+$/.test(expr)) {
          throw new Error('Invalid characters');
        }
        const result = Function('"use strict"; return (' + expr + ')')();
        return {
          type: 'success',
          content: `${expr} = ${result}`
        };
      } catch (e) {
        return {
          type: 'error',
          content: 'Invalid expression. Usage: calc 2+2'
        };
      }
    },
    
    uuid: () => ({
      type: 'info',
      content: crypto.randomUUID()
    }),
    
    fortune: () => {
      const fortunes = [
        'The system favors those who persist.',
        'Look backwards to move forwards.',
        'Your name holds the key.',
        'Every error is a lesson.',
        'The best hackers think differently.',
        'Patience is a virtue in cracking.',
        'Sometimes the answer is right in front of you.',
        'Trust your instincts, verify with logic.',
        'The terminal knows all secrets.',
        'Keep calm and keep hacking.'
      ];
      return {
        type: 'info',
        content: fortunes[Math.floor(Math.random() * fortunes.length)]
      };
    },
    
    // Navigation commands
    hub: () => {
      window.location.href = '/unlocked';
      return {
        type: 'success',
        content: 'Navigating to Hub...'
      };
    },
    
    race: () => {
      window.location.href = '/race';
      return {
        type: 'success',
        content: '🏁 Opening Race Lobby...'
      };
    },
    
    practice: () => {
      window.location.href = '/practice';
      return {
        type: 'success',
        content: '🎯 Opening Practice Mode...'
      };
    },
    
    lb: () => {
      window.location.href = '/leaderboard';
      return {
        type: 'success',
        content: '📊 Opening Leaderboard...'
      };
    },
    
    leaderboard: () => {
      window.location.href = '/leaderboard';
      return {
        type: 'success',
        content: '📊 Opening Leaderboard...'
      };
    },
    
    profile: () => {
      window.location.href = '/profile';
      return {
        type: 'success',
        content: '👤 Opening Profile...'
      };
    },
    
    guilds: () => {
      window.location.href = '/guilds';
      return {
        type: 'success',
        content: '⚔️ Opening Guild System...'
      };
    },
    
    phases: () => ({
      type: 'info',
      content: `╔═══════════════════════════════════╗
║  PUZZLE PROGRESS                  ║
╠═══════════════════════════════════╣
  Phase 1: The Mirror    [${currentPhase >= 1 ? '✓' : '○'}] COMPLETE
  Phase 2: Hex Decoder   [${currentPhase >= 2 ? '✓' : '○'}] ${currentPhase >= 2 ? 'COMPLETE' : 'LOCKED'}
  Phase 3: The Final Lock[${currentPhase >= 3 ? '✓' : '○'}] ${currentPhase >= 3 ? 'COMPLETE' : 'LOCKED'}
╚═══════════════════════════════════╝
  Current Phase: ${currentPhase} of 3`
    }),
    
    sound: () => {
      const { toggleSound, soundEnabled } = useStore.getState();
      toggleSound();
      return {
        type: 'success',
        content: `Sound effects ${!soundEnabled ? 'ENABLED' : 'DISABLED'}`
      };
    },
    
    term: () => {
      const { toggleTerminal } = useStore.getState();
      toggleTerminal();
      return null;
    },
    
    terminal: () => {
      const { toggleTerminal } = useStore.getState();
      toggleTerminal();
      return null;
    },
    
    reset: () => ({
      type: 'error',
      content: `╔═══════════════════════════════════════╗
║  ⚠️ DANGER: PROGRESS RESET ⚠️           ║
╠═══════════════════════════════════════╣
  This will reset ALL your progress:
    - XP and Level
    - All badges
    - Puzzle completions
    - Leaderboard rankings
  
  To proceed, use: reset confirm
  ════════════════════════════════════════
  Or go to Profile > Settings to reset`
    }),
    
    'reset confirm': () => {
      const { resetProgress } = useStore.getState();
      resetProgress();
      window.location.href = '/';
      return {
        type: 'warning',
        content: 'Resetting all progress...'
      };
    },
    
    hack: () => ({
      type: 'error',
      content: `╔═══════════════════════════════════════╗
║  🔒 ACCESS DENIED - ELITE ONLY 🔒       ║
║                                         ║
║  Complete Phase 3 to unlock the hack      ║
║  command and hidden features.           ║
║                                         ║
║  Current Level: ${level}                          ║
║  Required: ELITE status (Phase 3)       ║
╚═══════════════════════════════════════╝`
    }),
    
    easter: () => ({
      type: 'success',
      content: `🎉 You found an easter egg!
      
Try these hidden commands:
  • konami    - Classic cheat code
  • rick      - Never gonna give you up
  • matrix    - Red pill or blue pill
  • coffee    - Developer fuel
  • sudo      - Make me a sandwich`
    }),
    
    konami: () => ({
      type: 'success',
      content: '🎮 ↑↑↓↓←→←→BA - Cheat code activated! +100 XP'
    }),
    
    coffee: () => ({
      type: 'info',
      content: '☕ Brewing coffee... Caffeine levels optimal. Ready to code!'
    }),
    
    sudo: () => ({
      type: 'error',
      content: '😏 Nice try. This is not a Linux system.'
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add command to history
    addTerminalLine({ type: 'command', content: input });
    setHistory([...history, input]);
    setHistoryIndex(-1);

    // Parse command
    const parts = input.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Execute command
    if (commands[cmd]) {
      const result = commands[cmd](args);
      if (result) {
        addTerminalLine(result);
      }
    } else if (cmd.startsWith('theme ')) {
      const themeName = cmd.split(' ')[1];
      const validThemes = ['cyber', 'matrix', 'amber', 'minimal'];
      if (validThemes.includes(themeName)) {
        useStore.getState().setTheme(themeName);
        addTerminalLine({ type: 'success', content: `Theme changed to: ${themeName}` });
      } else {
        addTerminalLine({ type: 'error', content: `Unknown theme: ${themeName}` });
      }
    } else {
      addTerminalLine({
        type: 'error',
        content: `Command not found: ${cmd}. Type "help" for available commands.`
      });
    }

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple tab completion
      const cmdList = Object.keys(commands);
      const matching = cmdList.filter(c => c.startsWith(input.toLowerCase()));
      if (matching.length === 1) {
        setInput(matching[0]);
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {terminalOpen && (
          <TerminalContainer
            isOpen={terminalOpen}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <TerminalHeader>
              <TerminalTitle>
                <span>🔒</span>
                <span>TERMINAL // ROOT ACCESS</span>
              </TerminalTitle>
              <TerminalControls>
                <ControlButton onClick={() => clearTerminal()}>
                  Clear
                </ControlButton>
                <ControlButton onClick={() => toggleTerminal()}>
                  Close
                </ControlButton>
              </TerminalControls>
            </TerminalHeader>
            
            <TerminalBody ref={bodyRef}>
              <Output>
                {terminalHistory.map((line, i) => (
                  <OutputLine key={i} type={line.type}>
                    {line.content}
                  </OutputLine>
                ))}
              </Output>
              
              <form onSubmit={handleSubmit}>
                <InputLine>
                  <Prompt>root@locked:~$</Prompt>
                  <Input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <Cursor />
                </InputLine>
              </form>
            </TerminalBody>
          </TerminalContainer>
        )}
      </AnimatePresence>

      <ToggleButton
        onClick={() => toggleTerminal()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {terminalOpen ? '▼' : '▲'}
      </ToggleButton>
    </>
  );
};

export default Terminal;
