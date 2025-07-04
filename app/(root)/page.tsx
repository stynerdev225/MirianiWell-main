import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import ContractFrame from "@/components/ContractFrame";
import {
  ArrowRight,
  Star,
  Sparkles,
  Heart,
  BookOpen,
  Bot,
  Play,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Miriani Well - Your AI Wellness Companion",
  description:
    "An AI-powered wellness platform designed to support your mental health journey with personalized guidance and tools",
  openGraph: {
    title: "Miriani Well - Your AI Wellness Companion",
    description:
      "An AI-powered wellness platform designed to support your mental health journey with personalized guidance and tools",
    images: ["/Website-Thumbnail.png"],
  },
};

async function Home() {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">
            Please sign in to continue your wellness journey
          </h1>
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-[100vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl mx-2 sm:mx-4 my-3 sm:my-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/hero.jpg"
            alt="Peaceful meditation background"
            fill
            className="object-cover rounded-2xl sm:rounded-3xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-purple-900/95 via-blue-900/90 to-pink-900/95 rounded-2xl sm:rounded-3xl"></div>
          <div className="absolute inset-0 bg-black/20 sm:bg-black/30 rounded-2xl sm:rounded-3xl"></div>
        </div>

        {/* Hero Content - Mobile First */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Text Content */}
            <div className="text-center lg:text-left lg:w-1/2">
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
                  <span className="block mb-2">Welcome to</span>
                  <span className="block mb-2">Your</span>
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
                    Healing Journey
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-lg px-2 sm:px-0">
                  Discover personalized wellness practices, elemental rituals,
                  and AI-guided support to transform your mind, body, and
                  spirit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center px-4 sm:px-0">
                <Button
                  asChild
                  size="default"
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Link
                    href="/rituals"
                    className="flex items-center justify-center gap-2"
                  >
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="w-full sm:w-auto border-2 border-white bg-white/10 text-white hover:bg-white hover:text-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg"
                >
                  <Link
                    href="/check-in"
                    className="flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    Quick Check-In
                  </Link>
                </Button>
              </div>

              {/* Stats - Mobile Optimized Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8 text-white max-w-sm mx-auto lg:mx-0">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1 drop-shadow-lg">
                    10K+
                  </div>
                  <div className="text-white/80 drop-shadow-md text-xs sm:text-sm">
                    Users
                  </div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1 drop-shadow-lg">
                    50+
                  </div>
                  <div className="text-white/80 drop-shadow-md text-xs sm:text-sm">
                    Practices
                  </div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1 drop-shadow-lg">
                    98%
                  </div>
                  <div className="text-white/80 drop-shadow-md text-xs sm:text-sm">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Image - Hidden on Mobile */}
            <div className="lg:w-1/2 relative hidden lg:block">
              <div className="relative w-[400px] h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Meditation pose"
                  width={400}
                  height={400}
                  className="object-cover rounded-3xl shadow-2xl z-10"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm z-0 shadow-xl"></div>

                {/* Decorative circles */}
                <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500/70 to-purple-500/70 blur-sm"></div>
                <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500/70 to-blue-500/70 blur-sm"></div>
                <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500/70 to-orange-500/70 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Elemental Healing Practices
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Connect with the four elements through ancient wisdom and modern
              techniques
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Earth */}
            <Link href="/rituals/earth" className="group">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="aspect-[4/3] sm:aspect-square relative">
                  <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Earth element"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-700/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xl sm:text-2xl">🌱</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Earth</h3>
                  </div>
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                    Grounding practices for stability, strength, and deep
                    connection with nature
                  </p>
                </div>
              </div>
            </Link>

            {/* Water */}
            <Link href="/rituals/water" className="group">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="aspect-[4/3] sm:aspect-square relative">
                  <Image
                    src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Water element"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-700/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xl sm:text-2xl">💧</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Water</h3>
                  </div>
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                    Flowing practices for emotional healing, purification, and
                    renewal
                  </p>
                </div>
              </div>
            </Link>

            {/* Fire */}
            <Link href="/rituals/fire" className="group">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="aspect-[4/3] sm:aspect-square relative">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Fire element"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-700/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xl sm:text-2xl">🔥</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Fire</h3>
                  </div>
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                    Transformative practices for passion, energy, and personal
                    power
                  </p>
                </div>
              </div>
            </Link>

            {/* Air */}
            <Link href="/rituals/air" className="group">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="aspect-[4/3] sm:aspect-square relative">
                  <Image
                    src="/images/rituals/air.jpg"
                    alt="Air element"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-700/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xl sm:text-2xl">🌬️</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Air</h3>
                  </div>
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                    Breathing practices for mental clarity, wisdom, and
                    spiritual connection
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Wellness Tools Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Your Wellness Toolkit
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Powerful tools designed to support your daily wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Journal */}
            <Link href="/journal" className="group">
              <div className="wellness-toolkit-card bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-amber-200 flex flex-col h-full min-h-[200px] sm:min-h-[250px]">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 mx-auto">
                  <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                  Sacred Journal
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Reflect on your journey, practice gratitude, and track your
                  personal growth with guided prompts
                </p>
                <div className="text-center mt-auto">
                  <span className="inline-flex items-center text-amber-600 font-semibold group-hover:gap-2 transition-all text-sm sm:text-base">
                    Start Writing
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Affirmations */}
            <Link href="/affirmations" className="group">
              <div className="wellness-toolkit-card bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-purple-200 flex flex-col h-full min-h-[200px] sm:min-h-[250px]">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 mx-auto">
                  <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                  Daily Affirmations
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Empower yourself with positive mantras and personalized
                  affirmations for daily inspiration
                </p>
                <div className="text-center mt-auto">
                  <span className="inline-flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all text-sm sm:text-base">
                    Get Inspired
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* AI Companion */}
            <Link href="/healing-companion" className="group">
              <div className="wellness-toolkit-card bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-cyan-200 flex flex-col h-full min-h-[200px] sm:min-h-[250px] sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 mx-auto">
                  <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                  AI Healing Companion
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Get personalized guidance, emotional support, and healing
                  recommendations powered by AI
                </p>
                <div className="text-center mt-auto">
                  <span className="inline-flex items-center text-cyan-600 font-semibold group-hover:gap-2 transition-all text-sm sm:text-base">
                    Chat Now
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0">
              Join Thousands on Their Healing Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 italic">
                &ldquo;Miriani Well has completely transformed my daily routine.
                The elemental rituals help me feel grounded and centered.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  S
                </div>
                <div className="ml-3 sm:ml-4">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">
                    Sarah Chen
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    Wellness Enthusiast
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 italic">
                &ldquo;The AI companion is incredibly insightful. It&apos;s like
                having a personal wellness coach available 24/7.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  M
                </div>
                <div className="ml-3 sm:ml-4">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">
                    Marcus Rivera
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    Mindfulness Teacher
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 italic">
                &ldquo;The journaling feature with guided prompts has helped me
                process emotions and track my growth journey.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  A
                </div>
                <div className="ml-3 sm:ml-4">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">
                    Aisha Patel
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    Yoga Instructor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Frame Example Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Wellness Commitment
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Your personal contract for healing and transformation
            </p>
          </div>

          <ContractFrame title="Personal Wellness Agreement">
            <div className="prose prose-slate max-w-none mx-auto text-gray-900">
              <p className="text-sm sm:text-base lg:text-lg text-center mb-4 sm:mb-6 text-gray-800">
                I, ____________, commit to nurturing my mind, body, and spirit
                through the practices offered by Miriani Well.
              </p>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">
                  I pledge to:
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="text-sm sm:text-base text-gray-900 font-medium">
                    Practice mindfulness and presence in my daily life
                  </li>
                  <li className="text-sm sm:text-base text-gray-900 font-medium">
                    Honor my emotions and express them in healthy ways
                  </li>
                  <li className="text-sm sm:text-base text-gray-900 font-medium">
                    Connect with nature and the elements regularly
                  </li>
                  <li className="text-sm sm:text-base text-gray-900 font-medium">
                    Prioritize rest, reflection, and renewal
                  </li>
                  <li className="text-sm sm:text-base text-gray-900 font-medium">
                    Approach my wellness journey with compassion and patience
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="w-full sm:w-auto">
                  <p className="text-xs sm:text-sm text-gray-900 font-semibold text-center sm:text-left">
                    Signature
                  </p>
                  <div className="mt-1 h-px w-full sm:w-40 border-b-2 border-gray-400"></div>
                </div>
                <div className="w-full sm:w-auto">
                  <p className="text-xs sm:text-sm text-gray-900 font-semibold text-center sm:text-left">
                    Date
                  </p>
                  <div className="mt-1 h-px w-full sm:w-32 border-b-2 border-gray-400"></div>
                </div>
                <div className="contract-seal flex items-center justify-center mt-4 sm:mt-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-2 border-purple-200 opacity-70"></div>
                    <div className="text-xs text-purple-700 font-serif font-medium text-center">
                      Miriani
                      <br />
                      Well
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContractFrame>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-purple-100 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
            Join thousands who have discovered inner peace, emotional balance,
            and spiritual growth through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="default"
              className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-2"
              >
                View Dashboard
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="default"
              className="w-full sm:w-auto border-2 border-white bg-white/10 text-white hover:bg-white hover:text-purple-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 shadow-lg"
            >
              <Link
                href="/check-in"
                className="flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                Start Check-In
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section - Mobile Optimized */}
      <section className="py-6 sm:py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  MirianiWell
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm max-w-md text-center md:text-left">
                  Your daily companion for mindfulness, wellness tracking, and
                  mental health support.
                </p>
              </div>

              <div className="flex gap-6 sm:gap-8 md:gap-16">
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <h4 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">
                    Resources
                  </h4>
                  <Link
                    href="/journal"
                    className="text-slate-500 hover:text-purple-600 text-xs sm:text-sm"
                  >
                    Journal
                  </Link>
                  <Link
                    href="/rituals"
                    className="text-slate-500 hover:text-purple-600 text-xs sm:text-sm"
                  >
                    Rituals
                  </Link>
                  <Link
                    href="/affirmations"
                    className="text-slate-500 hover:text-purple-600 text-xs sm:text-sm"
                  >
                    Affirmations
                  </Link>
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <h4 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">
                    Company
                  </h4>
                  <Link
                    href="#"
                    className="text-slate-500 hover:text-purple-600 text-xs sm:text-sm"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    className="text-slate-500 hover:text-purple-600 text-xs sm:text-sm"
                  >
                    Privacy
                  </Link>
                  <Link
                    href="#"
                    className="text-slate-500 hover:text-purple-600 text-xs sm:text-sm"
                  >
                    Terms
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 mt-6 sm:mt-8 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-500 text-xs sm:text-sm">
                © {new Date().getFullYear()} MirianiWell. All rights reserved.
              </p>
              <div className="flex gap-4 mt-3 sm:mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-slate-400 hover:text-purple-600 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-purple-600 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
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
                  className="text-slate-400 hover:text-purple-600 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
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
}

export default Home;
