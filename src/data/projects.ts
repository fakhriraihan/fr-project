export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  icon: string;
  images?: string[]; // Paths to project screenshots
}

export const categories = ["All", "Data Pipelines", "Web GIS", "GeoAI", "Analytics"];

export const projects: Project[] = [
  {
    id: "sentinel-explorer",
    title: "Sentinel-2 Imagery Explorer",
    description:
      "Built an automated pipeline for Sentinel-2 satellite imagery acquisition, cloud masking, and spectral index computation. Reduced analyst manual processing time by 80% and enabled near-real-time LULC change monitoring.",
    category: "GeoAI",
    tech: ["Python", "Google Earth Engine", "Scikit-Learn", "Streamlit"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-[#10b981]/20 to-[#06b6d4]/20",
    icon: "🛰️",
    images: [],
  },
  {
    id: "postgis-migration",
    title: "PostGIS Cloud Migration Pipeline",
    description:
      "Designed and executed a zero-downtime migration of 50+ enterprise geodatabases from on-premise SQL Server to cloud-hosted PostgreSQL/PostGIS. Achieved 3x query performance improvement through spatial indexing optimization.",
    category: "Data Pipelines",
    tech: ["PostgreSQL", "PostGIS", "Docker", "Python", "FastAPI"],
    githubUrl: "#",
    gradient: "from-[#8b5cf6]/20 to-[#06b6d4]/20",
    icon: "🗄️",
    images: [],
  },
  {
    id: "mining-dashboard",
    title: "Mining Concession Monitoring Dashboard",
    description:
      "Full-stack web application for real-time monitoring of mining concession overlaps against regulatory boundaries. Integrated with ArcGIS Enterprise for automated overlay analysis and compliance reporting.",
    category: "Web GIS",
    tech: ["Next.js", "Leaflet", "Supabase", "ArcGIS Enterprise", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-[#f59e0b]/20 to-[#10b981]/20",
    icon: "⛏️",
    images: [],
  },
  {
    id: "hotspot-predictor",
    title: "Fire Hotspot Prediction Model",
    description:
      "Developed a spatial ML model using XGBoost and historical MODIS/VIIRS hotspot data to predict wildfire-prone zones. Model achieved 92% recall on validation data and powers a Telegram alert bot for early warning.",
    category: "GeoAI",
    tech: ["Python", "XGBoost", "TensorFlow", "GeoServer", "PostGIS"],
    githubUrl: "#",
    gradient: "from-[#ef4444]/20 to-[#f59e0b]/20",
    icon: "🔥",
    images: [],
  },
  {
    id: "etl-overlay",
    title: "Automated GIS Overlay ETL System",
    description:
      "Production ETL pipeline implementing Medallion Architecture (Bronze → Silver → Gold) for geospatial overlay analysis. Processes 10,000+ feature classes daily with full lineage tracking and SDE workspace management.",
    category: "Data Pipelines",
    tech: ["Python", "ArcGIS Pro", "SQL Server", "Batch Scripting"],
    githubUrl: "#",
    gradient: "from-[#06b6d4]/20 to-[#8b5cf6]/20",
    icon: "⚙️",
    images: [],
  },
  {
    id: "spatial-analytics-bi",
    title: "Spatial Business Intelligence Platform",
    description:
      "Interactive analytics dashboard combining demographic, environmental, and economic spatial datasets. Features dynamic choropleth maps, spatial clustering, and exportable reports for executive decision-making.",
    category: "Analytics",
    tech: ["Streamlit", "Python", "PostGIS", "Plotly", "MapLibre GL"],
    liveUrl: "#",
    gradient: "from-[#10b981]/20 to-[#8b5cf6]/20",
    icon: "📊",
    images: [],
  },
];
