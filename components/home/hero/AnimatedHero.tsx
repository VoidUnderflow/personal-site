"use client";

import {
  motion,
  useAnimate,
  useAnimationFrame,
  useMotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { HeroSvg } from "./HeroSvg";

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
const FINAL_IMAGE = "https://picsum.photos/seed/final/1600/1000";

const FINAL_VERSE =
  "And that makes me happy. For it says that no matter how hard the world pushes against me, within me, there's something stronger — something better, pushing right back.";

export function AnimatedHero() {
  // Idx of current image / verse combo.
  const [currentIdx, setCurrentIdx] = useState(0);

  // So we don't add currentIdx as a dep for the useEffect.
  const currentIdxRef = useRef(0);

  // Have we reached the final verse?
  const [isFinal, setIsFinal] = useState(false);

  // Opacity of svg bg and the text underneath.
  const groupOpacity = useMotionValue(0);

  // SVG text outline opacity - goes to 0 at final verse.
  const outlineOpacity = useMotionValue(1);

  // Controls stroke width of underflow part of the svg.
  const underflowStrokeWidth = useMotionValue(1.5);

  // SVG bg coordinates (rotation).
  const bgX = useMotionValue(0);
  const bgY = useMotionValue(0);

  useAnimationFrame((time) => {
    // TODO: Can have different bg coordinates for the SVGs.
    // e.g: left can move counterclockwise, right clockwise or both same dir + offset(?)
    // TODO: OR.. void doesn't move at all, while underflow is the thing that's moving
    const angle = (time * 0.0001) % (Math.PI * 2);
    bgX.set(Math.cos(angle) * 150);
    bgY.set(Math.sin(angle) * 150);
  });

  const [, animate] = useAnimate();

  // BG + verse cycling, ran once per render.
  useEffect(() => {
    let cancelled = false;

    async function pulse() {
      if (cancelled) return;
      await animate(underflowStrokeWidth, 1.1, {
        duration: 1,
        ease: "easeOut",
      });
    }

    async function loop() {
      while (!cancelled) {
        // Sit in darkness for a beat.
        await new Promise<void>((resolve) => setTimeout(resolve, 1500));
        if (cancelled) return;

        // Stroke thins slowly.
        await pulse();
        if (cancelled) return;

        // Stroke returns to normal while the world rushes in.
        await Promise.all([
          animate(underflowStrokeWidth, 1.5, { duration: 0.1, ease: "easeIn" }),
          animate(groupOpacity, 1, { duration: 0.1, ease: "easeOut" }),
        ]);

        // Hold.
        await new Promise<void>((resolve) => setTimeout(resolve, 3500));
        if (cancelled) return;

        // Slowly empty.
        await animate(groupOpacity, 0, { duration: 1.5, ease: [0.7, 0, 1, 1] });
        if (cancelled) return;

        const nextIdx = currentIdxRef.current + 1;

        // Check if we reached the final verse.
        if (nextIdx >= pairs.length) {
          setIsFinal(true);

          await new Promise<void>((resolve) => setTimeout(resolve, 1500));
          if (cancelled) return;

          await pulse();
          if (cancelled) return;

          await Promise.all([
            animate(underflowStrokeWidth, 1.5, {
              duration: 0.2,
              ease: "easeIn",
            }),
            animate(groupOpacity, 1, { duration: 1, ease: "easeOut" }),
          ]);

          // Hold, then the barrier between the self and the world disappears.
          await new Promise<void>((resolve) => setTimeout(resolve, 2000));
          if (cancelled) return;

          await animate(outlineOpacity, 0, {
            duration: 2.0,
            ease: "easeInOut",
          });
          return;
        }

        currentIdxRef.current += 1;
        setCurrentIdx(nextIdx);
      }
    }

    loop();
    return () => {
      cancelled = true;
    };
  }, [animate, groupOpacity, outlineOpacity, underflowStrokeWidth]);

  const voidImage = isFinal ? FINAL_IMAGE : pairs[currentIdx].voidImage;
  const underflowImage = isFinal
    ? FINAL_IMAGE
    : pairs[currentIdx].underflowImage;
  const verse = isFinal ? FINAL_VERSE : pairs[currentIdx].verse;

  return (
    <div className="relative w-full">
      <HeroSvg
        className="md:hidden"
        voidImageHref={voidImage}
        underflowImageHref={underflowImage}
        bgX={bgX}
        bgY={bgY}
        groupOpacity={groupOpacity}
        outlineOpacity={outlineOpacity}
        underflowStrokeWidth={underflowStrokeWidth}
        layout="vertical"
      />
      <HeroSvg
        className="hidden md:block"
        voidImageHref={voidImage}
        underflowImageHref={underflowImage}
        bgX={bgX}
        bgY={bgY}
        groupOpacity={groupOpacity}
        outlineOpacity={outlineOpacity}
        underflowStrokeWidth={underflowStrokeWidth}
        layout="horizontal"
      />
      <motion.p
        style={{ opacity: groupOpacity }}
        className="hero-quote absolute top-full left-1/2 mt-2 w-3/4 -translate-x-1/2"
      >
        {verse}
      </motion.p>
    </div>
  );
}
