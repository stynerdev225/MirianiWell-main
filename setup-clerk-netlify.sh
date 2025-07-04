#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Setting up Clerk with Netlify...${NC}"

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo -e "${RED}Netlify CLI not found. Please install it with: npm install -g netlify-cli${NC}"
    exit 1
fi

# Check if user is logged in to Netlify
netlify status &> /dev/null
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}You need to log in to Netlify first.${NC}"
    netlify login
fi

# Prompt for Clerk keys
echo -e "${YELLOW}Please enter your Clerk API keys (from https://dashboard.clerk.com/last-active?path=api-keys):${NC}"
echo -e "${YELLOW}NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:${NC}"
read publishable_key

echo -e "${YELLOW}CLERK_SECRET_KEY:${NC}"
read secret_key

echo -e "${YELLOW}NEXT_PUBLIC_CLERK_FRONTEND_API (optional, press enter to skip):${NC}"
read frontend_api

# Validate inputs
if [[ -z "$publishable_key" || -z "$secret_key" ]]; then
    echo -e "${RED}Both publishable key and secret key are required.${NC}"
    exit 1
fi

# Set environment variables in Netlify
echo -e "${YELLOW}Setting environment variables in Netlify...${NC}"
netlify env:set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY "$publishable_key"
netlify env:set CLERK_SECRET_KEY "$secret_key"

if [[ ! -z "$frontend_api" ]]; then
    netlify env:set NEXT_PUBLIC_CLERK_FRONTEND_API "$frontend_api"
fi

# Set app URL
netlify sites:info | grep -q "https://miriani-well.netlify.app"
if [ $? -eq 0 ]; then
    netlify env:set NEXT_PUBLIC_APP_URL "https://miriani-well.netlify.app"
fi

echo -e "${GREEN}Clerk environment variables have been set in Netlify!${NC}"
echo -e "${YELLOW}Triggering a new deploy to apply the changes...${NC}"

# Trigger a new deploy
netlify deploy --prod

echo -e "${GREEN}Setup complete! Your site should now have the Clerk API keys configured.${NC}"
