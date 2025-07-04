#!/bin/bash

echo "🔍 Checking Clerk configuration for deployment..."

# Check if Clerk environment variables are set
if [ -z "$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY" ] || [ -z "$CLERK_SECRET_KEY" ]; then
  echo "⚠️  Warning: Clerk environment variables not found"
  echo "    - This may be expected if you're not using Clerk in this environment"
  echo "    - Build will proceed but Clerk authentication will be disabled"
else
  echo "✅ Clerk environment variables detected"
fi

# Create a temporary .env.local file for the build if it doesn't exist
if [ ! -f .env.local ]; then
  echo "Creating temporary .env.local file for build..."
  touch .env.local
  
  # Add required environment variables if they don't exist in the environment
  if [ -z "$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY" ]; then
    echo "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=" >> .env.local
  fi
  
  if [ -z "$CLERK_SECRET_KEY" ]; then
    echo "CLERK_SECRET_KEY=" >> .env.local
  fi
  
  echo "Created temporary environment configuration"
fi

# Create a special next.config.js for deployment
echo "📝 Creating optimized next.config.js for deployment..."

cat > next.config.deployment.js << EOL
import withPWA from "next-pwa";

const pwaConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
        },
      },
    },
    {
      urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
        },
      },
    },
  ],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "pub-d6475def8a4045c2992481493ad3c8e4.r2.dev",
        port: "",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },
  compress: true,
  poweredByHeader: false,
  // Skip clerk-debug during static generation to avoid SSG errors
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true,
};

export default pwaConfig(nextConfig);
EOL

echo "✅ Deployment configuration created"

# Back up the original next.config.js file
cp next.config.js next.config.js.backup

# Replace with the deployment version
cp next.config.deployment.js next.config.js

echo "🚀 Ready for deployment!"
echo "Running: npm run build"

# Run the build command
npm run build

# Restore the original next.config.js
mv next.config.js.backup next.config.js

echo "✅ Build process completed and original config restored"
