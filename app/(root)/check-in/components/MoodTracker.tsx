"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CornerDownLeft } from "lucide-react";
import { MOOD_OPTIONS } from "@/constants";
import styles from "./MoodTracker.module.css";

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [energyLevel, setEnergyLevel] = useState<number>(5);
  const [notes, setNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleMoodSelect = (moodValue: string) => {
    setSelectedMood(moodValue);
  };

  const handleEnergyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnergyLevel(parseInt(e.target.value));
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  const handleSubmit = async () => {
    if (!selectedMood) return;

    setIsSubmitting(true);

    try {
      // In a real implementation, this would be connected to the action
      // import { createMoodEntry } from "../actions";
      // await createMoodEntry({
      //   userId: "user-id", // This would come from the user
      //   mood: selectedMood,
      //   energy: energyLevel,
      //   notes: notes.trim() || undefined
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setSelectedMood(null);
        setEnergyLevel(5);
        setNotes("");
      }, 2000);
    } catch (error) {
      console.error("Error submitting mood entry:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 backdrop-blur-sm bg-opacity-80">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 text-purple-500">✨</span>
          <h2 className="text-xl font-semibold text-gray-900">
            How are you feeling today?
          </h2>
        </div>
        <div className="text-sm text-gray-500">Choose one</div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {MOOD_OPTIONS.map((mood) => (
          <button
            key={mood.value}
            className={`mood-selection-button group ${styles.moodButton} ${
              selectedMood === mood.value ? styles.moodButtonSelected : ""
            }`}
            onClick={() => handleMoodSelect(mood.value)}
            data-mood-color={mood.color}
          >
            <div
              className={`${styles.moodOverlay} ${
                selectedMood === mood.value
                  ? styles.moodOverlaySelected
                  : `${styles.moodOverlayHover} group-hover:opacity-15`
              }`}
            ></div>
            <div className={styles.moodGradient}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-25"></div>
            <span className="emoji-container block relative z-10">
              {mood.emoji}
            </span>
            <span className="mood-text-container block relative z-10 w-full">
              <span className="mood-text w-full">{mood.label}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <div className="mb-4">
          <label htmlFor="energy-level" className="block text-sm font-medium text-gray-700 mb-1">
            Energy Level
          </label>
          <div className="flex items-center gap-2">
            <input
              id="energy-level"
              type="range"
              min="1"
              max="10"
              value={energyLevel}
              onChange={handleEnergyChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              aria-label="Energy level slider"
            />
            <span className="text-sm font-medium text-gray-600 min-w-[20px]">
              {energyLevel}
            </span>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Journal Note (Optional)
          </label>
          <div className="relative">
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-all text-gray-700 min-h-[100px] resize-none"
              placeholder="How did your day go? Any notable events?"
              value={notes}
              onChange={handleNotesChange}
            ></textarea>
            <button
              className="absolute bottom-3 right-3 bg-indigo-600 text-white rounded-full p-2 hover:bg-indigo-700 transition-colors"
              onClick={() => setNotes(notes + "❤️")}
              title="Add heart emoji"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            className={`${
              selectedMood
                ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                : "bg-gray-300 cursor-not-allowed"
            } text-white rounded-lg py-2 px-6 shadow-md hover:opacity-90 transition duration-300 flex items-center gap-2`}
            onClick={handleSubmit}
            disabled={!selectedMood || isSubmitting}
          >
            {isSubmitting
              ? "Saving..."
              : submitSuccess
              ? "Saved!"
              : "Save Check-In"}
            <CornerDownLeft className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2 mb-3 md:mb-0">
            <span>MirianiWell</span>
            <span className="text-gray-300">•</span>
            <span>
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-purple-500 transition-colors">
              Help
            </button>
            <button className="text-gray-400 hover:text-purple-500 transition-colors">
              Privacy
            </button>
            <button className="text-gray-400 hover:text-purple-500 transition-colors">
              Terms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
