import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: { cpus: 1, workerThreads: true, webpackBuildWorker: false },
  images: { unoptimized: true },
};

export default nextConfig;

