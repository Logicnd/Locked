import { useEffect, useRef, useCallback } from 'react';
import { useStore } from '../store/useStore';
import { Howl } from 'howler';

// Sound URLs - these would be actual audio files in production
const SOUNDS = {
  click: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSA0PVanu8LdnHgU2k9n1unEiBC13yO/eizEIHWq+8+OZSA0PVantu61mGgU1k9n1uHAiBCx2xPDdijAIHGm+8+OWRw0OTqzs8blnHAU1k9n1uHAhBCt2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhBCx2xO/eizEIHWm+8+OWSA0NTqzs8blnHAU2k9n1uHEhA==',
  success: null,
  error: null,
  unlock: null,
  ambient: null
};

export const useAudio = () => {
  const { soundEnabled } = useStore();
  const soundsRef = useRef({});
  const ambientRef = useRef(null);

  // Initialize sounds
  useEffect(() => {
    // Only initialize after user interaction
    const initAudio = () => {
      // Create simple beep sounds using Web Audio API as fallback
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      const playTone = (frequency, duration, type = 'sine') => {
        if (!soundEnabled) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
      };

      soundsRef.current = {
        click: () => playTone(800, 0.1),
        success: () => {
          playTone(523.25, 0.1); // C5
          setTimeout(() => playTone(659.25, 0.1), 100); // E5
          setTimeout(() => playTone(783.99, 0.2), 200); // G5
        },
        error: () => {
          playTone(200, 0.3, 'sawtooth');
        },
        unlock: () => {
          playTone(440, 0.1);
          setTimeout(() => playTone(554.37, 0.1), 100);
          setTimeout(() => playTone(659.25, 0.1), 200);
          setTimeout(() => playTone(880, 0.4), 300);
        },
        keypress: () => playTone(600 + Math.random() * 200, 0.05)
      };
    };

    // Initialize on first click
    document.addEventListener('click', initAudio, { once: true });
    
    return () => {
      document.removeEventListener('click', initAudio);
    };
  }, [soundEnabled]);

  const playSound = useCallback((soundName) => {
    if (soundEnabled && soundsRef.current[soundName]) {
      soundsRef.current[soundName]();
    }
  }, [soundEnabled]);

  const playAmbient = useCallback(() => {
    // Ambient hum - very subtle
    if (!soundEnabled) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 50; // Low hum
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
    
    oscillator.start();
    
    ambientRef.current = { oscillator, gainNode, context: audioContext };
    
    return () => {
      oscillator.stop();
      audioContext.close();
    };
  }, [soundEnabled]);

  const stopAmbient = useCallback(() => {
    if (ambientRef.current) {
      ambientRef.current.oscillator.stop();
      ambientRef.current.context.close();
      ambientRef.current = null;
    }
  }, []);

  return { playSound, playAmbient, stopAmbient };
};
