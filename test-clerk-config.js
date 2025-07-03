// Test Clerk API connectivity
const testClerkConfig = () => {
  console.log("Testing Clerk Configuration...");

  // Check environment variables
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const secretKey = process.env.CLERK_SECRET_KEY;
  const frontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

  console.log(
    "Publishable Key:",
    publishableKey ? `${publishableKey.substring(0, 20)}...` : "MISSING"
  );
  console.log(
    "Secret Key:",
    secretKey ? `${secretKey.substring(0, 20)}...` : "MISSING"
  );
  console.log("Frontend API:", frontendApi);

  // Test if publishable key is properly formatted
  if (publishableKey) {
    const isValidFormat =
      publishableKey.startsWith("pk_test_") ||
      publishableKey.startsWith("pk_live_");
    console.log("Publishable key format valid:", isValidFormat);

    // Decode base64 part if it's a test key
    if (publishableKey.startsWith("pk_test_")) {
      try {
        const base64Part = publishableKey.replace("pk_test_", "");
        const decoded = Buffer.from(base64Part, "base64").toString("utf-8");
        console.log("Decoded domain:", decoded);
      } catch (e) {
        console.error("Failed to decode publishable key:", e.message);
      }
    }
  }

  // Test API connectivity
  if (frontendApi) {
    console.log("\nTesting API connectivity...");
    fetch(`${frontendApi}/v1/client`)
      .then((response) => {
        console.log("API Response Status:", response.status);
        if (response.ok) {
          console.log("✅ Clerk API is accessible");
        } else {
          console.log("❌ Clerk API returned error:", response.status);
        }
      })
      .catch((error) => {
        console.error("❌ Failed to connect to Clerk API:", error.message);
      });
  }
};

testClerkConfig();
