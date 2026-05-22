import { useBreakpoint } from "./useBreakpoint";
import { useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

// If you change this, grep "xl:" first.
export const SCROLL_REVEAL_BREAKPOINT = "xl";

export const SCROLL_FADE_END_PX = 400;
const SCROLL_HEADER_THRESHOLD_PX = 50;

export function useHomeScrollReveal() {
  const isHome = usePathname() === "/";
  const isLargeScreen = useBreakpoint(SCROLL_REVEAL_BREAKPOINT);
  const scrollRevealEnabled = isHome && isLargeScreen;

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, SCROLL_FADE_END_PX], [1, 0]);
  const headerOpacity = useTransform(scrollY, [0, SCROLL_FADE_END_PX], [0, 1]);

  const [revealStarted, setRevealStarted] = useState(false);
  useMotionValueEvent(scrollY, "change", (value) => {
    setRevealStarted(value > SCROLL_HEADER_THRESHOLD_PX);
  });

  return { scrollRevealEnabled, heroOpacity, headerOpacity, revealStarted };
}
