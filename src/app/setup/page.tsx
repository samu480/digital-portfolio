import { AnimatedSection } from "@/components/AnimatedSection";
import { SetupScene } from "@/components/SetupScene";
import { setupItems } from "@/data/setup";

export default function SetupPage() {
  return (
    <main className="min-h-screen pt-32">
      <section className="section-shell grid gap-10 pb-20 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyanGlow">Setup</p>
          <h1 className="rgb-title mt-4 text-5xl font-black sm:text-7xl">Developer Workspace</h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/66">
            Mein Workspace ist auf Lernen, Bauen und Experimentieren ausgelegt: Code, Preview,
            Terminal, AI-Tools und Projektstruktur sollen schnell zusammen funktionieren.
          </p>
        </div>
        <div className="rgb-card rounded-[2rem] p-3">
          <SetupScene />
        </div>
      </section>

      <AnimatedSection className="section-shell grid gap-5 pb-28 md:grid-cols-2 xl:grid-cols-4">
        {setupItems.map((item) => (
          <article key={item.title} className="rgb-card group rounded-[2rem] p-6 transition hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(85,240,255,.2)]">
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/12 bg-white/8 text-cyanGlow">
              <item.icon size={25} />
            </div>
            <h2 className="text-xl font-black text-white">{item.title}</h2>
            <p className="mt-3 leading-7 text-white/62">{item.text}</p>
          </article>
        ))}
      </AnimatedSection>
    </main>
  );
}

