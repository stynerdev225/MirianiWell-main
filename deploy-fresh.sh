#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting fresh Netlify deployment with cache clearing...${NC}"

# 1. Build the Next.js project
echo -e "${YELLOW}Building Next.js project...${NC}"
next build

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
echo -e "${YELLOW}Deploying to Netlify with cache clearing...${NC}"

# 5. Deploy to Netlify with cache clearing
netlify deploy --prod --clear

echo -e "${GREEN}Deployment complete!${NC}"
echo -e "${BLUE}If you're still seeing 404 errors, please check the Netlify logs for more information.${NC}"
