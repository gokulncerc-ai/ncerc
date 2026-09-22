import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "ncerc.ac.in",
      },
    ],
  },
};

export default nextConfig;