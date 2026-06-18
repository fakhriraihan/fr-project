"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects, categories } from "@/data/projects";
import Link from "next/link";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0b0f19]/50 to-[#09090b] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of data engineering, web GIS, and GeoAI projects that solve real-world spatial problems."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#10b981] text-[#022c22] shadow-lg shadow-[#10b981]/20"
                  : "bg-[#18181b] text-[#a1a1aa] border border-[#27272a] hover:border-[#10b981]/30 hover:text-[#fafafa]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-[#18181b]/80 border-[#27272a] card-hover h-full flex flex-col backdrop-blur-sm overflow-hidden group">
                  {/* Project visual header */}
                  <div
                    className={`h-44 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}
                  >
                    {/* Grid overlay */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <span className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </span>
                    {/* Category label */}
                    <span className="absolute top-3 right-3 text-[10px] font-medium font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#fafafa]/60 bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold font-[family-name:var(--font-mono)] text-[#fafafa] leading-tight">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0 flex-1">
                    <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="text-[10px] px-2 py-0.5 border-[#27272a] text-[#71717a] bg-transparent"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0 gap-2 mt-auto">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 h-8 px-3 rounded-[min(var(--radius-md),12px)] text-xs font-medium border border-[#10b981]/50 bg-[#10b981]/10 text-[#10b981] hover:text-[#022c22] hover:bg-[#10b981] transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                    >
                      View Details & Gallery
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
