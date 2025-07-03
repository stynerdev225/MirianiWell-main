import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";

const WaterRitualPage = async () => {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Please sign in to continue
          </h1>
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    );
  }

  const waterPractices = [
    {
      title: "Emotional Flow Meditation",
      duration: "15-20 minutes",
      description:
        "Allow emotions to flow through you like water, cleansing and healing",
      steps: [
        "Sit comfortably near water (bath, fountain, or visualize)",
        "Close your eyes and breathe deeply",
        "Visualize emotions as water flowing through your body",
        "Allow any stuck emotions to be washed away",
        "Feel yourself becoming clear and refreshed",
      ],
    },
    {
      title: "Sacred Water Blessing",
      duration: "10-15 minutes",
      description:
        "Infuse water with healing intentions for drinking or bathing",
      steps: [
        "Hold a glass or bowl of clean water",
        "Place your hands around the container",
        "Close your eyes and set your healing intention",
        "Visualize white light flowing into the water",
        "Drink mindfully or use for ritual cleansing",
      ],
    },
    {
      title: "Cleansing Bath Ritual",
      duration: "30-45 minutes",
      description:
        "Create a sacred bath experience for deep emotional and energetic cleansing",
      steps: [
        "Draw a warm bath and add sea salt or epsom salt",
        "Light candles and play soft, flowing music",
        "Before entering, set intention to release what no longer serves",
        "Soak mindfully, visualizing negativity washing away",
        "Emerge feeling renewed and emotionally clear",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Link href="/rituals" className="mr-4">
            <Button variant="outline">← Back to Rituals</Button>
          </Link>
        </div>
        <div className="text-6xl mb-4">💧</div>
        <h1 className="text-4xl font-bold mb-4 text-blue-700">Water Rituals</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Flow with the healing power of water. These practices help you release
          emotional blockages, enhance intuition, and create space for new
          growth and healing.
        </p>
      </div>

      {/* Benefits */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Water Element Benefits
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Emotional healing",
            "Cleansing",
            "Intuition",
            "Flow",
            "Flexibility",
            "Compassion",
            "Release",
            "Renewal",
          ].map((benefit) => (
            <div
              key={benefit}
              className="bg-blue-100 dark:bg-blue-800/30 rounded-lg p-3 text-center"
            >
              <span className="text-blue-700 dark:text-blue-300 font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Practices */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Water Practices</h2>

        {waterPractices.map((practice, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">{practice.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {practice.description}
                </p>
                <span className="bg-blue-100 dark:bg-blue-800/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                  {practice.duration}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Practice Steps:</h4>
              <ol className="space-y-2">
                {practice.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                      {stepIndex + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 flex gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Start Practice
              </Button>
              <Button variant="outline">Save to Favorites</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Affirmations */}
      <div className="mt-16 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Water Affirmations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "I flow with life's changes with grace and ease",
            "My emotions are valid and deserve to be felt",
            "I trust my intuition to guide me forward",
            "I release what no longer serves my highest good",
            "I am cleansed and renewed by life's healing waters",
            "I embrace the fluid nature of my being",
          ].map((affirmation, index) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4 text-center"
            >
              <p className="italic text-gray-700 dark:text-gray-300">
                &quot;{affirmation}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaterRitualPage;
