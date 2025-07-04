import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  Sparkles,
  Heart,
  BookOpen,
  Bot,
  Play,
  Menu,
  X,
  Home as HomeIcon,
  User,
  Calendar,
} from "lucide-react";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Miriani Well Mobile - Your AI Wellness Companion",
  description:
    "An AI-powered wellness platform designed to support your mental health journey with personalized guidance and tools",
  openGraph: {
    title: "Miriani Well Mobile - Your AI Wellness Companion",
    description:
      "An AI-powered wellness platform designed to support your mental health journey with personalized guidance and tools",
    images: ["/Website-Thumbnail.png"],
  },
};

export default function MobileHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Since we're using this client component, we need to handle user auth differently
  // This is a placeholder - you'll need to implement proper client-side auth
  const user = true; // Replace with actual client-side auth check

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <h1 className="text-xl font-bold mb-4">
            Please sign in to continue your wellness journey
          </h1>
          <Button asChild className="w-full">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
              MW
            </div>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              MirianiWell
            </span>
          </Link>
          <button onClick={toggleMenu} className="p-1">
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg animate-slideDown">
            <nav className="flex flex-col">
              <Link
                href="/"
                className="px-6 py-4 flex items-center gap-3 border-b border-gray-100 text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <HomeIcon className="w-5 h-5 text-purple-600" />
                Home
              </Link>
              <Link
                href="/rituals"
                className="px-6 py-4 flex items-center gap-3 border-b border-gray-100 text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="w-5 h-5 text-blue-600" />
                Rituals
              </Link>
              <Link
                href="/journal"
                className="px-6 py-4 flex items-center gap-3 border-b border-gray-100 text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-5 h-5 text-amber-600" />
                Journal
              </Link>
              <Link
                href="/check-in"
                className="px-6 py-4 flex items-center gap-3 border-b border-gray-100 text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-5 h-5 text-pink-600" />
                Check-In
              </Link>
              <Link
                href="/profile"
                className="px-6 py-4 flex items-center gap-3 text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="w-5 h-5 text-indigo-600" />
                Profile
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Page Content with top padding for fixed header */}
      <div className="pt-14">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative flex items-center justify-center overflow-hidden rounded-xl mx-3 my-3 min-h-[70vh]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/home/hero.jpg"
              alt="Peaceful meditation background"
              fill
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/85 to-pink-900/90 rounded-xl"></div>
            <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 px-4 py-8 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-white leading-tight drop-shadow-xl">
                Welcome to Your
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-300 bg-clip-text text-transparent block drop-shadow-lg mt-1">
                  Healing Journey
                </span>
              </h1>
              <p className="text-base text-white max-w-xs mx-auto leading-relaxed drop-shadow-lg">
                Discover personalized wellness practices and AI-guided support
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg"
              >
                <Link
                  href="/rituals"
                  className="flex items-center justify-center gap-2"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-2 border-white bg-black/20 text-white rounded-full backdrop-blur-sm shadow-lg"
              >
                <Link
                  href="/check-in"
                  className="flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Quick Check-In
                </Link>
              </Button>
            </div>

            {/* Stats - Mobile Layout */}
            <div className="grid grid-cols-3 gap-2 mt-8 text-white">
              <div className="text-center stat-card p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-xl font-bold mb-1 drop-shadow-lg">
                  10K+
                </div>
                <div className="text-white/90 drop-shadow-md text-xs">
                  Users
                </div>
              </div>
              <div className="text-center stat-card p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-xl font-bold mb-1 drop-shadow-lg">50+</div>
                <div className="text-white/90 drop-shadow-md text-xs">
                  Practices
                </div>
              </div>
              <div className="text-center stat-card p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-xl font-bold mb-1 drop-shadow-lg">98%</div>
                <div className="text-white/90 drop-shadow-md text-xs">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Cards - Mobile Only Section */}
        <section className="py-6 px-3">
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-3 min-w-max">
              <Link href="/check-in" className="flex-shrink-0">
                <div className="w-24 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mb-2">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-800">
                    Check-In
                  </span>
                </div>
              </Link>
              <Link href="/journal" className="flex-shrink-0">
                <div className="w-24 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-2">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-800">
                    Journal
                  </span>
                </div>
              </Link>
              <Link href="/affirmations" className="flex-shrink-0">
                <div className="w-24 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-2">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-800">
                    Affirmations
                  </span>
                </div>
              </Link>
              <Link href="/healing-companion" className="flex-shrink-0">
                <div className="w-24 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-2">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-800">
                    AI Companion
                  </span>
                </div>
              </Link>
              <Link href="/calendar" className="flex-shrink-0">
                <div className="w-24 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center mb-2">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-800">
                    Calendar
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section - Mobile Optimized */}
        <section className="py-10 bg-gradient-to-b from-gray-50 to-white px-3">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Elemental Healing
            </h2>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Connect with the four elements through ancient wisdom
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Earth */}
            <Link href="/rituals/earth" className="group">
              <div className="relative overflow-hidden rounded-xl shadow-md h-40">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Earth element"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-700/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-base">🌱</span>
                    </div>
                    <h3 className="text-base font-bold">Earth</h3>
                  </div>
                  <p className="text-white/90 text-xs">
                    Grounding practices for stability
                  </p>
                </div>
              </div>
            </Link>

            {/* Water */}
            <Link href="/rituals/water" className="group">
              <div className="relative overflow-hidden rounded-xl shadow-md h-40">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Water element"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-700/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-base">💧</span>
                    </div>
                    <h3 className="text-base font-bold">Water</h3>
                  </div>
                  <p className="text-white/90 text-xs">
                    Flowing practices for healing
                  </p>
                </div>
              </div>
            </Link>

            {/* Fire */}
            <Link href="/rituals/fire" className="group">
              <div className="relative overflow-hidden rounded-xl shadow-md h-40">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Fire element"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-red-700/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-base">🔥</span>
                    </div>
                    <h3 className="text-base font-bold">Fire</h3>
                  </div>
                  <p className="text-white/90 text-xs">
                    Transformative energy practices
                  </p>
                </div>
              </div>
            </Link>

            {/* Air */}
            <Link href="/rituals/air" className="group">
              <div className="relative overflow-hidden rounded-xl shadow-md h-40">
                <div className="absolute inset-0">
                  <Image
                    src="/images/rituals/air.jpg"
                    alt="Air element"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-700/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-base">🌬️</span>
                    </div>
                    <h3 className="text-base font-bold">Air</h3>
                  </div>
                  <p className="text-white/90 text-xs">
                    Breathing for mental clarity
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Wellness Tools Section - Mobile Optimized */}
        <section className="py-10 bg-white px-3">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your Wellness Toolkit
            </h2>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Tools designed to support your daily wellness journey
            </p>
          </div>

          <div className="space-y-4">
            {/* Journal */}
            <Link href="/journal">
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl p-4 border border-amber-200 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Sacred Journal
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Reflect on your journey with guided prompts
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-600 flex-shrink-0" />
              </div>
            </Link>

            {/* Affirmations */}
            <Link href="/affirmations">
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-4 border border-purple-200 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Daily Affirmations
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Empower yourself with positive mantras
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-purple-600 flex-shrink-0" />
              </div>
            </Link>

            {/* AI Companion */}
            <Link href="/healing-companion">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl p-4 border border-cyan-200 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    AI Healing Companion
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Get personalized guidance and support
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-cyan-600 flex-shrink-0" />
              </div>
            </Link>
          </div>
        </section>

        {/* Testimonial Section - Mobile Optimized */}
        <section className="py-10 bg-gradient-to-r from-gray-50 to-blue-50 px-3">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Join Thousands on Their Journey
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div className="overflow-x-auto pb-4 -mx-3">
            <div className="flex gap-3 px-3 min-w-max">
              <div className="bg-white rounded-xl p-4 shadow-md w-72 flex-shrink-0">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm italic">
                  &ldquo;Miriani Well has transformed my daily routine. The
                  elemental rituals help me feel grounded.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    S
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900 text-sm">
                      Sarah Chen
                    </div>
                    <div className="text-gray-500 text-xs">
                      Wellness Enthusiast
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-md w-72 flex-shrink-0">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm italic">
                  &ldquo;The AI companion is incredibly insightful. It&apos;s
                  like having a personal coach available 24/7.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    M
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900 text-sm">
                      Marcus Rivera
                    </div>
                    <div className="text-gray-500 text-xs">
                      Mindfulness Teacher
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-md w-72 flex-shrink-0">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm italic">
                  &ldquo;The journaling feature with guided prompts has helped
                  me process emotions and track my growth.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    A
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900 text-sm">
                      Aisha Patel
                    </div>
                    <div className="text-gray-500 text-xs">Yoga Instructor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Mobile Optimized */}
        <section className="py-10 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-sm text-purple-100 mb-6">
              Join thousands who have discovered inner peace and emotional
              balance
            </p>
            <div className="flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="w-full bg-white text-purple-600 hover:bg-gray-100 rounded-full shadow-xl"
              >
                <Link
                  href="/dashboard"
                  className="flex items-center justify-center gap-2"
                >
                  View Dashboard
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-2 border-white bg-black/20 text-white hover:bg-white hover:text-purple-600 rounded-full shadow-lg"
              >
                <Link
                  href="/check-in"
                  className="flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Start Check-In
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer - Mobile Optimized */}
        <footer className="py-8 bg-white border-t border-gray-100 px-4">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              MirianiWell
            </h3>
            <p className="text-slate-500 text-xs max-w-xs mb-6">
              Your daily companion for mindfulness, wellness tracking, and
              mental health support.
            </p>

            <div className="grid grid-cols-2 gap-8 w-full max-w-xs mb-6">
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-slate-800 text-sm">
                  Resources
                </h4>
                <Link
                  href="/journal"
                  className="text-slate-500 hover:text-purple-600 text-xs"
                >
                  Journal
                </Link>
                <Link
                  href="/rituals"
                  className="text-slate-500 hover:text-purple-600 text-xs"
                >
                  Rituals
                </Link>
                <Link
                  href="/affirmations"
                  className="text-slate-500 hover:text-purple-600 text-xs"
                >
                  Affirmations
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-slate-800 text-sm">
                  Company
                </h4>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-purple-600 text-xs"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-purple-600 text-xs"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-purple-600 text-xs"
                >
                  Terms
                </Link>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6 w-full flex flex-col items-center">
              <p className="text-slate-500 text-xs mb-4">
                © {new Date().getFullYear()} MirianiWell. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-purple-600 transition-colors"
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
                  className="text-slate-400 hover:text-purple-600 transition-colors"
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
                  className="text-slate-400 hover:text-purple-600 transition-colors"
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
        </footer>

        {/* Mobile Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
          <div className="flex justify-around">
            <Link href="/" className="flex flex-col items-center py-2 px-1">
              <HomeIcon className="w-6 h-6 text-purple-600" />
              <span className="text-xs text-gray-600 mt-1">Home</span>
            </Link>
            <Link
              href="/journal"
              className="flex flex-col items-center py-2 px-1"
            >
              <BookOpen className="w-6 h-6 text-gray-500" />
              <span className="text-xs text-gray-600 mt-1">Journal</span>
            </Link>
            <Link
              href="/check-in"
              className="flex flex-col items-center py-2 px-1"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center -mt-5 border-4 border-white">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-600 mt-1">Check-In</span>
            </Link>
            <Link
              href="/rituals"
              className="flex flex-col items-center py-2 px-1"
            >
              <Sparkles className="w-6 h-6 text-gray-500" />
              <span className="text-xs text-gray-600 mt-1">Rituals</span>
            </Link>
            <Link
              href="/profile"
              className="flex flex-col items-center py-2 px-1"
            >
              <User className="w-6 h-6 text-gray-500" />
              <span className="text-xs text-gray-600 mt-1">Profile</span>
            </Link>
          </div>
        </div>

        {/* Add padding at the bottom to account for the fixed nav bar */}
        <div className="h-16"></div>
      </div>
    </div>
  );
}
