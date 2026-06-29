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
    company: "Cita Mineral Investindo (Harita Bauxite)",
    period: "September 2025 - Present",
    description:
      "Harita Bauxite is a leading Indonesian natural resources company with a fully integrated bauxite value chain, from mining to producing value-added alumina.",
    achievements: [
      "Managed spatial and operational enterprise databases & server system (ArcGIS Enterprise & Geoserver)",
      "Built ETL pipelines using Python, SQL, and Apache Airflow for automated data processing and delivery.",
      "Processed and analyzed multi-source mining data via APIs to generate insights for management.",
      "Developed internal web applications, dashboards, and data platforms for monitoring and reporting.",
      "Collaborated across teams to automate workflows, improve integration, and strengthen data governance.",
    ],
    tech: ["Python", "SQL", "PostGIS", "Apache Airflow", "QGIS", "ArcGIS Pro", "ArcGIS Enterprise", "Geoserver", "PostgreSQL"],
  },
  {
    id: "exp-2",
    role: "GIS Engineer",
    company: "Esri Indonesia",
    period: "August 2024 - August 2025",
    description:
      "Esri is a global leader in GIS and location intelligence, serving Fortune 500 companies and holding over 45% of the GIS market share.",
    achievements: [
      "Developed GIS software solutions, ETL, and spatial datasets for more than 5 client projects.",
      "Delivered over 5 GIS workshops and consultation sessions for various industries.",
      "Managed and optimized enterprise systems and geodatabases across on-premise and cloud environments.",
      "Conducted spatial data processing & analysis (Machine Learning) in banking & telecommunication industry.",
      "Collected, cleaned, and organized over 2M+ POI data records for business and project use.",
    ],
    tech: ["ArcGIS Pro", "ArcGIS Online", "ArcGIS Enterprise", "Python", "SQL", "ArcPy", "Arcade", "RDBMS"],
  },
  {
    id: "exp-3",
    role: "Associate GIS Engineer",
    company: "PT Esri Indonesia",
    period: "July 2023 - January 2024",
    description:
      "Selected among top students and fresh graduates from universities across Indonesia to gain hands-on experience in real-world projects.",
    achievements: [
      "Collected and managed 2M+ POI data to support a new business line (Data Service).",
      "Built a scalable data management system with enterprise geodatabase and ArcGIS.",
      "Collaborated with the team using Git to build and deploy automated scripts.",
      "Executed automated data scraping from diverse external sources to enrich the dataset.",
      "Developed market analysis case studies for banking and retail sectors using POI data.",
    ],
    tech: ["ArcGIS Pro", "ArcGIS Online", "ArcGIS Enterprise", "Python", "PostgreSQL", "SQL", "GIT"],
  },
  {
    id: "exp-4",
    role: "Research Assistant Lecturer",
    company: "Universitas Gadjah Mada",
    period: "August 2023 - August 2024",
    description:
      "Participated in two research projects: \"ChatGPT Research for the Creation of the 2020 Ambient Air Quality Web GIS for Yogyakarta City\" and \"The Creation of the Geovisualization Dashboard of the Indonesian Presidential Election Results in 2024\".",
    achievements: [
      "Assisted in designing research proposals and drafting academic publications.",
      "Developed web-based systems and automated data crawling workflows.",
      "Processed and visualized geospatial data for web dashboards.",
    ],
    tech: ["ArcGIS Pro", "ArcGIS Online", "ArcGIS Enterprise", "Python", "PostgreSQL", "SQL", "GIT"],
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
