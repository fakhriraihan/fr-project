"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Loader2,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from("contact_submissions")
        .insert([formState]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Contact form error:", err);
      setError("Failed to send message. Please try again or email directly.");
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: GithubIcon,
      label: "GitHub",
      href: "https://github.com/fakhriraihan",
      username: "@fakhriraihan",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fakhri-raihan/",
      username: "fakhri-raihan",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:fakhri.raihan13@gmail.com",
      username: "fakhri.raihan13@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      href: "https://www.google.com/maps/place/Jakarta",
      username: "Jakarta, Indonesia",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0b0f19] to-[#09090b] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Build Something Spatial"
          subtitle="Have a project idea, need a geospatial data solution, or want to collaborate? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="bg-[#18181b]/80 border-[#27272a] backdrop-blur-sm">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-xs font-medium text-[#a1a1aa] font-[family-name:var(--font-mono)] uppercase tracking-wider"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        required
                        className="bg-[#09090b] border-[#27272a] text-[#fafafa] placeholder:text-[#52525b] focus:border-[#10b981] focus:ring-[#10b981]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-medium text-[#a1a1aa] font-[family-name:var(--font-mono)] uppercase tracking-wider"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        required
                        className="bg-[#09090b] border-[#27272a] text-[#fafafa] placeholder:text-[#52525b] focus:border-[#10b981] focus:ring-[#10b981]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-xs font-medium text-[#a1a1aa] font-[family-name:var(--font-mono)] uppercase tracking-wider"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project inquiry, collaboration, etc."
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      required
                      className="bg-[#09090b] border-[#27272a] text-[#fafafa] placeholder:text-[#52525b] focus:border-[#10b981] focus:ring-[#10b981]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-medium text-[#a1a1aa] font-[family-name:var(--font-mono)] uppercase tracking-wider"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      required
                      className="bg-[#09090b] border-[#27272a] text-[#fafafa] placeholder:text-[#52525b] focus:border-[#10b981] focus:ring-[#10b981]/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#10b981] hover:bg-[#059669] text-[#022c22] font-semibold gap-2 h-11 cursor-pointer shadow-lg shadow-[#10b981]/20 hover:shadow-[#10b981]/30 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : submitted ? (
                      "Message Sent! ✓"
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {error && (
                    <p className="text-sm text-red-400 text-center mt-2">
                      {error}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg border border-[#27272a] bg-[#18181b]/50 hover:border-[#10b981]/30 hover:bg-[#10b981]/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center group-hover:bg-[#10b981]/20 transition-colors">
                    <link.icon className="w-4 h-4 text-[#10b981]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#71717a] font-[family-name:var(--font-mono)] uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-sm text-[#fafafa] font-medium">
                      {link.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick info card */}
            <div className="p-4 rounded-lg border border-[#27272a] bg-[#18181b]/50 mt-4">
              <p className="text-xs text-[#71717a] font-[family-name:var(--font-mono)] uppercase tracking-wider mb-2">
                Response Time
              </p>
              <p className="text-sm text-[#a1a1aa]">
                I typically respond within{" "}
                <span className="text-[#10b981] font-semibold">24 hours</span>.
                For urgent inquiries, please reach out via email directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
