// Wellness Platform Types

// Auth Types
export type FormType = "sign-in" | "sign-up";

export interface SignUpParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface MoodEntry {
  id: string;
  userId: string;
  mood: string;
  energy: number;
  notes?: string;
  createdAt: Date;
}

export interface JournalEntry {
  id: string;
  userId: string;
  title: string;
  content: string;
  tags: string[];
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RitualSession {
  id: string;
  userId: string;
  ritualType: string;
  element: "earth" | "water" | "fire" | "air";
  duration: number;
  notes?: string;
  rating?: number;
  createdAt: Date;
}

export interface AffirmationSession {
  id: string;
  userId: string;
  affirmations: string[];
  focusArea: string;
  duration: number;
  mood?: string;
  moodAfter?: string;
  createdAt: Date;
}

export interface HealingInsight {
  id: string;
  userId: string;
  insight: string;
  category: "pattern" | "breakthrough" | "guidance";
  context?: string;
  isBookmarked: boolean;
  createdAt: Date;
}

export interface UserPreferences {
  id: string;
  userId: string;
  preferredElements: string[];
  notificationSettings: object;
  privacySettings: object;
  healingGoals?: string[];
  updatedAt: Date;
}

// API Parameters
export interface CreateMoodEntryParams {
  userId: string;
  mood: string;
  energy: number;
  notes?: string;
}

export interface CreateJournalEntryParams {
  userId: string;
  title: string;
  content: string;
  tags?: string[];
}

export interface CreateRitualSessionParams {
  userId: string;
  ritualType: string;
  element: "earth" | "water" | "fire" | "air";
  duration: number;
  notes?: string;
}

export interface GenerateHealingGuidanceParams {
  mood: string;
  energy: number;
  currentChallenges: string;
  goals: string;
}

export interface GetAffirmationsParams {
  mood: string;
  focus: string;
  goals: string;
}

export interface HealingGuidance {
  acknowledgment: string;
  practices: string[];
  affirmations: string[];
  elementalFocus: string;
  additionalNotes: string;
}

// User Interface
export interface User {
  id: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}

// Component Props
export interface RitualCardProps {
  id: string;
  title: string;
  description: string;
  element: "earth" | "water" | "fire" | "air";
  duration: string;
  benefits: string[];
}

export interface MoodTrackerProps {
  userId: string;
  onMoodSubmit: (entry: MoodEntry) => void;
}

export interface JournalProps {
  userId: string;
  entries: JournalEntry[];
}

export interface WellnessCompanionProps {
  userId: string;
  currentMood?: string;
  recentEntries?: MoodEntry[];
}

// Route Params
export interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

// Form Types
export type WellnessFormType =
  | "mood-check-in"
  | "journal-entry"
  | "ritual-session";

// Elemental Types
export type ElementType = "earth" | "water" | "fire" | "air";

export interface ElementalRitual {
  id: string;
  name: string;
  element: ElementType;
  description: string;
  duration: string;
  steps: string[];
  benefits: string[];
  materials?: string[];
}

// AI Companion Types
export interface CompanionResponse {
  message: string;
  suggestions: string[];
  ritualRecommendations?: ElementalRitual[];
  affirmations?: string[];
}

// Dashboard Analytics
export interface WellnessAnalytics {
  moodTrends: Array<{ date: string; mood: string; energy: number }>;
  ritualFrequency: Array<{ element: ElementType; count: number }>;
  journalStreak: number;
  topInsights: HealingInsight[];
}
