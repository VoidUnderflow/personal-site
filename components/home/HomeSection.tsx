import { ReactNode } from "react";

interface HomeSectionProps {
  title: string;
  children: ReactNode;
}

/**
 * Wrapper for either posts of projects on the home page.
 */
export function HomeSection({ title, children }: HomeSectionProps) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
    </section>
  );
}
