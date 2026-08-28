import { create } from "zustand";

interface UIState {
  activeSection: string;
  readingProgress: number;
  isNavOpen: boolean;
  isMuted: boolean;
  isTransitioning: boolean;
  setActiveSection: (section: string) => void;
  setReadingProgress: (progress: number) => void;
  setNavOpen: (open: boolean) => void;
  toggleNav: () => void;
  setMuted: (muted: boolean) => void;
  toggleMuted: () => void;
  setTransitioning: (transitioning: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeSection: "cover",
  readingProgress: 0,
  isNavOpen: false,
  isMuted: true,
  isTransitioning: false,
  setActiveSection: (activeSection) => set({ activeSection }),
  setReadingProgress: (readingProgress) => set({ readingProgress }),
  setNavOpen: (isNavOpen) => set({ isNavOpen }),
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
  setMuted: (isMuted) => set({ isMuted }),
  toggleMuted: () => set((state) => ({ isMuted: !state.isMuted })),
  setTransitioning: (isTransitioning) => set({ isTransitioning }),
}));
