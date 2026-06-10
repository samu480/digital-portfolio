"use client";

import { Project } from "@/data/projects";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Bot, Code2, Gamepad2, Globe2, Palette, TerminalSquare } from "lucide-react";
import Link from "next/link";

const iconMap = {
  bot: Bot,
  globe: Globe2,
  gamepad: Gamepad2,
  palette: Palette,
  terminal: TerminalSquare,
  code: Code2
};

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const Icon = iconMap[project.icon];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65, delay: index * 0.05 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="rgb-card group relative min-h-[360px] overflow-hidden rounded-[2rem] p-6"
    >
      <div
        className="absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl transition group-hover:scale-125"
        style={{ backgroundColor: `${project.accent}24` }}
      />
      <div className="relative flex items-start justify-between gap-5">
        <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/12 bg-white/8 text-white shadow-[0_0_28px_rgba(85,240,255,.16)]">
          <Icon size={27} color={project.accent} />
        </div>
        <span className="rounded-full border border-white/12 bg-white/7 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white/72">
          {project.status}
        </span>
      </div>

      <p className="relative mt-8 text-sm font-black uppercase tracking-[0.22em]" style={{ color: project.accent }}>
        {project.kicker}
      </p>
      <h3 className="relative mt-3 text-2xl font-black text-white">{project.title}</h3>
      <p className="relative mt-4 leading-7 text-white/64">{project.description}</p>

      <div className="relative mt-7 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((tag) => (
          <span key={tag} className="rounded-full bg-white/[0.055] px-3 py-1.5 text-xs font-bold text-white/58">
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm font-black text-white/76 transition hover:border-cyanGlow/50 hover:text-white"
      >
        View Case <ArrowUpRight size={16} />
      </Link>
    </motion.article>
  );
}
