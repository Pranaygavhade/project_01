"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const socials = [
    {
      name: "Email",
      icon: "📧",
      link: "mailto:pranay@example.com",
      handle: "pranay@example.com",
    },
    {
      name: "GitHub",
      icon: "💻",
      link: "https://github.com/pranaygavhade",
      handle: "@pranaygavhade",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      link: "https://linkedin.com/in/pranaygavhade",
      handle: "Pranay Gavhade",
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6 bg-darkGray/50" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          📬 Let's Connect
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have a project in mind? Want to collaborate? Or just want to say hi?
          I'd love to hear from you!
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-2xl text-center group hover:glow-box transition-all"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                {social.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-neonPurple">
                {social.name}
              </h3>
              <p className="text-gray-400 text-sm">{social.handle}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="glass p-8 md:p-12 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-darkGray/50 rounded-xl border border-gray-700 focus:border-neonPurple focus:outline-none focus:ring-2 focus:ring-neonPurple/50 transition-all text-white"
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 bg-darkGray/50 rounded-xl border border-gray-700 focus:border-neonPurple focus:outline-none focus:ring-2 focus:ring-neonPurple/50 transition-all text-white"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full px-6 py-4 bg-darkGray/50 rounded-xl border border-gray-700 focus:border-neonPurple focus:outline-none focus:ring-2 focus:ring-neonPurple/50 transition-all text-white resize-none"
              />
            </div>
            
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-400 text-center"
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-400 text-center"
              >
                ❌ Failed to send message. Please try again or email me directly.
              </motion.div>
            )}
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-neonPurple to-neonPink rounded-xl font-semibold text-lg hover:scale-105 transition-transform glow-box disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        <motion.p
          className="text-center text-gray-500 mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          © 2024 Pranay Gavhade. Built with passion and code.
        </motion.p>
      </div>
    </section>
  );
}
