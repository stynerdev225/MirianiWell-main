// Simple test to check Clerk configuration and users
const { Clerk } = require("@clerk/clerk-sdk-node");

const clerk = Clerk({ secretKey: process.env.CLERK_SECRET_KEY });

async function checkUsers() {
  try {
    console.log("Checking Clerk users...");
    const users = await clerk.users.getUserList({
      emailAddress: ["adm.mirianiwell@gmail.com"],
    });

    console.log("Found users:", users.length);

    if (users.length > 0) {
      const user = users[0];
      console.log("User ID:", user.id);
      console.log("Email:", user.emailAddresses[0]?.emailAddress);
      console.log(
        "Email verified:",
        user.emailAddresses[0]?.verification?.status
      );
      console.log("Created at:", user.createdAt);

      // If the user exists but has issues, we could delete and recreate
      console.log("\nUser exists and appears to be verified.");
      console.log("The issue might be with the session management.");
    } else {
      console.log("No users found with that email address.");
    }
  } catch (error) {
    console.error("Error checking users:", error);
  }
}

checkUsers();
