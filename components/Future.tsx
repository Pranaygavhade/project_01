"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Future() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const goals = [
    {
      icon: "🤖",
      title: "AI Engineer",
      description: "Building intelligent systems that make a real difference in people's lives.",
    },
    {
      icon: "💼",
      title: "Freelancing",
      description: "Creating custom solutions for clients worldwide while maintaining creative freedom.",
    },
    {
      icon: "🚀",
      title: "Impactful Solutions",
      description: "Developing products that solve real problems and scale to help millions.",
    },
  ];

  return (
    <section id="future" className="min-h-screen flex items-center py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          🚀 Where I'm Going
        </motion.h2>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The journey has just begun. Every line of code I write today is a step toward
            building the future I envision—one where{" "}
            <span className="text-neonGold font-semibold">
              technology empowers humanity
            </span>
            .
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-3xl text-center group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-neonPurple/20 via-neonPink/20 to-neonOrange/20 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <motion.div
                className="text-6xl mb-6 relative z-10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {goal.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 text-neonPurple relative z-10">
                {goal.title}
              </h3>

              <p className="text-gray-300 leading-relaxed relative z-10">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-lg text-gray-400">
            The best way to predict the future is to{" "}
            <span className="text-neonPink font-semibold">build it</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
