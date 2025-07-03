// Test frontend Clerk initialization
"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import { useEffect } from "react";

export default function ClerkDebugPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const clerk = useClerk();

  useEffect(() => {
    console.log("=== Clerk Debug Info ===");
    console.log("Clerk loaded:", isLoaded);
    console.log("User signed in:", isSignedIn);
    console.log("User object:", user);
    console.log("Clerk instance:", clerk);
    console.log(
      "Publishable key:",
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
    );
    console.log("Frontend API:", process.env.NEXT_PUBLIC_CLERK_FRONTEND_API);

    if (clerk && clerk.client) {
      console.log("Clerk client status:", clerk.client.activeSessions);
      console.log("Clerk environment:", clerk.frontendApi);
    }
  }, [isLoaded, isSignedIn, user, clerk]);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Clerk Debug Information</h1>

      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="font-semibold">Load Status</h2>
          <p>Clerk Loaded: {isLoaded ? "✅" : "❌"}</p>
          <p>User Signed In: {isSignedIn ? "✅" : "❌"}</p>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold">Environment Variables</h2>
          <p>
            Publishable Key:{" "}
            {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.substring(0, 20)}...
          </p>
          <p>Frontend API: {process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}</p>
        </div>

        {user && (
          <div className="p-4 border rounded">
            <h2 className="font-semibold">User Information</h2>
            <p>ID: {user.id}</p>
            <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
            <p>Username: {user.username}</p>
          </div>
        )}

        <div className="p-4 border rounded">
          <h2 className="font-semibold">Actions</h2>
          <button
            onClick={() => clerk.openSignIn()}
            className="mr-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Open Sign In
          </button>
          <button
            onClick={() => clerk.openSignUp()}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Open Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
