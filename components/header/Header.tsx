"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
  className: string;
}

export default function Header({ className }: HeaderProps) {
  const isHome = usePathname() === "/";

  // Header appears, hero disappears as we scroll down (on the home page).
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [0, 1]);

  // Don't render header if scroll is at the very top.
  const [active, setActive] = useState(false);
  useMotionValueEvent(scrollY, "change", (value) => {
    setActive(value > 50);
  });

  if (isHome && !active) return null;

  return (
    <motion.header
      className={
        isHome
          ? "bg-background fixed inset-x-0 top-0 z-50 mx-auto max-w-4xl px-6 md:px-12"
          : className
      }
      style={isHome ? { opacity } : undefined}
    >
      <div className={isHome ? "py-8" : undefined}>
        <nav className="flex flex-col gap-2 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:flex-row md:gap-8 lg:gap-4">
            <Link href="/">
              <p className="hover:border-tertiary border-background border-2 px-1 text-2xl hover:border-dashed">
                <span className="text-foreground font-logo-void">VOID</span>
                <span className="font-logo-underflow text-tertiary">
                  UNDERFLOW
                </span>
              </p>
            </Link>
            <ThemeToggle />
          </div>
          <ul className="flex w-full justify-center gap-8 md:justify-end">
            <li>
              <NavLink href="/posts" color="primary">
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink href="/projects" color="secondary">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink href="/about" color="tertiary">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
