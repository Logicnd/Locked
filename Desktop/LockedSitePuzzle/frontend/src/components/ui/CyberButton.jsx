import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const scan = keyframes`
  0% { left: -100%; }
  100% { left: 200%; }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const StyledButton = styled(motion.button)`
  position: relative;
  padding: ${props => props.size === 'large' ? '16px 48px' : props.size === 'small' ? '8px 24px' : '12px 32px'};
  font-family: ${props => props.theme.font};
  font-size: ${props => props.size === 'large' ? '16px' : props.size === 'small' ? '12px' : '14px'};
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${props => props.variant === 'primary' ? props.theme.background : props.theme.primary};
  background: ${props => props.variant === 'primary' ? props.theme.primary : 'transparent'};
  border: 2px solid ${props => props.theme.primary};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  clip-path: polygon(
    0 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% 100%,
    10px 100%,
    0 calc(100% - 10px)
  );

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  ${props => props.glitch && css`
    &:hover:not(:disabled) {
      animation: ${glitch} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    }
  `}

  /* Scanline effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: none;
  }

  &:hover:not(:disabled)::before {
    animation: ${scan} 0.75s ease;
  }

  /* Corner accents */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    clip-path: polygon(
      0 0, 10px 0, 0 10px,
      0 calc(100% - 10px), 0 100%, 10px 100%,
      calc(100% - 10px) 100%, 100% calc(100% - 10px),
      100% 10px, calc(100% - 10px) 0
    );
    transition: all 0.3s ease;
  }

  &:hover:not(:disabled) {
    color: ${props => props.theme.background};
    background: ${props => props.theme.primary};
    box-shadow: 
      0 0 20px ${props => props.theme.primary}40,
      0 0 40px ${props => props.theme.primary}20;
    
    &::after {
      border-color: ${props => props.theme.accent};
    }
  }

  /* Loading state */
  ${props => props.loading && css`
    color: transparent !important;
    pointer-events: none;
    
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      left: 50%;
      margin: -10px 0 0 -10px;
      border: 2px solid transparent;
      border-top-color: ${props.theme.primary};
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  `}
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const IconContainer = styled.span`
  display: inline-flex;
  margin-right: ${props => props.iconPosition === 'left' ? '8px' : '0'};
  margin-left: ${props => props.iconPosition === 'right' ? '8px' : '0'};
`;

const CyberButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  glitch = true,
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  onClick,
  ...props 
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      glitch={glitch}
      loading={loading}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <IconContainer iconPosition="left">{icon}</IconContainer>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <IconContainer iconPosition="right">{icon}</IconContainer>
      )}
    </StyledButton>
  );
};

export default CyberButton;
