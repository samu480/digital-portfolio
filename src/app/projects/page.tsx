import { ProjectGallery } from "@/components/ProjectGallery";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32">
      <section className="section-shell pb-16 pt-10">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-cyanGlow">Projects</p>
        <h1 className="rgb-title mt-4 max-w-4xl text-5xl font-black sm:text-7xl">
          Animated 3D Gallery
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-white/66">
          Laufende Projekte, Experimente und Produktideen als moderne Developer-Gallery mit
          RGB-Glow, Tilt-Interaktion und klaren Case-Study Detailseiten.
        </p>
      </section>
      <section className="section-shell pb-28">
        <ProjectGallery />
      </section>
    </main>
  );
}

