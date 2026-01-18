import { Variants } from "framer-motion";

/**
 * Motion presets following physical motion principles
 * All animations feel intentional, subtle, and expensive
 */

// Check for reduced motion preference - will be evaluated at runtime
const getPrefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Base transition with physical feel
const baseTransition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number], // Custom cubic-bezier
};

// Intentional delay for major transitions
const intentionalDelay = 0.12;

/**
 * Fade in with subtle scale - for section entrances
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
      transition: {
        ...baseTransition,
        delay: getPrefersReducedMotion() ? 0 : intentionalDelay,
      },
  },
};

/**
 * Glass card entrance - subtle morph
 */
export const glassMorph: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      ...baseTransition,
      delay: getPrefersReducedMotion() ? 0 : intentionalDelay * 1.5,
    },
  },
};

/**
 * Stagger children - for lists/grids
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
      transition: {
        staggerChildren: getPrefersReducedMotion() ? 0 : 0.08,
        delayChildren: getPrefersReducedMotion() ? 0 : 0.1,
      },
  },
};

/**
 * Press interaction - compression + release glow
 */
export const pressInteraction = {
  scale: 0.96,
  transition: {
    duration: 0.15,
    ease: [0.4, 0, 0.2, 1],
  },
};

/**
 * Hover lift - subtle, intentional
 */
export const hoverLift = {
  y: -4,
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },
};

/**
 * Section transition - morphing between sections
 */
export const sectionTransition: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    scale: 1,
      transition: {
        ...baseTransition,
        delay: getPrefersReducedMotion() ? 0 : intentionalDelay,
      },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      duration: 0.3,
    },
  },
};
