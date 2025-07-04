#!/bin/bash

# Copy public files to the .next directory for Netlify deployment
echo "Copying public assets to .next directory..."
cp -r public/* .next/

# Ensure permissions are correct
chmod -R 755 .next/

echo "Post-build asset copying complete!"
