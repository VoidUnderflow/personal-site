import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/linkedin-404/",
    },
    sitemap: "https://voidunderflow.com/sitemap.xml",
  };
}
