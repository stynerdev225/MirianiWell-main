#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting image debugging for Miriani Well...${NC}"

# Step 1: Check if all referenced images exist in the public folder
echo -e "${BLUE}Checking for image references in code...${NC}"

# Find all image references in code
image_refs=$(grep -r "src=\"\/" --include="*.tsx" --include="*.jsx" --include="*.js" --include="*.ts" . | grep -o "src=\"[^\"]*\"" | sed 's/src="\(.*\)"/\1/')

echo -e "${BLUE}Found $(echo "$image_refs" | wc -l | xargs) image references${NC}"

# Check if each referenced image exists
echo -e "${BLUE}Checking if referenced images exist in public folder...${NC}"
missing_images=0
for img in $image_refs; do
  # Remove leading slash
  img_path=$(echo "$img" | sed 's/^\///')
  
  if [[ "$img" == *"http"* ]]; then
    echo -e "${GREEN}External image: $img${NC}"
    continue
  fi
  
  if [ -f "public/$img_path" ]; then
    echo -e "${GREEN}✓ Found: $img${NC}"
  else
    echo -e "${RED}✗ Missing: $img (should be at public/$img_path)${NC}"
    missing_images=$((missing_images + 1))
  fi
done

echo -e "\n${BLUE}Image check summary:${NC}"
if [ $missing_images -eq 0 ]; then
  echo -e "${GREEN}All referenced images found in public folder${NC}"
else
  echo -e "${RED}$missing_images referenced images are missing from public folder${NC}"
fi

# Step 2: Check if public/images folder exists and has content
echo -e "\n${BLUE}Checking public/images folder...${NC}"
if [ -d "public/images" ]; then
  image_count=$(find public/images -type f | wc -l)
  echo -e "${GREEN}public/images folder exists with $image_count files${NC}"
  
  # List subfolder structure
  echo -e "${BLUE}Image folder structure:${NC}"
  find public/images -type d | sort
  
  # Sample of images
  echo -e "\n${BLUE}Sample of images:${NC}"
  find public/images -type f | head -n 10
else
  echo -e "${RED}public/images folder does not exist${NC}"
fi

# Step 3: Check if .next folder has images copied correctly during build
echo -e "\n${BLUE}Checking if .next folder has images...${NC}"
if [ -d ".next" ]; then
  if [ -d ".next/images" ]; then
    next_image_count=$(find .next/images -type f | wc -l)
    echo -e "${GREEN}.next/images folder exists with $next_image_count files${NC}"
  else
    echo -e "${RED}.next/images folder does not exist - images may not be copied during build${NC}"
  fi
  
  # Check if other image files were copied
  next_public_files=$(find .next -maxdepth 1 -type f -name "*.jpg" -o -name "*.png" -o -name "*.svg" | wc -l)
  if [ $next_public_files -gt 0 ]; then
    echo -e "${GREEN}Found $next_public_files image files directly in .next folder${NC}"
  else
    echo -e "${YELLOW}No image files found directly in .next folder${NC}"
  fi
else
  echo -e "${YELLOW}.next folder does not exist - run a build first${NC}"
fi

echo -e "\n${BLUE}Checking build script in package.json...${NC}"
if grep -q "cp -r public" package.json; then
  echo -e "${GREEN}Build script includes copying public files${NC}"
else
  echo -e "${RED}Build script may not copy public files to .next${NC}"
fi

echo -e "\n${YELLOW}Image debugging complete!${NC}"
echo -e "${YELLOW}If you're seeing missing images on Netlify:${NC}"
echo -e "1. Make sure all image paths start with a slash (/)"
echo -e "2. Check that the images exist in the public folder"
echo -e "3. Run 'npm run build' and verify images are copied to .next folder"
echo -e "4. Update netlify.toml to allow images in Content-Security-Policy"
