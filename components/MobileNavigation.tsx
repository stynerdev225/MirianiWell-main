import Link from "next/link";
import { useRouter } from "next/router";
import {
  HomeIcon,
  BookOpen,
  Heart,
  Sparkles,
  User,
  ArrowLeft,
} from "lucide-react";

export default function MobileNavigation() {
  const router = useRouter();
  const path = router.pathname;

  const isActive = (route: string) => {
    return path === route;
  };

  // For the back button
  const handleBack = () => {
    router.back();
  };

  return (
    <>
      {/* Top Navigation Bar (with back button) on internal pages */}
      {path !== "/" && (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
          <div className="flex items-center h-14 px-4">
            <button
              onClick={handleBack}
              className="mr-4 p-2 rounded-full hover:bg-gray-100"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-gray-800" />
            </button>
            <h1 className="text-lg font-bold text-gray-900">
              {path.includes("/journal") && "Journal"}
              {path.includes("/rituals") && "Rituals"}
              {path.includes("/check-in") && "Daily Check-In"}
              {path.includes("/affirmations") && "Affirmations"}
              {path.includes("/healing-companion") && "AI Companion"}
              {path.includes("/profile") && "My Profile"}
            </h1>
          </div>
        </header>
      )}

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex justify-around">
          <Link href="/">
            <a className="flex flex-col items-center py-2 px-1">
              <HomeIcon
                className={`w-6 h-6 ${
                  isActive("/") ? "text-purple-600" : "text-gray-500"
                }`}
              />
              <span
                className={`text-xs ${
                  isActive("/") ? "text-purple-600" : "text-gray-600"
                } mt-1`}
              >
                Home
              </span>
            </a>
          </Link>

          <Link href="/journal">
            <a className="flex flex-col items-center py-2 px-1">
              <BookOpen
                className={`w-6 h-6 ${
                  isActive("/journal") ? "text-purple-600" : "text-gray-500"
                }`}
              />
              <span
                className={`text-xs ${
                  isActive("/journal") ? "text-purple-600" : "text-gray-600"
                } mt-1`}
              >
                Journal
              </span>
            </a>
          </Link>

          <Link href="/check-in">
            <a className="flex flex-col items-center py-2 px-1">
              <div
                className={`w-12 h-12 ${
                  isActive("/check-in")
                    ? "bg-gradient-to-r from-pink-600 to-purple-600"
                    : "bg-gradient-to-r from-purple-600 to-blue-600"
                } rounded-full flex items-center justify-center -mt-5 border-4 border-white`}
              >
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-xs ${
                  isActive("/check-in") ? "text-purple-600" : "text-gray-600"
                } mt-1`}
              >
                Check-In
              </span>
            </a>
          </Link>

          <Link href="/rituals">
            <a className="flex flex-col items-center py-2 px-1">
              <Sparkles
                className={`w-6 h-6 ${
                  isActive("/rituals") ? "text-purple-600" : "text-gray-500"
                }`}
              />
              <span
                className={`text-xs ${
                  isActive("/rituals") ? "text-purple-600" : "text-gray-600"
                } mt-1`}
              >
                Rituals
              </span>
            </a>
          </Link>

          <Link href="/profile">
            <a className="flex flex-col items-center py-2 px-1">
              <User
                className={`w-6 h-6 ${
                  isActive("/profile") ? "text-purple-600" : "text-gray-500"
                }`}
              />
              <span
                className={`text-xs ${
                  isActive("/profile") ? "text-purple-600" : "text-gray-600"
                } mt-1`}
              >
                Profile
              </span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
