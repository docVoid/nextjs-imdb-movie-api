import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  images: {
    domains: ['image.tmdb.org'], // eigtl. nur relevant für next/image lib,, geht aber net wegen MITM
  },
};

export default nextConfig;
