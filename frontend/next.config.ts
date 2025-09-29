import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  images: {
    deviceSizes: [360, 640, 750, 828],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "api.crazyproger1.com",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "api.crazyproger1.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
