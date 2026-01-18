"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

/**
 * Skills section - visual system, never lists
 * Interactive glass cards with depth
 */
const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL", "Python"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Vercel", "VS Code", "Postman"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Technologies",
    skills: ["Framer Motion", "GSAP", "Three.js", "WebSockets", "JWT", "OAuth"],
    color: "from-accent/20 to-accent-light/20",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
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
          <h2 className="text-5xl md:text-6xl font-extralight mb-4 tracking-[-0.02em]">Skills</h2>
          <p className="text-white/50 text-lg md:text-xl font-light">Visual system of expertise</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass glass-thick rounded-glass-lg p-8 glass-edge relative overflow-hidden group cursor-pointer"
            >
              {/* Gradient accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-light mb-8 text-white/95 tracking-[-0.01em]">
                  {category.title}
                </h3>

                {/* Visual skill representation - not a list */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      {/* Visual bar indicator */}
                      <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + skillIndex * 0.05 + 0.2,
                            duration: 0.6,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="h-full bg-accent rounded-full"
                        />
                      </div>
                      <span className="text-sm md:text-base text-white/75 font-light min-w-[100px] text-right tracking-[-0.01em]">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
