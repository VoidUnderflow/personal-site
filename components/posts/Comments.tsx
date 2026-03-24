"use client";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function Comments() {
  const { resolvedTheme } = useTheme();
  const theme =
    resolvedTheme === "light"
      ? `${baseUrl}/giscus-light.css`
      : `${baseUrl}/giscus-dark.css`;

  return (
    <Giscus
      repo="VoidUnderflow/personal-site"
      repoId="R_kgDOQGtY6A"
      category="General"
      categoryId="DIC_kwDOQGtY6M4C0URM"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme}
      lang="en"
      loading="lazy"
    />
  );
}
