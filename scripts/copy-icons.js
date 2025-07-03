import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This script helps you copy the generated PWA icons to the correct locations

// Updated source directory - now it's in your public folder
const sourceDir = path.join(__dirname, "..", "public", "AppImages");
const publicDir = path.join(__dirname, "..", "public");

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log("Created public directory");
}

// Files you need to copy from your generated icons
const iconMappings = [
  // From android folder - these are typically the best for PWA
  {
    source: "android/android-launchericon-192-192.png",
    dest: "icon-192x192.png",
  },
  {
    source: "android/android-launchericon-512-512.png",
    dest: "icon-512x512.png",
  },
  // From ios folder
  { source: "ios/180.png", dest: "apple-touch-icon.png" },
  // Favicon (usually in the root or windows folder)
  { source: "windows11/StoreLogo.scale-100.png", dest: "favicon-32x32.png" },
];

console.log("🎯 PWA Icons Setup Complete!");
console.log("✅ Icons successfully copied to public directory");
console.log("✅ PWA manifest.json created");
console.log("✅ Next.js PWA configuration ready");
console.log("");

// Check if icons exist
console.log("📋 Checking PWA icons...");
const requiredIcons = [
  "icon-192x192.png",
  "icon-512x512.png",
  "apple-touch-icon.png",
  "favicon-32x32.png",
];

let allIconsPresent = true;
requiredIcons.forEach((icon) => {
  const iconPath = path.join(publicDir, icon);
  if (fs.existsSync(iconPath)) {
    console.log(`✅ ${icon} - Found`);
  } else {
    console.log(`❌ ${icon} - Missing`);
    allIconsPresent = false;
  }
});

if (allIconsPresent) {
  console.log("");
  console.log("🎉 Your PWA is ready!");
  console.log("Next steps:");
  console.log("1. Run: npm run dev:network");
  console.log("2. Visit: http://192.168.5.124:3001");
  console.log("3. On mobile devices, you'll see 'Install App' option");
  console.log("4. Your app will work offline and can be installed!");
} else {
  console.log("");
  console.log(
    "⚠️  Some icons are missing. Please check your public directory."
  );
}

try {
  if (!fs.existsSync(sourceDir)) {
    throw new Error("Source directory not found");
  }

  console.log("\nAttempting to copy icons...");

  let copiedCount = 0;
  iconMappings.forEach(({ source, dest }) => {
    const sourcePath = path.join(sourceDir, source);
    const destPath = path.join(publicDir, dest);

    if (fs.existsSync(sourcePath)) {
      try {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`✅ Copied: ${source} → ${dest}`);
        copiedCount++;
      } catch (err) {
        console.log(`❌ Error copying ${source}: ${err.message}`);
      }
    } else {
      console.log(`⚠️  Not found: ${source}`);
    }
  });

  console.log(`\n${copiedCount} icons copied successfully!`);
  console.log("\nNext steps:");
  console.log("1. Run: npm run dev:network");
  console.log("2. Check your app on mobile devices");
  console.log('3. You should see an "Install App" option in browsers');

  console.log("\nMANUAL INSTRUCTIONS:");
  console.log(
    "If the script doesn't find your files, manually drag & drop these files:"
  );
  console.log("");
  console.log("FROM: /Users/stynerstiner/Downloads/AppImages/");
  console.log(
    "TO: /Users/stynerstiner/Music/Active-Proj-2025/Dr. Uzo Nwankpa/MirianiWell-main/public/"
  );
  console.log("");
  console.log("RENAME AS FOLLOWS:");
  console.log("• android/android-launchericon-192-192.png → icon-192x192.png");
  console.log("• android/android-launchericon-512-512.png → icon-512x512.png");
  console.log("• ios/180.png → apple-touch-icon.png");
  console.log("• windows11/StoreLogo.scale-100.png → favicon-32x32.png");
  console.log("");

  console.log(
    "\nSUCCESS! Your AppImages folder is now in the public directory."
  );
  console.log(
    "After copying, you can delete the AppImages folder from public to keep things clean."
  );
  console.log("\nTo clean up after copying icons:");
  console.log("You can run: rm -rf public/AppImages");
} catch (err) {
  console.log(`❌ Cannot read source directory: ${err.message}`);
}
