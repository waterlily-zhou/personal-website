import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
};

export default nextConfig;
