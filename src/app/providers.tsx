"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { initLenis, destroyLenis } from "@/motion/smoothScroll";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Cursor } from "@/components/ui/Cursor";

// Dynamically import the isolated Three.js canvas with no SSR
const DynamicExperienceCanvas = dynamic(
  () =>
    import("@/experience/three/ExperienceCanvas").then((mod) => ({
      default: mod.ExperienceCanvas,
    })),
  { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
  const isReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!isReducedMotion) {
      initLenis();
    }

    return () => {
      destroyLenis();
    };
  }, [isReducedMotion]);

  return (
    <>
      <Cursor />
      {mounted && <DynamicExperienceCanvas />}
      {children}
    </>
  );
}
