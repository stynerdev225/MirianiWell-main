// This is a diagnostic script to test your Clerk credentials
// Run this with:
// NODE_ENV=development node clerk-test.js

// Function to extract domain from Clerk publishable key using base64 decoding
function extractClerkDomainFromKey(publishableKey) {
  const prefix = "pk_test_";
  if (!publishableKey?.startsWith(prefix)) return null;

  try {
    const base64Part = publishableKey.slice(prefix.length);
    const decoded = Buffer.from(base64Part, "base64").toString("utf-8");
    // Return the decoded domain
    return decoded.includes(".") ? decoded : null;
  } catch (e) {
    console.error("Error decoding publishable key:", e);
    return null;
  }
}

const testClerkConfig = () => {
  console.log("Testing Clerk configuration...");
  console.log(
    "Publishable Key:",
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  );

  // Try to decode and extract domain from publishable key
  const extractedDomain = extractClerkDomainFromKey(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  );
  if (extractedDomain) {
    console.log("Decoded domain from key:", extractedDomain);
  } else {
    console.log("Could not decode domain from publishable key");
  }

  console.log("Frontend API:", process.env.NEXT_PUBLIC_CLERK_FRONTEND_API);

  // Check if keys look valid
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith("pk_")) {
    console.error("ERROR: Publishable key does not start with pk_");
  } else {
    console.log("Publishable key format looks valid");
  }

  if (!process.env.CLERK_SECRET_KEY?.startsWith("sk_")) {
    console.error("ERROR: Secret key does not start with sk_");
  } else {
    console.log("Secret key format looks valid");
  }

  // Check redirect URLs
  console.log("Sign In URL:", process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL);
  console.log("Sign Up URL:", process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL);
  console.log(
    "After Sign In URL:",
    process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL
  );
  console.log(
    "After Sign Up URL:",
    process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
  );

  console.log(
    "\nPlease verify these values against your Clerk Dashboard settings"
  );
  console.log(
    "Visit: https://dashboard.clerk.com/apps to check your configuration"
  );
};

// Load environment variables from .env.local file
require("dotenv").config({ path: ".env.local" });
testClerkConfig();
