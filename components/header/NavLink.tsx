import Link from "next/link";

interface NavLinkProps {
  href: string;
  color: "primary" | "secondary" | "tertiary" | "neutral";
  children: React.ReactNode;
}

const svgFile = {
  primary: "/navbar-button-1.svg",
  secondary: "/navbar-button-2.svg",
  tertiary: "/navbar-button-3.svg",
  neutral: "/navbar-button-4.svg",
};

export default function NavLink({ href, color, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`group relative block border-2 border-dashed border-x-transparent border-t-transparent md:border-4 xl:border-2 border-b-${color} text-foreground px-2 py-1 hover:border-${color} active:text-background active:border-transparent`}
    >
      <span
        className={`pointer-events-none absolute inset-0 bg-${color} opacity-0 group-active:opacity-100`}
        style={{ mask: `url('${svgFile[color]}') center / cover` }}
      />
      <span className="relative">{children}</span>
    </Link>
  );
}
