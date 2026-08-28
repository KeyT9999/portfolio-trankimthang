import { create } from "zustand";
import type { PerformanceTier } from "@/types/global";

interface ExperienceStoreState {
  isWebGLAvailable: boolean;
  isCanvasLoaded: boolean;
  is3DEnabled: boolean;
  performanceTier: PerformanceTier;
  setWebGLAvailable: (available: boolean) => void;
  setCanvasLoaded: (loaded: boolean) => void;
  set3DEnabled: (enabled: boolean) => void;
  setPerformanceTier: (tier: PerformanceTier) => void;
}

export const useExperienceStore = create<ExperienceStoreState>((set) => ({
  isWebGLAvailable: false,
  isCanvasLoaded: false,
  is3DEnabled: true,
  performanceTier: "medium",
  setWebGLAvailable: (isWebGLAvailable) => set({ isWebGLAvailable }),
  setCanvasLoaded: (isCanvasLoaded) => set({ isCanvasLoaded }),
  set3DEnabled: (is3DEnabled) => set({ is3DEnabled }),
  setPerformanceTier: (performanceTier) => set({ performanceTier }),
}));
