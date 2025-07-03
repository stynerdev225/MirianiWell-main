import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";

const FireRitualPage = async () => {
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

  const firePractices = [
    {
      title: "Candle Transformation Ritual",
      duration: "20-30 minutes",
      description:
        "Use the transformative power of fire to release old patterns and ignite new possibilities",
      steps: [
        "Light a red or orange candle in a safe space",
        "Write what you want to release on paper",
        "Safely burn the paper in the candle flame",
        "Visualize old patterns transforming into ash",
        "Set new intentions in the flame's glow",
      ],
    },
    {
      title: "Inner Fire Meditation",
      duration: "15-20 minutes",
      description:
        "Activate your inner power and passion through breath and visualization",
      steps: [
        "Sit with spine straight, hands on belly",
        "Take deep breaths, imagining a flame in your core",
        "With each breath, see the flame growing brighter",
        "Feel warmth and power spreading through your body",
        "Rest in this empowered, energized state",
      ],
    },
    {
      title: "Solar Energy Charging",
      duration: "10-15 minutes",
      description:
        "Connect with the sun's fiery energy to boost confidence and vitality",
      steps: [
        "Stand or sit in direct sunlight (or visualize if indoors)",
        "Close your eyes and face the sun",
        "Feel the sun's warmth on your skin",
        "Visualize golden fire filling your entire being",
        "Carry this solar energy with you throughout the day",
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
        <div className="text-6xl mb-4">🔥</div>
        <h1 className="text-4xl font-bold mb-4 text-red-700">Fire Rituals</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ignite your inner power with the transformative energy of fire. These
          practices help you release what no longer serves, activate your
          passion, and embrace your authentic power.
        </p>
      </div>

      {/* Benefits */}
      <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-red-700">
          Fire Element Benefits
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Transformation",
            "Passion",
            "Energy",
            "Action",
            "Confidence",
            "Power",
            "Courage",
            "Vitality",
          ].map((benefit) => (
            <div
              key={benefit}
              className="bg-red-100 dark:bg-red-800/30 rounded-lg p-3 text-center"
            >
              <span className="text-red-700 dark:text-red-300 font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Practices */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Fire Practices</h2>

        {firePractices.map((practice, index) => (
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
                <span className="bg-red-100 dark:bg-red-800/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm">
                  {practice.duration}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Practice Steps:</h4>
              <ol className="space-y-2">
                {practice.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start">
                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
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
              <Button className="bg-red-600 hover:bg-red-700">
                Start Practice
              </Button>
              <Button variant="outline">Save to Favorites</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Safety Note */}
      <div className="mt-12 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-xl p-6">
        <h3 className="text-lg font-bold text-orange-700 dark:text-orange-300 mb-2">
          🔥 Fire Safety Reminder
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Always practice fire rituals safely. Keep water nearby, use
          appropriate candle holders, and never leave flames unattended. If
          working with visualization only, the transformative power is equally
          effective.
        </p>
      </div>

      {/* Affirmations */}
      <div className="mt-16 bg-gradient-to-r from-red-100 to-orange-200 dark:from-red-900/30 dark:to-orange-800/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Fire Affirmations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "I embrace my inner fire and personal power",
            "I transform challenges into opportunities for growth",
            "My passion guides me toward my highest purpose",
            "I have the courage to take bold action",
            "I burn away what no longer serves my highest good",
            "I radiate confidence and authentic energy",
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

export default FireRitualPage;
