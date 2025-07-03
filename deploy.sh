#!/bin/bash

# Set this to your Vercel project name
PROJECT_NAME="miriani-well-main"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting deployment process for $PROJECT_NAME...${NC}"

# Check if the Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
  echo -e "${RED}Vercel CLI is not installed. Installing...${NC}"
  npm i -g vercel@latest
fi

# Run tests if they exist
if [ -f "package.json" ] && grep -q "\"test\":" "package.json"; then
  echo -e "${YELLOW}Running tests...${NC}"
  npm test
  if [ $? -ne 0 ]; then
    echo -e "${RED}Tests failed. Aborting deployment.${NC}"
    exit 1
  fi
  echo -e "${GREEN}Tests passed.${NC}"
fi

# Make sure the .npmrc file exists with legacy-peer-deps
if [ ! -f ".npmrc" ] || ! grep -q "legacy-peer-deps=true" ".npmrc"; then
  echo -e "${YELLOW}Creating .npmrc file with legacy-peer-deps...${NC}"
  echo "legacy-peer-deps=true" > .npmrc
fi

# Build locally first to catch any errors
echo -e "${YELLOW}Building project locally...${NC}"
npm run build
if [ $? -ne 0 ]; then
  echo -e "${RED}Build failed. Aborting deployment.${NC}"
  exit 1
fi
echo -e "${GREEN}Build successful.${NC}"

# Deploy to Vercel
echo -e "${YELLOW}Deploying to Vercel...${NC}"
vercel --prod

# Check if deployment was successful
if [ $? -eq 0 ]; then
  echo -e "${GREEN}Deployment completed successfully!${NC}"
  echo -e "${YELLOW}Don't forget to set the NEXT_PUBLIC_APP_URL environment variable in Vercel.${NC}"
else
  echo -e "${RED}Deployment failed.${NC}"
  exit 1
fi

exit 0
