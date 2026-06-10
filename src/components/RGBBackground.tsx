"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function RGBBackground() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const smoothX = useSpring(x, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 24 });
  const glowX = useTransform(smoothX, (value) => `${value * 100}%`);
  const glowY = useTransform(smoothY, (value) => `${value * 100}%`);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX / window.innerWidth);
      y.set(event.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 cyber-grid opacity-45" />
      <div className="absolute inset-0 rgb-noise opacity-[0.08]" />
      <motion.div
        className="absolute h-[38rem] w-[38rem] max-w-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyanGlow/18 blur-3xl"
        style={{ left: glowX, top: glowY }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-[-12rem] top-16 h-[34rem] w-[34rem] max-w-[100vw] rounded-full bg-[conic-gradient(from_180deg,#55f0ff,#9b7cff,#ff3df2,#2563eb,#55f0ff)] opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-12rem] right-[-8rem] h-[36rem] w-[36rem] max-w-[100vw] rounded-full bg-violetGlow/20 blur-3xl"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanGlow to-transparent" />
    </div>
  );
}
