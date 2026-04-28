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

const baseTextProps = {
  x: "50%",
  textAnchor: "middle" as const,
  fontWeight: "bold",
  fontSize: FONT_SIZE,
  textRendering: "optimizeLegibility" as const,
  fontFamily: "inherit",
  strokeLinejoin: "round" as const,
};

// viewBox is 880×320: UNDERFLOW's width × 2
// VOID sits in the top half (y=35% = 112px)
// UNDERFLOW in the bottom half (y=85% = 272px)
// Both y values match the horizontal layout's 70%-within-a-160px-row.
const IMAGE = { width: 1600, height: 1000, x: -360, y: -340 };

export function HeroVertical({
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
      viewBox="0 0 880 320"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <mask id="void-mask-v">
          <rect x="0" y="0" width="880" height="320" fill="black" />
          <motion.text
            {...baseTextProps}
            y="35%"
            fill="white"
            style={{ fontSize: voidFontSize }}
          >
            VOID
          </motion.text>
        </mask>

        <mask id="underflow-mask-v">
          <rect x="0" y="0" width="880" height="320" fill="black" />
          <text {...baseTextProps} y="85%" fill="white">
            UNDERFLOW
          </text>
        </mask>
      </defs>

      <motion.g mask="url(#void-mask-v)" style={{ opacity: groupOpacity }}>
        <motion.image
          href={voidImageHref}
          {...IMAGE}
          style={{ x: bgX, y: bgY }}
        />
      </motion.g>

      <motion.g mask="url(#underflow-mask-v)" style={{ opacity: groupOpacity }}>
        <motion.image
          href={underflowImageHref}
          {...IMAGE}
          style={{ x: bgX, y: bgY }}
        />
      </motion.g>

      <motion.text
        {...baseTextProps}
        y="35%"
        fill="none"
        stroke="white"
        strokeWidth={1.5}
        style={{ fontSize: voidFontSize }}
      >
        VOID
      </motion.text>

      <text
        {...baseTextProps}
        y="85%"
        fill="none"
        stroke="white"
        strokeWidth={1.5}
      >
        UNDERFLOW
      </text>
    </svg>
  );
}
