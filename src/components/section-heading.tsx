"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2
        className="text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-mono)]"
      >
        {title}
      </h2>
      <div className="mt-3 flex items-center gap-3 justify-center">
        <div className="h-[2px] w-8 bg-[#10b981]" />
        <div className="h-[2px] w-2 bg-[#10b981]/50" />
        <div className="h-[2px] w-1 bg-[#10b981]/30" />
      </div>
      {subtitle && (
        <p className="mt-4 text-[#a1a1aa] text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
