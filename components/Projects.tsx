"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "DSA Visualizer",
      description: "Interactive tool to visualize sorting algorithms and data structures in real-time.",
      tech: ["React", "TypeScript", "Tailwind"],
      gradient: "from-neonPurple to-neonPink",
    },
    {
      title: "AI Chatbot",
      description: "Conversational AI assistant built with natural language processing capabilities.",
      tech: ["Python", "TensorFlow", "Flask"],
      gradient: "from-neonOrange to-neonGold",
    },
    {
      title: "Code Snippet Manager",
      description: "Personal tool to organize and search through code snippets efficiently.",
      tech: ["Next.js", "MongoDB", "Node.js"],
      gradient: "from-neonPink to-neonPurple",
    },
    {
      title: "Portfolio Website",
      description: "This cinematic storytelling portfolio you're currently viewing.",
      tech: ["Next.js", "Framer Motion", "Tailwind"],
      gradient: "from-neonGold to-neonOrange",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-darkGray/30" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          💼 What I'm Building
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-3xl group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white relative z-10">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6 relative z-10">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-darkGray/50 rounded-full text-sm text-neonPurple border border-neonPurple/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 relative z-10">
                <motion.button
                  className="px-6 py-2 bg-gradient-to-r from-neonPurple to-neonPink rounded-full text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.button>
                <motion.button
                  className="px-6 py-2 glass rounded-full text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.button>
              </div>

              <motion.div
                className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, #a855f7, #ec4899)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
