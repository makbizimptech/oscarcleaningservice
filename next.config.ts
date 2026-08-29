import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // @ts-ignore - Ignoring TS error for eslint property
  eslint: {
    ignoreDuringBuilds: true,
  },
  // @ts-ignore - Ignoring TS error for typescript property
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
