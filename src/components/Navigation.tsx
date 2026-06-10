"use client";

import { navItems } from "@/data/projects";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4"
    >
      <nav
        className={`section-shell flex items-center justify-between rounded-full border px-4 py-3 transition ${
          scrolled
            ? "border-cyanGlow/25 bg-[#05070d]/82 shadow-[0_0_34px_rgba(85,240,255,.18)]"
            : "border-white/10 bg-white/[0.04]"
        } backdrop-blur-2xl`}
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-black text-ink">
            <span className="absolute inset-0 rounded-full bg-cyanGlow/40 blur-xl" />
            <span className="relative">SM</span>
          </span>
          <span className="hidden text-sm font-black uppercase tracking-[0.18em] text-white/90 sm:block">
            Samuel Müller
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  active ? "bg-white text-ink" : "text-white/62 hover:bg-white/8 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-full border border-cyanGlow/30 bg-cyanGlow/12 px-5 py-2 text-sm font-black text-cyanGlow shadow-[0_0_24px_rgba(85,240,255,.16)] transition hover:bg-cyanGlow hover:text-ink lg:block"
        >
          Let&apos;s Talk
        </Link>

        <button
          type="button"
          aria-label={open ? "Navigation schliessen" : "Navigation öffnen"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/7 text-white lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-shell mt-3 rounded-[1.5rem] border border-cyanGlow/20 bg-[#05070d]/94 p-3 shadow-[0_0_32px_rgba(85,240,255,.18)] backdrop-blur-2xl lg:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-bold text-white/72 hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      ) : null}
    </motion.header>
  );
}
