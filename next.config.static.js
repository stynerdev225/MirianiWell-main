// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // This enables static export mode
  distDir: "out", // Directory to store the exported files
  trailingSlash: true, // Critical for proper static paths

  // Disable image optimization since we're using static export
  images: {
    unoptimized: true, // Needed for static export of images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pub-d6475def8a4045c2992481493ad3c8e4.r2.dev",
      },
    ],
  },

  // Static optimization
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
