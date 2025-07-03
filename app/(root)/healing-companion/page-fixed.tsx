"use client";

import React from "react";
import Image from "next/image";
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
  Globe,
  Shield,
  Target,
  Zap,
} from "lucide-react";
import "./healing-companion.css";

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
                    title="Record voice message"
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
              {
                icon: Bot,
                label: "Healing Insights",
                color: "text-blue-500",
              },
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
              &quot;Take a moment to breathe deeply and notice five things you
              can see, four things you can touch, three things you can hear, two
              things you can smell, and one thing you can taste. This grounding
              technique can help bring you back to the present moment.&quot;
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Updated daily</span>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                Get New Tip
              </button>
            </div>
          </div>

          {/* Spacer - Added more vertical space */}
          <div className="h-12"></div>

          {/* AI Companion Capabilities */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-5 h-5 text-indigo-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Luna&apos;s Healing Capabilities
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Discover the various ways your AI companion can support your
              healing journey
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Emotional Intelligence",
                  description:
                    "Recognizes emotional patterns and provides empathetic responses",
                  image:
                    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center",
                  color: "bg-rose-500",
                },
                {
                  icon: Brain,
                  title: "Cognitive Support",
                  description:
                    "Helps process thoughts and provides coping strategies",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
                  color: "bg-purple-500",
                },
                {
                  icon: Shield,
                  title: "Safe Space Guardian",
                  description:
                    "Ensures a judgment-free environment for authentic sharing",
                  image:
                    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop&crop=center",
                  color: "bg-blue-500",
                },
                {
                  icon: Compass,
                  title: "Guidance & Direction",
                  description:
                    "Offers personalized insights and healing pathways",
                  image:
                    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop&crop=center",
                  color: "bg-emerald-500",
                },
                {
                  icon: Zap,
                  title: "Crisis Support",
                  description:
                    "Immediate assistance during difficult emotional moments",
                  image:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center",
                  color: "bg-orange-500",
                },
                {
                  icon: Target,
                  title: "Goal Setting",
                  description:
                    "Helps create and track personal growth objectives",
                  image:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center",
                  color: "bg-teal-500",
                },
              ].map((capability, index) => (
                <div key={index} className="group">
                  <div className="relative mb-4 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={capability.image}
                      alt={capability.title}
                      width={300}
                      height={128}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <capability.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {capability.description}
                  </p>
                  <button
                    className={`px-3 py-1 ${capability.color} text-white rounded-full text-xs hover:opacity-90 transition-opacity`}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Healing Sessions & Activities */}
          <div className="rounded-2xl shadow-lg p-8 mb-6 text-white relative overflow-hidden healing-sessions-bg">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6" />
                  <h3 className="font-semibold">Emotional Processing</h3>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  Work through difficult emotions with guided support and
                  validation
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-white/80">
                    • Feeling overwhelmed
                  </div>
                  <div className="text-sm text-white/80">
                    • Processing grief
                  </div>
                  <div className="text-sm text-white/80">
                    • Managing anxiety
                  </div>
                </div>
                <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
                  Start Session
                </button>
              </div>

              <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-6 h-6" />
                  <h3 className="font-semibold">Mindfulness Training</h3>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  Develop present-moment awareness and inner peace through
                  guided practice
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-white/80">
                    • Breathing exercises
                  </div>
                  <div className="text-sm text-white/80">
                    • Body scan meditation
                  </div>
                  <div className="text-sm text-white/80">
                    • Mindful awareness
                  </div>
                </div>
                <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
                  Begin Practice
                </button>
              </div>

              <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6" />
                  <h3 className="font-semibold">Personal Growth</h3>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  Set intentions and create actionable plans for positive life
                  changes
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-white/80">• Goal setting</div>
                  <div className="text-sm text-white/80">• Habit formation</div>
                  <div className="text-sm text-white/80">
                    • Progress tracking
                  </div>
                </div>
                <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
                  Explore Growth
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Compass className="w-5 h-5 text-emerald-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Activities
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Your recent healing journey activities and progress
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Heart,
                  title: "Completed Gratitude Exercise",
                  time: "Today, 9:30 AM",
                  description: "Listed 5 things you're grateful for",
                  color: "text-rose-500",
                },
                {
                  icon: Music,
                  title: "Mindful Music Session",
                  time: "Yesterday, 7:15 PM",
                  description: "15-minute relaxation playlist",
                  color: "text-indigo-500",
                },
                {
                  icon: BookOpen,
                  title: "Journal Entry",
                  time: "Yesterday, 10:20 AM",
                  description: "Reflected on weekly progress",
                  color: "text-blue-500",
                },
                {
                  icon: Brain,
                  title: "Cognitive Reframing Exercise",
                  time: "2 days ago",
                  description: "Practiced positive thought patterns",
                  color: "text-purple-500",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div
                    className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ${activity.color}`}
                  >
                    <activity.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h3 className="font-medium text-gray-900">
                        {activity.title}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {activity.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="px-4 py-2 text-emerald-600 hover:text-emerald-800 text-sm font-medium">
                View All Activities
              </button>
            </div>
          </div>

          {/* AI Insights & Analytics */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-5 h-5 text-purple-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Personal Insights & Progress
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Track your emotional journey and discover patterns in your healing
              process
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Emotional Patterns
                    </h3>
                    <p className="text-purple-600 text-sm">Weekly Analysis</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Luna has identified recurring themes in your conversations and
                  emotional states
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Stress triggers</span>
                    <span className="font-medium">Work deadlines</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Coping strength</span>
                    <span className="font-medium">Deep breathing</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Growth area</span>
                    <span className="font-medium">Self-compassion</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                  View Full Report
                </button>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Healing Milestones
                    </h3>
                    <p className="text-blue-600 text-sm">Recent Achievements</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Celebrate your progress and acknowledge the growth you&apos;ve
                  made
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Completed 7-day mindfulness streak
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Practiced self-compassion during conflict
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Working on boundary setting
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  See All Milestones
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center"
                    alt="Sessions"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-purple-600 text-lg">23</div>
                <div className="text-xs text-gray-600">Sessions</div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center"
                    alt="Hours"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-blue-600 text-lg">8.5</div>
                <div className="text-xs text-gray-600">Hours</div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop&crop=center"
                    alt="Insights"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-emerald-600 text-lg">42</div>
                <div className="text-xs text-gray-600">Insights</div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=center"
                    alt="Breakthroughs"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-semibold text-pink-600 text-lg">5</div>
                <div className="text-xs text-gray-600">Breakthroughs</div>
              </div>
            </div>
          </div>

          {/* Companion Customization */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Bot className="w-5 h-5 text-cyan-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Customize Your Companion Experience
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Personalize Luna&apos;s personality, communication style, and
              focus areas to match your needs
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Communication Style",
                  description: "Choose how Luna interacts with you",
                  image:
                    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&crop=center",
                  currentSetting: "Gentle & Nurturing",
                  color: "cyan",
                },
                {
                  title: "Voice & Tone",
                  description: "Select Luna's speaking voice and personality",
                  image:
                    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=200&fit=crop&crop=center",
                  currentSetting: "Calm Female",
                  color: "purple",
                },
                {
                  title: "Focus Areas",
                  description: "Prioritize specific aspects of your healing",
                  image:
                    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop&crop=center",
                  currentSetting: "Self-Love & Worth",
                  color: "blue",
                },
                {
                  title: "Session Length",
                  description: "Set preferred conversation duration",
                  image:
                    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=200&fit=crop&crop=center",
                  currentSetting: "Standard Sessions",
                  color: "emerald",
                },
                {
                  title: "Reminder Frequency",
                  description: "Choose how often Luna checks in with you",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
                  currentSetting: "Daily",
                  color: "amber",
                },
                {
                  title: "Privacy Level",
                  description: "Control data retention and sharing preferences",
                  image:
                    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop&crop=center",
                  currentSetting: "Maximum Privacy",
                  color: "violet",
                },
              ].map((setting, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="relative h-36">
                    <Image
                      src={setting.image}
                      alt={setting.title}
                      width={300}
                      height={144}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="font-semibold text-lg">{setting.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-gray-600 mb-4">{setting.description}</p>
                    <div className="mb-4 flex-grow">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                          setting.color === "cyan"
                            ? "bg-cyan-50 text-cyan-600"
                            : setting.color === "purple"
                            ? "bg-purple-50 text-purple-600"
                            : setting.color === "blue"
                            ? "bg-blue-50 text-blue-600"
                            : setting.color === "emerald"
                            ? "bg-emerald-50 text-emerald-600"
                            : setting.color === "amber"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-violet-50 text-violet-600"
                        }`}
                      >
                        <span className="font-medium">
                          Current: {setting.currentSetting}
                        </span>
                      </div>
                    </div>
                    <button
                      className={`w-full px-4 py-3 text-white rounded-lg transition-colors font-medium ${
                        setting.color === "cyan"
                          ? "bg-cyan-500 hover:bg-cyan-600"
                          : setting.color === "purple"
                          ? "bg-purple-500 hover:bg-purple-600"
                          : setting.color === "blue"
                          ? "bg-blue-500 hover:bg-blue-600"
                          : setting.color === "emerald"
                          ? "bg-emerald-500 hover:bg-emerald-600"
                          : setting.color === "amber"
                          ? "bg-amber-500 hover:bg-amber-600"
                          : "bg-violet-500 hover:bg-violet-600"
                      }`}
                    >
                      Customize
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources & Learning */}
          <div className="rounded-2xl shadow-lg p-8 mb-6 text-white relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900">
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    📚 Learning Resources
                  </h3>
                  <p className="text-white/90 mb-6">
                    Access curated resources to deepen your understanding of
                    healing and growth
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20">
                      <h4 className="font-medium mb-1">Understanding Trauma</h4>
                      <p className="text-white/80 text-sm">
                        Guide to recognizing and healing from trauma
                      </p>
                    </div>
                    <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20">
                      <h4 className="font-medium mb-1">Emotional Regulation</h4>
                      <p className="text-white/80 text-sm">
                        Techniques for managing intense emotions
                      </p>
                    </div>
                    <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20">
                      <h4 className="font-medium mb-1">
                        Building Self-Compassion
                      </h4>
                      <p className="text-white/80 text-sm">
                        Practices for developing kindness toward yourself
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
                    Explore Library
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    🎧 Audio Support
                  </h3>
                  <div className="space-y-4">
                    <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Headphones className="w-5 h-5" />
                        <h4 className="font-medium">Guided Meditations</h4>
                      </div>
                      <p className="text-white/80 text-sm mb-3">
                        Healing-focused meditation sessions with Luna&apos;s
                        guidance
                      </p>
                      <button className="text-sm text-white border border-white/50 px-3 py-1 rounded hover:bg-white/20 transition-colors">
                        Listen Now
                      </button>
                    </div>
                    <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Music className="w-5 h-5" />
                        <h4 className="font-medium">Healing Soundscapes</h4>
                      </div>
                      <p className="text-white/80 text-sm mb-3">
                        Calming background sounds for reflection and peace
                      </p>
                      <button className="text-sm text-white border border-white/50 px-3 py-1 rounded hover:bg-white/20 transition-colors">
                        Browse Sounds
                      </button>
                    </div>
                    <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Globe className="w-5 h-5" />
                        <h4 className="font-medium">Community Stories</h4>
                      </div>
                      <p className="text-white/80 text-sm mb-3">
                        Inspiring healing journeys shared by others
                      </p>
                      <button className="text-sm text-white border border-white/50 px-3 py-1 rounded hover:bg-white/20 transition-colors">
                        Listen & Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Support */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 mb-6 border border-red-100">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Crisis Support & Safety
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              If you&apos;re experiencing a mental health crisis, immediate
              professional help is available
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg border border-red-200 flex flex-col">
                <div className="mb-auto">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    🚨 Emergency Hotline
                  </h3>
                  <p className="text-gray-600 mb-4">
                    24/7 crisis support hotline
                  </p>
                </div>
                <button className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
                  Call Now: 988
                </button>
              </div>

              <div className="p-6 bg-white rounded-lg border border-orange-200 flex flex-col">
                <div className="mb-auto">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    💬 Crisis Text Line
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Text-based support available
                  </p>
                </div>
                <button className="w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium">
                  Text: HOME to 741741
                </button>
              </div>

              <div className="p-6 bg-white rounded-lg border border-yellow-200 flex flex-col">
                <div className="mb-auto">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    🏥 Find Local Help
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Locate nearby mental health services
                  </p>
                </div>
                <button className="w-full px-4 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium">
                  Find Services
                </button>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Remember: Luna is Here for Support
              </h3>
              <p className="text-gray-700">
                While Luna provides compassionate support, she&apos;s not a
                replacement for professional mental health care. For serious
                concerns, please reach out to qualified professionals or use the
                resources above.
              </p>
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
                <span className="text-sm text-gray-600">
                  Meditation Minutes
                </span>
                <span className="text-sm font-medium text-gray-900">45/60</span>
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
          </div>

          {/* Quick Access Resources */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-purple-500" />
              <h2 className="text-lg font-semibold text-gray-900">
                Healing Resources
              </h2>
            </div>

            <div className="space-y-2">
              {[
                {
                  icon: Brain,
                  label: "Mindfulness Library",
                  color: "text-indigo-500",
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
                  Tomorrow, 9:00 AM - 9:30 AM
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
