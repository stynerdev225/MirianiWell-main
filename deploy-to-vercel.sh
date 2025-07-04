#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting Vercel deployment process...${NC}"

# Create a custom build script for Vercel
echo -e "${YELLOW}Creating custom build script for Vercel...${NC}"
cat > vercel-build.sh << 'EOL'
#!/bin/bash
# Build Next.js project
echo "Building Next.js for Vercel..."
NEXT_PUBLIC_DEPLOYMENT_ENV=vercel next build

# Copy static assets
echo "Copying public assets..."
cp -r public/* .next/
EOL

# Make the script executable
chmod +x vercel-build.sh

# Update vercel.json for better compatibility
echo -e "${YELLOW}Updating Vercel configuration...${NC}"
cat > vercel.json << 'EOL'
{
  "version": 2,
  "installCommand": "npm install --legacy-peer-deps",
  "buildCommand": "./vercel-build.sh",
  "framework": "nextjs",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
EOL

# Create a .vercelignore file to exclude problematic files
echo -e "${YELLOW}Creating .vercelignore file...${NC}"
cat > .vercelignore << 'EOL'
# Ignore debug files
app/clerk-debug
app/clerk-debug/**
EOL

# Deploy to Vercel
echo -e "${GREEN}Configuration complete. Deploying to Vercel...${NC}"
vercel --prod

echo -e "${BLUE}Deployment complete! Check the Vercel dashboard for details.${NC}"
echo -e "${BLUE}If you encounter any issues, you can revert to Netlify using 'npm run deploy:404-fixed'.${NC}"
