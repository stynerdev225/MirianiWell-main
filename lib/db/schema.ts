import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const moodEntries = sqliteTable("mood_entries", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  mood: text("mood").notNull(), // e.g., "joyful", "anxious", "peaceful"
  energy: integer("energy").notNull(), // 1-10 scale
  notes: text("notes"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const journalEntries = sqliteTable("journal_entries", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  title: text("title").notNull(),
  content: text("content").notNull(),
  tags: text("tags").notNull(), // JSON string array
  isPrivate: integer("is_private", { mode: "boolean" }).default(true),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const ritualSessions = sqliteTable("ritual_sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  ritualType: text("ritual_type").notNull(), // e.g., "meditation", "breathwork"
  element: text("element").notNull(), // "earth", "water", "fire", "air"
  duration: integer("duration").notNull(), // minutes
  notes: text("notes"),
  rating: integer("rating"), // 1-5 stars, how helpful was the session
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const affirmationSessions = sqliteTable("affirmation_sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  affirmations: text("affirmations").notNull(), // JSON string array
  focusArea: text("focus_area").notNull(), // e.g., "confidence", "healing"
  duration: integer("duration").notNull(), // minutes
  mood: text("mood"), // mood before the session
  moodAfter: text("mood_after"), // mood after the session
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const healingInsights = sqliteTable("healing_insights", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  insight: text("insight").notNull(),
  category: text("category").notNull(), // e.g., "pattern", "breakthrough", "guidance"
  context: text("context"), // what triggered this insight
  isBookmarked: integer("is_bookmarked", { mode: "boolean" }).default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const userPreferences = sqliteTable("user_preferences", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  preferredElements: text("preferred_elements").notNull(), // JSON array
  notificationSettings: text("notification_settings").notNull(), // JSON object
  privacySettings: text("privacy_settings").notNull(), // JSON object
  healingGoals: text("healing_goals"), // JSON array
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

// Type exports
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type MoodEntry = typeof moodEntries.$inferSelect;
export type NewMoodEntry = typeof moodEntries.$inferInsert;

export type JournalEntry = typeof journalEntries.$inferSelect;
export type NewJournalEntry = typeof journalEntries.$inferInsert;

export type RitualSession = typeof ritualSessions.$inferSelect;
export type NewRitualSession = typeof ritualSessions.$inferInsert;

export type AffirmationSession = typeof affirmationSessions.$inferSelect;
export type NewAffirmationSession = typeof affirmationSessions.$inferInsert;

export type HealingInsight = typeof healingInsights.$inferSelect;
export type NewHealingInsight = typeof healingInsights.$inferInsert;

export type UserPreferences = typeof userPreferences.$inferSelect;
export type NewUserPreferences = typeof userPreferences.$inferInsert;
