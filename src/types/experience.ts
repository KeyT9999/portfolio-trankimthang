import type { PerformanceTier } from "./global";

export interface ExperienceState {
  isWebGLAvailable: boolean;
  isCanvasLoaded: boolean;
  performanceTier: PerformanceTier;
  fps: number;
}

export interface ShaderUniforms {
  [key: string]: { value: unknown };
}
