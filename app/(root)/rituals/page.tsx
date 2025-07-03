import Link from "next/link";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RitualsPage = async () => {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Please sign in to access ritual practices
          </h1>
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    );
  }

  const elements = [
    {
      name: "Earth",
      path: "/rituals/earth",
      icon: "🌱",
      description: "Grounding practices for stability and strength",
      color: "from-green-600 to-green-800",
      lightColor: "from-green-100 to-emerald-200",
      darkAccentColor: "bg-green-700",
      bgImage: "/images/rituals/earth.jpg",
      benefits: ["Stability", "Grounding", "Manifestation", "Abundance"],
      quote: "The Earth does not belong to us; we belong to the Earth.",
      quoteAuthor: "Chief Seattle",
    },
    {
      name: "Water",
      path: "/rituals/water",
      icon: "💧",
      description: "Flowing practices for emotional cleansing",
      color: "from-blue-600 to-blue-800",
      lightColor: "from-blue-100 to-cyan-200",
      darkAccentColor: "bg-blue-700",
      bgImage: "/images/rituals/water.jpg",
      benefits: ["Emotional healing", "Cleansing", "Intuition", "Flow"],
      quote: "Water is the driving force of all nature.",
      quoteAuthor: "Leonardo da Vinci",
    },
    {
      name: "Fire",
      path: "/rituals/fire",
      icon: "🔥",
      description: "Transformative practices for passion and energy",
      color: "from-red-600 to-red-800",
      lightColor: "from-red-100 to-orange-200",
      darkAccentColor: "bg-red-700",
      bgImage: "/images/rituals/fire.jpg",
      benefits: ["Transformation", "Passion", "Energy", "Action"],
      quote: "The most powerful weapon on earth is the human soul on fire.",
      quoteAuthor: "Ferdinand Foch",
    },
    {
      name: "Air",
      path: "/rituals/air",
      icon: "🌬️",
      description: "Breathing practices for clarity and wisdom",
      color: "from-purple-600 to-purple-800",
      lightColor: "from-purple-100 to-indigo-200",
      darkAccentColor: "bg-purple-700",
      bgImage: "/images/rituals/air.jpg",
      benefits: ["Clarity", "Wisdom", "Communication", "Mental focus"],
      quote: "Breath is the bridge which connects life to consciousness.",
      quoteAuthor: "Thích Nhất Hạnh",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative h-[50vh] overflow-hidden flex items-center rituals-header">
        <div className="absolute inset-0">
          <Image
            src="/images/rituals/hero.jpg"
            alt="Rituals background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/50 to-pink-900/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block bg-purple-900/50 px-4 py-1 rounded-full text-cyan-300 text-sm font-medium tracking-wider mb-4 backdrop-blur-sm">
              ANCIENT WISDOM · MODERN PRACTICE
            </span>
            <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight mb-6">
              Elemental{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-300 bg-clip-text text-transparent">
                Rituals
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl leading-relaxed backdrop-blur-sm bg-purple-900/20 p-4 rounded-lg inline-block">
              Connect with the four sacred elements through guided practices
              designed to restore balance, promote healing, and deepen your
              spiritual journey.
            </p>
          </div>
        </div>
      </section>

      {/* Elements Section */}
      <section className="py-16 bg-white relative -mt-8 rounded-t-3xl z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Choose Your Element
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Each element offers unique practices to address different aspects
              of your spiritual and emotional wellbeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {elements.map((element) => (
              <div
                key={element.name}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={element.bgImage}
                    alt={`${element.name} element`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${element.color} opacity-80`}
                  ></div>

                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <span className="text-6xl mb-4">{element.icon}</span>
                    <h3 className="text-3xl font-bold">{element.name}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-lg text-gray-700 mb-6">
                    {element.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                      Benefits
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {element.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className={`inline-block ${element.lightColor} bg-gradient-to-r px-4 py-1 rounded-full text-sm font-medium`}
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <blockquote className="italic text-gray-600 text-sm mb-6">
                      &ldquo;{element.quote}&rdquo;
                      <footer className="mt-1 text-gray-500 not-italic">
                        — {element.quoteAuthor}
                      </footer>
                    </blockquote>

                    <Link href={element.path}>
                      <Button
                        className={`w-full bg-gradient-to-r ${element.color} text-white hover:opacity-90 group`}
                      >
                        <span>Begin {element.name} Ritual</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Understanding Elemental Balance
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto my-6"></div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Each element represents different aspects of our being. By
                  working with all four elements, you create harmony between
                  your physical body (Earth), emotions (Water), passion (Fire),
                  and mind (Air). Regular practice helps maintain balance and
                  promotes holistic wellbeing.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                        <span className="text-xl">🌱</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Physical Body (Earth)
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Grounding, stability, and manifestation in the material
                        world
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                        <span className="text-xl">💧</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Emotions (Water)
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Fluidity, intuition, and depth of feeling
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                        <span className="text-xl">🔥</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Energy (Fire)
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Transformation, passion, and creative power
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                        <span className="text-xl">🌬️</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Mind (Air)
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Clarity, wisdom, and mental focus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Begin Your Elemental Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Choose an element that resonates with your current needs, or
              explore them all to experience full balance.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {elements.map((element) => (
                <Link key={element.name} href={element.path}>
                  <Button
                    variant="outline"
                    className={`w-full border-2 hover:bg-gradient-to-r ${element.color} hover:text-white hover:border-transparent transition-all duration-300`}
                  >
                    <span className="mr-2">{element.icon}</span> {element.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-10 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 opacity-80"></div>

        {/* Element symbols in the background */}
        <div className="absolute top-10 left-10 opacity-10 text-6xl">🌱</div>
        <div className="absolute top-20 right-10 opacity-10 text-6xl">💧</div>
        <div className="absolute bottom-10 left-20 opacity-10 text-6xl">🔥</div>
        <div className="absolute bottom-20 right-20 opacity-10 text-6xl">
          🌬️
        </div>

        {/* Subtle wave pattern */}
        <div className="absolute inset-0 bg-[url('/images/wave-pattern.svg')] bg-repeat opacity-5"></div>

        {/* Decorative border gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col items-center md:items-start backdrop-blur-sm bg-white/30 p-6 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  MirianiWell
                </h3>
                <p className="text-slate-600 text-sm max-w-md text-center md:text-left">
                  Discover elemental rituals to connect with nature&apos;s wisdom and
                  transform your wellness journey.
                </p>
              </div>

              <div className="flex gap-8 md:gap-16 backdrop-blur-sm bg-white/30 p-6 rounded-xl shadow-sm">
                <div className="flex flex-col gap-3">
                  <h4 className="font-semibold text-slate-800 mb-1 relative">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Elements
                    </span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-purple-500 to-blue-500"></span>
                  </h4>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/rituals/earth"
                      className="text-slate-600 hover:text-green-600 text-sm flex items-center gap-2 transition-all hover:translate-x-1"
                    >
                      <span className="text-xs">🌱</span> Earth
                    </Link>
                    <Link
                      href="/rituals/water"
                      className="text-slate-600 hover:text-blue-600 text-sm flex items-center gap-2 transition-all hover:translate-x-1"
                    >
                      <span className="text-xs">💧</span> Water
                    </Link>
                    <Link
                      href="/rituals/fire"
                      className="text-slate-600 hover:text-red-600 text-sm flex items-center gap-2 transition-all hover:translate-x-1"
                    >
                      <span className="text-xs">🔥</span> Fire
                    </Link>
                    <Link
                      href="/rituals/air"
                      className="text-slate-600 hover:text-purple-600 text-sm flex items-center gap-2 transition-all hover:translate-x-1"
                    >
                      <span className="text-xs">🌬️</span> Air
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="font-semibold text-slate-800 mb-1 relative">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Resources
                    </span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-purple-500 to-blue-500"></span>
                  </h4>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/journal"
                      className="text-slate-600 hover:text-purple-600 text-sm flex items-center gap-2 transition-all hover:translate-x-1"
                    >
                      Journal
                    </Link>
                    <Link
                      href="/affirmations"
                      className="text-slate-600 hover:text-purple-600 text-sm flex items-center gap-2 transition-all hover:translate-x-1"
                    >
                      Affirmations
                    </Link>
                    <Link
                      href="/healing-companion"
                      className="text-slate-600 hover:text-purple-600 text-sm flex items-center gap-2 transition-all hover:translate-x-1"
                    >
                      AI Companion
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center backdrop-blur-sm bg-white/50 p-4 rounded-xl">
              <p className="text-slate-600 text-sm">
                © {new Date().getFullYear()} MirianiWell. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-slate-500 hover:text-purple-600 transition-all hover:scale-110"
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
                  className="text-slate-500 hover:text-purple-600 transition-all hover:scale-110"
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
                  className="text-slate-500 hover:text-purple-600 transition-all hover:scale-110"
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

export default RitualsPage;
