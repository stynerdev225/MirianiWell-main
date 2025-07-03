// Mood tracking options
export const MOOD_OPTIONS = [
  { value: "joyful", label: "Joyful", emoji: "😊", color: "#FFD700" },
  { value: "peaceful", label: "Peaceful", emoji: "😌", color: "#87CEEB" },
  { value: "grateful", label: "Grateful", emoji: "🙏", color: "#98FB98" },
  { value: "energetic", label: "Energetic", emoji: "⚡", color: "#FF6347" },
  {
    value: "contemplative",
    label: "Contemplative",
    emoji: "🤔",
    color: "#DDA0DD",
  },
  { value: "overwhelmed", label: "Overwhelmed", emoji: "😰", color: "#FFA07A" },
  { value: "sad", label: "Sad", emoji: "😢", color: "#B0C4DE" },
  { value: "anxious", label: "Anxious", emoji: "😟", color: "#F0E68C" },
] as const;
