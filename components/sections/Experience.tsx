"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

/**
 * Experience section - timeline with morphing cards
 * Physical morphing transitions between cards
 */
const experiences = [
  {
    year: "2025",
    role: "Full-Stack Developer Intern",
    company: "Techiehelp",
    description: "Developed full-stack applications using modern web technologies. Worked on building scalable solutions and implementing best practices in software development.",
  },
  {
    year: "2025",
    role: "Digital Electronics & VLSI Intern",
    company: "Codec Technologies",
    description: "Gained hands-on experience in digital electronics and VLSI design. Worked on hardware-level projects and circuit design implementations.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center px-6 py-32"
    >
      <div className="container max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight mb-4 tracking-[-0.02em]">Experience</h2>
          <p className="text-white/50 text-lg md:text-xl font-light">Timeline with morphing cards</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                variants={fadeInUp}
                className="relative flex items-center gap-8"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full glass glass-thick flex items-center justify-center">
                    <span className="text-accent text-sm md:text-base font-medium">
                      {exp.year}
                    </span>
                  </div>
                </div>

                {/* Experience card - morphing on hover */}
                <motion.div
                  whileHover={{ scale: 1.02, x: index % 2 === 0 ? 8 : -8 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 glass glass-thick rounded-glass-lg p-8 glass-edge"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-light text-white/95 mb-2 tracking-[-0.01em]">
                        {exp.role}
                      </h3>
                      <p className="text-accent text-sm md:text-base font-light">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-white/65 leading-relaxed text-base md:text-lg font-light">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
