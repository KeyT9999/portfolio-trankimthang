"use client";

import { useState, useEffect } from "react";
import type { PerformanceTier } from "@/types/global";
import { detectInitialPerformanceTier } from "@/lib/performance";

/**
 * Hook to retrieve and react to device performance tiers: 'high' | 'medium' | 'low'.
 */
export function useDevicePerformance(): PerformanceTier {
  const [tier, setTier] = useState<PerformanceTier>("medium");

  useEffect(() => {
    setTier(detectInitialPerformanceTier());
  }, []);

  return tier;
}
