"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "landing", label: "Home", href: "#landing" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

/**
 * Mobile-first, gesture-driven navigation
 * Invisible when possible, glass UI when visible
 */
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("landing");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Minimal, glass */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isScrolled ? 0 : -100,
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-6 right-6 z-50 hidden md:block"
      >
        <div className="glass glass-thin rounded-glass px-8 py-4">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative text-sm font-light transition-colors duration-300 tracking-[-0.01em] ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-white/60 hover:text-white/90"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-6 right-6 z-50 md:hidden glass glass-thin rounded-glass-sm p-3"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 8 : 0,
            }}
            className="w-full h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            className="w-full h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -8 : 0,
            }}
            className="w-full h-0.5 bg-white rounded-full"
          />
        </div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 md:w-80 glass glass-thick rounded-l-2xl md:rounded-glass-lg z-50 md:hidden p-4 md:p-8"
            >
              <nav className="mt-12 md:mt-20">
                <ul className="flex flex-col gap-3 md:gap-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`text-left text-sm md:text-lg font-light w-full py-2 md:py-3 px-2 md:px-0 rounded-lg transition-all tracking-[-0.01em] ${
                          activeSection === item.id
                            ? "text-accent bg-accent/10"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
