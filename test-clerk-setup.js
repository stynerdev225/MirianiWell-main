// Test Clerk API connectivity and configuration
const { Clerk } = require("@clerk/clerk-sdk-node");

async function testClerkSetup() {
  try {
    console.log("Testing Clerk configuration...");

    // Initialize Clerk with your secret key
    const clerk = Clerk({
      secretKey: "sk_test_HGuvbKJ83eKYNcCljsCjuE1FLttZIJAexb2FgnHNTx",
    });

    console.log("Clerk instance created successfully");

    // Test API connectivity by getting instance info
    try {
      const users = await clerk.users.getUserList({ limit: 1 });
      console.log("✅ API connectivity successful");
      console.log("Users found:", users.length);
    } catch (apiError) {
      console.log("❌ API Error:", apiError.message);
      if (apiError.status) {
        console.log("Status:", apiError.status);
      }
    }

    // Test environment configuration
    console.log("\n=== Environment Check ===");
    console.log(
      "Publishable Key:",
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.substring(0, 20) + "..."
    );
    console.log(
      "Secret Key:",
      process.env.CLERK_SECRET_KEY?.substring(0, 20) + "..."
    );
    console.log("Frontend API:", process.env.NEXT_PUBLIC_CLERK_FRONTEND_API);
  } catch (error) {
    console.error("❌ Clerk setup failed:", error.message);
    console.error("Error details:", error);
  }
}

// Load environment variables
require("dotenv").config({ path: ".env.local" });
testClerkSetup();
