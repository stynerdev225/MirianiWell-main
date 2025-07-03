"use server";

import { User } from "@clerk/nextjs/server";

/**
 * Creates a serializable user object from a Clerk User object
 * This solves the serialization error when passing user data to client components
 *
 * @param user - The Clerk User object from currentUser()
 * @returns A simplified user object with only serializable properties
 */
export function createSerializableUser(user: User | null) {
  if (!user) return null;

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
    imageUrl: user.imageUrl,
    email: user.emailAddresses[0]?.emailAddress,
    username: user.username,
    // Add any other properties you commonly need in client components
  };
}

/**
 * Type definition for the serializable user
 * Use this type in your client components
 */
export type SerializableUser = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  fullName: string;
  imageUrl?: string;
  email?: string;
  username?: string | null;
  // Add any other properties that match the createSerializableUser function
};
