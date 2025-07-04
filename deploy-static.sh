#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting static export deployment for Miriani Well...${NC}"

# Check if the next export command exists in the package.json scripts
if ! grep -q "\"export\":" package.json; then
  echo -e "${YELLOW}Adding export script to package.json...${NC}"
  # Add export script to package.json using temporary file
  sed -i '' 's/"build": "next build && cp -r public\/\* .next\/"/"build": "next build && cp -r public\/\* .next\/"\,\n    "export": "next export"/g' package.json
fi

# Build and export the project
echo -e "${YELLOW}Building and exporting the Next.js project...${NC}"
npm run build || { echo -e "${RED}Build failed!${NC}"; exit 1; }

# Create out directory if it doesn't exist
mkdir -p out

# Copy public assets to out directory
echo -e "${YELLOW}Copying public assets to out directory...${NC}"
cp -r public/* out/

# Ensure .next/static is copied to out/_next/static
echo -e "${YELLOW}Copying Next.js static assets...${NC}"
mkdir -p out/_next
cp -r .next/static out/_next/

# Use the static Netlify config
echo -e "${YELLOW}Using static Netlify configuration...${NC}"
cp netlify-static.toml netlify.toml

# Deploy to Netlify
echo -e "${YELLOW}Deploying to Netlify...${NC}"
netlify deploy --prod --dir=out

echo -e "${GREEN}Static deployment complete!${NC}"
