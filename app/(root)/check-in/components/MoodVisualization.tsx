"use client";

import { useState } from "react";
import { TrendingUp, Activity } from "lucide-react";

type TimeRange = "7days" | "30days" | "3months";

export default function MoodVisualization() {
  const [timeRange, setTimeRange] = useState<TimeRange>("7days");

  const handleTimeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(e.target.value as TimeRange);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 backdrop-blur-sm bg-opacity-80">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-500" />
          <h2 className="text-xl font-semibold text-gray-900">
            Your Mood Patterns
          </h2>
        </div>
        <div>
          <select
            className="text-sm border border-gray-300 rounded-md py-1 px-3 bg-white focus:ring-2 focus:ring-indigo-300"
            value={timeRange}
            onChange={handleTimeRangeChange}
            aria-label="Select time range for mood visualization"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="3months">Last 3 months</option>
          </select>
        </div>
      </div>

      <div className="h-64 w-full bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
        <div className="text-center text-gray-500">
          <Activity className="h-10 w-10 mx-auto mb-3 text-indigo-300" />
          <p>Your mood visualization will appear here</p>
          <p className="text-sm mt-1">Track your mood daily to see patterns</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
          <div className="text-sm text-gray-600 mb-1">Most frequent mood</div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">😊</span>
            <span className="font-medium text-gray-900">Joyful</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
          <div className="text-sm text-gray-600 mb-1">Average energy</div>
          <div className="flex items-center">
            <span className="text-xl mr-2">⚡</span>
            <span className="font-medium text-gray-900">7.2/10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
