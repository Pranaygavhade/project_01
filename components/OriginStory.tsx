"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function OriginStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="origin" className="min-h-screen flex items-center py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8 gradient-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            👉 Where It All Started
          </motion.h2>

          <motion.div
            className="glass p-8 md:p-12 rounded-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              My journey into Computer Science began with a simple question:{" "}
              <span className="text-neonPurple font-semibold">
                "How does technology actually work?"
              </span>
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              From dismantling gadgets as a kid to writing my first "Hello World" program,
              I was hooked. The idea that a few lines of code could create something
              meaningful fascinated me.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Choosing CSE with AI specialization wasn't just a career decision—it was
              about being part of the future. A future where{" "}
              <span className="text-neonOrange font-semibold">
                intelligent systems solve real-world problems
              </span>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
