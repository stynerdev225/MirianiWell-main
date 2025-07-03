// Temporarily disabled for deployment - all auth database functions
"use server";

import { auth } from "@clerk/nextjs/server";
import type { User, SignUpParams, SignInParams } from "@/types";

export async function createUser(params: SignUpParams): Promise<User | null> {
  console.log("Create user - disabled for deployment", params);
  return null;
}

export async function getUserById(userId: string): Promise<User | null> {
  console.log("Get user by ID - disabled for deployment", userId);
  return null;
}

export async function updateUser(
  userId: string,
  params: Partial<User>
): Promise<User | null> {
  console.log("Update user - disabled for deployment", userId, params);
  return null;
}

export async function signInUser(params: SignInParams): Promise<User | null> {
  console.log("Sign in user - disabled for deployment", params);
  return null;
}

// Get current user from Clerk auth
export async function getCurrentUser(): Promise<User | null> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return null;
    }

    // In development mode without D1, return a mock user
    return {
      id: userId,
      email: "user@example.com",
      firstName: "Test",
      lastName: "User",
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

// Create or update user in database after Clerk authentication
export async function syncUserWithDatabase(userData: {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
}) {
  try {
    // Database not available - user sync skipped
    console.warn("Database not available - user sync skipped", userData);
    return {
      success: true,
      message: "User authenticated (database sync skipped in development)",
    };
  } catch (error) {
    console.error("Error syncing user with database:", error);
    return { success: false, message: "Failed to sync user data" };
  }
}

// Check if user is authenticated (using Clerk)
export async function isAuthenticated() {
  try {
    const { userId } = await auth();
    return !!userId;
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
}

// Legacy functions for backward compatibility
export async function signUp() {
  // This is now handled by Clerk on the client side
  return {
    success: true,
    message: "Please use Clerk authentication components for sign up",
  };
}

export async function signIn() {
  // This is now handled by Clerk on the client side
  return {
    success: true,
    message: "Please use Clerk authentication components for sign in",
  };
}

export async function signOut() {
  // This is now handled by Clerk on the client side
  return {
    success: true,
    message: "Please use Clerk authentication components for sign out",
  };
}

export async function setSessionCookie() {
  // Not needed with Clerk - Clerk handles session management
  return;
}
