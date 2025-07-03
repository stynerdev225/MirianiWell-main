"use client";

import * as React from "react";
import { Activity, TrendingUp, BarChart3, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const MoodTabs = () => {
  return (
    <Tabs defaultValue="chart" className="w-full">
      <TabsList className="grid grid-cols-3 mb-4">
        <TabsTrigger value="chart" className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4" />
          <span>Chart</span>
        </TabsTrigger>
        <TabsTrigger value="summary" className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4" />
          <span>Summary</span>
        </TabsTrigger>
        <TabsTrigger value="insights" className="flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          <span>Insights</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="chart" className="space-y-6">
        <div className="h-64 w-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center border border-slate-200">
          <div className="text-center text-slate-800">
            <div className="p-4 bg-white rounded-full mb-4 shadow-sm">
              <Activity className="h-8 w-8 mx-auto text-emerald-500" />
            </div>
            <p className="font-semibold mb-2 text-slate-800">
              Your mood visualization will appear here
            </p>
            <p className="text-sm text-slate-600">
              Track your mood daily to see patterns emerge
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="summary" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
            <div className="text-sm text-emerald-700 font-medium mb-2">
              Most frequent mood
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">😊</span>
              <span className="font-semibold text-slate-800 text-lg">
                Joyful
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
            <div className="text-sm text-blue-700 font-medium mb-2">
              Average energy
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold text-slate-800 text-lg">
                7.2/10
              </span>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="insights" className="space-y-4">
        <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
          <h3 className="font-semibold text-indigo-800 mb-3">Mood Trends</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              Your mood tends to be highest in the mornings
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              You experience more calm feelings on weekends
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              Your energy levels are typically higher after logging movement
              activities
            </li>
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default MoodTabs;
