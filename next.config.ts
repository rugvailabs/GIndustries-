import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [70, 75, 80],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
