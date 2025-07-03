import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";

const EarthRitualPage = async () => {
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

  const earthPractices = [
    {
      title: "Grounding Meditation",
      duration: "10-15 minutes",
      description:
        "Connect with the earth&apos;s stabilizing energy through visualization and breathwork",
      steps: [
        "Find a comfortable seated position, preferably outdoors or near a window",
        "Close your eyes and take three deep breaths",
        "Visualize roots growing from your body into the earth",
        "Feel the earth&apos;s stable, nurturing energy flowing up through your roots",
        "Rest in this grounded state for 10 minutes",
      ],
    },
    {
      title: "Crystal Manifestation",
      duration: "20-30 minutes",
      description:
        "Use earth crystals to amplify your intentions and manifest your goals",
      steps: [
        "Choose a grounding crystal (hematite, jasper, or smoky quartz)",
        "Write your intention on a piece of paper",
        "Hold the crystal and speak your intention aloud",
        "Bury the paper in soil or place it under the crystal",
        "Visualize your intention taking root and growing",
      ],
    },
    {
      title: "Garden Blessing",
      duration: "15-20 minutes",
      description:
        "Connect with growing plants to enhance abundance and growth in your life",
      steps: [
        "Find a plant, garden, or even a houseplant",
        "Place your hands gently on the soil",
        "Express gratitude for the earth&apos;s abundance",
        "Ask the plant to teach you about patience and growth",
        "Water the plant mindfully, infusing it with love",
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
        <div className="text-6xl mb-4">🌱</div>
        <h1 className="text-4xl font-bold mb-4 text-green-700">
          Earth Rituals
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ground yourself in the earth&apos;s stable, nurturing energy. These
          practices help you feel centered, secure, and connected to the
          abundance of the natural world.
        </p>
      </div>

      {/* Benefits */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          Earth Element Benefits
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Stability",
            "Grounding",
            "Manifestation",
            "Abundance",
            "Security",
            "Patience",
            "Growth",
            "Nourishment",
          ].map((benefit) => (
            <div
              key={benefit}
              className="bg-green-100 dark:bg-green-800/30 rounded-lg p-3 text-center"
            >
              <span className="text-green-700 dark:text-green-300 font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Practices */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Earth Practices</h2>

        {earthPractices.map((practice, index) => (
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
                <span className="bg-green-100 dark:bg-green-800/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                  {practice.duration}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Practice Steps:</h4>
              <ol className="space-y-2">
                {practice.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
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
              <Button className="bg-green-600 hover:bg-green-700">
                Start Practice
              </Button>
              <Button variant="outline">Save to Favorites</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Affirmations */}
      <div className="mt-16 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Earth Affirmations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "I am grounded and centered in my being",
            "I trust in the abundance of the universe",
            "I grow at my own perfect pace",
            "I am stable and secure in who I am",
            "My roots run deep and keep me strong",
            "I manifest my dreams with patience and persistence",
          ].map((affirmation, index) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4 text-center"
            >
              <p className="italic text-gray-700 dark:text-gray-300">
                &ldquo;{affirmation}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EarthRitualPage;
