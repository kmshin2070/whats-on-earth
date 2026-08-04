import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Design Ref: DESIGN.md addendum — placeholder photo for the featured
    // story / issue detail page (src/lib/photo.ts).
    remotePatterns: [{ hostname: "picsum.photos" }],
  },
};

export default nextConfig;
