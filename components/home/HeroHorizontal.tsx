import { motion, MotionValue } from "motion/react";

interface Props {
  voidImageHref: string;
  underflowImageHref: string;
  bgX: MotionValue<number>;
  bgY: MotionValue<number>;
  groupOpacity: MotionValue<number>;
  voidFontSize: MotionValue<number>;
  className?: string;
}

const FONT_SIZE = 128;
// x = where VOID ends and UNDERFLOW begins
// TODO: need to recheck maths here
const SPLIT_X = 380;

const baseTextProps = {
  y: "70%",
  fontWeight: "bold",
  fontSize: FONT_SIZE,
  textRendering: "optimizeLegibility" as const,
  fontFamily: "inherit",
  strokeLinejoin: "round" as const,
};

// image sized 1600×1000 centered on (630, 80)
// TODO: need to actually calculate optimal radius
const IMAGE = { width: 1600, height: 1000, x: -170, y: -420 };

export function HeroHorizontal({
  voidImageHref,
  underflowImageHref,
  bgX,
  bgY,
  groupOpacity,
  voidFontSize,
  className,
}: Props) {
  return (
    <svg
      width="100%"
      viewBox="0 0 1260 160"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <mask id="void-mask">
          <rect x="0" y="0" width="1260" height="160" fill="black" />
          <motion.text
            {...baseTextProps}
            x={SPLIT_X}
            textAnchor="end"
            fill="white"
            style={{ fontSize: voidFontSize }}
          >
            VOID
          </motion.text>
        </mask>

        <mask id="underflow-mask">
          <rect x="0" y="0" width="1260" height="160" fill="black" />
          <text {...baseTextProps} x={SPLIT_X} textAnchor="start" fill="white">
            UNDERFLOW
          </text>
        </mask>
      </defs>

      <motion.g mask="url(#void-mask)" style={{ opacity: groupOpacity }}>
        <motion.image
          href={voidImageHref}
          {...IMAGE}
          style={{ x: bgX, y: bgY }}
        />
      </motion.g>

      <motion.g mask="url(#underflow-mask)" style={{ opacity: groupOpacity }}>
        <motion.image
          href={underflowImageHref}
          {...IMAGE}
          style={{ x: bgX, y: bgY }}
        />
      </motion.g>

      <motion.text
        {...baseTextProps}
        x={SPLIT_X}
        textAnchor="end"
        fill="none"
        strokeWidth={1.5}
        style={{ stroke: "var(--foreground)", fontSize: voidFontSize }}
      >
        VOID
      </motion.text>

      <text
        {...baseTextProps}
        x={SPLIT_X}
        textAnchor="start"
        fill="none"
        style={{ stroke: "var(--foreground)" }}
        strokeWidth={1.5}
      >
        UNDERFLOW
      </text>
    </svg>
  );
}
