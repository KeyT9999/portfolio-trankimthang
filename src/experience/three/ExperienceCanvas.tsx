"use client";

import { useEffect, useRef } from "react";
import { checkWebGLSupport } from "@/lib/performance";
import { useExperienceStore } from "@/store/experienceStore";
import { ExperienceScene } from "./Scene";

interface ExperienceCanvasProps {
  className?: string;
}

export function ExperienceCanvas({ className }: ExperienceCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const setWebGLAvailable = useExperienceStore((s) => s.setWebGLAvailable);
  const setCanvasLoaded = useExperienceStore((s) => s.setCanvasLoaded);
  const is3DEnabled = useExperienceStore((s) => s.is3DEnabled);

  useEffect(() => {
    const isSupported = checkWebGLSupport();
    setWebGLAvailable(isSupported);

    if (!isSupported || !is3DEnabled || !containerRef.current) {
      return;
    }

    const scene = new ExperienceScene();
    scene.init(containerRef.current);
    setCanvasLoaded(true);

    const onResize = () => scene.handleResize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      scene.dispose();
      setCanvasLoaded(false);
    };
  }, [is3DEnabled, setCanvasLoaded, setWebGLAvailable]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={className ?? "pointer-events-none fixed inset-0 -z-10 overflow-hidden"}
    />
  );
}
