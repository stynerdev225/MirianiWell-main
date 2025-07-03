import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This is a simple script to create placeholder PWA icons
// You should replace these with actual designed icons

const createPlaceholderIcon = (size, filename) => {
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="#4f46e5"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${
        size / 8
      }" fill="white" text-anchor="middle" dy=".3em">MW</text>
    </svg>
  `;

  fs.writeFileSync(
    path.join(__dirname, "..", "public", `${filename}.svg`),
    svg
  );
  console.log(`Created placeholder icon: ${filename}.svg`);
};

// Create placeholder icons
createPlaceholderIcon(192, "icon-192x192");
createPlaceholderIcon(512, "icon-512x512");
createPlaceholderIcon(180, "apple-touch-icon");

console.log(
  "Placeholder PWA icons created! Replace these with proper PNG icons."
);
