// Temporarily disabled for deployment - all database functions
"use server";

export async function saveMoodEntry() {
  console.log("Mood entry save - disabled for deployment");
  return null;
}

export async function saveJournalEntry() {
  console.log("Journal entry save - disabled for deployment");
  return null;
}

export async function getMoodEntries() {
  console.log("Get mood entries - disabled for deployment");
  return [];
}

export async function getJournalEntries() {
  console.log("Get journal entries - disabled for deployment");
  return [];
}

export async function getMoodEntriesByUserId(userId: string) {
  console.log("Get mood entries by user - disabled for deployment", userId);
  return [];
}

export async function getJournalEntriesByUserId(userId: string) {
  console.log("Get journal entries by user - disabled for deployment", userId);
  return [];
}
