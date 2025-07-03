import { createDb } from "@/lib/db";
import { moodEntries, journalEntries } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// Get database instance
function getDb() {
  if (process.env.NODE_ENV === "development") {
    console.warn("Database not available in development mode");
    return null;
  }

  const d1 = (global as any).DB;
  if (!d1) {
    console.warn("D1 database not available");
    return null;
  }

  return createDb(d1);
}

export async function getMoodEntriesByUserId(userId: string) {
  try {
    const database = getDb();

    if (!database) {
      console.warn("Database not available - returning empty array");
      return [];
    }

    const entries = await database
      .select()
      .from(moodEntries)
      .where(eq(moodEntries.userId, userId))
      .orderBy(moodEntries.createdAt)
      .limit(10);

    return entries;
  } catch (error) {
    console.error("Error fetching mood entries:", error);
    return [];
  }
}

export async function getJournalEntriesByUserId(userId: string) {
  try {
    const database = getDb();

    if (!database) {
      console.warn("Database not available - returning empty array");
      return [];
    }

    const entries = await database
      .select()
      .from(journalEntries)
      .where(eq(journalEntries.userId, userId))
      .orderBy(journalEntries.createdAt)
      .limit(10);

    return entries;
  } catch (error) {
    console.error("Error fetching journal entries:", error);
    return [];
  }
}
