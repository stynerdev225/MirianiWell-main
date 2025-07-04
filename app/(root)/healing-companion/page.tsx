"use client";

import React, { useEffect, useState } from "react";
import "./healing-companion.css";
import {
  Bot,
  Heart,
  Sparkles,
  Send,
  Mic,
  Plus,
  Compass,
  BookOpen,
  Calendar,
  Clock,
  Bell,
} from "lucide-react";

const HealingCompanionPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  const sampleConversation = [
    {
      type: "companion",
      message:
        "Hello beautiful soul! I'm here to support you on your healing journey. How are you feeling today?",
      timestamp: "2 minutes ago",
    },
    {
      type: "user",
      message:
        "I've been feeling a bit overwhelmed lately with work and personal responsibilities.",
      timestamp: "1 minute ago",
    },
    {
      type: "companion",
      message:
        "Thank you for sharing that with me. Feeling overwhelmed is a natural response when we're carrying a lot. Let's take a moment to breathe together. What would feel most supportive for you right now - some grounding techniques, a gentle affirmation, or perhaps exploring what's beneath these feelings?",
      timestamp: "30 seconds ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 px-3 sm:px-4 md:px-6 py-4 md:py-6 relative">
      {/* Floating Action Button for Quick Journal Entry */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
        <button className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transform hover:scale-105 transition-all group">
          <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            New Journal Entry
          </span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="text-center mb-4 md:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-full shadow-sm mb-3 md:mb-4">
              <Bot className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
              <span className="text-xs md:text-sm font-medium text-gray-700">
                AI Healing Companion
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
              Your Healing Companion
            </h1>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              A compassionate AI guide here to support your emotional well-being
              and personal growth
            </p>
          </div>

          {/* Companion Status */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 mb-4 md:mb-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  Luna
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Your compassionate AI healing companion
                </p>
                <div className="flex items-center gap-1 md:gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs md:text-sm text-green-600">
                    Online and ready to support you
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs md:text-sm text-gray-500">
                  Sessions today
                </div>
                <div className="text-lg md:text-2xl font-bold text-purple-600">
                  3
                </div>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 md:p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold">
                      Healing Session
                    </h3>
                    <p className="text-xs md:text-sm opacity-90">
                      Safe space for authentic expression
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">Mindful mode</span>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-72 sm:h-80 md:h-96 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-3 md:space-y-4">
              {sampleConversation.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] sm:max-w-xs lg:max-w-md px-3 py-2 md:px-4 md:py-3 rounded-2xl ${
                      message.type === "user"
                        ? "bg-purple-600 text-white rounded-br-none"
                        : "bg-gray-100 text-gray-900 rounded-bl-none"
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {message.message}
                    </p>
                    <div
                      className={`text-[10px] sm:text-xs mt-1 opacity-70 ${
                        message.type === "user"
                          ? "text-purple-100"
                          : "text-gray-500"
                      }`}
                    >
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 md:px-4 md:py-3 rounded-2xl rounded-bl-none">
                  <div className="flex items-center gap-1">
                    <div className="typing-dot typing-dot-1"></div>
                    <div className="typing-dot typing-dot-2"></div>
                    <div className="typing-dot typing-dot-3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-3 md:p-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Share what's on your heart..."
                    className="w-full px-3 py-2 md:px-4 md:py-3 pr-10 md:pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                  />
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors"
                    aria-label="Enable voice input"
                  >
                    <Mic className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
                <button
                  className="p-2 md:p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors touch-manipulation"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-4 md:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {[
              {
                icon: Heart,
                label: "Emotional Support",
                color: "text-pink-500",
              },
              {
                icon: Sparkles,
                label: "Guided Meditation",
                color: "text-purple-500",
              },
              { icon: Bot, label: "Healing Insights", color: "text-blue-500" },
              { icon: Plus, label: "New Topic", color: "text-green-500" },
            ].map((action, idx) => (
              <button
                key={idx}
                className="p-3 md:p-4 bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center group touch-manipulation"
              >
                <action.icon
                  className={`w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 ${action.color} group-hover:scale-110 transition-transform`}
                />
                <div className="text-xs md:text-sm font-medium text-gray-700 truncate">
                  {action.label}
                </div>
              </button>
            ))}
          </div>

          {/* Today's Healing Tip */}
          <div className="mt-4 md:mt-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl md:rounded-2xl shadow p-4 md:p-6 border border-blue-200 mb-4 md:mb-6">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-800">
                Today&apos;s Healing Tip
              </h3>
            </div>
            <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4 italic">
              &ldquo;Take a moment to breathe deeply and notice five things you
              can see, four things you can touch, three things you can hear, two
              things you can smell, and one thing you can taste. This grounding
              technique can help bring you back to the present moment.&rdquo;
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs md:text-sm text-gray-500">Updated daily</span>
              <button className="text-indigo-600 hover:text-indigo-800 text-xs md:text-sm font-medium touch-manipulation">
                Get New Tip
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar for mobile - shown as sections below main content */}
        <div className="space-y-4 md:space-y-6 lg:hidden">
          {/* Your Healing Journey */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Compass className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
              <h2 className="text-base md:text-lg font-semibold text-gray-900">
                Your Healing Journey
              </h2>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <div className="text-xs md:text-sm text-gray-500">
                  Current Streak
                </div>
                <div className="font-semibold text-gray-900">7 Days</div>
                <div className="text-[10px] md:text-xs text-green-600">
                  Keep it going!
                </div>
              </div>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-600">Daily Check-ins</span>
                <span className="font-medium text-blue-600">7/7</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-600">Meditation Minutes</span>
                <span className="font-medium text-purple-600">45/60</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-600">Journal Entries</span>
                <span className="font-medium text-indigo-600">3/5</span>
              </div>
            </div>
            <button className="w-full py-2 mt-3 md:mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-xs md:text-sm touch-manipulation">
              View Your Journey
            </button>
          </div>

          {/* Healing Resources */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
              <h2 className="text-base md:text-lg font-semibold text-gray-900">
                Healing Resources
              </h2>
            </div>
            <div className="space-y-1 md:space-y-3">
              {[
                "Mindfulness Library",
                "Self-Compassion Guide",
                "Healing Playlists",
                "Guided Meditations",
                "Growth Exercises",
              ].map((res, idx) => (
                <button
                  key={idx}
                  className="w-full text-left p-2 text-xs md:text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors touch-manipulation"
                >
                  {res}
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
              <h2 className="text-base md:text-lg font-semibold text-gray-900">
                Upcoming Sessions
              </h2>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-1 md:mb-2">
                  <h3 className="text-xs md:text-sm font-medium text-gray-900">
                    Guided Meditation
                  </h3>
                  <span className="text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-1 bg-green-100 text-green-700 rounded">
                    Today
                  </span>
                </div>
                <div className="text-[10px] md:text-xs text-gray-600 mb-1">
                  6:00 PM - 6:30 PM
                </div>
                <div className="flex items-center gap-1 text-[10px] md:text-xs text-green-700">
                  <Clock className="w-3 h-3" />
                  <span>Reminder set</span>
                </div>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-1 md:mb-2">
                  <h3 className="text-xs md:text-sm font-medium text-gray-900">
                    Journaling Session
                  </h3>
                </div>
                <div className="text-[10px] md:text-xs text-gray-600 mb-1">
                  9:00 AM - 9:30 AM
                </div>
                <div className="flex items-center gap-1 text-[10px] md:text-xs text-blue-700">
                  <Bell className="w-3 h-3" />
                  <span>Set reminder</span>
                </div>
              </div>
            </div>
            <button className="w-full py-2 mt-3 md:mt-4 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-xs md:text-sm transition-colors touch-manipulation">
              Schedule New Session
            </button>
          </div>
        </div>

        {/* Right Sidebar - only for desktop */}
        <div className="hidden lg:block w-80 space-y-6">
          {/* Your Healing Journey */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg font-semibold text-gray-900">
                Your Healing Journey
              </h2>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Current Streak</div>
                <div className="font-semibold text-gray-900">7 Days</div>
                <div className="text-xs text-green-600">Keep it going!</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Daily Check-ins</span>
                <span className="font-medium text-blue-600">7/7</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Meditation Minutes</span>
                <span className="font-medium text-purple-600">45/60</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Journal Entries</span>
                <span className="font-medium text-indigo-600">3/5</span>
              </div>
            </div>
            <button className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
              View Your Journey
            </button>
          </div>

          {/* Healing Resources */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-emerald-500" />
              <h2 className="text-lg font-semibold text-gray-900">
                Healing Resources
              </h2>
            </div>
            <div className="space-y-3">
              {[
                "Mindfulness Library",
                "Self-Compassion Guide",
                "Healing Playlists",
                "Guided Meditations",
                "Growth Exercises",
              ].map((res, idx) => (
                <button
                  key={idx}
                  className="w-full text-left p-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                >
                  {res}
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-purple-500" />
              <h2 className="text-lg font-semibold text-gray-900">
                Upcoming Sessions
              </h2>
            </div>
            <div className="space-y-3">
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium text-gray-900">
                    Guided Meditation
                  </h3>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                    Today
                  </span>
                </div>
                <div className="text-xs text-gray-600 mb-1">
                  6:00 PM - 6:30 PM
                </div>
                <div className="flex items-center gap-1 text-xs text-green-700">
                  <Clock className="w-3 h-3" />
                  <span>Reminder set</span>
                </div>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium text-gray-900">
                    Journaling Session
                  </h3>
                </div>
                <div className="text-xs text-gray-600 mb-1">
                  9:00 AM - 9:30 AM
                </div>
                <div className="flex items-center gap-1 text-xs text-blue-700">
                  <Bell className="w-3 h-3" />
                  <span>Set reminder</span>
                </div>
              </div>
            </div>
            <button className="w-full py-2 mt-4 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-sm transition-colors">
              Schedule New Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealingCompanionPage;
