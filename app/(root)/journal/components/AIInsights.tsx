"use client";

import { useState } from "react";
import { Brain, Sparkles, TrendingUp, Target, Loader2 } from "lucide-react";
import {
  generateJournalInsights,
  type AIInsightResponse,
} from "@/lib/openrouter";
import "./AIInsights.css";

interface AIInsightsComponentProps {
  journalEntries: Array<{
    title: string;
    content: string;
    createdAt: Date | null;
  }>;
}

export default function AIInsightsComponent({
  journalEntries,
}: AIInsightsComponentProps) {
  const [insights, setInsights] = useState<AIInsightResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateInsights = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Extract content from recent entries (last 5)
      const recentEntries = journalEntries
        .slice(0, 5)
        .map((entry) => `${entry.title}\n${entry.content}`);

      if (recentEntries.length === 0) {
        setError("You need at least one journal entry to generate insights.");
        return;
      }

      const response = await generateJournalInsights(recentEntries);
      setInsights(response);
    } catch (err) {
      console.error("Error generating insights:", err);
      setError(
        "Unable to generate insights at this time. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!insights && !isLoading) {
    return (
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden mb-8">
        <div
          className="ai-insights-background"
        />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Brain className="w-6 h-6" />
            <h2 className="text-xl font-semibold">
              AI-Powered Writing Insights
            </h2>
          </div>
          <p className="text-purple-100 mb-6 text-lg">
            Get personalized suggestions and insights based on your journal
            entries to enhance your self-reflection journey.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">Mood Pattern Analysis</h3>
              <p className="text-purple-100 text-sm">
                Discover recurring themes and emotional patterns in your writing
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">Personalized Prompts</h3>
              <p className="text-purple-100 text-sm">
                Receive tailored writing prompts based on your interests and
                growth areas
              </p>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-300 rounded-lg">
              <p className="text-red-100 text-sm">{error}</p>
            </div>
          )}

          <button
            onClick={generateInsights}
            disabled={isLoading || journalEntries.length === 0}
            className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Generating Insights...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Generate AI Insights
              </>
            )}
          </button>

          {journalEntries.length === 0 && (
            <p className="mt-2 text-purple-200 text-sm">
              Write a few journal entries first to unlock AI insights!
            </p>
          )}
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white mb-8">
        <div className="flex items-center justify-center space-x-3">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span className="text-lg">Analyzing your journal entries...</span>
        </div>
        <p className="text-center text-purple-200 mt-2">
          This may take a moment
        </p>
      </div>
    );
  }

  if (insights) {
    return (
      <div className="space-y-6 mb-8">
        {/* Mood Analysis */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-900">
              Mood Pattern Analysis
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {insights.moodAnalysis}
          </p>
        </div>

        {/* Themes & Growth Areas */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-900">
                Recurring Themes
              </h3>
            </div>
            <div className="space-y-2">
              {insights.themes.map((theme, index) => (
                <div
                  key={index}
                  className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium"
                >
                  {theme}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-900">
                Growth Opportunities
              </h3>
            </div>
            <div className="space-y-2">
              {insights.growthAreas.map((area, index) => (
                <div
                  key={index}
                  className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personalized Suggestions */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-indigo-500" />
            <h3 className="text-xl font-semibold text-gray-900">
              Personalized Writing Suggestions
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {insights.suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100"
              >
                <p className="text-gray-700 italic">&ldquo;{suggestion}&rdquo;</p>
                <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  Use this prompt →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Generate New Insights Button */}
        <div className="text-center">
          <button
            onClick={generateInsights}
            disabled={isLoading}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all font-medium flex items-center gap-2 mx-auto"
          >
            <Sparkles className="w-4 h-4" />
            Generate Fresh Insights
          </button>
        </div>
      </div>
    );
  }

  return null;
}
