import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isGsapRegistered = false;

export function registerGSAP(): typeof gsap {
  if (typeof window !== "undefined" && !isGsapRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isGsapRegistered = true;
  }
  return gsap;
}

export { gsap, ScrollTrigger };
