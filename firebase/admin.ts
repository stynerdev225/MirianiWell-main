import { createDb } from "@/lib/db";

// Get database instance for Cloudflare D1
export function getDatabase() {
  // In development, we'll use a mock or local setup
  // In production, this will be provided by Cloudflare Workers
  if (process.env.NODE_ENV === "development") {
    console.warn(
      "Database not available in development mode without Cloudflare Workers"
    );
    return null;
  }

  // This will be available when running on Cloudflare Pages/Workers
  const d1 = (global as any).DB;
  if (!d1) {
    console.warn(
      "D1 database not available - ensure you're running on Cloudflare"
    );
    return null;
  }

  return createDb(d1);
}

export const db = getDatabase();
