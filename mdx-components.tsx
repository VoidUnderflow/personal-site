import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function SampleComponent({ children }: { children: React.ReactNode }) {
  return <div className="text-red-500">{children}</div>;
}

const components: MDXComponents = {
  h1: ({ children }) => <h1 className="text-foreground">{children}</h1>,
  h2: ({ children }) => <h2 className="text-secondary">{children}</h2>,
  h3: ({ children }) => <h3 className="text-tertiary">{children}</h3>,
  p: ({ children }) => <p className="text-foreground">{children}</p>,
  ol: ({ children }) => (
    <ol className="text-foreground [&_li::marker]:text-foreground">
      {children}
    </ol>
  ),
  ul: ({ children }) => (
    <ul className="text-foreground [&_li::marker]:text-foreground">
      {children}
    </ul>
  ),
  img: ({ alt, ...props }) => (
    <figure className="flex flex-col items-center">
      <Image
        height={400}
        width={400}
        alt={alt ?? ""}
        {...(props as Omit<ImageProps, "alt">)}
      />
      {alt && (
        <figcaption className="text-muted-foreground text-center text-sm">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  MyComponent: SampleComponent,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
