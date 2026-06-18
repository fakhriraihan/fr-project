"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  category: string;
}

const techItems: TechItem[] = [
  // Databases
  { name: "PostgreSQL", category: "Database" },
  { name: "PostGIS", category: "Database" },
  { name: "Supabase", category: "Database" },
  { name: "SQL Server", category: "Database" },

  // Languages & Frameworks
  { name: "Python", category: "Language" },
  { name: "FastAPI", category: "Framework" },
  { name: "Django", category: "Framework" },
  { name: "Streamlit", category: "Framework" },

  // GIS Tools
  { name: "ArcGIS Pro", category: "GIS" },
  { name: "ArcGIS Enterprise", category: "GIS" },
  { name: "QGIS", category: "GIS" },
  { name: "GeoServer", category: "GIS" },
  { name: "Google Earth Engine", category: "GIS" },

  // Web
  { name: "Next.js", category: "Web" },
  { name: "React", category: "Web" },
  { name: "Tailwind CSS", category: "Web" },
  { name: "TypeScript", category: "Web" },
  { name: "Leaflet", category: "Web" },
  { name: "MapLibre GL", category: "Web" },

  // ML & AI
  { name: "Scikit-Learn", category: "ML" },
  { name: "TensorFlow", category: "ML" },
  { name: "XGBoost", category: "ML" },

  // DevOps
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "DevOps" },
  { name: "Vercel", category: "DevOps" },
  { name: "Linux", category: "DevOps" },
];

const categoryColors: Record<string, string> = {
  Database: "border-[#10b981]/30 text-[#10b981] hover:bg-[#10b981]/10",
  Language: "border-[#f59e0b]/30 text-[#f59e0b] hover:bg-[#f59e0b]/10",
  Framework: "border-[#f59e0b]/30 text-[#f59e0b] hover:bg-[#f59e0b]/10",
  GIS: "border-[#06b6d4]/30 text-[#06b6d4] hover:bg-[#06b6d4]/10",
  Web: "border-[#8b5cf6]/30 text-[#8b5cf6] hover:bg-[#8b5cf6]/10",
  ML: "border-[#ec4899]/30 text-[#ec4899] hover:bg-[#ec4899]/10",
  DevOps: "border-[#a1a1aa]/30 text-[#a1a1aa] hover:bg-[#a1a1aa]/10",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export function TechStack() {
  return (
    <div className="text-center">
      <p className="text-sm font-medium text-[#a1a1aa] mb-5 font-[family-name:var(--font-mono)] uppercase tracking-widest">
        Tech Stack
      </p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {techItems.map((item) => (
          <motion.div key={item.name} variants={badgeVariants}>
            <Badge
              variant="outline"
              className={`px-3 py-1 text-xs font-medium transition-colors cursor-default bg-transparent ${
                categoryColors[item.category] || ""
              }`}
            >
              {item.name}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
