#!/bin/bash

echo "🔧 Setting up for Vercel deployment with Clerk fixes..."

# Back up original middleware
if [ -f middleware.ts ]; then
  echo "Backing up original middleware.ts"
  cp middleware.ts middleware.ts.bak
fi

# Use the improved middleware
if [ -f middleware.ts.new ]; then
  echo "Using improved middleware"
  cp middleware.ts.new middleware.ts
else
  echo "Error: middleware.ts.new not found"
  exit 1
fi

# Run the clerk-fixed deployment script
./deploy-clerk-fixed.sh

# Restore original middleware
if [ -f middleware.ts.bak ]; then
  echo "Restoring original middleware"
  cp middleware.ts.bak middleware.ts
  rm middleware.ts.bak
fi

echo "✅ Deployment preparation complete"
echo "You can now deploy to Vercel with improved Clerk handling"
