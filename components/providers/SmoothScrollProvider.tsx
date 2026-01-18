"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Initialize Lenis with physical scroll inertia
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration for physical feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for weight
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.2, // Slight momentum
      touchMultiplier: 2,
      infinite: false,
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
