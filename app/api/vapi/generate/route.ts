import { generateText } from "ai";
import { google } from "@ai-sdk/google";

import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

// Define the expected request structure
interface InterviewRequest {
    type: string;
    role: string;
    level: string;
    techstack: string;
    amount: number;
    userid: string;
}

export async function POST(request: Request) {
    try {
        const body: InterviewRequest = await request.json();
        const { type, role, level, techstack, amount, userid } = body;

        const prompt = `You are an expert job interview question generator.
Return a JSON array of interview questions only, like this:
["Question 1", "Question 2", "Question 3"]

DO NOT include any extra text, explanations, or formatting.

Job Role: ${role}
Experience Level: ${level}
Tech Stack: ${techstack}
Focus Type (Behavioral/Technical): ${type}
Number of Questions: ${amount}

Use only plain text characters (avoid /, *, etc.)`;

        const { text: questionsText } = await generateText({
            model: google("gemini-2.0-flash-001"),
            prompt,
        });

        let parsedQuestions: string[] = [];
        try {
            parsedQuestions = JSON.parse(questionsText);
            if (!Array.isArray(parsedQuestions)) throw new Error("Not an array");
        } catch (error) {
            console.error("AI did not return valid JSON:", questionsText);
            return Response.json(
                { success: false, error: "AI returned invalid JSON format." },
                { status: 500 }
            );
        }

        const interview = {
            role,
            type,
            level,
            techstack: techstack.split(",").map((s: string) => s.trim()),
            questions: parsedQuestions,
            userId: userid,
            finalized: true,
            coverImage: getRandomInterviewCover(),
            createdAt: new Date().toISOString(),
        };

        await db.collection("interviews").add(interview);

        return Response.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Server Error:", error);
        return Response.json(
            { success: false, error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function GET() {
    return Response.json({ success: true, data: "Thank you!" }, { status: 200 });
}
