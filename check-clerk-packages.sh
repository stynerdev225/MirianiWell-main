#!/bin/bash

echo "🔍 Checking for Clerk package conflicts..."

# Check for multiple versions of @clerk/shared
echo "Checking @clerk/shared versions:"
npm ls @clerk/shared

# Check other Clerk packages
echo -e "\nChecking all Clerk packages:"
npm ls | grep clerk

echo -e "\n✅ Dependency check complete"
echo "If you see multiple versions above, consider fixing with: npm dedupe"
