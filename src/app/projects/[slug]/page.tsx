import { getProject, projects } from "@/data/projects";
import { ArrowLeft, Bot, CheckCircle2, Code2, Gamepad2, Globe2, Palette, Rocket, Target, TerminalSquare } from "lucide-react";
import { notFound } from "next/navigation";

const iconMap = {
  bot: Bot,
  globe: Globe2,
  gamepad: Gamepad2,
  palette: Palette,
  terminal: TerminalSquare,
  code: Code2
};

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = getProject(params.slug);
  return {
    title: project ? `${project.title} | Samuel Müller` : "Project | Samuel Müller"
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const Icon = iconMap[project.icon];

  return (
    <main className="min-h-screen pt-32">
      <section className="section-shell grid gap-8 pb-20 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <a href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/58 transition hover:text-cyanGlow">
            <ArrowLeft size={16} /> Back to Projects
          </a>
          <p className="text-sm font-black uppercase tracking-[0.24em]" style={{ color: project.accent }}>
            {project.kicker}
          </p>
          <h1 className="mt-4 text-5xl font-black text-white sm:text-7xl">{project.title}</h1>
          <p className="mt-6 text-lg leading-9 text-white/68">{project.longDescription}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm font-bold text-white/72">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="rgb-card relative min-h-[420px] overflow-hidden rounded-[2rem] p-7">
          <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle at 70% 20%, ${project.accent}33, transparent 36%)` }} />
          <div className="relative flex h-full min-h-[360px] flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="grid h-16 w-16 place-items-center rounded-2xl border border-white/12 bg-white/8">
                <Icon size={32} color={project.accent} />
              </div>
              <span className="rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white/72">
                {project.status}
              </span>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/24 p-5">
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff3df2]" />
                <span className="h-3 w-3 rounded-full bg-cyanGlow" />
                <span className="h-3 w-3 rounded-full bg-limeGlow" />
              </div>
              <p className="font-mono text-sm leading-7 text-white/70">
                project.status = &quot;{project.status}&quot;;
                <br />
                stack.run({project.tech.slice(0, 3).join(" + ")});
                <br />
                build.focus(&quot;real functionality&quot;);
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-5 pb-28 lg:grid-cols-3">
        <InfoBlock title="Features" icon={CheckCircle2} items={project.features} />
        <InfoBlock title="Lessons Learned" icon={Target} items={project.lessons} />
        <InfoBlock title="Next Steps" icon={Rocket} items={project.nextSteps} />
      </section>
    </main>
  );
}

function InfoBlock({
  title,
  items,
  icon: Icon
}: {
  title: string;
  items: string[];
  icon: typeof CheckCircle2;
}) {
  return (
    <article className="rgb-card rounded-[2rem] p-6">
      <Icon className="mb-5 text-cyanGlow" size={28} />
      <h2 className="text-2xl font-black text-white">{title}</h2>
      <ul className="mt-5 space-y-3 text-white/64">
        {items.map((item) => (
          <li key={item} className="leading-7">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
