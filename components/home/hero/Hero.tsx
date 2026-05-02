"use client";

import { useMounted } from "@/hooks/useMounted";
import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "motion/react";
import { AnimatedHero } from "./AnimatedHero";
import { StaticHero } from "./StaticHero";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  // Make hero vanish as we scroll down.
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  let hero = null;
  if (mounted) {
    hero = resolvedTheme == "dark" ? <AnimatedHero /> : <StaticHero />;
  }
  return (
    <motion.div
      style={{ opacity }}
      className="flex w-full flex-col items-center gap-8"
    >
      {hero}
    </motion.div>
  );
}
