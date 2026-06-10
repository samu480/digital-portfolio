import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type GlowButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
};

export function GlowButton({ href, children, variant = "primary" }: GlowButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-black uppercase tracking-[0.14em] transition";
  const styles =
    variant === "primary"
      ? "bg-white text-ink shadow-[0_0_34px_rgba(85,240,255,.28)] hover:bg-cyanGlow"
      : "border border-white/14 bg-white/7 text-white backdrop-blur-xl hover:border-cyanGlow/60 hover:shadow-[0_0_32px_rgba(85,240,255,.28)]";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      <ArrowUpRight className="relative h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

