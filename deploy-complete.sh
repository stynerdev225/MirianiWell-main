#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting comprehensive deployment process...${NC}"

# Clean build directories first
echo -e "${YELLOW}Cleaning previous build artifacts...${NC}"
rm -rf .next
rm -rf out

# Make sure node_modules is up to date
echo -e "${YELLOW}Checking for dependencies...${NC}"
npm install

# 1. Build the Next.js project
echo -e "${YELLOW}Building Next.js project...${NC}"
NETLIFY_NEXT_PLUGIN_SKIP=false next build

# 2. Ensure all public assets are copied
echo -e "${YELLOW}Copying public assets to .next directory...${NC}"
cp -r public/* .next/

# 3. Make sure custom 404 page exists in multiple locations (for different Netlify fallback mechanisms)
echo -e "${YELLOW}Setting up error pages...${NC}"
cp public/404.html .next/404.html
cp public/404.html .next/static/404.html
mkdir -p .next/server/pages
cp public/404.html .next/server/pages/404.html

# 4. Copy redirects file
echo -e "${YELLOW}Copying redirects file...${NC}"
cp public/_redirects .next/_redirects

# 5. Set proper permissions
echo -e "${YELLOW}Setting permissions...${NC}"
chmod -R 755 .next/

echo -e "${GREEN}Build and asset copying complete!${NC}"
echo -e "${YELLOW}Deploying to Netlify...${NC}"

# 6. Deploy to Netlify with cache clearing
# First clear cache on Netlify
echo -e "${YELLOW}Clearing Netlify cache...${NC}"
netlify deploy --build

# Then deploy the site
echo -e "${YELLOW}Deploying to production...${NC}"
netlify deploy --prod

echo -e "${GREEN}Deployment complete!${NC}"
echo -e "${BLUE}Visit your Netlify deployment and verify all routes are working.${NC}"
echo -e "${BLUE}If you're still seeing 404 errors, check the Netlify logs and Functions tab for errors.${NC}"
