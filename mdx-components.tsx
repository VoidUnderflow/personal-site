import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import LazyImage from "@/components/common/LazyImage";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-foreground mt-8 mb-3 text-2xl underline decoration-dashed">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-foreground mt-7 mb-2 text-[1.4rem] underline">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-foreground mt-6 mb-2 text-[1.3rem] underline decoration-double">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-foreground text-[1.05rem]">{children}</p>
  ),
  ol: ({ children }) => (
    <ol className="text-foreground [&_li::marker]:text-foreground text-md">
      {children}
    </ol>
  ),
  ul: ({ children }) => (
    <ul className="text-foreground [&_li::marker]:text-foreground text-md">
      {children}
    </ul>
  ),
  a: ({ children, href }) => (
    <Link className="text-secondary visited:text-primary" href={href}>
      {children}
    </Link>
  ),
  strong: ({ children }) => (
    <strong className="text-foreground">{children}</strong>
  ),
  LazyImage: ({ src, width, height, alt }) => (
    <LazyImage
      src={src as string}
      width={Number(width)}
      height={Number(height)}
      alt={(alt as string) ?? ""}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
