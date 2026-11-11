import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://westhillsdentalnd.com/sitemap.xml",
    host: "https://westhillsdentalnd.com",
  };
}

export const dynamic = "force-static";
