"use client";

import { useMounted } from "@/hooks/useMounted";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { AnimatedHero } from "./AnimatedHero";
import { StaticHero } from "./StaticHero";
import { useHomeScrollReveal } from "@/hooks/useHomeScrollReveal";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  // On xl+ screens, make hero vanish as we scroll down.
  const { scrollRevealEnabled, heroOpacity } = useHomeScrollReveal();

  let hero = null;
  if (mounted) {
    hero = resolvedTheme == "dark" ? <AnimatedHero /> : <StaticHero />;
  }

  return (
    <motion.div
      style={{ opacity: scrollRevealEnabled ? heroOpacity : undefined }}
      className="flex w-full flex-col items-center gap-8"
    >
      {hero}
    </motion.div>
  );
}
