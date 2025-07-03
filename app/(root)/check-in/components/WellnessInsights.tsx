"use client";

import Link from "next/link";
import { Award, Sparkles, BookOpen } from "lucide-react";

export default function WellnessInsights() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-80">
      <div className="flex items-center gap-2 mb-4">
        <Award className="w-5 h-5 text-amber-500" />
        <h2 className="text-lg font-semibold text-gray-900">
          Wellness Insights
        </h2>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 mb-4">
        <div className="flex items-start gap-3">
          <div className="text-amber-500 mt-1">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Your Streak</h3>
            <p className="text-sm text-gray-600 mt-1">
              You&apos;ve checked in 3 days in a row! Keep going to build a healthy
              habit.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="text-blue-500 mt-1">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Recommendation</h3>
            <p className="text-sm text-gray-600 mt-1">
              Based on your mood patterns, try our Water ritual to bring more
              balance to your emotions.
            </p>
            <Link
              href="/rituals"
              className="text-xs text-blue-600 font-medium mt-2 inline-block hover:underline"
            >
              Explore rituals →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
