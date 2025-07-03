"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { Sparkles } from "lucide-react";

export const StreakProgress = ({
  days = 3,
  target = 7,
}: {
  days?: number;
  target?: number;
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const percentage = Math.min(100, Math.round((days / target) * 100));

    // Animate progress filling in
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 500);

    return () => clearTimeout(timer);
  }, [days, target]);

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-1.5 bg-amber-100 rounded-lg">
          <Sparkles className="h-4 w-4 text-amber-600" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-800 mb-1">Your Streak</h3>
          <p className="text-sm text-slate-600">
            You&apos;ve checked in {days} {days === 1 ? "day" : "days"} in a row!
            Keep going to build a healthy habit.
          </p>
        </div>
      </div>
      <div className="space-y-1 px-1">
        <div className="flex justify-between text-xs text-slate-500">
          <span>{days} days</span>
          <span>Goal: {target} days</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
};

export default StreakProgress;
