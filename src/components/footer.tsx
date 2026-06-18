import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="relative py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="mb-8 bg-[#27272a]" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-[#52525b]">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#a1a1aa]">Fakhri Raihan</span>. All rights
            reserved.
          </p>
          <p className="text-xs text-[#3f3f46] font-[family-name:var(--font-mono)]">
            Engineered with{" "}
            <span className="text-[#52525b]">Next.js</span>,{" "}
            <span className="text-[#52525b]">Tailwind</span>, &{" "}
            <span className="text-[#52525b]">Supabase</span>. Hosted on{" "}
            <span className="text-[#52525b]">Vercel</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
