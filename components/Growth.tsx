"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Growth() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "C++", level: 75, color: "neonPurple" },
    { name: "Data Structures", level: 70, color: "neonPink" },
    { name: "Algorithms", level: 65, color: "neonOrange" },
    { name: "Problem Solving", level: 80, color: "neonGold" },
    { name: "AI Basics", level: 60, color: "neonPurple" },
  ];

  return (
    <section id="growth" className="min-h-screen flex items-center py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          📈 Learning & Growth
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-neonPurple">
              Skills I'm Mastering
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Every day is a new opportunity to learn. From solving DSA problems to
              understanding AI concepts, I'm constantly pushing my boundaries.
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-200 font-semibold">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-darkGray rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r from-${skill.color} to-neonPink`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      style={{
                        boxShadow: `0 0 20px rgba(168, 85, 247, 0.5)`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {[
              { number: "500+", label: "Problems Solved" },
              { number: "10+", label: "Projects Built" },
              { number: "3+", label: "Languages Learned" },
              { number: "∞", label: "Curiosity Level" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-2xl text-center group hover:glow-box transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </h4>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
