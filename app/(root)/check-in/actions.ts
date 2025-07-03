"use server";

import { createDb } from "@/lib/db";
import { moodEntries } from "@/lib/db/schema";
import { v4 as uuidv4 } from "uuid";
import { CreateMoodEntryParams } from "@/types";

export async function createMoodEntry(params: CreateMoodEntryParams) {
  try {
    const database = getDb();

    if (!database) {
      console.warn("Database not available - mood entry not created");
      return null;
    }

    const newEntry = {
      id: uuidv4(),
      userId: params.userId,
      mood: params.mood,
      energy: params.energy,
      notes: params.notes || null,
      createdAt: new Date(),
    };

    await database.insert(moodEntries).values(newEntry);

    return newEntry;
  } catch (error) {
    console.error("Error creating mood entry:", error);
    return null;
  }
}

function getDb() {
  if (process.env.NODE_ENV === "development") {
    console.warn("Database not available in development mode");
    return null;
  }

  const d1 = (global as { DB?: unknown }).DB;
  if (!d1) {
    console.warn("D1 database not available");
    return null;
  }

  return createDb(d1);
}
