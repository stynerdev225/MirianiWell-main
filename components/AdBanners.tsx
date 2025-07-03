import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Ad banner data
const adBanners = [
  {
    image: "/VRMentalHealthExperienceMindfulVRExperience.jpg",
    alt: "VR Mental Health Experience",
    link: "/coming-soon?product=MindfulVR",
    title: "MindfulVR",
    description:
      "Experience the future of mental wellness in virtual realityExperience the future of mental wellness through immersive, transformative practices in virtual reality.",
    cta: "Try Free for 30 Days",
  },
  {
    image: "/ZenMind.png",
    alt: "Meditation App Ad",
    link: "/coming-soon?product=ZenMind+App",
    title: "ZenMind App",
    description: "Guided meditations designed for anxiety relief",
    cta: "Download Now",
  },
];

const AdBanners = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex justify-between items-center pointer-events-none z-0">
      {/* Left side ad banner */}
      <div className="hidden lg:block pointer-events-auto ml-16">
        <a href={adBanners[0].link} className="block">
          <div className="bg-white/90 rounded-r-lg shadow-md hover:shadow-lg transition-all w-[300px]">
            <div className="relative overflow-hidden h-[500px]">
              <Image
                src={adBanners[0].image}
                alt={adBanners[0].alt}
                width={300}
                height={500}
                className="rounded-t-md w-full h-full object-cover object-center"
              />
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg w-16 h-16 flex items-center justify-center shadow-lg border border-white animate-pulse">
                  <div className="text-center">
                    <p className="text-sm font-bold tracking-wide">NEW</p>
                    <p className="text-xs font-medium">2025</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-purple-50">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-purple-800">
                  {adBanners[0].title}
                </h4>
                <span className="text-xs font-bold bg-green-300 text-green-800 px-2 py-1 rounded-full animate-pulse">
                  COMING SOON
                </span>
              </div>
              <p className="text-xs text-gray-700 my-2">
                {adBanners[0].description}
              </p>
              <button className="w-full bg-purple-600 text-white text-sm font-medium py-2 px-2 rounded text-center">
                {adBanners[0].cta}
              </button>
              <p className="text-xs text-center mt-2 text-gray-500">
                Sponsored
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* Right side ad banner */}
      <div className="hidden lg:block pointer-events-auto mr-16">
        <a href={adBanners[1].link} className="block">
          <div className="bg-white/90 rounded-l-lg shadow-md hover:shadow-lg transition-all w-[300px]">
            <div className="relative overflow-hidden h-[500px]">
              <Image
                src={adBanners[1].image}
                alt={adBanners[1].alt}
                width={300}
                height={500}
                className="rounded-t-md w-full h-full object-cover object-center"
              />
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg w-16 h-16 flex items-center justify-center shadow-lg border border-white animate-pulse">
                  <div className="text-center">
                    <p className="text-sm font-bold tracking-wide">NEW</p>
                    <p className="text-xs font-medium">2025</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-blue-50">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-blue-800">
                  {adBanners[1].title}
                </h4>
                <span className="text-xs font-bold bg-green-300 text-green-800 px-2 py-1 rounded-full animate-pulse">
                  COMING SOON
                </span>
              </div>
              <p className="text-xs text-gray-700 my-2">
                {adBanners[1].description}
              </p>
              <button className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-2 rounded text-center">
                {adBanners[1].cta}
              </button>
              <p className="text-xs text-center mt-2 text-gray-500">
                Sponsored
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AdBanners;
