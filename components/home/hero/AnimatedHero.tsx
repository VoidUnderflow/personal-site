"use client";

import {
  motion,
  useAnimate,
  useAnimationFrame,
  useMotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { HeroSvg } from "./HeroSvg";
import { getImageURL } from "@/lib/utils";

const pairs = [
  {
    voidImage: getImageURL("hero", "tears.jpg"),
    underflowImage: getImageURL("hero", "smile.jpg"),
    verse:
      "In the midst of tears, I found there was, within me, an invincible smile.",
  },
  {
    voidImage: getImageURL("hero", "chaos.jpg"),
    underflowImage: getImageURL("hero", "calm.jpg"),
    verse:
      "In the midst of chaos, I found there was, within me, an invincible calm.",
  },
  {
    voidImage: getImageURL("hero", "winter.jpg"),
    underflowImage: getImageURL("hero", "summer.jpg"),
    verse:
      "In the midst of winter, I found there was, within me, an invincible summer.",
  },
] as const;

const FINAL_IMAGE = getImageURL("hero", "all.jpg");

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

  // Stroke opacity for "underflow" (for the pulse).
  const underflowStrokeOpacity = useMotionValue(1);

  // Controls stroke width of underflow part of the svg.
  const underflowStrokeWidth = useMotionValue(1.5);

  // SVG bg coordinates (rotation).
  const bgX = useMotionValue(0);
  const bgY = useMotionValue(0);

  useAnimationFrame((time) => {
    const angle = (time * 0.00005) % (Math.PI * 2);
    bgX.set(Math.cos(angle) * 150);
    bgY.set(Math.sin(angle) * 150);
  });

  const [, animate] = useAnimate();

  // BG + verse cycling, runs once per mount.
  useEffect(() => {
    let cancelled = false;

    async function pulse() {
      const PULSE_DURATION = 1.5;
      await Promise.all([
        animate(underflowStrokeWidth, [1.5, 1.4, 1.1, 0.1], {
          duration: PULSE_DURATION,
          times: [0, 0.1, 0.8, 1],
          ease: "linear",
        }),
        animate(underflowStrokeOpacity, [1, 0.9, 0.4, 0], {
          duration: PULSE_DURATION,
          times: [0, 0.1, 0.8, 1],
          ease: "linear",
        }),
      ]);
    }

    async function loop() {
      while (!cancelled) {
        // Stay dark for a little bit.
        await new Promise<void>((resolve) => setTimeout(resolve, 1500));

        // Underflow's stroke thins and its opacity goes to 0.
        await pulse();

        // Stroke returns to normal while the world rushes in.
        await Promise.all([
          animate(underflowStrokeWidth, 1.5, { duration: 0.1, ease: "easeIn" }),
          animate(underflowStrokeOpacity, 1, {
            duration: 0.1,
            ease: "easeOut",
          }),
          animate(groupOpacity, 1, { duration: 0.1, ease: "easeOut" }),
        ]);

        // Hold.
        await new Promise<void>((resolve) => setTimeout(resolve, 3500));

        // Slowly empty.
        await animate(groupOpacity, 0, { duration: 2, ease: [0.7, 0, 1, 1] });

        const nextIdx = currentIdxRef.current + 1;

        // Check if we reached the final verse.
        if (nextIdx >= pairs.length) {
          setIsFinal(true);

          await new Promise<void>((resolve) => setTimeout(resolve, 1500));
          await pulse();
          await Promise.all([
            animate(underflowStrokeWidth, 1.5, {
              duration: 0.2,
              ease: "easeIn",
            }),
            animate(underflowStrokeOpacity, 1, {
              duration: 0.2,
              ease: "easeIn",
            }),
            animate(groupOpacity, 1, { duration: 1, ease: "easeOut" }),
          ]);

          // Hold, then the barrier between the self and the world disappears.
          await new Promise<void>((resolve) => setTimeout(resolve, 2000));
          await Promise.all([
            animate(outlineOpacity, 0, { duration: 2.0, ease: "easeInOut" }),
            animate(underflowStrokeOpacity, 0, {
              duration: 2.0,
              ease: "easeInOut",
            }),
          ]);
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
  }, [
    animate,
    groupOpacity,
    outlineOpacity,
    underflowStrokeOpacity,
    underflowStrokeWidth,
  ]);

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
        underflowStrokeOpacity={underflowStrokeOpacity}
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
        underflowStrokeOpacity={underflowStrokeOpacity}
        layout="horizontal"
      />
      <motion.p style={{ opacity: groupOpacity }} className="hero-quote">
        {verse}
      </motion.p>
    </div>
  );
}
