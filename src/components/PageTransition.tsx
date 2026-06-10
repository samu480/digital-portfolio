"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition() {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      transition={{ duration: 0.62, ease: [0.76, 0, 0.24, 1] }}
      className="pointer-events-none fixed inset-0 z-[80] origin-right bg-gradient-to-r from-cyanGlow via-violetGlow to-[#ff3df2]"
    />
  );
}

