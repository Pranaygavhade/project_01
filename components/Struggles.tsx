"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Struggles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const struggles = [
    {
      title: "The Syntax Maze",
      description: "Every language felt like learning a new alphabet. Semicolons, brackets, indentation—one mistake and everything breaks.",
    },
    {
      title: "Logic Building",
      description: "Understanding the problem was easy. Breaking it down into code? That was the real challenge.",
    },
    {
      title: "Debugging Nightmares",
      description: "Hours spent hunting for that one missing character. The frustration was real, but so was the learning.",
    },
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6 bg-darkGray/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          👉 The Challenges I Faced
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {struggles.map((struggle, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-neonPurple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <h3 className="text-2xl font-bold mb-4 text-neonPink relative z-10">
                {struggle.title}
              </h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                {struggle.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xl text-gray-400 mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          But every struggle taught me something valuable:{" "}
          <span className="text-neonGold font-semibold">persistence pays off</span>.
        </motion.p>
      </div>
    </section>
  );
}
