"use client";

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
