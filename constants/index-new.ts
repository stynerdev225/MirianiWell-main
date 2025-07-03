// Re-export all constants to make them available through @/constants
import * as affirmationsModule from "./affirmations";
import * as moodModule from "./mood";

// Export individual constants
export const AFFIRMATION_CATEGORIES = affirmationsModule.AFFIRMATION_CATEGORIES;
export const MOOD_OPTIONS = moodModule.MOOD_OPTIONS;

// Import and re-export everything from the original index
import * as originalIndex from "./index";

export const { ELEMENTS, healingGuidanceSchema, RITUAL_TYPES, RITUAL_COVERS } =
  originalIndex;
