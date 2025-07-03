"use client";

import { PenLine, Bell, Waves, RefreshCw } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
      <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-3 text-left backdrop-blur-sm">
          <PenLine className="h-5 w-5 mb-2" />
          <span className="text-sm font-medium block">Journal Entry</span>
        </button>
        <button className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-3 text-left backdrop-blur-sm">
          <Bell className="h-5 w-5 mb-2" />
          <span className="text-sm font-medium block">Set Reminder</span>
        </button>
        <button className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-3 text-left backdrop-blur-sm">
          <Waves className="h-5 w-5 mb-2" />
          <span className="text-sm font-medium block">Try Meditation</span>
        </button>
        <button className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-3 text-left backdrop-blur-sm">
          <RefreshCw className="h-5 w-5 mb-2" />
          <span className="text-sm font-medium block">Set Goals</span>
        </button>
      </div>
    </div>
  );
}
