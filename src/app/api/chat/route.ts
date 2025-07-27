import { groq } from "@ai-sdk/groq";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Constants for reusability
export const MODEL_NAME = "deepseek-r1-distill-llama-70b";
const TEMPERATURE = 0.3;
const MAX_TOKENS = 1000;

// Friendly error message for missing configuration
const MISSING_CONFIG_MESSAGE =
  "Hi! It looks like I'm missing some configuration. Please check that all required environment variables are set up properly.";

// Types
interface TMessageContent {
  text?: string;
  content?: string;
}

interface TMessage {
  content?: string | TMessageContent[];
  parts?: TMessageContent[];
}

// System prompt templates
const createSystemPrompt = (
  prompt: string,
  botProfile = { name: "MurderBot", role: "A friendly bot whos main job is to murder mosquitoes" },
) => `
You are ${botProfile.name}, your role is: ${botProfile.role}.
Always answer as ${botProfile.name} based on your role.

Conversation context:
${prompt}
`;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const latestMessage: TMessage = messages[messages.length - 1];

  // Check if Groq API key is available
  if (!process.env.GROQ_API_KEY) {
    console.error(MISSING_CONFIG_MESSAGE);
    return new Response("Groq API key not configured. Please add your GROQ_API_KEY to the environment variables.", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }

  console.log("latestMessage: ", latestMessage);

  try {
    const model = groq(MODEL_NAME);
    const result = streamText({
      model,
      system: createSystemPrompt(latestMessage.content as string),
      messages,
      temperature: TEMPERATURE,
      maxTokens: MAX_TOKENS,
      providerOptions: {
        groq: {
          reasoningFormat: "hidden",
        },
      },
      onError: (error) => {
        console.error("Error during streaming:", error);
      },
    });

    return result.toDataStreamResponse();
  } catch (error: any) {
    console.error(error);
    return new Response(error.message || "Unknown error occured", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
