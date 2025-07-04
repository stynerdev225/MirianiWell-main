#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting static export deployment for Miriani Well...${NC}"

# Backup the original next.config.js
echo -e "${YELLOW}Backing up original next.config.js...${NC}"
cp next.config.js next.config.js.backup

# Use the static config for the build
echo -e "${YELLOW}Using static export configuration...${NC}"
cp next.config.static.js next.config.js

# Build the project with static export
echo -e "${YELLOW}Building the Next.js project with static export...${NC}"
npm run build || { 
  echo -e "${RED}Build failed! Restoring original config...${NC}"
  mv next.config.js.backup next.config.js
  exit 1
}

# Create out directory if it doesn't exist (should be created by the build)
mkdir -p out

# Copy public assets to out directory (additional safety measure)
echo -e "${YELLOW}Ensuring all public assets are in out directory...${NC}"
cp -r public/* out/

# Use the static Netlify config
echo -e "${YELLOW}Using static Netlify configuration...${NC}"
cp netlify-static.toml netlify.toml.deploy

# Deploy to Netlify
echo -e "${YELLOW}Deploying to Netlify...${NC}"
netlify deploy --prod --dir=out --config=netlify.toml.deploy

# Restore the original next.config.js
echo -e "${YELLOW}Restoring original configuration...${NC}"
mv next.config.js.backup next.config.js

echo -e "${GREEN}Static deployment complete!${NC}"
