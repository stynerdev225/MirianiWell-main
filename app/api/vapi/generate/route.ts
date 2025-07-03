import { generateText } from "ai";
import { google } from "@ai-sdk/google";
// import { createDb } from "../../lib/db";
import { createDb } from "@/lib/db"; // Updated to use the alias path, adjust if needed
// import { interviews } from "@/lib/db/schema"; // Removed because 'interviews' is not exported
import * as dbSchema from "@/lib/db/schema"; // Import all exports as dbSchema

// Get database instance
function getDb() {
  if (process.env.NODE_ENV === "development") {
    console.warn("Database not available in development mode");
    return null;
  }

  const d1 = (global as any).DB;
  if (!d1) {
    console.warn("D1 database not available");
    return null;
  }

  return createDb(d1);
}

export async function POST(request: Request) {
  const { type, role, level, techstack, amount } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Prepare questions for a job interview.
        The job role is ${role}.
        The job experience level is ${level}.
        The tech stack used in the job is: ${techstack}.
        The focus between behavioural and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        Please return only the questions, without any additional text.
        The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
        Return the questions formatted like this:
        ["Question 1", "Question 2", "Question 3"]
        
        Thank you! <3
    `,
    });

    const database = getDb();
    if (database) {
      // const interviewData = {
      //   id: crypto.randomUUID(),
      //   userId: userid,
      //   title: type,
      //   position: role,
      //   company: "Mock Company", // You might want to add this as a parameter
      //   difficulty: level,
      //   duration: 30, // Default duration, you might want to make this configurable
      //   techStack: JSON.stringify(techstack.split(",")),
      //   status: "completed" as const,
      // };

      // await database.insert(dbSchema.interviews).values(interviewData);
      console.log(
        "Interview generation successful, data not saved as per new requirement."
      );
    } else {
      console.warn("Database not available - interview not saved");
    }

    return Response.json({ success: true, questions }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ success: false, error: error }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ success: true, data: "Thank you!" }, { status: 200 });
}
