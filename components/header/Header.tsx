import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";

interface HeaderProps {
  className: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <nav className="flex flex-col gap-2 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center md:flex-row md:gap-8 lg:gap-4">
          <Link href="/">
            <p className="font-logo text-tertiary border-tertiary border-2 border-dashed px-1 text-2xl font-bold hover:border-solid">
              VOIDUNDERFLOW
            </p>
          </Link>
          <ThemeToggle />
        </div>
        <ul className="flex w-full justify-center gap-8 md:justify-start lg:justify-end">
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
    </header>
  );
}
