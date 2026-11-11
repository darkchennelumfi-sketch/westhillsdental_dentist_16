import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/office_tour",
        destination: "/office-tour",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
