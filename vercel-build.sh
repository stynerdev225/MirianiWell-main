#!/bin/bash
# Build Next.js project
echo "Building Next.js for Vercel..."
NEXT_PUBLIC_DEPLOYMENT_ENV=vercel next build

# Copy static assets
echo "Copying public assets..."
cp -r public/* .next/
