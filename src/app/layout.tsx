import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fakhri Raihan | GIS Data Engineer & Spatial Database Specialist",
  description:
    "Portfolio of Fakhri Raihan — GIS Data Engineer specializing in spatial data pipelines, enterprise geodatabases, interactive web mapping, GeoAI models, and cloud-native data engineering.",
  keywords: [
    "GIS",
    "Data Engineer",
    "Spatial Database",
    "PostGIS",
    "Web GIS",
    "GeoAI",
    "Python",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Fakhri Raihan" }],
  openGraph: {
    title: "Fakhri Raihan | GIS Data Engineer & Spatial Database Specialist",
    description:
      "Building robust spatial data pipelines, enterprise geodatabases, and AI-powered geospatial solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-[#fafafa]">
        {children}
      </body>
    </html>
  );
}
