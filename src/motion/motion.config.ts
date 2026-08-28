export const MOTION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    editorialReveal: 1.4,
  },
  ease: {
    editorial: "power2.out",
    newspaperFlip: "power3.inOut",
    inkSpread: "power1.inOut",
    linear: "none",
  },
  stagger: {
    lines: 0.05,
    columns: 0.1,
    cards: 0.15,
  },
} as const;

export type MotionConfigType = typeof MOTION_CONFIG;
