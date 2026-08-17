import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import PostImage from "@/components/posts/PostImage";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-foreground text-post-h1 mt-8 mb-3 underline decoration-dashed">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-foreground text-post-h2 mt-7 mb-2 underline">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-foreground text-post-h3 mt-6 mb-2 underline decoration-double">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-foreground text-post-h4 mt-5 mb-2 underline decoration-dotted">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-foreground text-post-body">{children}</p>
  ),
  ol: ({ children }) => (
    <ol className="text-foreground [&_li::marker]:text-foreground text-post-body">
      {children}
    </ol>
  ),
  ul: ({ children }) => (
    <ul className="text-foreground [&_li::marker]:text-foreground text-post-body">
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
  PostImage,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
