// OpenRouter API integration for AI-powered journal suggestions
const OPENROUTER_API_KEY =
  "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";
const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

export interface AIInsightResponse {
  suggestions: string[];
  moodAnalysis: string;
  themes: string[];
  growthAreas: string[];
}

export async function generateJournalInsights(
  journalEntries: string[]
): Promise<AIInsightResponse> {
  try {
    const prompt = `
    As a compassionate wellness coach and journal analysis expert, analyze the following journal entries and provide insights:

    Journal Entries:
    ${journalEntries.join("\n\n---\n\n")}

    Please provide:
    1. 3-4 personalized writing suggestions to enhance self-reflection
    2. A gentle mood analysis highlighting emotional patterns
    3. 2-3 recurring themes in their writing
    4. 2-3 potential areas for personal growth and exploration

    Respond in a supportive, non-judgmental tone that encourages continued journaling and self-discovery.
    Format your response as a JSON object with the structure:
    {
      "suggestions": ["suggestion1", "suggestion2", "suggestion3"],
      "moodAnalysis": "analysis text",
      "themes": ["theme1", "theme2", "theme3"],
      "growthAreas": ["area1", "area2", "area3"]
    }
    `;

    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://localhost:3000",
        "X-Title": "MirianiWell Journal AI",
      },
      body: JSON.stringify({
        model: "anthropic/claude-3-haiku",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;

    if (!content) {
      throw new Error("No content received from OpenRouter API");
    }

    // Try to parse the JSON response
    try {
      const parsedContent = JSON.parse(content);
      return parsedContent;
    } catch (parseError) {
      // If JSON parsing fails, create a fallback response
      return {
        suggestions: [
          "Try writing about a moment that brought you joy today",
          "Explore what challenges you're currently facing and how they might be opportunities for growth",
          "Reflect on a relationship that's important to you and what you appreciate about it",
        ],
        moodAnalysis:
          "Your writing shows a thoughtful and introspective nature. Continue exploring your emotions with kindness and curiosity.",
        themes: ["Self-reflection", "Personal growth", "Emotional awareness"],
        growthAreas: [
          "Mindfulness practice",
          "Gratitude cultivation",
          "Emotional expression",
        ],
      };
    }
  } catch (error) {
    console.error("Error generating AI insights:", error);

    // Return fallback response on error
    return {
      suggestions: [
        "Write about something that made you smile today",
        "Explore a challenge you're facing and what you might learn from it",
        "Describe a moment when you felt truly at peace",
      ],
      moodAnalysis:
        "Take time to explore your emotions through writing. Every entry is a step toward greater self-understanding.",
      themes: [
        "Daily reflections",
        "Emotional exploration",
        "Personal insights",
      ],
      growthAreas: [
        "Self-compassion",
        "Mindful awareness",
        "Creative expression",
      ],
    };
  }
}

export async function generatePersonalizedPrompts(
  userInterests: string[],
  recentMoods: string[]
): Promise<string[]> {
  try {
    const prompt = `
    Create 4 personalized journal prompts for someone interested in: ${userInterests.join(
      ", "
    )}
    Their recent emotional states include: ${recentMoods.join(", ")}
    
    Make the prompts thoughtful, introspective, and encouraging. They should promote self-reflection and personal growth.
    Return only the prompts as a JSON array of strings.
    `;

    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://localhost:3000",
        "X-Title": "MirianiWell Journal AI",
      },
      body: JSON.stringify({
        model: "anthropic/claude-3-haiku",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 500,
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;

    if (!content) {
      throw new Error("No content received from OpenRouter API");
    }

    try {
      const prompts = JSON.parse(content);
      return Array.isArray(prompts) ? prompts : [];
    } catch (parseError) {
      // Fallback prompts
      return [
        "What aspects of your personal growth are you most excited about right now?",
        "How do you want to show up differently in your relationships?",
        "What would you do if you knew you couldn't fail?",
        "What patterns in your life are you ready to change?",
      ];
    }
  } catch (error) {
    console.error("Error generating personalized prompts:", error);

    // Return fallback prompts
    return [
      "What brings you the most peace in your daily life?",
      "How have you grown in the past month?",
      "What are you most grateful for right now?",
      "What challenge are you facing that might actually be an opportunity?",
    ];
  }
}
