import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const glitch1 = keyframes`
  0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
  20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
  40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
  60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
  80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
  100% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
`;

const glitch2 = keyframes`
  0% { clip-path: inset(15% 0 85% 0); transform: translate(2px, -1px); }
  20% { clip-path: inset(65% 0 25% 0); transform: translate(-2px, 1px); }
  40% { clip-path: inset(45% 0 45% 0); transform: translate(2px, -2px); }
  60% { clip-path: inset(85% 0 10% 0); transform: translate(-2px, 2px); }
  80% { clip-path: inset(5% 0 75% 0); transform: translate(1px, -1px); }
  100% { clip-path: inset(35% 0 55% 0); transform: translate(-1px, 1px); }
`;

const scan = keyframes`
  0% { top: 0%; }
  100% { top: 100%; }
`;

const Container = styled.span`
  position: relative;
  display: inline-block;
  color: ${props => props.theme.text};
  font-family: ${props => props.theme.fontDisplay};
  font-weight: ${props => props.weight || '700'};
  font-size: ${props => props.size || 'inherit'};
  letter-spacing: ${props => props.spacing || '0.1em'};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  
  ${props => props.hovered && css`
    animation: ${glitch1} 0.3s infinite linear alternate-reverse;
  `}
`;

const GlitchLayer1 = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.danger};
  opacity: 0.8;
  animation: ${glitch1} 2s infinite linear alternate-reverse;
  display: ${props => props.active ? 'block' : 'none'};
`;

const GlitchLayer2 = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.accent};
  opacity: 0.8;
  animation: ${glitch2} 2s infinite linear alternate-reverse;
  display: ${props => props.active ? 'block' : 'none'};
`;

const Scanline = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${props => props.theme.primary};
  opacity: 0.5;
  animation: ${scan} 3s linear infinite;
  display: ${props => props.active ? 'block' : 'none'};
`;

const GlitchText = ({ 
  children, 
  size, 
  weight = '700', 
  spacing = '0.1em',
  uppercase = true,
  glitchOnHover = false,
  alwaysGlitch = false,
  intensity = 'normal' // subtle, normal, extreme
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isGlitching, setIsGlitching] = React.useState(alwaysGlitch);

  React.useEffect(() => {
    if (alwaysGlitch) return;
    
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [alwaysGlitch]);

  const handleMouseEnter = () => {
    if (glitchOnHover) {
      setIsHovered(true);
      setIsGlitching(true);
    }
  };

  const handleMouseLeave = () => {
    if (glitchOnHover) {
      setIsHovered(false);
      setIsGlitching(false);
    }
  };

  return (
    <Container
      size={size}
      weight={weight}
      spacing={spacing}
      uppercase={uppercase}
      hovered={isHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <GlitchLayer1 active={isGlitching} aria-hidden="true">
        {children}
      </GlitchLayer1>
      <GlitchLayer2 active={isGlitching} aria-hidden="true">
        {children}
      </GlitchLayer2>
      <Scanline active={isGlitching} />
    </Container>
  );
};

export default GlitchText;
