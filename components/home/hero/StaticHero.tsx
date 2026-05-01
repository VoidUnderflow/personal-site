import { HeroSvg } from "./HeroSvg";

const LIGHT_MODE_VERSE =
  "Let go your earthly tether. Enter the void. Empty, and become wind.";

export function StaticHero() {
  return (
    <>
      <HeroSvg className="md:hidden" layout="vertical" staticMode />
      <HeroSvg className="hidden md:block" layout="horizontal" staticMode />
      <p className="hero-quote">{LIGHT_MODE_VERSE}</p>
    </>
  );
}
