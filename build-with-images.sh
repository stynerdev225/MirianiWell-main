#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Note: Some images have been moved to Cloudflare R2 for better performance and reliability
# R2 URLs: https://pub-d6475def8a4045c2992481493ad3c8e4.r2.dev/[image-name].avif
# Make sure these domains are configured in next.config.js

echo -e "${YELLOW}Starting image fix and deployment process...${NC}"

# 1. Build the Next.js project
echo -e "${YELLOW}Building Next.js project...${NC}"
next build

# 2. Create necessary directories in .next
echo -e "${YELLOW}Creating image directories in .next...${NC}"
mkdir -p .next/images
mkdir -p .next/images/home
mkdir -p .next/images/rituals

# 3. Copy public directory contents to .next
echo -e "${YELLOW}Copying public assets to .next directory...${NC}"
cp -r public/* .next/

# 4. Explicitly copy image directories 
echo -e "${YELLOW}Explicitly copying image directories...${NC}"
cp -r public/images/home/* .next/images/home/
cp -r public/images/rituals/* .next/images/rituals/

# 5. Make sure critical assets are copied
echo -e "${YELLOW}Ensuring critical assets are copied...${NC}"
cp public/logo.svg .next/
cp public/logo.png .next/
cp public/1.mirani-well-text-logo.png .next/
cp public/404.html .next/
# Images now served from Cloudflare R2 instead of local files

# 6. Set proper permissions
echo -e "${YELLOW}Setting permissions...${NC}"
chmod -R 755 .next/

echo -e "${GREEN}Build and asset copying complete!${NC}"
echo -e "${YELLOW}Ready for deployment with 'netlify deploy --prod'${NC}"

# 7. Deploy to Netlify if requested
if [ "$1" == "--deploy" ]; then
  echo -e "${YELLOW}Deploying to Netlify...${NC}"
  netlify deploy --prod
fi
