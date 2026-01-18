"use client";

import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useState } from "react";
import Image from "next/image";

/**
 * Projects section - fullscreen case-study format
 * Morphing transitions between projects
 */
const projects = [
  {
    id: 1,
    title: "UniManagePro",
    description: "A comprehensive university management system for handling student data, courses, and administrative tasks. Built with modern full-stack technologies.",
    category: "Web",
    githubUrl: "https://github.com/khiasu/UniManagePro",
    technologies: ["Full-Stack", "Database", "Web Application"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80", // University/education themed
  },
  {
    id: 2,
    title: "AI Reverse CAPTCHA Solver",
    description: "An AI-powered solution for solving CAPTCHA challenges using machine learning and computer vision techniques. Demonstrates advanced problem-solving capabilities.",
    category: "AI/ML",
    githubUrl: "https://github.com/khiasu/AI-Reverse-CAPTCHA-Solver",
    technologies: ["AI", "Machine Learning", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80", // AI/tech themed
  },
  {
    id: 3,
    title: "ByteCart E-Commerce",
    description: "A modern e-commerce platform with seamless shopping experience, cart management, and payment integration. Built with scalable architecture.",
    category: "Web",
    githubUrl: "https://github.com/khiasu/bytecart-ecommerce",
    technologies: ["E-Commerce", "Full-Stack", "Payment Integration"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", // E-commerce/shopping themed
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center px-6 py-32"
    >
      <div className="container max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight mb-4 tracking-[-0.02em]">Projects</h2>
          <p className="text-white/50 text-lg md:text-xl font-light">Fullscreen case studies</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(project.id)}
              className="glass glass-thick rounded-glass-lg overflow-hidden cursor-pointer group relative"
            >
              {/* Project image with blur and overlay */}
              <div className="relative aspect-video overflow-hidden">
                {/* Blurred background image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"}
                    alt={project.title}
                    fill
                    className="object-cover blur-md scale-110"
                    unoptimized
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
                </div>
                
                {/* Project name overlay */}
                <div className="relative h-full flex items-center justify-center z-10">
                  <h3 className="text-3xl md:text-4xl font-semibold text-white/95 tracking-[-0.02em] text-center px-4">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content overlay */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-white/40 uppercase tracking-[0.1em] font-medium">
                    {project.category}
                  </span>
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-sm hover:text-accent-light transition-colors font-light"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub →
                    </motion.a>
                  )}
                </div>
                <p className="text-white/65 text-sm md:text-base leading-relaxed mb-4 font-light mt-2">
                  {project.description}
                </p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 glass glass-thin rounded-full text-white/60 font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 pointer-events-none rounded-glass-lg" />
            </motion.div>
          ))}
        </motion.div>

        {/* Fullscreen project view */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-4 md:inset-20 glass glass-thick rounded-glass-lg z-50 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-full flex flex-col">
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-10 glass glass-thin rounded-glass-sm p-3 hover:bg-white/10 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Project content */}
                  <div className="flex-1 p-12 overflow-y-auto">
                    <h2 className="text-4xl font-light mb-4">
                      {projects.find((p) => p.id === selectedProject)?.title}
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mb-6">
                      {projects.find((p) => p.id === selectedProject)
                        ?.description}
                    </p>
                    {projects.find((p) => p.id === selectedProject)?.githubUrl && (
                      <a
                        href={projects.find((p) => p.id === selectedProject)?.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
                      >
                        View on GitHub
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
