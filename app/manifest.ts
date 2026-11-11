import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "West Hills Dental",
    short_name: "West Hills",
    description:
      "Full-service family dentistry in Minot, North Dakota. Thoughtful, modern care for every smile.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f2e8",
    theme_color: "#123b26",
    icons: [
      {
        src: "/images/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
