import { Leaf, Wind, Feather, Sunrise } from "lucide-react";

const AirRituals = () => {
  const airRituals = [
    {
      id: 1,
      title: "Breath of Freedom",
      description:
        "Connect with the element of air through conscious breathing and mental clarity",
      duration: "15 minutes",
      icon: <Wind className="w-6 h-6" />,
      practice: "Breathwork Meditation",
      benefits: [
        "Mental clarity",
        "Stress relief",
        "Enhanced focus",
        "Emotional balance",
      ],
    },
    {
      id: 2,
      title: "Feather Blessing",
      description:
        "Use the wisdom of birds and wind to release what no longer serves you",
      duration: "10 minutes",
      icon: <Feather className="w-6 h-6" />,
      practice: "Release Ritual",
      benefits: [
        "Letting go",
        "Mental freedom",
        "Lightness",
        "New perspectives",
      ],
    },
    {
      id: 3,
      title: "Dawn Awakening",
      description:
        "Greet the morning air with intention and welcome new beginnings",
      duration: "20 minutes",
      icon: <Sunrise className="w-6 h-6" />,
      practice: "Morning Ritual",
      benefits: [
        "Fresh start",
        "Inspiration",
        "Mental alertness",
        "Spiritual awakening",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <Wind className="w-12 h-12 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Air Element Rituals
          </h1>
          <p className="text-lg text-purple-600 max-w-2xl mx-auto">
            Connect with the element of air to find mental clarity, release what
            no longer serves, and embrace the freedom of open skies and flowing
            breath.
          </p>
        </div>

        {/* Ritual Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {airRituals.map((ritual) => (
            <div
              key={ritual.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  {ritual.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-800">
                    {ritual.title}
                  </h3>
                  <span className="text-purple-500 text-sm">
                    {ritual.practice}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{ritual.description}</p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-purple-600 font-medium">
                  Duration: {ritual.duration}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {ritual.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                Begin Ritual
              </button>
            </div>
          ))}
        </div>

        {/* Air Element Guidance */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
            <Leaf className="w-6 h-6 mr-3" />
            Air Element Wisdom
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-purple-700 mb-3">
                Element Qualities
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Mental clarity and focus</li>
                <li>• Freedom and liberation</li>
                <li>• Communication and expression</li>
                <li>• New ideas and inspiration</li>
                <li>• Movement and change</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-700 mb-3">
                Sacred Practices
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Breathwork and meditation</li>
                <li>• Outdoor contemplation</li>
                <li>• Journaling and writing</li>
                <li>• Sound healing with bells</li>
                <li>• Release ceremonies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Affirmations */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
            Air Element Affirmations
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/70 rounded-lg p-4">
              <p className="text-purple-700 italic text-center">
                &ldquo;I breathe in clarity and exhale confusion&rdquo;
              </p>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <p className="text-purple-700 italic text-center">
                &ldquo;My mind is clear and my thoughts are focused&rdquo;
              </p>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <p className="text-purple-700 italic text-center">
                &ldquo;I release what no longer serves my highest good&rdquo;
              </p>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <p className="text-purple-700 italic text-center">
                &ldquo;I am free to express my authentic self&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Return Button */}
        <div className="text-center mt-8">
          <a
            href="/rituals"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
          >
            ← Return to All Rituals
          </a>
        </div>
      </div>
    </div>
  );
};

export default AirRituals;
