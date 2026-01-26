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
    companyUrl: "https://www.techiehelp.in/intern/khiasuthong-t",
    description: "Contributed to full-stack application development using modern web technologies. Focused on implementing scalable solutions and following software development best practices.",
  },
  {
    year: "2025",
    role: "Digital Electronics & VLSI Intern",
    company: "Codec Technologies",
    companyUrl: "https://codectechnologies.in/",
    description: "Gained practical experience in digital electronics and VLSI design. Worked on hardware-level projects and circuit design implementations.",
  },
  {
    year: "Present",
    role: "Freelance Technical Support",
    company: "Genesis Montessori School",
    companyUrl: "https://share.google/M9YzG0KwwGoanK3Xp",
    description: "Providing part-time technical support including book worksheet content editing, printing services, and computer maintenance. Supporting educational technology infrastructure and assisting with technical troubleshooting.",
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-[-0.02em]">Experience</h2>
          <p className="text-white/50 text-lg md:text-xl font-light">Professional journey</p>
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
                      <motion.a 
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent text-sm md:text-base font-light hover:text-accent-light transition-colors inline-block"
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {exp.company}
                        <motion.span
                          initial={{ opacity: 0, x: -2 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="inline-block ml-1"
                        >
                          ↗
                        </motion.span>
                      </motion.a>
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
