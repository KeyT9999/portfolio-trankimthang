"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Cursor() {
  const isReducedMotion = useReducedMotion();

  // If user prefers reduced motion or on mobile/touch, cursor effects are disabled
  if (isReducedMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 transition-opacity"
    />
  );
}
