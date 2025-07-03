"use client";

import { useState } from "react";
import { Quote, RefreshCw, BookOpen } from "lucide-react";

const inspirationalQuotes = [
  {
    text: "The act of writing is the act of discovering what you believe.",
    author: "David Hare",
    category: "Self-Discovery",
  },
  {
    text: "Writing is a way of talking without being interrupted.",
    author: "Jules Renard",
    category: "Expression",
  },
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    category: "Reflection",
  },
  {
    text: "Your life is your story. Write well. Edit often.",
    author: "Susan Statham",
    category: "Life",
  },
  {
    text: "We write to taste life twice, in the moment and in retrospect.",
    author: "Anaïs Nin",
    category: "Memory",
  },
  {
    text: "The scariest moment is always just before you start.",
    author: "Stephen King",
    category: "Courage",
  },
];

const writingExercises = [
  {
    title: "Letter to Your Future Self",
    description:
      "Write a letter to yourself one year from now. What hopes, dreams, and advice would you share?",
    duration: "15-20 minutes",
    difficulty: "Easy",
  },
  {
    title: "Childhood Memory Exploration",
    description:
      "Describe a vivid childhood memory in detail. What emotions, sounds, and sensations do you remember?",
    duration: "10-15 minutes",
    difficulty: "Medium",
  },
  {
    title: "Stream of Consciousness",
    description:
      "Set a timer for 10 minutes and write continuously without stopping. Don't worry about grammar or structure.",
    duration: "10 minutes",
    difficulty: "Easy",
  },
  {
    title: "Character Study of Yourself",
    description:
      "Write about yourself as if you were a character in a story. What would others notice about you?",
    duration: "20-25 minutes",
    difficulty: "Medium",
  },
  {
    title: "Gratitude Deep Dive",
    description:
      "Choose one thing you're grateful for and explore why it matters to you in at least 300 words.",
    duration: "15-20 minutes",
    difficulty: "Easy",
  },
  {
    title: "Dialogue with Your Emotions",
    description:
      "Pick a strong emotion you've felt recently and write a conversation between you and that emotion.",
    duration: "20-30 minutes",
    difficulty: "Advanced",
  },
];

export default function JournalInspiration() {
  const [currentQuote, setCurrentQuote] = useState(inspirationalQuotes[0]);
  const [currentExercise, setCurrentExercise] = useState(writingExercises[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
    setCurrentQuote(inspirationalQuotes[randomIndex]);
  };

  const getRandomExercise = () => {
    const randomIndex = Math.floor(Math.random() * writingExercises.length);
    setCurrentExercise(writingExercises[randomIndex]);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Advanced":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Daily Quote */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-900">
              Daily Inspiration
            </h3>
          </div>
          <button
            onClick={getRandomQuote}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Get new quote"
          >
            <RefreshCw className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <blockquote className="text-lg text-gray-700 italic mb-4 leading-relaxed">
          "{currentQuote.text}"
        </blockquote>

        <div className="flex items-center justify-between">
          <cite className="text-gray-600 font-medium">
            — {currentQuote.author}
          </cite>
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
            {currentQuote.category}
          </span>
        </div>
      </div>

      {/* Writing Exercise */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-500" />
            <h3 className="text-xl font-semibold text-gray-900">
              Writing Exercise
            </h3>
          </div>
          <button
            onClick={getRandomExercise}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Get new exercise"
          >
            <RefreshCw className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          {currentExercise.title}
        </h4>

        <p className="text-gray-700 mb-4 leading-relaxed">
          {currentExercise.description}
        </p>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-gray-600">
            ⏱️ {currentExercise.duration}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
              currentExercise.difficulty
            )}`}
          >
            {currentExercise.difficulty}
          </span>
        </div>

        <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
          Start This Exercise
        </button>
      </div>
    </div>
  );
}
