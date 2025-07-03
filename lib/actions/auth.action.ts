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

export async function updateUser(userId: string, params: Partial<User>): Promise<User | null> {
  console.log("Update user - disabled for deployment", userId, params);
  return null;
}

export async function signInUser(params: SignInParams): Promise<User | null> {
  console.log("Sign in user - disabled for deployment", params);
  return null;
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const { userId } = await auth();
    if (!userId) return null;
    
    // Return a mock user for now
    return {
      id: userId,
      email: "user@example.com",
      firstName: "User",
      lastName: "Name",
      createdAt: new Date(),
      updatedAt: new Date()
    };
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

  return createDb(d1);
}

// Get current user from Clerk auth
export async function getCurrentUser(): Promise<User | null> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return null;
    }

    const database = await getDb();
    if (!database) {
      // In development mode without D1, return a mock user
      return {
        id: userId,
        email: "user@example.com",
        firstName: "Test",
        lastName: "User",
        createdAt: new Date(),
        updatedAt: new Date(),
      } as User;
    }

    // Get user from D1 database
    const userResult = await database
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (userResult.length === 0) {
      return null;
    }

    return userResult[0] as User;
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
    const database = await getDb();
    if (!database) {
      console.warn("Database not available - user sync skipped");
      return {
        success: true,
        message: "User authenticated (database sync skipped in development)",
      };
    }

    // Check if user exists
    const existingUser = await database
      .select()
      .from(users)
      .where(eq(users.id, userData.id))
      .limit(1);

    if (existingUser.length === 0) {
      // Create new user
      await database.insert(users).values({
        id: userData.id,
        email: userData.email,
        firstName: userData.firstName || null,
        lastName: userData.lastName || null,
      });
    } else {
      // Update existing user
      await database
        .update(users)
        .set({
          email: userData.email,
          firstName: userData.firstName || null,
          lastName: userData.lastName || null,
          updatedAt: new Date(),
        })
        .where(eq(users.id, userData.id));
    }

    return { success: true, message: "User synced successfully" };
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
export async function signUp(_params: SignUpParams) {
  // This is now handled by Clerk on the client side
  return {
    success: true,
    message: "Please use Clerk authentication components for sign up",
  };
}

export async function signIn(_params: SignInParams) {
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

export async function setSessionCookie(_idToken: string) {
  // Not needed with Clerk - Clerk handles session management
  return;
}
