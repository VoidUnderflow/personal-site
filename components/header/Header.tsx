"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";
import { motion } from "motion/react";
import { useHomeScrollReveal } from "@/hooks/useHomeScrollReveal";
import { useMounted } from "@/hooks/useMounted";

interface HeaderProps {
  className: string;
}

export default function Header({ className }: HeaderProps) {
  const mounted = useMounted();

  // On xl+ screens: header appears as hero disappears while scrolling down.
  const { scrollRevealEnabled, headerOpacity, revealStarted } =
    useHomeScrollReveal();

  if (!mounted) return null;
  if (scrollRevealEnabled && !revealStarted) return null;

  return (
    <motion.header
      className={
        scrollRevealEnabled
          ? "bg-background fixed inset-x-0 top-0 z-50 mx-auto max-w-4xl px-6 md:px-12"
          : className
      }
      style={scrollRevealEnabled ? { opacity: headerOpacity } : undefined}
    >
      <div className={scrollRevealEnabled ? "py-8" : undefined}>
        <nav className="flex flex-col items-center gap-4 xl:flex-row xl:justify-between">
          {/* xl+: logo and toggle on the left */}
          <div className="hidden items-center gap-4 xl:flex">
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
          <ul className="flex w-full justify-center gap-8 xl:w-auto xl:justify-end">
            <li className="xl:hidden">
              <NavLink href="/" color="neutral">
                Home
              </NavLink>
            </li>
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
          {/* <xl: toggle centered below links */}
          <div className="xl:hidden">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
