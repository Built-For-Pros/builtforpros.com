import path from "path";
import type { NextConfig } from "next";

const appRoot = path.join(__dirname);

const nextConfig: NextConfig = {
  // Keep resolve/watch inside this app when the parent company folder is the Cursor workspace.
  outputFileTracingRoot: appRoot,
  turbopack: {
    root: appRoot,
  },
  images: {
    qualities: [75, 90, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
