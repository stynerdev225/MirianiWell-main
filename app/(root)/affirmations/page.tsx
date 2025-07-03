import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Heart,
  Star,
  Play,
  Camera,
  Target,
  Brain,
  Sunrise,
  Moon,
  BookOpen,
  Music,
  Headphones,
  Bot,
} from "lucide-react";
import { AFFIRMATION_CATEGORIES } from "@/constants";
import "./affirmations.css";

const AffirmationsPage = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">
                Affirmation Library
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Daily Affirmations
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empower yourself with positive affirmations that nurture your
              mind, body, and spirit
            </p>
          </div>

          {/* Today's Featured Affirmation */}
          <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl shadow-lg p-8 mb-8 text-white text-center">
            <div className="mb-4">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <h2 className="text-xl font-semibold">
                Today&apos;s Featured Affirmation
              </h2>
            </div>
            <blockquote className="text-2xl font-medium mb-6 italic">
              &ldquo;I am worthy of love, healing, and all the magic life has to
              offer.&rdquo;
            </blockquote>
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Play className="w-4 h-4" />
                Listen
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Heart className="w-4 h-4" />
                Save to Favorites
              </button>
            </div>
          </div>

          {/* Affirmation Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {AFFIRMATION_CATEGORIES.map(
              (category: {
                readonly id: string;
                readonly name: string;
                readonly color: string;
                readonly affirmations: readonly string[];
              }) => (
                <div
                  key={category.id}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-4 h-4 rounded-full bg-[${category.color}]`}
                    />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.name}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.affirmations.map(
                      (affirmation: string, index: number) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow group cursor-pointer"
                        >
                          <p className="text-gray-700 mb-2 italic">
                            &ldquo;{affirmation}&rdquo;
                          </p>
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors">
                              <Play className="w-3 h-3 inline mr-1" />
                              Play
                            </button>
                            <button className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors">
                              <Heart className="w-3 h-3 inline mr-1" />
                              Save
                            </button>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <button className="w-full mt-4 py-2 border-2 border-dashed border-gray-300 text-gray-500 rounded-lg hover:border-gray-400 hover:text-gray-600 transition-colors">
                    View all {category.name.toLowerCase()} affirmations
                  </button>
                </div>
              )
            )}
          </div>

          {/* Practice Session */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-500" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Guided Affirmation Practice
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Take 5-10 minutes to center yourself with a guided affirmation
                session
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Self-Love Practice
                </h3>
                <p className="text-gray-600">5 minutes • Beginner friendly</p>
              </div>

              <div className="flex justify-center gap-4 mb-6">
                <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                  Start Practice
                </button>
                <button className="px-8 py-3 border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                  Customize Session
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-semibold text-purple-600">42</div>
                  <div className="text-sm text-gray-600">
                    Sessions completed
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-semibold text-pink-600">7</div>
                  <div className="text-sm text-gray-600">Day streak</div>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-semibold text-orange-600">156</div>
                  <div className="text-sm text-gray-600">
                    Affirmations practiced
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Separator */}
          <div className="flex items-center justify-center my-12">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-rose-200 to-transparent w-1/3"></div>
            <div className="mx-4">
              <Heart className="w-6 h-6 text-rose-400" />
            </div>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-rose-200 to-transparent w-1/3"></div>
          </div>

          {/* Mood-Based Affirmations */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 transform transition-all hover:shadow-xl border-t-4 border-rose-400">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-rose-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Affirmations for Your Current Mood
              </h2>
            </div>
            <p className="text-gray-600 mb-6 italic border-l-4 border-rose-200 pl-3 py-1">
              Choose affirmations that resonate with how you&apos;re feeling
              right now
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                {
                  mood: "Confident",
                  emoji: "💪",
                  color: "from-orange-400 to-red-400",
                  image:
                    "https://images.unsplash.com/photo-1494790108755-2616c31c9f5b?w=300&h=200&fit=crop&crop=center",
                  count: "12 affirmations",
                },
                {
                  mood: "Peaceful",
                  emoji: "🕊️",
                  color: "from-blue-400 to-teal-400",
                  image:
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
                  count: "15 affirmations",
                },
                {
                  mood: "Energized",
                  emoji: "⚡",
                  color: "from-yellow-400 to-orange-400",
                  image:
                    "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=300&h=200&fit=crop&crop=center",
                  count: "18 affirmations",
                },
                {
                  mood: "Grateful",
                  emoji: "🙏",
                  color: "from-purple-400 to-pink-400",
                  image:
                    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop&crop=center",
                  count: "20 affirmations",
                },
              ].map((mood, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden cursor-pointer mood-card"
                  title={`${mood.mood} affirmations`}
                >
                  <div className="relative h-32">
                    <Image
                      src={mood.image}
                      alt={`${mood.mood} mood affirmation card`}
                      className="w-full h-full object-cover"
                      loading="eager"
                      width={300}
                      height={200}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${mood.color} overlay-gradient`}
                    ></div>
                    <div className="absolute inset-0 overlay-dark"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <div
                        aria-hidden="true"
                        className="emoji-container mb-1.5"
                      >
                        {mood.emoji}
                      </div>
                      <span className="mood-text">{mood.mood}</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white border-t border-gray-100">
                    <p className="count-text text-center">{mood.count}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border border-rose-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Personalized Mood Check
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Tell us how you&apos;re feeling and we&apos;ll suggest the
                perfect affirmations
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg text-sm font-medium flex items-center justify-center gap-2 mx-auto">
                <Heart className="w-4 h-4" />
                Get Mood-Based Affirmations
              </button>
            </div>
          </div>

          {/* Morning & Evening Rituals */}
          <div className="rounded-2xl shadow-lg p-8 mb-8 text-white relative overflow-hidden bg-cover bg-center bg-blend-overlay bg-black/40 morning-ritual-bg">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Sunrise className="w-6 h-6" />
                <h2 className="text-xl font-semibold">
                  Daily Ritual Affirmations
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Sunrise className="w-6 h-6" />
                    <h3 className="text-lg font-semibold">Morning Awakening</h3>
                  </div>
                  <p className="text-white/90 mb-4">
                    Start your day with powerful affirmations that set a
                    positive tone
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-white/80">
                      &ldquo;I welcome this new day with open arms&rdquo;
                    </div>
                    <div className="text-sm text-white/80">
                      &ldquo;I am filled with energy and purpose&rdquo;
                    </div>
                    <div className="text-sm text-white/80">
                      &ldquo;Today brings new opportunities&rdquo;
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
                    Start Morning Practice
                  </button>
                </div>
                <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Moon className="w-6 h-6" />
                    <h3 className="text-lg font-semibold">
                      Evening Reflection
                    </h3>
                  </div>
                  <p className="text-white/90 mb-4">
                    End your day with gratitude and peaceful affirmations
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-white/80">
                      &ldquo;I am grateful for today&apos;s blessings&rdquo;
                    </div>
                    <div className="text-sm text-white/80">
                      &ldquo;I release the day with peace&rdquo;
                    </div>
                    <div className="text-sm text-white/80">
                      &ldquo;I rest in love and tranquility&rdquo;
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
                    Start Evening Practice
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Affirmation Gallery */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Camera className="w-5 h-5 text-purple-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Visual Affirmation Gallery
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Beautiful imagery paired with powerful affirmations for deeper
              impact
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image:
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
                  affirmation: "I am at peace with who I am becoming",
                  category: "Self-Love",
                  color: "bg-pink-500",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center",
                  affirmation: "My potential is limitless and ever-expanding",
                  category: "Growth",
                  color: "bg-green-500",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop&crop=center",
                  affirmation: "I trust the journey and embrace each step",
                  category: "Trust",
                  color: "bg-blue-500",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop&crop=center",
                  affirmation: "I radiate joy and attract abundance",
                  category: "Abundance",
                  color: "bg-yellow-500",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=400&h=300&fit=crop&crop=center",
                  affirmation: "I am worthy of love and belonging",
                  category: "Worth",
                  color: "bg-purple-500",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop&crop=center",
                  affirmation: "I choose courage over comfort",
                  category: "Courage",
                  color: "bg-orange-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-lg overflow-hidden shadow-md"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.category}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      width={400}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-center text-white p-4">
                        <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium mb-2">
                          <Play className="w-4 h-4 inline mr-1" />
                          Listen
                        </button>
                        <div>
                          <button className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded text-xs hover:bg-white/30 transition-colors mr-2">
                            Share
                          </button>
                          <button className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded text-xs hover:bg-white/30 transition-colors">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-1 ${item.color} text-white text-xs rounded-full`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-800 font-medium italic text-sm">
                      &ldquo;{item.affirmation}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Create Custom Visual Affirmation
              </button>
            </div>
          </div>

          {/* Audio Affirmations & Music */}
          <div className="rounded-2xl shadow-lg p-8 mb-8 text-white relative overflow-hidden bg-cover bg-center bg-blend-overlay bg-black/40 audio-bg">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Headphones className="w-6 h-6" />
                <h2 className="text-xl font-semibold">
                  Audio Affirmations & Soundscapes
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Music className="w-6 h-6" />
                    <h3 className="font-semibold">Guided Sessions</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Professional voice recordings with calming background music
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Self-Love Journey</span>
                      <span className="text-white/60">10 min</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Confidence Builder</span>
                      <span className="text-white/60">8 min</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Healing & Recovery</span>
                      <span className="text-white/60">12 min</span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
                    Browse All Sessions
                  </button>
                </div>

                <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6" />
                    <h3 className="font-semibold">Nature Sounds</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Combine affirmations with peaceful nature soundscapes
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Ocean Waves</span>
                      <span className="text-white/60">∞</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Forest Rain</span>
                      <span className="text-white/60">∞</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Mountain Wind</span>
                      <span className="text-white/60">∞</span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
                    Explore Soundscapes
                  </button>
                </div>

                <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-6 h-6" />
                    <h3 className="font-semibold">Binaural Beats</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Enhanced affirmations with frequencies for deeper relaxation
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Alpha Waves</span>
                      <span className="text-white/60">8-12 Hz</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Theta Waves</span>
                      <span className="text-white/60">4-8 Hz</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Delta Waves</span>
                      <span className="text-white/60">0.5-4 Hz</span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
                    Try Binaural Beats
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracking & Challenges */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-5 h-5 text-emerald-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Affirmation Challenges & Progress
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Build a consistent practice with fun challenges and track your
              growth
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      30-Day Challenge
                    </h3>
                    <p className="text-emerald-600 text-sm">Day 12 of 30</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Practice one affirmation daily and build a transformative
                  habit
                </p>
                <div className="w-full bg-emerald-200 rounded-full h-2 mb-3">
                  <div className="bg-emerald-500 h-2 rounded-full w-[40%]"></div>
                </div>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
                  Continue Challenge
                </button>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Weekly Focus
                    </h3>
                    <p className="text-purple-600 text-sm">
                      Self-Compassion Theme
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  This week&apos;s focus: Developing kindness and understanding
                  toward yourself
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Sessions this week</span>
                    <span className="font-medium">4/5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Favorite affirmation</span>
                    <span className="font-medium">💜 Saved</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                  View This Week&apos;s Focus
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center"
                    alt="Streak"
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="font-semibold text-emerald-600 text-lg">14</div>
                <div className="text-xs text-gray-600">Day Streak</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center"
                    alt="Total"
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="font-semibold text-blue-600 text-lg">89</div>
                <div className="text-xs text-gray-600">Total Sessions</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop&crop=center"
                    alt="Minutes"
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="font-semibold text-purple-600 text-lg">267</div>
                <div className="text-xs text-gray-600">Minutes Practiced</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=center"
                    alt="Favorites"
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="font-semibold text-pink-600 text-lg">23</div>
                <div className="text-xs text-gray-600">Favorites Saved</div>
              </div>
            </div>
          </div>

          {/* Affirmation Library & Resources */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-indigo-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Affirmation Library & Learning Resources
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Expand your knowledge and discover the science behind positive
              affirmations
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                {
                  title: "The Science of Affirmations",
                  description:
                    "Learn how positive statements can rewire your brain",
                  image:
                    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center",
                  type: "Article",
                  duration: "5 min read",
                  color: "bg-blue-500",
                },
                {
                  title: "Creating Personal Affirmations",
                  description:
                    "A step-by-step guide to writing your own powerful affirmations",
                  image:
                    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop&crop=center",
                  type: "Guide",
                  duration: "10 min read",
                  color: "bg-green-500",
                },
                {
                  title: "Affirmation Meditation Techniques",
                  description:
                    "Combine mindfulness with affirmations for deeper impact",
                  image:
                    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop&crop=center",
                  type: "Video",
                  duration: "15 min watch",
                  color: "bg-purple-500",
                },
              ].map((resource, index) => (
                <div key={index} className="group">
                  <div className="relative mb-4 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                      width={300}
                      height={200}
                    />
                    <div className="absolute top-2 left-2">
                      <span
                        className={`px-2 py-1 ${resource.color} text-white text-xs rounded-full`}
                      >
                        {resource.type}
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <span className="px-2 py-1 bg-black/50 text-white text-xs rounded">
                        {resource.duration}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {resource.description}
                  </p>
                  <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                    Read More →
                  </button>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Affirmation Masterclass
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Join our comprehensive course on the art and science of
                    affirmations
                  </p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                      Enroll Now
                    </button>
                    <button className="px-4 py-2 border border-indigo-300 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors text-sm font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community & Sharing */}
          <div className="rounded-2xl shadow-lg p-8 mb-8 text-white relative overflow-hidden bg-cover bg-center bg-blend-overlay bg-black/40 community-bg">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Heart className="w-6 h-6" />
                <h2 className="text-xl font-semibold">Community & Sharing</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    💬 Share Your Journey
                  </h3>
                  <p className="text-white/90 mb-6">
                    Connect with others and share your affirmation experiences
                    in a supportive community
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-sm font-semibold">
                          S
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Sarah M.</h4>
                          <p className="text-white/80 text-xs">2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-white/90 text-sm">
                        &ldquo;The morning affirmations have completely
                        transformed my daily routine. I feel more confident and
                        centered!&rdquo;
                      </p>
                    </div>
                    <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-sm font-semibold">
                          M
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Marcus T.</h4>
                          <p className="text-white/80 text-xs">5 hours ago</p>
                        </div>
                      </div>
                      <p className="text-white/90 text-sm">
                        &ldquo;Week 3 of the 30-day challenge and I can already
                        feel the shift in my mindset. Thank you for this amazing
                        tool!&rdquo;
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
                    Share Your Story
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    🌟 Featured Success Stories
                  </h3>
                  <div className="space-y-4">
                    <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <h4 className="font-medium">30-Day Transformation</h4>
                      </div>
                      <p className="text-white/80 text-sm mb-3">
                        &ldquo;From self-doubt to self-love: How daily
                        affirmations changed my life completely&rdquo;
                      </p>
                      <button className="text-sm text-yellow-300 hover:text-yellow-200 transition-colors">
                        Read Full Story →
                      </button>
                    </div>
                    <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Sparkles className="w-5 h-5 text-pink-400" />
                        <h4 className="font-medium">Healing Through Words</h4>
                      </div>
                      <p className="text-white/80 text-sm mb-3">
                        &ldquo;How affirmations helped me overcome anxiety and
                        find inner peace&rdquo;
                      </p>
                      <button className="text-sm text-pink-300 hover:text-pink-200 transition-colors">
                        Read Full Story →
                      </button>
                    </div>
                    <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Heart className="w-5 h-5 text-red-400" />
                        <h4 className="font-medium">Building Confidence</h4>
                      </div>
                      <p className="text-white/80 text-sm mb-3">
                        &ldquo;From workplace anxiety to leadership confidence
                        with daily affirmations&rdquo;
                      </p>
                      <button className="text-sm text-red-300 hover:text-red-200 transition-colors">
                        Read Full Story →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Wellness Tips */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Daily Wellness Integration
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Seamlessly integrate affirmations into your daily life with these
              practical tips and tools
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Sunrise,
                  title: "Morning Routine",
                  description: "Start your day with 3 powerful affirmations",
                  tips: ["Mirror work", "Journaling", "Meditation"],
                  colorClass: "amber",
                  image:
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
                },
                {
                  icon: Target,
                  title: "Workplace Integration",
                  description: "Boost confidence during work hours",
                  tips: [
                    "Desk reminders",
                    "Meeting prep",
                    "Break affirmations",
                  ],
                  colorClass: "blue",
                  image:
                    "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=300&h=200&fit=crop&crop=center",
                },
                {
                  icon: Heart,
                  title: "Relationship Harmony",
                  description:
                    "Strengthen connections with loving affirmations",
                  tips: [
                    "Self-love first",
                    "Compassion practice",
                    "Gratitude sharing",
                  ],
                  colorClass: "rose",
                  image:
                    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=200&fit=crop&crop=center",
                },
                {
                  icon: Moon,
                  title: "Evening Reflection",
                  description: "End your day with gratitude and peace",
                  tips: [
                    "Progress review",
                    "Tomorrow's intentions",
                    "Relaxation",
                  ],
                  colorClass: "indigo",
                  image:
                    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop&crop=center",
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden flex flex-col h-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-36">
                    <Image
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                      width={300}
                      height={200}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="font-semibold text-lg">{section.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-gray-600 mb-4">{section.description}</p>

                    <div className="mb-5 flex-grow">
                      <ul className="space-y-2">
                        {section.tips.map((tip, tipIndex) => (
                          <li
                            key={tipIndex}
                            className="text-sm flex items-center gap-2 text-gray-600"
                          >
                            <div
                              className={
                                section.colorClass === "amber"
                                  ? "w-1.5 h-1.5 bg-amber-500 rounded-full"
                                  : section.colorClass === "blue"
                                  ? "w-1.5 h-1.5 bg-blue-500 rounded-full"
                                  : section.colorClass === "rose"
                                  ? "w-1.5 h-1.5 bg-rose-500 rounded-full"
                                  : "w-1.5 h-1.5 bg-indigo-500 rounded-full"
                              }
                            ></div>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className={
                        section.colorClass === "amber"
                          ? "w-full px-4 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-medium"
                          : section.colorClass === "blue"
                          ? "w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                          : section.colorClass === "rose"
                          ? "w-full px-4 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors font-medium"
                          : "w-full px-4 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-medium"
                      }
                    >
                      Get Tips
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <section className="py-8 bg-white border-t border-gray-100 mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      MirianiWell
                    </h3>
                    <p className="text-slate-500 text-sm max-w-md text-center md:text-left">
                      Empower yourself with positive affirmations that nurture
                      your mind, body, and spirit.
                    </p>
                  </div>

                  <div className="flex gap-8 md:gap-16">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">
                        Resources
                      </h4>
                      <div className="flex flex-col gap-2">
                        <Link
                          href="/journal"
                          className="text-slate-600 hover:text-pink-600 text-sm flex items-center gap-2 transition-all hover:translate-x-1"
                        >
                          <BookOpen className="h-4 w-4" />
                          Journal
                        </Link>
                        <Link
                          href="/affirmations"
                          className="text-slate-600 hover:text-pink-600 text-sm flex items-center gap-2 transition-all hover:translate-x-1"
                        >
                          <Sparkles className="h-4 w-4" />
                          Affirmations
                        </Link>
                        <Link
                          href="/healing-companion"
                          className="text-slate-600 hover:text-pink-600 text-sm flex items-center gap-2 transition-all hover:translate-x-1"
                        >
                          <Bot className="h-4 w-4" />
                          AI Companion
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} MirianiWell. All rights
                    reserved.
                  </p>
                  <div className="flex gap-4 mt-4 md:mt-0">
                    <a
                      href="#"
                      className="text-slate-500 hover:text-pink-600 transition-all hover:scale-110"
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
                      className="text-slate-500 hover:text-pink-600 transition-all hover:scale-110"
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
                      className="text-slate-500 hover:text-pink-600 transition-all hover:scale-110"
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
      </div>
    </>
  );
};

export default AffirmationsPage;
