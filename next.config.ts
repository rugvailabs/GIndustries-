import type { NextConfig } from "next";
import createBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = createBundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [70, 75, 80],
    // Prefer AVIF (smaller) over WebP where the requesting browser supports it.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        // Admin-uploaded media served from Cloudinary.
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        // Static marketing photos under /public/images — filenames are stable
        // content identifiers now, so a long immutable cache is safe.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
