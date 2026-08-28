import Lenis from "lenis";
import { gsap, ScrollTrigger, registerGSAP } from "./gsap";

let lenisInstance: Lenis | null = null;
let rafCallback: ((time: number) => void) | null = null;

export function initLenis(): Lenis | null {
  if (typeof window === "undefined") return null;

  if (lenisInstance) {
    return lenisInstance;
  }

  // Register GSAP plugins
  registerGSAP();

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    touchMultiplier: 2,
  });

  lenisInstance = lenis;

  // Synchronize Lenis scroll position with GSAP ScrollTrigger
  lenis.on("scroll", ScrollTrigger.update);

  rafCallback = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(rafCallback);
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function destroyLenis(): void {
  if (rafCallback) {
    gsap.ticker.remove(rafCallback);
    rafCallback = null;
  }

  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
