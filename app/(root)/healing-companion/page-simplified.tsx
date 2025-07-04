"use client";

import React from "react";
import {
  Bot,
  Heart,
  Sparkles,
  Send,
  Mic,
  Plus,
  Brain,
  Compass,
  BookOpen,
  Headphones,
  Music,
  Calendar,
  Clock,
  Bell,
} from "lucide-react";

const HealingCompanionPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6 relative">
      {/* Floating Action Button for Quick Journal Entry */}
      <div className="fixed bottom-6 right-6 z-10">
        <button className="w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transform hover:scale-105 transition-all group">
          <Plus className="w-6 h-6 text-white" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            New Journal Entry
          </span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
              <Bot className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">
                AI Healing Companion
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Your Healing Companion
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A compassionate AI guide here to support your emotional well-being
              and personal growth
            </p>
          </div>

          {/* Companion Status */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Luna</h3>
                <p className="text-gray-600">
                  Your compassionate AI healing companion
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600">
                    Online and ready to support you
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Sessions today</div>
                <div className="text-2xl font-bold text-purple-600">3</div>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Healing Session</h3>
                    <p className="text-sm opacity-90">
                      Safe space for authentic expression
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm">Mindful mode</span>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {sampleConversation.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.type === "user"
                        ? "bg-purple-600 text-white rounded-br-none"
                        : "bg-gray-100 text-gray-900 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-current">
                      {message.message}
                    </p>
                    <div
                      className={`text-xs mt-1 opacity-70 ${
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
                <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-none">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Share what's on your heart..."
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors"
                    title="Voice input"
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
                <button 
                  className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  title="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
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
            ].map((action, index) => (
              <button
                key={index}
                className="p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center group"
              >
                <action.icon
                  className={`w-6 h-6 mx-auto mb-2 ${action.color} group-hover:scale-110 transition-transform`}
                />
                <div className="text-sm font-medium text-gray-700">
                  {action.label}
                </div>
              </button>
            ))}
          </div>

          {/* Today's Healing Tip */}
          <div className="mt-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl shadow p-6 border border-blue-200 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800">
                Today&apos;s Healing Tip
              </h3>
            </div>
            <p className="text-gray-700 mb-4 italic">
              &ldquo;Take a moment to breathe deeply and notice five things you can
              see, four things you can touch, three things you can hear, two
              things you can smell, and one thing you can taste. This grounding
              technique can help bring you back to the present moment.&rdquo;
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Updated daily</span>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                Get New Tip
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
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
                <div className="text-xl font-bold text-blue-700">7 Days</div>
                <div className="text-xs text-blue-500">Keep it going!</div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Daily Check-ins</span>
                <span className="text-sm font-medium text-gray-900">7/7</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Meditation Minutes</span>
                <span className="text-sm font-medium text-gray-900">15/20</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full w-3/4"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Journal Entries</span>
                <span className="text-sm font-medium text-gray-900">3/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-indigo-500 h-1.5 rounded-full w-3/5"></div>
              </div>
            </div>

            <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors">
              View Your Journey
            </button>
          </div>

          {/* Quick Access Resources */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-purple-500" />
              <h2 className="text-lg font-semibold text-gray-900">
                Quick Access Resources
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: Brain,
                  label: "Mindfulness Library",
                  color: "text-indigo-500",
                },
                {
                  icon: Heart,
                  label: "Self-Compassion Guide",
                  color: "text-rose-500",
                },
                {
                  icon: Music,
                  label: "Healing Playlists",
                  color: "text-cyan-500",
                },
                {
                  icon: Headphones,
                  label: "Guided Meditations",
                  color: "text-amber-500",
                },
                {
                  icon: Compass,
                  label: "Growth Exercises",
                  color: "text-emerald-500",
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div
                    className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ${resource.color}`}
                  >
                    <resource.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {resource.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-green-500" />
              <h2 className="text-lg font-semibold text-gray-900">
                Upcoming Sessions
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-3 border border-green-100 bg-green-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium text-gray-900">
                    Guided Meditation
                  </h3>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded">
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
