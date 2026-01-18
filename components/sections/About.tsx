"use client";

import { motion } from "framer-motion";
import { fadeInUp, glassMorph, staggerContainer } from "@/lib/motion";
import { useState } from "react";

/**
 * About section - interactive glass profile card
 * Physical interactions: press compression, tilt on hover
 */
export function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-32"
    >
      <div className="container max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Glass profile card - interactive */}
          <motion.div
            variants={glassMorph}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass glass-thick rounded-glass-lg p-12 glass-edge relative overflow-hidden"
          >
            {/* Profile image placeholder */}
            <div className="aspect-square w-full max-w-sm mx-auto mb-8 rounded-glass overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
              <div className="w-full h-full flex items-center justify-center text-accent/40 text-4xl">
                Profile
              </div>
            </div>

            {/* Interactive tilt effect */}
            <motion.div
              animate={{
                rotateX: isHovered ? -3 : 0,
                rotateY: isHovered ? 3 : 0,
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-extralight mb-2 tracking-[-0.01em]">Khiasu 2vis</h3>
              <p className="text-white/55 text-sm md:text-base font-light">Full-Stack Developer</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-extralight mb-8 tracking-[-0.02em]"
            >
              About
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg md:text-xl leading-relaxed mb-6 font-light tracking-[-0.01em]"
            >
              I&apos;m a Full-Stack Developer passionate about building scalable,
              performant applications with modern web technologies. I focus on
              creating intuitive user experiences through clean code and thoughtful design.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-white/65 leading-relaxed text-base md:text-lg font-light"
            >
              Currently based in Dimapur, India, I specialize in full-stack
              development with expertise in both frontend and backend technologies.
              I&apos;m always eager to take on new challenges and contribute to meaningful projects.
            </motion.p>

            {/* Details grid */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 mt-10"
            >
              {[
                { label: "Location", value: "Dimapur, India" },
                { label: "Email", value: "khiasu2vis@gmail.com", isEmail: true },
                { label: "Status", value: "Available" },
                { label: "Experience", value: "Intern" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="glass glass-thin rounded-glass-sm p-5 glass-edge cursor-default"
                >
                  <p className="text-white/45 text-xs mb-2 font-medium tracking-wider uppercase">{item.label}</p>
                  <p className={`text-white/90 font-light text-sm md:text-base ${item.isEmail ? 'break-all overflow-wrap-anywhere' : ''}`}>
                    {item.isEmail ? (
                      <a 
                        href={`mailto:${item.value}`}
                        className="hover:text-accent transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
