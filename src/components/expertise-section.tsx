"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { TechStack } from "@/components/tech-stack";
import { motion } from "framer-motion";
import {
  Globe,
  Database,
  Monitor,
  BrainCircuit,
} from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "GIS & Spatial Analysis",
    description:
      "Advanced vector/raster processing, remote sensing analysis, and professional cartographic production.",
    capabilities: [
      "Vector & Raster Processing",
      "Remote Sensing & LULC",
      "Cartographic Design",
      "Spatial Statistics",
    ],
  },
  {
    icon: Database,
    title: "Data & Database Engineering",
    description:
      "Designing scalable ETL pipelines, managing enterprise geodatabases, and optimizing spatial queries.",
    capabilities: [
      "ETL/ELT Pipelines",
      "Enterprise Geodatabases",
      "Query Optimization",
      "Data Warehousing",
    ],
  },
  {
    icon: Monitor,
    title: "Web GIS & Development",
    description:
      "Building interactive web mapping applications, full-stack dashboards, and RESTful API integrations.",
    capabilities: [
      "Interactive Web Maps",
      "Full-Stack Dashboards",
      "API Development",
      "Real-time Visualization",
    ],
  },
  {
    icon: BrainCircuit,
    title: "GeoAI & Analytics",
    description:
      "Deploying spatial machine learning models, computer vision for imagery, and predictive analytics.",
    capabilities: [
      "Spatial ML Models",
      "Computer Vision (RS)",
      "Predictive Analytics",
      "Deep Learning / NLP",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 sm:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0b0f19] to-[#09090b] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Core Expertise"
          subtitle="Specialized capabilities across the geospatial data lifecycle — from acquisition and processing to deployment and intelligence."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={cardVariants}>
              <Card className="bg-[#18181b]/80 border-[#27272a] card-hover h-full backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center mb-3">
                    <pillar.icon className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <CardTitle className="text-base font-semibold font-[family-name:var(--font-mono)] text-[#fafafa]">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <ul className="space-y-1.5">
                    {pillar.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="text-xs text-[#71717a] flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#10b981]/60" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <div className="mt-16">
          <TechStack />
        </div>
      </div>
    </section>
  );
}
