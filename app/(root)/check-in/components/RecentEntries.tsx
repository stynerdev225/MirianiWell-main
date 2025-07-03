"use client";

import { CalendarDays, Heart, Edit } from "lucide-react";
import { MOOD_OPTIONS } from "@/constants";

type MoodEntryType = {
  id: string;
  userId: string;
  mood: string;
  energy: number;
  notes: string | null;
  createdAt: Date | null;
};

type RecentEntriesProps = {
  entries: MoodEntryType[];
};

export default function RecentEntries({ entries }: RecentEntriesProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 backdrop-blur-sm bg-opacity-80">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Check-Ins
          </h2>
        </div>
        <button className="text-xs text-indigo-600 hover:text-indigo-800 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {entries.length > 0 ? (
          entries.slice(0, 5).map((entry, index) => {
            const mood = MOOD_OPTIONS.find((m) => m.value === entry.mood);
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 cursor-pointer group"
              >
                <div
                  className={`flex items-center justify-center h-10 w-10 rounded-full ${
                    mood?.color ? "bg-gray-100" : "bg-gray-100"
                  }`}
                >
                  <div className="text-xl">{mood?.emoji}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 truncate">
                    {mood?.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {entry.createdAt
                      ? new Date(entry.createdAt).toLocaleDateString(
                          undefined,
                          {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )
                      : "Today"}{" "}
                    • Energy: {entry.energy}/10
                  </div>
                </div>
                {entry.notes && (
                  <div className="hidden md:block text-sm text-gray-600 italic max-w-[150px] truncate">
                    &ldquo;{entry.notes}&rdquo;
                  </div>
                )}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="p-1 text-gray-400 hover:text-indigo-600"
                    title="Edit entry"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 text-slate-800">
            <Heart className="w-12 h-12 mx-auto mb-3 text-slate-400" />
            <p className="font-semibold mb-2 text-slate-800">
              No check-ins yet.
            </p>
            <p className="text-sm mt-1 text-slate-600">
              Start your wellness journey today!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
