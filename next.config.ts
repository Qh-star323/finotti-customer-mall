import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    localPatterns: [
      { pathname: "/api/placeholder**" },
      { pathname: "/images/**" },
    ],
  },
};

export default nextConfig;
