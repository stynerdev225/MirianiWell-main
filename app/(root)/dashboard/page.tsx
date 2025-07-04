import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  Sparkles,
  Bot,
  Calendar,
  ArrowRight,
  TrendingUp,
  MessageCircle,
  Sunset,
  Moon,
  Sun,
  Zap,
} from "lucide-react";

// Helper function to get image URLs for each feature
const getImageForFeature = (title: string) => {
  const imageMap: { [key: string]: string } = {
    "Daily Check-In": "/images/rituals/water.jpg",
    "Healing Journal": "/images/rituals/earth.jpg",
    "Guided Rituals":
      "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?q=80&w=2070&auto=format&fit=crop",
    "AI Healing Companion":
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=2070&auto=format&fit=crop",
    "Daily Affirmations": "/images/home/hero.jpg",
    "Mindfulness Meditation": "/images/rituals/hero.jpg",
  };

  return imageMap[title] || "/images/home/hero.jpg";
};

// Helper function to get static Unsplash image URLs for wellness tips
const getImageForWellnessTip = (title: string) => {
  const imageMap: { [key: string]: string } = {
    "Energizing Morning Routine":
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop",
    "Better Sleep Habits":
      "https://images.unsplash.com/photo-1541480601022-2308c0f02487?q=80&w=2070&auto=format&fit=crop",
    "Mood Enhancement":
      "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=2070&auto=format&fit=crop",
    "Mindful Meditation":
      "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2070&auto=format&fit=crop",
    "Nutritional Wellness":
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    "Self-Care Practices":
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop",
  };

  return (
    imageMap[title] ||
    "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=2070&auto=format&fit=crop"
  );
};

