import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16 bg-[#09090b] min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{project.icon}</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#fafafa] font-[family-name:var(--font-mono)]">
                {project.title}
              </h1>
            </div>
            
            <p className="text-lg text-[#a1a1aa] leading-relaxed max-w-3xl mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="bg-[#18181b] hover:bg-[#27272a] text-[#a1a1aa] border border-[#27272a]"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          {/* Image Gallery Area */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#fafafa] font-[family-name:var(--font-mono)]">Project Imagery</h2>
              <Badge variant="outline" className="border-[#f59e0b]/30 text-[#f59e0b] bg-[#f59e0b]/10 gap-1.5">
                <Lock className="w-3 h-3" />
                Sensitive Data Redacted
              </Badge>
            </div>

            {project.images && project.images.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((img, i) => (
                  <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-[#27272a] bg-[#18181b]">
                    <Image 
                      src={img} 
                      alt={`${project.title} screenshot ${i + 1}`} 
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* Placeholder when no images exist */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="aspect-video rounded-xl border border-dashed border-[#27272a] bg-[#18181b]/50 flex flex-col items-center justify-center p-6 text-center group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#27272a] flex items-center justify-center mb-4 group-hover:bg-[#10b981]/10 transition-colors">
                      <Lock className="w-5 h-5 text-[#71717a] group-hover:text-[#10b981] transition-colors" />
                    </div>
                    <p className="text-sm font-medium text-[#fafafa]">Protected View</p>
                    <p className="text-xs text-[#a1a1aa] mt-1">Image {i} reserved for authorized viewing</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
