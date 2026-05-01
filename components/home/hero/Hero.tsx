"use client";

import { useMounted } from "@/hooks/useMounted";
import { useTheme } from "next-themes";
import { AnimatedHero } from "./AnimatedHero";
import { StaticHero } from "./StaticHero";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  let hero = null;
  if (mounted) {
    hero = resolvedTheme == "dark" ? <AnimatedHero /> : <StaticHero />;
  }
  return <div className="flex w-full flex-col items-center gap-8">{hero}</div>;
}
