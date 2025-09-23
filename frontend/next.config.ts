import withFlowbiteReact from "flowbite-react/plugin/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  images: {
    formats: ["image/webp"], // Optimize images for LCP
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

export default withFlowbiteReact(nextConfig);
