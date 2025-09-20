import withFlowbiteReact from "flowbite-react/plugin/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("http://127.0.0.1:8000/media/**"),
      new URL("https://api.crazyproger1.com/media/**"),
      new URL("http://api.crazyproger1.com/media/**"),
    ],
  },
};

export default withFlowbiteReact(nextConfig);
