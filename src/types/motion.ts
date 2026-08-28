export interface MotionConfig {
  defaultDuration: number;
  defaultEase: string;
  reducedMotion: boolean;
}

export type ScrollDirection = "up" | "down" | null;

export interface ScrollState {
  progress: number;
  velocity: number;
  direction: ScrollDirection;
  isScrolling: boolean;
}
