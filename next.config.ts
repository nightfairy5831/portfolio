import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['146.19.215.88'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
