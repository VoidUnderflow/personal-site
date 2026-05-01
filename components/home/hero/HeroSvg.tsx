import { motion, MotionValue } from "motion/react";

interface Props {
  voidImageHref: string;
  underflowImageHref: string;
  bgX: MotionValue<number>;
  bgY: MotionValue<number>;
  groupOpacity: MotionValue<number>;
  voidFontSize: MotionValue<number>;
  className?: string;
  layout: "horizontal" | "vertical";
}

const FONT_SIZE = 128;

const baseTextProps = {
  fontWeight: "bold",
  fontSize: FONT_SIZE,
  textRendering: "optimizeLegibility" as const,
  fontFamily: "inherit",
  strokeLinejoin: "round" as const,
};

const layouts = {
  horizontal: {
    viewBox: "0 0 1260 160",
    image: { width: 1600, height: 1000, x: -170, y: -420 },
    void: { x: 380, y: "70%", textAnchor: "end" as const },
    underflow: { x: 380, y: "70%", textAnchor: "start" as const },
    maskIds: { void: "void-mask", underflow: "underflow-mask" },
  },
  vertical: {
    viewBox: "0 0 880 320",
    image: { width: 1600, height: 1000, x: -360, y: -340 },
    void: { x: "50%", y: "35%", textAnchor: "middle" as const },
    underflow: { x: "50%", y: "85%", textAnchor: "middle" as const },
    maskIds: { void: "void-mask-v", underflow: "underflow-mask-v" },
  },
};

export function HeroSvg({
  voidImageHref,
  underflowImageHref,
  bgX,
  bgY,
  groupOpacity,
  voidFontSize,
  className,
  layout,
}: Props) {
  const config = layouts[layout];

  return (
    <svg
      width="100%"
      viewBox={config.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <mask id={config.maskIds.void}>
          <rect x="0" y="0" width="100%" height="100%" fill="black" />
          <motion.text
            {...baseTextProps}
            {...config.void}
            fill="white"
            style={{ fontSize: voidFontSize }}
          >
            VOID
          </motion.text>
        </mask>

        <mask id={config.maskIds.underflow}>
          <rect x="0" y="0" width="100%" height="100%" fill="black" />
          <text {...baseTextProps} {...config.underflow} fill="white">
            UNDERFLOW
          </text>
        </mask>
      </defs>

      <motion.g mask={`url(#${config.maskIds.void})`} style={{ opacity: groupOpacity }}>
        <motion.image
          href={voidImageHref}
          {...config.image}
          style={{ x: bgX, y: bgY }}
        />
      </motion.g>

      <motion.g mask={`url(#${config.maskIds.underflow})`} style={{ opacity: groupOpacity }}>
        <motion.image
          href={underflowImageHref}
          {...config.image}
          style={{ x: bgX, y: bgY }}
        />
      </motion.g>

      <motion.text
        {...baseTextProps}
        {...config.void}
        fill="none"
        strokeWidth={1.5}
        style={{ fontSize: voidFontSize, stroke: "var(--foreground)" }}
      >
        VOID
      </motion.text>

      <text
        {...baseTextProps}
        {...config.underflow}
        fill="none"
        strokeWidth={1.5}
        style={{ stroke: "var(--foreground)" }}
      >
        UNDERFLOW
      </text>
    </svg>
  );
}
