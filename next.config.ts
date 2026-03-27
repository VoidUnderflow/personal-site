import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async headers() {
    return [
      {
        source: "/giscus-:theme(dark|light).css",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://giscus.app" },
        ],
      },
    ];
  },
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
