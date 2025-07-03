"use client";

import { useState } from "react";

interface MoodCardProps {
  mood: {
    mood: string;
    emoji: string;
    color: string;
    image: string;
    count: string;
  };
  isConfident: boolean;
}

export default function MoodCard({ mood, isConfident }: MoodCardProps) {
  const [imgSrc, setImgSrc] = useState(mood.image);

  const handleImageError = () => {
    // Fallback image if the original fails to load
    setImgSrc(
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=200&fit=crop&crop=faces&auto=format&q=80"
    );
  };

  return (
    <div
      className={`relative group rounded-lg overflow-hidden cursor-pointer mood-card ${
        isConfident ? "confident" : ""
      }`}
      title={`${mood.mood} affirmations`}
    >
      <div className="relative h-32">
        <img
          src={imgSrc}
          alt={`${mood.mood} mood affirmation card`}
          className="w-full h-full object-cover"
          loading="eager"
          onError={handleImageError}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${mood.color} overlay-gradient`}
        ></div>
        <div className="absolute inset-0 overlay-dark"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div aria-hidden="true" className="emoji-container mb-1.5">
            {mood.emoji}
          </div>
          <span className="mood-text">{mood.mood}</span>
          {isConfident && (
            <span className="absolute top-2 right-2 bg-white text-orange-500 text-xs font-bold px-1.5 py-0.5 rounded-full shadow-sm">
              Popular
            </span>
          )}
        </div>
      </div>
      <div className="p-3 bg-white border-t border-gray-100">
        <p className="count-text text-center">{mood.count}</p>
      </div>
    </div>
  );
}
