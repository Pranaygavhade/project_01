"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OriginStory from "@/components/OriginStory";
import Struggles from "@/components/Struggles";
import Growth from "@/components/Growth";
import Projects from "@/components/Projects";
import Future from "@/components/Future";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="relative min-h-screen bg-dark">
        <div className="fixed top-0 left-0 right-0 z-50 py-6">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">PG</div>
          </div>
        </div>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              Pranay Gavhade
            </h1>
            <p className="text-xl text-gray-400">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <OriginStory />
      <Struggles />
      <Growth />
      <Projects />
      <Future />
      <Contact />
    </main>
  );
}