const DashboardPage = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const userName =
    user.firstName || user.emailAddresses[0].emailAddress.split("@")[0];

  // VR Experience Information
  const vrExperience = {
    title: "Coming Soon: VR Mental Health Experience",
    description:
      "Immerse yourself in virtual healing environments designed to reduce stress and promote mindfulness.",
    features: [
      "Cross-platform compatibility (Available on all major VR devices)",
      "Syncs with your MirianiWell profile and progress",
      "Personalized healing environments based on your Element path",
      "Guided VR meditation and breathing exercises",
      "Offline affirmation library for on-the-go support",
    ],
    launchDate: "August 2025",
    image: "/VRMentalHealthExperienceMindfulVRExperience.jpg",
  };

  const features = [
    {
      title: "Daily Check-In",
      description: "Track your mood and emotions",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      link: "/check-in",
    },
    {
      title: "Healing Journal",
      description: "Document your healing journey",
      icon: BookOpen,
      color: "from-violet-500 to-purple-500",
      link: "/journal",
    },
    {
      title: "Guided Rituals",
      description: "Personalized healing practices",
      icon: Sparkles,
      color: "from-blue-500 to-indigo-500",
      link: "/rituals",
    },
    {
      title: "AI Healing Companion",
      description: "Compassionate conversations and emotional support",
      icon: Bot,
      color: "from-purple-500 to-blue-500",
      link: "/healing-companion",
      badge: "Featured",
    },
    {
      title: "Daily Affirmations",
      description: "Positive reinforcement practices",
      icon: Calendar,
      color: "from-emerald-500 to-green-500",
      link: "/affirmations",
    },
    {
      title: "Mindfulness Meditation",
      description: "Find your center and inner peace",
      icon: Moon,
      color: "from-indigo-500 to-purple-500",
      link: "/rituals",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 px-3 sm:px-4 md:px-6 py-4 md:py-6">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Welcome Section with Banner */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden mb-6 sm:mb-8">
          <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Peaceful Nature"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/50 flex items-end p-4 sm:p-6 md:p-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                Welcome back, <br className="inline sm:hidden" />
                <span className="text-blue-200">{userName}</span>
              </h1>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Your personal space for healing, growth, and self-discovery. How
              are you feeling today?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/healing-companion"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-gradient-to-r from-[#7d55e6] to-[#38b6ff] text-white rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg font-medium text-sm sm:text-base"
              >
                <Bot className="w-5 h-5" />
                <span>Talk to your Healing Companion</span>
              </Link>
              <Link
                href="/check-in"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all hover:border-purple-200 hover:shadow-md font-medium text-sm sm:text-base"
              >
                <Heart className="w-5 h-5 text-pink-500" />
                <span>Daily Check-in</span>
              </Link>
              <Link
                href="/journal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all hover:border-blue-200 hover:shadow-md font-medium text-sm sm:text-base"
              >
                <BookOpen className="w-5 h-5 text-blue-500" />
                <span>Write in Journal</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Wellness Status Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl sm:text-2xl font-bold">
              Today&apos;s Wellness
            </h2>
            <span className="text-xs sm:text-sm text-gray-500">
              July 2, 2025
            </span>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/20 flex items-center justify-center mr-3 sm:mr-4">
                <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-600">
                  Morning
                </h3>
                <p className="text-base sm:text-lg font-semibold">Energized</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 sm:mr-4">
                <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-600">
                  Afternoon
                </h3>
                <p className="text-base sm:text-lg font-semibold">Focused</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 sm:mr-4">
                <Sunset className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-600">
                  Evening
                </h3>
                <p className="text-base sm:text-lg font-semibold">Reflective</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-500/20 flex items-center justify-center mr-3 sm:mr-4">
                <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-600">
                  Night
                </h3>
                <p className="text-base sm:text-lg font-semibold">Relaxed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid with Enhanced Cards */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Your Wellness Toolkit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.link}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group hover:translate-y-[-3px] duration-300"
            >
              <div className="h-32 sm:h-36 relative">
                <Image
                  src={getImageForFeature(feature.title)}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50"></div>
                <div
                  className={`absolute top-3 sm:top-4 left-3 sm:left-4 w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                >
                  <feature.icon className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                {feature.badge && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-md">
                    {feature.badge}
                  </div>
                )}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  {feature.description}
                </p>
                <div className="flex items-center text-purple-600 group-hover:translate-x-1 transition-transform">
                  <span className="font-medium text-sm">Explore</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Progress Section with Visual Elements */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row">
            {/* Left column - Activity */}
            <div className="flex-1 p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold">
                  Your Healing Journey
                </h2>
                <Link
                  href="/journal"
                  className="text-xs sm:text-sm text-blue-600 hover:underline flex items-center"
                >
                  View all <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-sm sm:text-base">
                          Daily Check-in Completed
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Today, 9:30 AM
                        </p>
                      </div>
                      <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        Completed
                      </span>
                    </div>
                    <div className="mt-2 bg-white px-3 py-2 rounded-md text-xs sm:text-sm italic text-gray-600 border-l-2 border-pink-400">
                      &ldquo;Feeling optimistic and energized today. Looking
                      forward to new possibilities.&rdquo;
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-sm sm:text-base">
                          Healing Companion Session
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Yesterday, 8:15 PM
                        </p>
                      </div>
                      <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                        20 min
                      </span>
                    </div>
                    <div className="mt-2 bg-white px-3 py-2 rounded-md text-xs sm:text-sm italic text-gray-600 border-l-2 border-blue-400">
                      &ldquo;Discussed challenges and received personalized
                      guidance.&rdquo;
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border border-violet-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-violet-400 to-violet-600 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-sm sm:text-base">
                          Journal Entry
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Yesterday, 7:45 PM
                        </p>
                      </div>
                      <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                        Reflective
                      </span>
                    </div>
                    <div className="mt-2 bg-white px-3 py-2 rounded-md text-xs sm:text-sm italic text-gray-600 border-l-2 border-purple-400">
                      &ldquo;Today I realized how far I&apos;ve come in my
                      healing journey...&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Visual chart/progress */}
            <div className="flex-1 bg-blue-50 p-4 sm:p-6 md:p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Wellness Progress
                </h3>
                <div className="mb-4 sm:mb-6">
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span>Emotional Balance</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="h-2 sm:h-3 bg-blue-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full w-[78%]"></div>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span>Mindfulness</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="h-2 sm:h-3 bg-blue-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full w-[65%]"></div>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span>Energy Levels</span>
                    <span className="font-medium">82%</span>
                  </div>
                  <div className="h-2 sm:h-3 bg-blue-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full w-[82%]"></div>
                  </div>
                </div>

                <Link
                  href="/check-in"
                  className="mt-2 text-xs sm:text-sm text-blue-600 hover:underline flex items-center"
                >
                  View detailed insights <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </div>

              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200 rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
            </div>
          </div>
        </div>

        {/* Daily Wisdom & Affirmations Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          {/* Affirmation card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="h-36 sm:h-48 relative">
              <Image
                src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80"
                alt="Peaceful nature"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent flex items-end">
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Today&apos;s Affirmation
                  </h3>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    Refresh your mindset
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div>
                  <h4 className="font-medium text-sm sm:text-base">
                    Daily Affirmation
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    5 minutes • Mood Booster
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
              </div>
              <div className="mb-3 sm:mb-4 text-sm sm:text-base italic text-center border-l-4 pl-3 sm:pl-4 border-blue-400 min-h-[60px] sm:min-h-[80px] flex items-center justify-center">
                &ldquo;I am at peace with my past, present, and future. I
                embrace the journey of healing and growth.&rdquo;
              </div>
              <div className="mt-auto">
                <Link
                  href="/affirmations"
                  className="w-full h-10 sm:h-12 flex items-center justify-center gap-2 text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:opacity-90 transition-opacity text-xs sm:text-sm font-medium"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Get Daily Affirmations</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Guided meditation card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="h-36 sm:h-48 relative">
              <Image
                src="https://images.unsplash.com/photo-1532798442725-41036acc7489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
                alt="Meditation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent flex items-end">
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Guided Meditation
                  </h3>
                  <p className="text-green-100 text-xs sm:text-sm">
                    Recenter and calm your mind
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div>
                  <h4 className="font-medium text-sm sm:text-base">
                    Calming Breathwork
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    10 minutes • Stress Relief
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-3 sm:mb-4 text-sm sm:text-base italic text-center border-l-4 pl-3 sm:pl-4 border-green-400 min-h-[60px] sm:min-h-[80px] flex items-center justify-center">
                &ldquo;Breathe deeply and reconnect with your inner calm. Each
                breath brings you closer to peace.&rdquo;
              </div>
              <div className="mt-auto">
                <Link
                  href="/rituals"
                  className="w-full h-10 sm:h-12 flex items-center justify-center gap-2 text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:opacity-90 transition-opacity text-xs sm:text-sm font-medium"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Explore Guided Rituals</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Wellness Tips Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">
              Wellness Tips for You
            </h2>
            <button className="text-blue-600 hover:underline text-xs sm:text-sm flex items-center">
              View all <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-28 sm:h-32 relative">
                <Image
                  src={getImageForWellnessTip("Energizing Morning Routine")}
                  alt="Energizing Morning Routine"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-1">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                  Energizing Morning Routine
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  Start your day with intention through a simple 5-minute
                  energizing routine.
                </p>
                <Link
                  href="/rituals"
                  className="text-amber-600 text-xs sm:text-sm hover:underline flex items-center"
                >
                  Learn more <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-28 sm:h-32 relative">
                <Image
                  src={getImageForWellnessTip("Better Sleep Habits")}
                  alt="Better Sleep Habits"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mb-1">
                    <Moon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                  Better Sleep Habits
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  Simple techniques to improve sleep quality and wake up
                  refreshed.
                </p>
                <Link
                  href="/rituals"
                  className="text-blue-600 text-xs sm:text-sm hover:underline flex items-center"
                >
                  Learn more <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-28 sm:h-32 relative">
                <Image
                  src={getImageForWellnessTip("Mood Enhancement")}
                  alt="Mood Enhancement"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-1">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Mood Enhancement</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Natural methods to boost your mood and maintain emotional
                  balance.
                </p>
                <Link
                  href="/rituals"
                  className="text-emerald-600 text-sm hover:underline flex items-center"
                >
                  Learn more <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-28 sm:h-32 relative">
                <Image
                  src={getImageForWellnessTip("Mindful Meditation")}
                  alt="Mindful Meditation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center mb-1">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Mindful Meditation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Strengthen your mind-body connection with guided mindfulness
                  practices.
                </p>
                <Link
                  href="/rituals"
                  className="text-purple-600 text-sm hover:underline flex items-center"
                >
                  Learn more <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-28 sm:h-32 relative">
                <Image
                  src={getImageForWellnessTip("Nutritional Wellness")}
                  alt="Nutritional Wellness"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 4c4.42 0 8 3.58 8 8 0 4.42-3.58 8-8 8-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8z"></path>
                      <path d="M11 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                      <path d="M11 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                      <path d="M11 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Nutritional Wellness</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Foods and eating habits that support your healing journey and
                  overall wellness.
                </p>
                <Link
                  href="/rituals"
                  className="text-teal-600 text-sm hover:underline flex items-center"
                >
                  Learn more <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-28 sm:h-32 relative">
                <Image
                  src={getImageForWellnessTip("Self-Care Practices")}
                  alt="Self-Care Practices"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center mb-1">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                  Self-Care Practices
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  Essential rituals to nurture your mind, body, and spirit
                  daily.
                </p>
                <Link
                  href="/rituals"
                  className="text-rose-600 text-xs sm:text-sm hover:underline flex items-center"
                >
                  Learn more <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* VR Experience Coming Soon Section */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-purple-200 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-indigo-200 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-xs font-medium mb-4">
                Coming August 2025
              </div>
              <div className="inline-block px-6 py-3 bg-green-300 text-green-800 rounded-full text-base font-bold mb-4 ml-2 animate-pulse">
                COMING SOON
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {vrExperience.title}
              </h2>
              <p className="text-gray-600 mb-6">{vrExperience.description}</p>

              <div className="space-y-3 mb-6">
                {vrExperience.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center mt-1 mr-3">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg text-base font-bold">
                <span>JOIN WAITLIST</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/VRMentalHealthExperienceMindfulVRExperience.jpg"
                  alt="VR Mental Health Experience Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent flex items-end">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col items-center gap-3">
                <div className="inline-block px-4 py-2 bg-purple-100 rounded-lg">
                  <p className="text-sm text-purple-800 font-medium">
                    <span className="font-bold">Technical Details:</span>{" "}
                    Cross-platform, synced data, offline capabilities
                  </p>
                </div>
                <div className="bg-indigo-100/70 rounded-lg p-3 w-full">
                  <p className="text-sm text-indigo-800 text-center">
                    <span className="font-bold">Coming Soon:</span> This VR
                    functionality is currently under development and will be
                    fully integrated with your MirianiWell account in August
                    2025.
                  </p>
                </div>
                <div className="bg-green-100 rounded-lg p-4 w-full mt-2 border border-green-300 animate-pulse">
                  <p className="text-base text-green-800 text-center font-bold">
                    COMING SOON
                  </p>
                  <p className="text-sm text-green-700 text-center mt-1">
                    We&apos;re working hard to bring this experience to you!
                  </p>
                </div>
                <div className="w-full max-w-xs">
                  <Link
                    href="#vr-details"
                    className="w-full h-10 flex items-center justify-center gap-2 text-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <span>Learn More About VR Features</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Inspiration */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-5 sm:mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-200 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-purple-200 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Your AI Healing Companion
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 max-w-3xl text-sm sm:text-base">
              Luna, your compassionate AI companion, is here to support your
              wellness journey with personalized guidance, reflective
              conversations, and mindfulness practices. Connect anytime for
              emotional support.
            </p>
            <Link
              href="/healing-companion"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#7d55e6] to-[#38b6ff] text-white rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-xl text-sm sm:text-base font-medium"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Start a Healing Conversation</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <section className="py-6 sm:py-8 bg-white border-t border-gray-100 mt-8 sm:mt-12 -mx-3 sm:-mx-4 md:-mx-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  MirianiWell
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm max-w-md text-center md:text-left">
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
                    className="text-slate-500 hover:text-blue-600 text-sm"
                  >
                    Journal
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 text-sm"
                  >
                    Meditation
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 text-sm"
                  >
                    Affirmations
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-slate-800 mb-2">Company</h4>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 text-sm"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 text-sm"
                  >
                    Privacy
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 text-sm"
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
                  className="text-slate-400 hover:text-blue-600 transition-colors"
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
                  className="text-slate-400 hover:text-blue-600 transition-colors"
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
                  className="text-slate-400 hover:text-blue-600 transition-colors"
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

export const metadata: Metadata = {
  title: "Miriani Well - Dashboard",
  description:
    "Your personal wellness dashboard with AI-powered tools for mental health",
  openGraph: {
    title: "Miriani Well - Dashboard",
    description:
      "Your personal wellness dashboard with AI-powered tools for mental health",
    images: ["/Website-Thumbnail.png"],
  },
};

export default DashboardPage;
