import { db, aiAssistantSettings } from "@harness/db";
import { AiProvider } from "@harness/ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const settingsResult = await db.select().from(aiAssistantSettings).limit(1);
    const settings = settingsResult[0];

    if (!settings || !settings.isEnabled) {
      return NextResponse.json({ error: "AI Assistant is disabled" }, { status: 403 });
    }

    const provider = new AiProvider({
      apiKey: process.env.OPENAI_API_KEY || "dummy-key", // In a real app, this would be in env
      baseUrl: settings.baseUrl,
      model: settings.model,
      temperature: settings.temperature,
      maxTokens: settings.maxTokens,
    });

    const response = await provider.chat(settings.systemPrompt, message);

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
