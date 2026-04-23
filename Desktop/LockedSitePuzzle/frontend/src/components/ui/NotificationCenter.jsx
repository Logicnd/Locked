import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';

const Container = styled.div`
  position: fixed;
  top: 80px;
  right: 20px;
  width: 320px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
`;

const Notification = styled(motion.div)`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => {
    switch (props.type) {
      case 'achievement': return props.theme.gold;
      case 'record': return props.theme.accent;
      case 'error': return props.theme.danger;
      case 'warning': return props.theme.warning;
      default: return props.theme.border;
    }
  }};
  border-left: 4px solid ${props => {
    switch (props.type) {
      case 'achievement': return props.theme.gold;
      case 'record': return props.theme.accent;
      case 'error': return props.theme.danger;
      case 'warning': return props.theme.warning;
      default: return props.theme.primary;
    }
  }};
  padding: 12px 16px;
  pointer-events: auto;
  cursor: pointer;
  backdrop-filter: blur(10px);
`;

const NotificationTitle = styled.div`
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${props => {
    switch (props.type) {
      case 'achievement': return props.theme.gold;
      case 'record': return props.theme.accent;
      case 'error': return props.theme.danger;
      case 'warning': return props.theme.warning;
      default: return props.theme.primary;
    }
  }};
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const NotificationMessage = styled.div`
  font-size: 13px;
  color: ${props => props.theme.text};
  line-height: 1.4;
`;

const NotificationTime = styled.div`
  font-size: 10px;
  color: ${props => props.theme.textMuted};
  margin-top: 4px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: transparent;
  border: none;
  color: ${props => props.theme.textMuted};
  font-size: 14px;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
  
  &:hover {
    color: ${props => props.theme.text};
  }
`;

const getIcon = (type) => {
  switch (type) {
    case 'achievement': return '🏆';
    case 'record': return '📊';
    case 'error': return '⚠️';
    case 'warning': return '🔔';
    case 'system': return '🔒';
    default: return '📢';
  }
};

const getTitle = (type) => {
  switch (type) {
    case 'achievement': return 'Achievement Unlocked';
    case 'record': return 'New Record';
    case 'error': return 'Error';
    case 'warning': return 'Warning';
    case 'system': return 'System';
    default: return 'Notification';
  }
};

const NotificationCenter = () => {
  const { notifications, clearNotifications } = useStore();

  const removeNotification = (id) => {
    const { notifications, addNotification } = useStore.getState();
    // This would need to be implemented in the store
  };

  return (
    <Container>
      <AnimatePresence>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            type={notification.type}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            layout
          >
            <NotificationTitle type={notification.type}>
              <span>{getIcon(notification.type)}</span>
              <span>{getTitle(notification.type)}</span>
            </NotificationTitle>
            <NotificationMessage>
              {notification.message}
            </NotificationMessage>
            <NotificationTime>
              {new Date(notification.timestamp).toLocaleTimeString()}
            </NotificationTime>
          </Notification>
        ))}
      </AnimatePresence>
    </Container>
  );
};

export default NotificationCenter;
