"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-mono)] text-sm sm:text-base font-bold tracking-tight group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-[#fafafa]">Fakhri Raihan</span>
            <span className="text-[#a1a1aa] mx-1.5">//</span>
            <span className="text-[#10b981] group-hover:text-[#34d399] transition-colors">
              GIS-DE
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors rounded-md hover:bg-white/5 font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="ml-3 pl-3 border-l border-[#27272a]">
              <Button
                size="sm"
                className="bg-[#10b981] hover:bg-[#059669] text-[#022c22] font-semibold gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-[#27272a]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-2.5 text-sm text-[#a1a1aa] hover:text-[#fafafa] hover:bg-white/5 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  size="sm"
                  className="w-full bg-[#10b981] hover:bg-[#059669] text-[#022c22] font-semibold gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download CV
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
