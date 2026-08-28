import { gsap } from "../gsap";
import { MOTION_CONFIG } from "../motion.config";

/**
 * Placeholder interface for page / section transitions
 */
export function transitionOut(
  target: gsap.DOMTarget,
  onComplete?: () => void
): gsap.core.Tween {
  return gsap.to(target, {
    opacity: 0,
    duration: MOTION_CONFIG.duration.fast,
    ease: MOTION_CONFIG.ease.editorial,
    onComplete,
  });
}

export function transitionIn(
  target: gsap.DOMTarget,
  onComplete?: () => void
): gsap.core.Tween {
  return gsap.to(target, {
    opacity: 1,
    duration: MOTION_CONFIG.duration.fast,
    ease: MOTION_CONFIG.ease.editorial,
    onComplete,
  });
}
