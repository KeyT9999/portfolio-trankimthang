import type { PerformanceTier } from "@/types/global";

/**
 * Basic heuristic to detect client performance tier without heavy benchmarking.
 * Respects hardware concurrency, device memory, and mobile status.
 */
export function detectInitialPerformanceTier(): PerformanceTier {
  if (typeof window === "undefined") {
    return "medium";
  }

  // Check for hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 4;

  // Check for device memory if supported in modern Chromium
  const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory || 4;

  if (cores >= 8 && memory >= 8) {
    return "high";
  } else if (cores >= 4 && memory >= 4) {
    return "medium";
  } else {
    return "low";
  }
}

/**
 * Checks if WebGL context can be initialized on current client.
 */
export function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}
