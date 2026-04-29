"use client";

import {
  motion,
  useAnimate,
  useAnimationFrame,
  useMotionValue,
} from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { HeroHorizontal } from "./HeroHorizontal";
import { HeroVertical } from "./HeroVertical";
import { useMounted } from "@/hooks/useMounted";

// TODO: Fix hydration errors - unclear if they only happen when resizing with devtools.
// TODO: Replace placeholder images.
const pairs = [
  {
    voidImage: "https://picsum.photos/seed/hate/1600/1000",
    underflowImage: "https://picsum.photos/seed/love/1600/1000",
    verse:
      "In the midst of hate, I found there was, within me, an invincible love.",
  },
  {
    voidImage: "https://picsum.photos/seed/tears/1600/1000",
    underflowImage: "https://picsum.photos/seed/smile/1600/1000",
    verse:
      "In the midst of tears, I found there was, within me, an invincible smile.",
  },
  {
    voidImage: "https://picsum.photos/seed/chaos/1600/1000",
    underflowImage: "https://picsum.photos/seed/calm/1600/1000",
    verse:
      "In the midst of chaos, I found there was, within me, an invincible calm.",
  },
  {
    voidImage: "https://picsum.photos/seed/winter/1600/1000",
    underflowImage: "https://picsum.photos/seed/summer/1600/1000",
    verse:
      "In the midst of winter, I found there was, within me, an invincible summer.",
  },
] as const;

// Shown after all four verses have cycled.
const finalImages = {
  void: "https://picsum.photos/seed/final-void/1600/1000",
  underflow: "https://picsum.photos/seed/final-flow/1600/1000",
};

const FINAL_VERSE =
  "And that makes me happy. For it says that no matter how hard the world pushes against me, within me, there's something stronger — something better, pushing right back.";

export function HeroAnimation() {
  const { resolvedTheme } = useTheme();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFinal, setIsFinal] = useState(false);

  // hacky(?) way to circumvent adding currentIdx as a dep for useEffect
  const currentIdxRef = useRef(0);

  // opacity for both the SVGs and the text
  const groupOpacity = useMotionValue(1);
  // VOID "pulse"
  const voidFontSize = useMotionValue(128);

  const bgX = useMotionValue(0);
  const bgY = useMotionValue(0);

  // Avoid (theme + SSR) - related hydration errors.
  const mounted = useMounted();

  useAnimationFrame((time) => {
    // TODO: Can have different bg coordinates for the SVGs.
    // e.g: left can move counterclockwise, right clockwise or both same dir + offset(?)
    // TODO: OR.. void doesn't move at all, while underflow is the thing that's moving
    const angle = (time * 0.0001) % (Math.PI * 2);
    bgX.set(Math.cos(angle) * 150);
    bgY.set(Math.sin(angle) * 150);
  });

  const [, animate] = useAnimate();

  // responsible for the bg + verse cycling
  // should run only once per page render
  useEffect(() => {
    let cancelled = false;

    async function loop() {
      while (!cancelled) {
        await new Promise<void>((resolve) => setTimeout(resolve, 4000));
        if (cancelled) return;

        // TODO: pulse finishes first, take another look
        await Promise.all([
          animate(groupOpacity, 0, { duration: 0.6, ease: "easeIn" }),
          animate(voidFontSize, 134, { duration: 0.3, ease: "easeIn" }),
        ]);
        if (cancelled) return;

        const nextIdx = currentIdxRef.current + 1;

        if (nextIdx >= pairs.length) {
          // verses have finished cycling, go for the final one
          setIsFinal(true);
          await Promise.all([
            animate(groupOpacity, 1, { duration: 0.6, ease: "easeOut" }),
            animate(voidFontSize, 128, { duration: 0.3, ease: "easeOut" }),
          ]);
          return;
        }

        currentIdxRef.current += 1;
        setCurrentIdx(nextIdx);

        await Promise.all([
          animate(groupOpacity, 1, { duration: 0.6, ease: "easeOut" }),
          animate(voidFontSize, 128, { duration: 0.3, ease: "easeOut" }),
        ]);
      }
    }

    loop();
    return () => {
      cancelled = true;
    };
  }, [animate, groupOpacity, voidFontSize]);

  if (!mounted) return null;
  // TODO: Not rendering anything on light mode.
  // if (resolvedTheme !== "dark") return null;

  const voidImage = isFinal ? finalImages.void : pairs[currentIdx].voidImage;
  const underflowImage = isFinal
    ? finalImages.underflow
    : pairs[currentIdx].underflowImage;
  const verse = isFinal ? FINAL_VERSE : pairs[currentIdx].verse;

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <HeroVertical
        className="select-none md:hidden"
        voidImageHref={voidImage}
        underflowImageHref={underflowImage}
        bgX={bgX}
        bgY={bgY}
        groupOpacity={groupOpacity}
        voidFontSize={voidFontSize}
      />
      <HeroHorizontal
        className="hidden select-none md:block"
        voidImageHref={voidImage}
        underflowImageHref={underflowImage}
        bgX={bgX}
        bgY={bgY}
        groupOpacity={groupOpacity}
        voidFontSize={voidFontSize}
      />
      <motion.p
        style={{ opacity: groupOpacity }}
        className="text-foreground/70 max-w-xl text-center text-sm italic"
      >
        {verse}
      </motion.p>
    </div>
  );
}
