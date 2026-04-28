import xv from "@/public/xv.png";

/**
 * Website background.
 */
export default function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 bg-repeat"
      style={{ backgroundImage: `url(${xv.src})` }}
    />
  );
}
