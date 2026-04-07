"use client";

import { useScroll, motion } from "motion/react";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      className="bg-tertiary fixed top-0 right-0 left-0 h-0.5 origin-left"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}
