import { useEffect, useState } from "react";

/**
 * Hacky(?) way to prevent hydration warning.
 * Before hydration, theme is undefined => defaults to light mode.
 * After hydration, theme becomes the saved value (e.g: dark).
 * Mismatch => error.
 * See Readme of: https://github.com/pacocoursey/next-themes.
 * On server, we add a if (!mounted) return null;
 * On client, first render returns false => null again;
 * Then, after mount, mounted -> true => we render stuff, yay!
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return mounted;
}
