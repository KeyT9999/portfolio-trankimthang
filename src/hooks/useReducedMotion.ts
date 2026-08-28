"use client";

import { useMediaQuery } from "./useMediaQuery";

/**
 * Hook to detect if the user has requested reduced motion.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
