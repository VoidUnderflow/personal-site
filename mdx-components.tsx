import type { MDXComponents } from "mdx/types";

export function SampleComponent({ children }: { children: React.ReactNode }) {
  return <div className="text-red-500">{children}</div>;
}

const components: MDXComponents = {
  h1: ({ children }) => <h1 className="text-foreground">{children}</h1>,
  h2: ({ children }) => <h2 className="text-secondary">{children}</h2>,
  h3: ({ children }) => <h3 className="text-tertiary">{children}</h3>,
  p: ({ children }) => <p className="text-foreground text-md">{children}</p>,
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
  MyComponent: SampleComponent,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
