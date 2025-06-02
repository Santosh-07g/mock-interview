import { generateText } from "ai";
import { google } from "@ai-sdk/google";

import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

export async function POST(request: Request) {
    const { type, role, level, techstack, amount, userid } = await request.json();

    // Validate required fields
    if (!type || !role || !level || !techstack || !amount || !userid) {
        return Response.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    try {
        const { text: questions } = await generateText({
            model: google("gemini-2.0-flash-001"),
            prompt: `Prepare questions for a job interview.
The job role is ${role}.
The job experience level is ${level}.
The tech stack used in the job is: ${techstack}.
The focus between behavioural and technical questions should lean towards: ${type}.
The amount of questions required is: ${amount}.
Please return ONLY a valid JSON array, no extra text.
Format like: ["Question 1", "Question 2"]

Thank you!`,
        });

        console.log("Raw questions response:", questions);

        let parsedQuestions = [];
        try {
            parsedQuestions = JSON.parse(questions);
            if (!Array.isArray(parsedQuestions)) throw new Error("Invalid questions format");
        } catch (err) {
            console.error("Failed to parse questions:", err);
            return Response.json({ success: false, error: "Invalid AI response" }, { status: 500 });
        }

        const interview = {
            role,
            type,
            level,
            techstack: techstack.split(","),
            questions: parsedQuestions,
            userId: userid,
            finalized: true,
            coverImage: getRandomInterviewCover(),
            createdAt: new Date().toISOString(),
        };

        await db.collection("interviews").add(interview);

        return Response.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return Response.json({ success: false, error: error.toString() }, { status: 500 });
    }
}

export async function GET() {
    return Response.json({ success: true, data: "Thank you!" }, { status: 200 });
}
