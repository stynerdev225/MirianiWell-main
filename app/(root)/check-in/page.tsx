import { Suspense } from "react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  CalendarDays,
  Heart,
  Sun,
  Moon,
  ArrowRight,
  BarChart3,
  BookOpen,
  RefreshCw,
  Waves,
  PenLine,
  Bell,
  Send,
  TrendingUp,
  Edit,
  Award,
  CornerDownLeft,
  Quote,
  Users,
  Zap,
  Brain,
  Lightbulb,
  Star,
  Camera,
  Share2,
  MessageCircle,
  Headphones,
  Clock,
  CheckCircle,
  ThumbsUp,
  Globe,
  Sparkles,
} from "lucide-react";
import { MOOD_OPTIONS } from "@/constants";
import { getMoodEntriesByUserId } from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnergySlider } from "./components/EnergySlider";
import { PeriodSelect } from "./components/PeriodSelect";
import { StreakProgress } from "./components/StreakProgress";
import { MoodTabs } from "./components/MoodTabs";
import { UserAvatar } from "./components/UserAvatar";
import { RecommendationsAccordion } from "./components/RecommendationsAccordion";
import "./check-in.css";

const CheckInPage = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const recentEntries = await getMoodEntriesByUserId(user.id);

  // Create a simplified user object with only the properties we need
  const simpleUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl: user.imageUrl,
    email: user.emailAddresses[0]?.emailAddress,
    id: user.id,
  };

  // Get current time to personalize greeting
  const currentHour = new Date().getHours();
  const timeOfDay =
    currentHour < 12 ? "morning" : currentHour < 17 ? "afternoon" : "evening";
  const timeIcon =
    currentHour > 6 && currentHour < 18 ? (
      <Sun className="h-5 w-5" />
    ) : (
      <Moon className="h-5 w-5" />
    );

  // Format today's date
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                >
                  {timeIcon}
                  <span className="font-medium">
                    Good {timeOfDay}, {user.firstName || "there"}!
                  </span>
                </Badge>

                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
                    <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      Daily Wellness
                    </span>
                    <br />
                    <span className="text-slate-800">Check-In</span>
                  </h1>
                  <p className="text-slate-600 text-lg md:text-xl max-w-2xl">
                    {formattedDate} • Take a mindful moment for yourself
                  </p>
                </div>
              </div>

              <div className="mt-6 lg:mt-0">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Insights
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="xl:col-span-2 space-y-6">
                {/* Mood Selection */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                          <Sparkles className="w-5 h-5 text-purple-600" />
                        </div>
                        How are you feeling today?
                      </CardTitle>
                      <Badge variant="outline" className="text-slate-500">
                        Choose one
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {MOOD_OPTIONS.map(
                        (mood: {
                          value: string;
                          label: string;
                          emoji: string;
                          color: string;
                        }) => (
                          <button
                            key={mood.value}
                            className="mood-selection-button group relative p-4 md:p-6 rounded-2xl border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white min-h-[120px]"
                          >
                            <div
                              className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 mood-bg-${
                                mood.color.split("#")[0]
                              }`}
                            ></div>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent opacity-25"></div>
                            <span className="emoji-container block mb-4">
                              {mood.emoji}
                            </span>
                            <span className="mood-text-container block">
                              <span className="mood-text">{mood.label}</span>
                            </span>
                          </button>
                        )
                      )}
                    </div>

                    {/* Energy Level */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <EnergySlider />

                      {/* Journal Note */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">
                          Journal Note{" "}
                          <span className="text-slate-400 font-normal">
                            (Optional)
                          </span>
                        </label>
                        <div className="relative">
                          <textarea
                            className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-700 min-h-[120px] resize-none bg-white placeholder:text-slate-400"
                            placeholder="How did your day go? Any notable events or feelings you'd like to capture?"
                          ></textarea>
                          <button
                            className="absolute bottom-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full p-2.5 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                            aria-label="Submit journal entry"
                          >
                            <Send className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-end pt-2">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          Save Check-In
                          <CornerDownLeft className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Mood Patterns */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                        </div>
                        Your Mood Patterns
                      </CardTitle>
                      <PeriodSelect />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <MoodTabs />
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="xl:col-span-2 space-y-6">
                {/* User Profile */}
                <UserAvatar user={simpleUser} />

                {/* Recent Check-Ins */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="p-2 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg">
                          <CalendarDays className="w-4 h-4 text-indigo-600" />
                        </div>
                        Recent Check-Ins
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                      >
                        View All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Suspense
                      fallback={
                        <div className="text-slate-500 py-8 text-center text-sm">
                          Loading recent entries...
                        </div>
                      }
                    >
                      <div className="space-y-3">
                        {recentEntries.length > 0 ? (
                          recentEntries.slice(0, 5).map(
                            (
                              entry: {
                                id: string;
                                userId: string;
                                mood: string;
                                energy: number;
                                notes: string | null;
                                createdAt: Date | null;
                              },
                              index: number
                            ) => {
                              const mood = MOOD_OPTIONS.find(
                                (m: {
                                  value: string;
                                  label: string;
                                  emoji: string;
                                  color: string;
                                }) => m.value === entry.mood
                              );
                              return (
                                <div
                                  key={index}
                                  className="group flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-white transition-all duration-200 border border-slate-100 hover:border-slate-200 hover:shadow-sm cursor-pointer"
                                >
                                  <div
                                    className={`mood-container mood-bg-${
                                      mood?.color.split("#")[0]
                                    } mood-border-${mood?.color.split("#")[0]}`}
                                  >
                                    <span className="emoji-container text-lg">
                                      {mood?.emoji}
                                    </span>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm truncate font-semibold">
                                      {mood?.label}
                                    </div>
                                    <div className="text-xs text-slate-500">
                                      {entry.createdAt
                                        ? new Date(
                                            entry.createdAt
                                          ).toLocaleDateString(undefined, {
                                            month: "short",
                                            day: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                          })
                                        : "Today"}{" "}
                                      • Energy: {entry.energy}/10
                                    </div>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="opacity-0 group-hover:opacity-100 transition-opacity p-2 h-auto"
                                  >
                                    <Edit className="h-3 w-3" />
                                  </Button>
                                </div>
                              );
                            }
                          )
                        ) : (
                          <div className="text-center py-8 text-slate-800">
                            <div className="p-4 bg-slate-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                              <Heart className="w-8 h-8 text-slate-400" />
                            </div>
                            <p className="font-semibold mb-2 text-slate-800">
                              No check-ins yet
                            </p>
                            <p className="text-sm text-slate-600">
                              Start your wellness journey today!
                            </p>
                          </div>
                        )}
                      </div>
                    </Suspense>
                  </CardContent>
                </Card>

                {/* Wellness Insights */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg">
                        <Award className="w-4 h-4 text-amber-600" />
                      </div>
                      Wellness Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <StreakProgress days={3} target={7} />

                    <RecommendationsAccordion />
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-white">
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: PenLine, label: "Journal Entry" },
                        { icon: Bell, label: "Set Reminder" },
                        { icon: Waves, label: "Try Meditation" },
                        { icon: RefreshCw, label: "Set Goals" },
                      ].map((action, index) => (
                        <button
                          key={index}
                          className="bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-xl p-4 text-left backdrop-blur-sm border border-white/20 hover:border-white/30 group"
                        >
                          <action.icon className="h-5 w-5 mb-2 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-sm font-medium block">
                            {action.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mindfulness Moment Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 mindfulness-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <Quote className="w-5 h-5 text-white" />
                <span className="text-white font-medium">
                  Mindfulness Moment
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                &ldquo;The present moment is the only time over which we have
                dominion.&rdquo;
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                — Thích Nhất Hạnh
              </p>
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
              >
                <Headphones className="mr-2 h-5 w-5" />
                Listen to Guided Meditation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Tips & Community Section */}
      <section className="py-16 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Wellness{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Community
                </span>
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Connect, share, and grow with fellow wellness enthusiasts
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Daily Wellness Tips */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 hydration-tip-bg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-emerald-500 text-white">
                      <Lightbulb className="w-3 h-3 mr-1" />
                      Daily Tip
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Hydration for Wellness
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Start your day with a glass of water with lemon. It helps
                    kickstart your metabolism and provides vitamin C.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="w-4 h-4" />2 min read
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Community Highlights */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 community-highlight-bg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-purple-500 text-white">
                      <Users className="w-3 h-3 mr-1" />
                      Community
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Weekly Challenge Winner
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Sarah completed her 30-day meditation streak! Join our
                    community challenges and share your wellness journey.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white"></div>
                        <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white"></div>
                        <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                      </div>
                      <span className="text-sm text-slate-500">
                        +127 others
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      Join Challenge
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Insights */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 progress-insight-bg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-blue-500 text-white">
                      <Brain className="w-3 h-3 mr-1" />
                      Insights
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Your Weekly Progress
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    You&apos;ve improved your consistency by 40% this week! Your
                    morning mood has been trending positive.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600 font-medium">
                          +40%
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-slate-600">7.8/10</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Goals & Achievements */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Goals Section */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                    Your Wellness{" "}
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Goals
                    </span>
                  </h2>
                  <p className="text-slate-600 text-lg">
                    Track your progress and celebrate your achievements
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      goal: "Daily Check-ins",
                      progress: 5,
                      target: 7,
                      icon: CheckCircle,
                      color: "emerald",
                    },
                    {
                      goal: "Meditation Sessions",
                      progress: 3,
                      target: 5,
                      icon: Brain,
                      color: "purple",
                    },
                    {
                      goal: "Energy Level 7+",
                      progress: 4,
                      target: 6,
                      icon: Zap,
                      color: "yellow",
                    },
                    {
                      goal: "Journal Entries",
                      progress: 2,
                      target: 4,
                      icon: PenLine,
                      color: "blue",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 bg-${item.color}-100 rounded-lg`}
                          >
                            <item.icon
                              className={`w-5 h-5 text-${item.color}-600`}
                            />
                          </div>
                          <h3 className="font-semibold text-slate-800">
                            {item.goal}
                          </h3>
                        </div>
                        <span className="text-sm text-slate-500">
                          {item.progress}/{item.target}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                        <div
                          className={`bg-gradient-to-r from-${
                            item.color
                          }-500 to-${
                            item.color
                          }-600 h-2 rounded-full transition-all duration-500 progress-bar-width-${Math.round(
                            (item.progress / item.target) * 100
                          )}`}
                        ></div>
                      </div>
                      <p className="text-xs text-slate-500">
                        {Math.round((item.progress / item.target) * 100)}%
                        complete this week
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievement Showcase */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl achievement-showcase-bg">
                  <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 min-h-[500px] flex flex-col justify-end">
                    <div className="text-white">
                      <div className="mb-6">
                        <Badge className="bg-yellow-500 text-yellow-900 mb-4">
                          <Award className="w-3 h-3 mr-1" />
                          Achievement Unlocked
                        </Badge>
                        <h3 className="text-2xl font-bold mb-3">
                          Consistency Champion
                        </h3>
                        <p className="text-white/90 mb-6">
                          Congratulations! You&apos;ve completed 7 consecutive
                          days of wellness check-ins. Your dedication to
                          self-care is inspiring!
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share Achievement
                        </Button>
                        <div className="flex items-center gap-2 text-white/80">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm">23 likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Featured{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Resources
                </span>
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Curated content to support your wellness journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Morning Meditation",
                  description: "Start your day with intention",
                  image:
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  duration: "10 min",
                  type: "Guided Audio",
                  icon: Headphones,
                  color: "emerald",
                },
                {
                  title: "Stress Relief Techniques",
                  description: "Quick methods to reduce anxiety",
                  image:
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  duration: "5 min",
                  type: "Video Guide",
                  icon: Camera,
                  color: "purple",
                },
                {
                  title: "Gratitude Journal",
                  description: "Cultivate appreciation daily",
                  image:
                    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  duration: "3 min",
                  type: "Article",
                  icon: BookOpen,
                  color: "blue",
                },
                {
                  title: "Community Stories",
                  description: "Real journeys, real inspiration",
                  image:
                    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  duration: "7 min",
                  type: "Stories",
                  icon: MessageCircle,
                  color: "orange",
                },
              ].map((resource, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 resource-bg group-hover:scale-105 transition-transform duration-500 ${
                        index === 0
                          ? "resource-morning-meditation"
                          : index === 1
                          ? "resource-stress-relief"
                          : index === 2
                          ? "resource-gratitude"
                          : "resource-community"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className={`bg-${resource.color}-500 text-white`}>
                        <resource.icon className="w-3 h-3 mr-1" />
                        {resource.type}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-3 h-3" />
                        {resource.duration}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {resource.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Globe className="mr-2 h-5 w-5" />
                Explore All Resources
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  MirianiWell
                </h3>
                <p className="text-slate-500 text-sm max-w-md text-center md:text-left">
                  Your daily companion for mindfulness, wellness tracking, and
                  mental health support.
                </p>
              </div>

              <div className="flex gap-8 md:gap-16">
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Resources
                  </h4>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-emerald-600 text-sm"
                  >
                    Journal
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-emerald-600 text-sm"
                  >
                    Meditation
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-emerald-600 text-sm"
                  >
                    Affirmations
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-slate-800 mb-2">Company</h4>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-emerald-600 text-sm"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-emerald-600 text-sm"
                  >
                    Privacy
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-emerald-600 text-sm"
                  >
                    Terms
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} MirianiWell. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-slate-400 hover:text-emerald-600 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-emerald-600 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-emerald-600 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckInPage;
