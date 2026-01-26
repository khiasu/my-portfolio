"use client";

import { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

interface MotionProviderProps {
  children: ReactNode;
}

/**
 * Motion provider for global motion settings
 * Optimized for performance with reduced motion support
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig
      transition={{
        type: "tween",
        ease: [0.4, 0, 0.2, 1], // Optimized easing for smoothness
        duration: 0.3, // Faster transitions for better responsiveness
      }}
      reducedMotion="user" // Respect user's motion preferences
    >
      {children}
    </MotionConfig>
  );
}
