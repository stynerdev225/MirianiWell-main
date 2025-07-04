#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting simplified Next.js deployment for Miriani Well...${NC}"

# Clean build directories first
echo -e "${YELLOW}Cleaning previous build artifacts...${NC}"
rm -rf .next
rm -rf out

# Update next.config.js temporarily to fix the 404 issue
echo -e "${YELLOW}Creating optimized Next.js config...${NC}"
cat > next.config.js.temp << 'EOL'
import withPWA from "next-pwa";

const pwaConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
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
    formats: ["image/webp", "image/avif"],
  },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
};

export default pwaConfig(nextConfig);
EOL

# Backup original config
cp next.config.js next.config.js.original
cp next.config.js.temp next.config.js

# Update middleware.ts to be simpler
echo -e "${YELLOW}Simplifying middleware...${NC}"
cat > middleware.ts.temp << 'EOL'
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(() => {
  // Skip auth for now to fix routing issues
  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
EOL

# Backup original middleware
cp middleware.ts middleware.ts.original
cp middleware.ts.temp middleware.ts

# 1. Build the Next.js project using turbo
echo -e "${YELLOW}Building Next.js project...${NC}"
NETLIFY_NEXT_PLUGIN_SKIP=false next build --no-lint

# 2. Copy public directory contents to .next
echo -e "${YELLOW}Copying public assets to .next directory...${NC}"
cp -r public/* .next/

# 3. Make sure critical files are copied
echo -e "${YELLOW}Ensuring critical files are copied...${NC}"
cp public/404.html .next/
cp public/_redirects .next/

# 4. Set proper permissions
echo -e "${YELLOW}Setting permissions...${NC}"
chmod -R 755 .next/

echo -e "${GREEN}Build and asset copying complete!${NC}"
echo -e "${YELLOW}Deploying to Netlify (production)...${NC}"

# 5. Deploy to Netlify
netlify deploy --prod

# Restore original files
echo -e "${YELLOW}Restoring original configuration files...${NC}"
mv next.config.js.original next.config.js
mv middleware.ts.original middleware.ts

echo -e "${GREEN}Deployment complete!${NC}"
echo -e "${BLUE}Visit your Netlify deployment and verify all routes are working.${NC}"
echo -e "${BLUE}If you're still seeing 404 errors, check the Netlify logs and Functions tab for errors.${NC}"
