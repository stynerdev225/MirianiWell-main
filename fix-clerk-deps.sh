#!/bin/bash

echo "🔧 Fixing Clerk package dependencies..."

# Check for Clerk packages
echo "Checking for required Clerk packages..."
if ! npm list @clerk/nextjs &>/dev/null; then
  echo "Installing @clerk/nextjs..."
  npm install @clerk/nextjs
fi

if ! npm list @clerk/clerk-sdk-node &>/dev/null; then
  echo "Installing @clerk/clerk-sdk-node..."
  npm install @clerk/clerk-sdk-node
fi

# Check for multiple versions of @clerk/shared
echo "Checking for multiple versions of @clerk/shared..."
CLERK_SHARED_VERSIONS=$(npm ls @clerk/shared | grep -c @clerk/shared || true)

if [ "$CLERK_SHARED_VERSIONS" -gt 1 ]; then
  echo "Multiple versions of @clerk/shared detected. Deduplicating packages..."
  npm dedupe
else
  echo "Single version of @clerk/shared detected. No deduplication needed."
fi

echo "✅ Clerk package dependencies fixed"
echo "You can now deploy with 'npm run deploy:vercel-fixed'"
