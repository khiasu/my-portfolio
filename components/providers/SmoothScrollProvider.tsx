"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Initialize Lenis with optimized smooth scrolling
    const lenis = new Lenis({
      duration: 1.0, // Faster scroll for better responsiveness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for weight
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduced multiplier for better control
      touchMultiplier: 1.5,
      infinite: false,
      normalizeWheel: true, // Normalize wheel speed across browsers
      syncTouch: true, // Sync touch with scroll
    });

    // Animation frame loop for smooth scrolling
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
