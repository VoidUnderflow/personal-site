import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [
      [
        "rehype-pretty-code",
        { theme: { light: "min-light", dark: "tokyo-night" } },
      ],
      "rehype-mdx-import-media",
    ],
  },
});

export default withMDX(nextConfig);
