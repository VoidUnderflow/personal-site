import { motion, MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  layout: "horizontal" | "vertical";
} & (
  | { staticMode: true }
  | {
      staticMode?: false;
      voidImageHref: string;
      underflowImageHref: string;
      bgX: MotionValue<number>;
      bgY: MotionValue<number>;
      groupOpacity: MotionValue<number>;
      outlineOpacity: MotionValue<number>;
      underflowStrokeWidth: MotionValue<number>;
      underflowStrokeOpacity: MotionValue<number>;
    }
);

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

export function HeroSvg(props: Props) {
  const { className, layout } = props;
  const config = layouts[layout];

  if (props.staticMode) {
    return (
      <svg
        width="100%"
        viewBox={config.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={cn("select-none", className)}
      >
        <text {...baseTextProps} {...config.void} fill="currentColor">
          VOID
        </text>
        <text {...baseTextProps} {...config.underflow} fill="currentColor">
          UNDERFLOW
        </text>
      </svg>
    );
  }

  const {
    voidImageHref,
    underflowImageHref,
    bgX,
    bgY,
    groupOpacity,
    outlineOpacity,
    underflowStrokeWidth,
    underflowStrokeOpacity,
  } = props;

  return (
    <svg
      width="100%"
      viewBox={config.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none", className)}
    >
      <defs>
        <mask id={config.maskIds.void}>
          <rect x="0" y="0" width="100%" height="100%" fill="black" />
          <text {...baseTextProps} {...config.void} fill="white">
            VOID
          </text>
        </mask>

        <mask id={config.maskIds.underflow}>
          <rect x="0" y="0" width="100%" height="100%" fill="black" />
          <text {...baseTextProps} {...config.underflow} fill="white">
            UNDERFLOW
          </text>
        </mask>
      </defs>

      <motion.g
        mask={`url(#${config.maskIds.void})`}
        style={{ opacity: groupOpacity }}
      >
        <motion.image
          href={voidImageHref}
          {...config.image}
          style={{ x: bgX, y: bgY }}
        />
      </motion.g>

      <motion.g
        mask={`url(#${config.maskIds.underflow})`}
        style={{ opacity: groupOpacity }}
      >
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
        style={{ stroke: "var(--foreground)", strokeOpacity: outlineOpacity }}
      >
        VOID
      </motion.text>

      <motion.text
        {...baseTextProps}
        {...config.underflow}
        fill="none"
        style={{
          strokeWidth: underflowStrokeWidth,
          stroke: "var(--foreground)",
          strokeOpacity: underflowStrokeOpacity,
        }}
      >
        UNDERFLOW
      </motion.text>
    </svg>
  );
}
