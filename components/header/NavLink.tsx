import Link from "next/link";

interface NavLinkProps {
  href: string;
  color: "primary" | "secondary" | "tertiary" | "neutral";
  children: React.ReactNode;
}

export default function NavLink({ href, color, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`block border-2 border-dashed border-x-transparent border-t-transparent px-2 py-1 nav-link-${color} active:text-background`}
    >
      {children}
    </Link>
  );
}
