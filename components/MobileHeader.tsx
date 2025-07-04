import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";

type MobileHeaderProps = {
  title?: string;
  showBackButton?: boolean;
  transparent?: boolean;
};

export default function MobileHeader({
  title,
  showBackButton = true,
  transparent = false,
}: MobileHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center">
          {showBackButton && (
            <button
              onClick={handleBack}
              className={`mr-3 p-2 rounded-full ${
                transparent
                  ? "text-white bg-black/20 backdrop-blur-sm"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          {title && (
            <h1
              className={`text-lg font-bold ${
                transparent ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h1>
          )}
        </div>

        {/* Optional right side content can be added here */}
      </div>
    </header>
  );
}
