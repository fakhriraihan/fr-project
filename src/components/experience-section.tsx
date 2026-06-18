"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Land Database Supervisor",
    company: "PT Cita Mineral Investindo Tbk",
    period: "September 2025 - Present",
    description:
      "Responsible for managing the company's land database, ensuring data accuracy and integrity, and providing technical support to users.",
    achievements: [
      "Collaborated with cross-functional teams to design and implement a new land database management system.",
      "Optimized data collection processes reducing data entry time by 30%.",
      "Mentored junior engineers and established CI/CD practices for GIS workflows.",
    ],
    tech: ["Python", "PostGIS", "ArcGIS Pro", "ArcGIS Online", "ArcGIS Enterprise", "PostgreSQL"],
  },
  {
    id: "exp-2",
    role: "GIS Engineer",
    company: "PT Esri Indonesia",
    period: "August 2024 - August 2025",
    description:
      "Responsible for the implementation and development of GIS software and services for customers across various industries.",
    achievements: [
      "Supporting customers with technical expertise and solutions for GIS software implementation.",
      "Handling customer inquiries and providing technical support for GIS software and services.",
      "Developing and delivering technical training programs for customers and partners.",
      "Troubleshooting and resolving technical issues related to GIS software and services.",
    ],
    tech: ["ArcGIS Pro", "ArcGIS Online", "ArcGIS Enterprise", "Python", "PostgreSQL"],
  },
  {
    id: "exp-3",
    role: "Associate GIS Engineer",
    company: "PT Esri Indonesia",
    period: "July 2023 - January 2024",
    description:
      "Responsible for the implementation and development of GIS software and services for customers across various industries.",
    achievements: [
      "Supporting customers with technical expertise and solutions for GIS software implementation.",
      "Handling customer inquiries and providing technical support for GIS software and services.",
      "Developing and delivering technical training programs for customers and partners.",
      "Troubleshooting and resolving technical issues related to GIS software and services.",
    ],
    tech: ["ArcGIS Pro", "ArcGIS Online", "ArcGIS Enterprise", "Python", "PostgreSQL"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0b0f19]/30 to-[#09090b] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey in building geospatial solutions and managing data pipelines."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mt-12"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#27272a] to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-12 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[11px] md:left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.5)] ring-4 ring-[#09090b]" />

                <div className="p-6 rounded-xl border border-[#27272a] bg-[#18181b]/50 backdrop-blur-sm hover:border-[#10b981]/30 hover:bg-[#18181b]/80 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#fafafa] font-[family-name:var(--font-mono)]">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase className="w-4 h-4 text-[#10b981]" />
                        <span className="text-base text-[#a1a1aa] font-medium">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="w-fit bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20 px-3 py-1 text-xs whitespace-nowrap"
                    >
                      {exp.period}
                    </Badge>
                  </div>

                  <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]/60 mt-1.5 shrink-0" />
                        <span className="text-sm text-[#71717a]">{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#27272a]/50">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium text-[#52525b] group-hover:text-[#71717a] transition-colors"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
