import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      // User state
      user: null,
      isAuthenticated: false,
      isLoading: false,
      
      // Progress
      currentPhase: 1,
      totalPhases: 3,
      xp: 0,
      level: 1,
      streak: 0,
      badges: [],
      
      // Puzzle state
      puzzleData: null,
      attempts: 0,
      hintsUsed: 0,
      timer: 0,
      isTimerRunning: false,
      
      // Terminal state
      terminalOpen: false,
      terminalHistory: [],
      
      // UI state
      soundEnabled: true,
      matrixEnabled: true,
      particlesEnabled: true,
      theme: 'cyber', // cyber, matrix, amber, minimal
      
      // Leaderboard
      leaderboard: [],
      eliteLeaderboard: [],
      
      // Guild
      guild: null,
      guilds: [],
      
      // Real-time
      onlineUsers: 0,
      notifications: [],
      
      // Cutscenes
      showCutscene: false,
      currentCutscene: null,
      
      // Racing
      raceMode: false,
      raceType: null,
      
      // Actions
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setLoading: (isLoading) => set({ isLoading }),
      
      setPhase: (phase) => set({ currentPhase: phase }),
      advancePhase: () => set((state) => ({ 
        currentPhase: Math.min(state.currentPhase + 1, state.totalPhases) 
      })),
      
      addXP: (amount) => set((state) => {
        const newXP = state.xp + amount;
        const newLevel = Math.floor(newXP / 1000) + 1;
        return { xp: newXP, level: newLevel };
      }),
      
      addBadge: (badge) => set((state) => ({
        badges: [...new Set([...state.badges, badge])]
      })),
      
      setPuzzleData: (data) => set({ puzzleData: data }),
      incrementAttempts: () => set((state) => ({ attempts: state.attempts + 1 })),
      incrementHints: () => set((state) => ({ hintsUsed: state.hintsUsed + 1 })),
      
      startTimer: () => set({ isTimerRunning: true, timer: 0 }),
      stopTimer: () => set({ isTimerRunning: false }),
      tickTimer: () => set((state) => ({ 
        timer: state.isTimerRunning ? state.timer + 1 : state.timer 
      })),
      
      toggleTerminal: () => set((state) => ({ terminalOpen: !state.terminalOpen })),
      addTerminalLine: (line) => set((state) => ({
        terminalHistory: [...state.terminalHistory.slice(-50), line]
      })),
      clearTerminal: () => set({ terminalHistory: [] }),
      
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
      toggleMatrix: () => set((state) => ({ matrixEnabled: !state.matrixEnabled })),
      toggleParticles: () => set((state) => ({ particlesEnabled: !state.particlesEnabled })),
      setTheme: (theme) => set({ theme }),
      
      setLeaderboard: (data) => set({ leaderboard: data }),
      setEliteLeaderboard: (data) => set({ eliteLeaderboard: data }),
      
      setOnlineUsers: (count) => set({ onlineUsers: count }),
      addNotification: (notification) => set((state) => ({
        notifications: [notification, ...state.notifications.slice(0, 9)]
      })),
      clearNotifications: () => set({ notifications: [] }),
      
      // Cutscene actions
      playCutscene: (type) => set({ showCutscene: true, currentCutscene: type }),
      hideCutscene: () => set({ showCutscene: false, currentCutscene: null }),
      
      // Racing actions
      startRace: (type) => set({ raceMode: true, raceType: type }),
      endRace: () => set({ raceMode: false, raceType: null }),
      
      logout: () => set({
        user: null,
        isAuthenticated: false,
        currentPhase: 1,
        xp: 0,
        level: 1,
        badges: [],
        puzzleData: null,
        attempts: 0,
        hintsUsed: 0,
        timer: 0,
        isTimerRunning: false,
        terminalHistory: [],
        notifications: []
      }),
      
      resetProgress: () => set({
        currentPhase: 1,
        xp: 0,
        level: 1,
        badges: [],
        puzzleData: null,
        attempts: 0,
        hintsUsed: 0,
        timer: 0
      })
    }),
    {
      name: 'locked-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        soundEnabled: state.soundEnabled,
        theme: state.theme,
        matrixEnabled: state.matrixEnabled,
        particlesEnabled: state.particlesEnabled
      })
    }
  )
);
