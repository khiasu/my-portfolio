"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

/**
 * Landing section - immersive, minimal text, no immediate scroll
 * Single "flex" moment: subtle light that follows user input
 */
export function Landing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for depth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Light that follows cursor (the ONE flex moment)
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let targetX = 50;
    let targetY = 50;
    let currentX = 50;
    let currentY = 50;

    const handleMouseMove = (e: MouseEvent) => {
      if (!lightRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Convert to percentage
      targetX = (clientX / innerWidth) * 100;
      targetY = (clientY / innerHeight) * 100;
    };

    const updateLight = () => {
      // Smooth interpolation with lerp
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      if (lightRef.current) {
        lightRef.current.style.background = `radial-gradient(circle at ${currentX}% ${currentY}%, rgba(100, 200, 255, 0.15) 0%, transparent 50%)`;
      }
      
      rafId = requestAnimationFrame(updateLight);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateLight);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="landing"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient light that follows cursor */}
      <div
        ref={lightRef}
        className="fixed inset-0 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(100, 200, 255, 0.1) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Minimal greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-white/50 text-sm md:text-base font-medium tracking-[0.15em] uppercase mb-4"
          >
            Full-Stack Developer
          </motion.p>

          {/* Main headline - restraint */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-[-0.02em] leading-[0.95] mb-6"
          >
            Khiasu
            <br />
            <motion.span 
              className="text-accent font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              2vis
            </motion.span>
          </motion.h1>

          {/* Subtle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed tracking-[-0.01em]"
          >
 Building thoughtful solutions that bridge creativity and functionality.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - subtle, no animation spam */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3 text-white/30 text-xs font-medium tracking-wider uppercase">
          <span className="mb-1">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/30 via-white/20 to-transparent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
