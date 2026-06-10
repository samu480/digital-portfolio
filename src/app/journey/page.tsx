import { GlowButton } from "@/components/GlowButton";
import { journeyItems } from "@/data/projects";
import { ArrowRight, Code2, Rocket, Target } from "lucide-react";

const icons = [Code2, Target, Rocket];

export default function JourneyPage() {
  return (
    <main className="min-h-screen pt-32">
      <section className="section-shell pb-16 pt-10">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-cyanGlow">Journey</p>
        <h1 className="rgb-title mt-4 max-w-4xl text-5xl font-black sm:text-7xl">
          From Recovery To Building
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-white/66">
          Nach einem schweren Einschnitt habe ich mich Schritt für Schritt in Richtung IT aufgebaut.
          Heute lerne ich moderne Technologien, baue echte Projekte und arbeite klar auf die
          Applikationsentwicklung hin.
        </p>
      </section>

      <section className="section-shell pb-28">
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-5 top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyanGlow via-[#ff3df2] to-transparent md:left-1/2" />
          <div className="space-y-8">
            {journeyItems.map((item, index) => {
              const Icon = icons[index];
              return (
                <article key={item.year} className={`relative grid gap-5 md:grid-cols-2 ${index % 2 ? "" : "md:text-right"}`}>
                  <div className={`${index % 2 ? "md:col-start-2" : ""} pl-16 md:px-10`}>
                    <div className="rgb-card rounded-[2rem] p-7">
                      <div className={`mb-4 flex items-center gap-3 ${index % 2 ? "" : "md:justify-end"}`}>
                        <Icon className="text-cyanGlow" size={25} />
                        <span className="text-sm font-black uppercase tracking-[0.22em] text-cyanGlow">{item.year}</span>
                      </div>
                      <h2 className="text-2xl font-black text-white">{item.title}</h2>
                      <p className="mt-3 leading-7 text-white/64">{item.text}</p>
                    </div>
                  </div>
                  <span className="absolute left-2 top-8 grid h-7 w-7 place-items-center rounded-full border border-cyanGlow/50 bg-ink shadow-[0_0_28px_rgba(85,240,255,.28)] md:left-1/2 md:-translate-x-1/2">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyanGlow" />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
        <div className="mt-14 flex justify-center">
          <GlowButton href="/contact">
            Kontakt aufnehmen <ArrowRight className="hidden" />
          </GlowButton>
        </div>
      </section>
    </main>
  );
}

