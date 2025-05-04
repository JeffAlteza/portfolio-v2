import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // required if you're using <Image />
  },
  basePath: '/REPO_NAME', // ← important!
  trailingSlash: true,
};

export default nextConfig;
