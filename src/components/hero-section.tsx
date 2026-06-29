"use client";

import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/animated-background";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden topo-pattern"
    >
      {/* Animated canvas background */}
      <AnimatedBackground />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090b]/30 to-[#09090b] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#10b981]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#27272a] bg-[#18181b]/80 text-xs text-[#a1a1aa] mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse-dot" />
          Available for new projects
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-mono)]"
        >
          Bridging the Gap Between{" "}
          <span className="gradient-text">Spatial Data</span>,{" "}
          <span className="text-[#fafafa]">Engineering</span>, and{" "}
          <span className="gradient-text">GeoAI</span>.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-3xl mx-auto leading-relaxed"
        >
          Hi, I&apos;m{" "}
          <span className="text-[#fafafa] font-semibold">Fakhri Raihan</span>. I build
          robust spatial data pipelines, analyse geospatial data, manage enterprise geodatabases, develop
          interactive web mapping applications, and deploy GeoAI models to turn
          complex data into actionable insights.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => handleScroll("#projects")}
            className="bg-[#10b981] hover:bg-[#059669] text-[#022c22] font-semibold gap-2 px-8 h-12 text-base cursor-pointer shadow-lg shadow-[#10b981]/20 hover:shadow-[#10b981]/30 transition-all"
          >
            Explore My Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleScroll("#contact")}
            className="border-[#27272a] hover:border-[#10b981]/50 text-[#a1a1aa] hover:text-[#fafafa] gap-2 px-8 h-12 text-base cursor-pointer hover:bg-[#10b981]/5 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            Let&apos;s Connect
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 rounded-full border-2 border-[#27272a] flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
            className="w-1 h-2 rounded-full bg-[#10b981]"
          />
        </div>
      </motion.div>
    </section>
  );
}
