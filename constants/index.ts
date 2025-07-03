import { z } from "zod";

// Re-export all constants to make them available through @/constants
import * as affirmationsModule from "./affirmations";
import * as moodModule from "./mood";

// Export individual constants
export const AFFIRMATION_CATEGORIES = affirmationsModule.AFFIRMATION_CATEGORIES;
export const MOOD_OPTIONS = moodModule.MOOD_OPTIONS;

// Elemental ritual configurations
export const ELEMENTS = {
  earth: {
    name: "Earth",
    color: "#8B5A2B",
    description: "Grounding, stability, and strength",
    practices: ["meditation", "breathwork", "grounding", "visualization"],
  },
  water: {
    name: "Water",
    color: "#4A90E2",
    description: "Flow, emotion, and cleansing",
    practices: ["reflection", "emotional release", "cleansing", "flow"],
  },
  fire: {
    name: "Fire",
    color: "#E74C3C",
    description: "Transformation, passion, and energy",
    practices: ["energy work", "transformation", "passion", "vitality"],
  },
  air: {
    name: "Air",
    color: "#95A5A6",
    description: "Clarity, communication, and wisdom",
    practices: ["breathwork", "clarity", "communication", "mindfulness"],
  },
} as const;

// Healing guidance schema for AI responses
export const healingGuidanceSchema = z.object({
  primaryInsight: z.string(),
  affirmations: z.array(z.string()),
  practices: z.array(z.string()),
  elementalGuidance: z.object({
    element: z.enum(["earth", "water", "fire", "air"]),
    practice: z.string(),
    duration: z.string(),
  }),
  reflectionPrompts: z.array(z.string()),
  healingMessage: z.string(),
});

// Daily inspiration quotes
export const HEALING_QUOTES = [
  "Within you lies the power to heal, transform, and create the life you desire.",
  "Every breath is a new beginning, every moment a chance to start fresh.",
  "You are not broken; you are breaking open to become who you truly are.",
  "Trust the process of your healing journey - you are exactly where you need to be.",
  "Your sensitivity is a superpower, your emotions are wisdom in motion.",
  "In stillness, you find your strength. In movement, you find your freedom.",
  "You are worthy of love, healing, and all the magic life has to offer.",
  "The earth supports you, the water cleanses you, the fire transforms you, the air lifts you.",
] as const;

// Ritual session types
export const RITUAL_TYPES = [
  "meditation",
  "breathwork",
  "visualization",
  "movement",
  "journaling",
  "gratitude",
  "intention-setting",
  "energy-clearing",
] as const;

// Default ritual covers (nature-based)
export const RITUAL_COVERS = [
  "/nature-earth.jpg",
  "/nature-water.jpg",
  "/nature-fire.jpg",
  "/nature-air.jpg",
  "/meditation.jpg",
  "/crystals.jpg",
  "/forest.jpg",
  "/ocean.jpg",
] as const;

// Re-export for compatibility
export const DAILY_AFFIRMATIONS = HEALING_QUOTES;
