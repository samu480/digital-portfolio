import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowButton } from "@/components/GlowButton";
import { Hero3D } from "@/components/Hero3D";
import { ProjectGallery } from "@/components/ProjectGallery";
import { rgbStack } from "@/data/skills";
import { ArrowDown, Cpu, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden pt-28">
      <section className="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanGlow/24 bg-cyanGlow/10 px-4 py-2 text-sm font-bold text-cyanGlow shadow-[0_0_28px_rgba(85,240,255,.16)]">
            <span className="h-2 w-2 rounded-full bg-limeGlow shadow-[0_0_16px_rgba(182,255,99,.8)]" />
            Schweiz · Junior Developer in Progress
          </div>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
            Samuel Müller
            <span className="mt-3 block bg-gradient-to-r from-cyanGlow via-[#ff3df2] to-violetGlow bg-clip-text text-3xl text-transparent sm:text-5xl">
              Creative Junior Developer
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-white/68">
            Ich baue moderne Webseiten, AI-Tools und digitale Systeme mit Fokus auf Design,
            Animation und echter Funktionalität.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <GlowButton href="/projects">Explore Projects</GlowButton>
            <GlowButton href="/setup" variant="ghost">
              View Setup
            </GlowButton>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-x-10 bottom-10 h-32 rounded-full bg-cyanGlow/20 blur-3xl" />
          <Hero3D />
        </div>
      </section>

      <AnimatedSection className="section-shell py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            { title: "3D Web", text: "React Three Fiber, Motion und echte visuelle Experiences.", icon: Sparkles },
            { title: "AI Tools", text: "Lokale Workflows, Automatisierung und produktive Systeme.", icon: Cpu },
            { title: "Real Projects", text: "Lernen durch Projekte, die man zeigen und weiterbauen kann.", icon: Zap }
          ].map((item) => (
            <div key={item.title} className="rgb-card rounded-[2rem] p-7">
              <item.icon className="mb-6 text-cyanGlow" size={30} />
              <h2 className="text-2xl font-black text-white">{item.title}</h2>
              <p className="mt-3 leading-7 text-white/62">{item.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyanGlow">Featured Projects</p>
            <h2 className="mt-3 text-4xl font-black text-white sm:text-6xl">RGB Project Grid</h2>
          </div>
          <GlowButton href="/projects" variant="ghost">
            All Projects
          </GlowButton>
        </div>
        <ProjectGallery />
      </AnimatedSection>

      <AnimatedSection className="section-shell py-20">
        <div className="rgb-card rounded-[2rem] p-7 sm:p-10">
          <div className="mb-8 flex items-center gap-3">
            <ArrowDown className="text-cyanGlow" />
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyanGlow">Current Stack</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {rgbStack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm font-bold text-white/72">
                {item}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
