import { gsap } from "../gsap";
import { MOTION_CONFIG } from "../motion.config";

/**
 * Placeholder interface for future fade-in motion preset
 */
export function createFadeIn(
  target: gsap.DOMTarget,
  vars?: gsap.TweenVars
): gsap.core.Tween {
  return gsap.from(target, {
    opacity: 0,
    y: 20,
    duration: MOTION_CONFIG.duration.normal,
    ease: MOTION_CONFIG.ease.editorial,
    ...vars,
  });
}
