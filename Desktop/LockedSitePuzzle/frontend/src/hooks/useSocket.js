import { useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';

export const useSocket = () => {
  const socketRef = useRef(null);
  const { setOnlineUsers, addNotification } = useStore();

  useEffect(() => {
    // Only connect if we have a WebSocket server
    const wsUrl = process.env.REACT_APP_WS_URL || window.location.origin.replace(/^http/, 'ws');
    
    try {
      const socket = new WebSocket(wsUrl);
      socketRef.current = socket;

      socket.onopen = () => {
        console.log('🔌 WebSocket connected');
        
        // Subscribe to updates
        socket.send(JSON.stringify({ type: 'subscribe', channel: 'global' }));
      };

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          
          switch (data.type) {
            case 'online_users':
              setOnlineUsers(data.count);
              break;
              
            case 'user_solved':
              addNotification({
                id: Date.now(),
                type: 'achievement',
                message: `${data.username} solved Phase ${data.phase}!`,
                timestamp: Date.now()
              });
              break;
              
            case 'new_record':
              addNotification({
                id: Date.now(),
                type: 'record',
                message: `New record: ${data.username} - ${data.time}s`,
                timestamp: Date.now()
              });
              break;
              
            case 'system_message':
              addNotification({
                id: Date.now(),
                type: 'system',
                message: data.message,
                timestamp: Date.now()
              });
              break;
              
            default:
              break;
          }
        } catch (err) {
          console.error('WebSocket message error:', err);
        }
      };

      socket.onerror = (error) => {
        console.log('WebSocket error (expected if no WS server):', error);
      };

      socket.onclose = () => {
        console.log('WebSocket disconnected');
        // Attempt reconnect after 5 seconds
        setTimeout(() => {
          if (socketRef.current?.readyState === WebSocket.CLOSED) {
            // Could implement reconnect logic here
          }
        }, 5000);
      };

      // Heartbeat to keep connection alive
      const heartbeat = setInterval(() => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify({ type: 'ping' }));
        }
      }, 30000);

      return () => {
        clearInterval(heartbeat);
        socket.close();
      };
    } catch (err) {
      // WebSocket not available, that's ok
      console.log('WebSocket not available - running in fallback mode');
    }
  }, [setOnlineUsers, addNotification]);

  return socketRef.current;
};
