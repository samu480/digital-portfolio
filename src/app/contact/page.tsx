import { GlowButton } from "@/components/GlowButton";
import { Github, Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32">
      <section className="section-shell grid gap-8 pb-28 pt-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyanGlow">Contact</p>
          <h1 className="rgb-title mt-4 text-5xl font-black sm:text-7xl">
            Let&apos;s Build Something Great
          </h1>
          <p className="mt-6 text-lg leading-9 text-white/66">
            Ich bin offen für spannende IT-Projekte, Lehrstellen-Chancen, Austausch und neue
            Herausforderungen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GlowButton href="mailto:samuel.muller7@icloud.com">Email</GlowButton>
            <GlowButton href="https://github.com/samu480" variant="ghost">
              GitHub
            </GlowButton>
          </div>
        </div>

        <div className="rgb-card relative overflow-hidden rounded-[2rem] p-7 sm:p-10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ff3df2]/18 blur-3xl" />
          <div className="relative grid gap-5">
            <ContactCard icon={Mail} label="Email" value="samuel.muller7@icloud.com" href="mailto:samuel.muller7@icloud.com" />
            <ContactCard icon={Github} label="GitHub" value="github.com/samu480" href="https://github.com/samu480" />
            <div className="rounded-[1.5rem] border border-white/10 bg-black/24 p-6">
              <div className="mb-5 flex items-center gap-3">
                <MessageSquare className="text-cyanGlow" />
                <h2 className="text-xl font-black text-white">Quick Signal</h2>
              </div>
              <p className="leading-7 text-white/62">
                Am besten erreichbar per Email. Für Code, Projekte und Fortschritt ist GitHub der
                beste Überblick.
              </p>
              <a
                href="mailto:samuel.muller7@icloud.com"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyanGlow/30 bg-cyanGlow/10 px-5 py-3 text-sm font-black text-cyanGlow transition hover:bg-cyanGlow hover:text-ink"
              >
                Nachricht starten <Send size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-cyanGlow/50 hover:shadow-[0_0_30px_rgba(85,240,255,.2)]"
    >
      <Icon className="mb-5 text-cyanGlow" size={28} />
      <p className="text-sm font-black uppercase tracking-[0.2em] text-white/42">{label}</p>
      <p className="mt-2 break-words text-xl font-black text-white">{value}</p>
    </a>
  );
}

