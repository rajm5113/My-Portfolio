type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

const DEFAULT_MODEL = "qwen/qwen3.6-27b";
const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 2_000;

export default async function handler(request: any, response: any) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return response.status(500).json({ error: "The chatbot is not configured." });
  }

  const incomingMessages = request.body?.messages;
  if (!Array.isArray(incomingMessages)) {
    return response.status(400).json({ error: "A messages array is required." });
  }

  const messages: ChatMessage[] = incomingMessages
    .slice(-MAX_MESSAGES)
    .filter(
      (message: unknown): message is ChatMessage =>
        typeof message === "object" &&
        message !== null &&
        ["user", "assistant", "system"].includes((message as ChatMessage).role) &&
        typeof (message as ChatMessage).content === "string",
    )
    .map((message) => ({
      role: message.role,
      content: message.content.slice(0, MAX_MESSAGE_LENGTH),
    }));

  if (messages.length === 0) {
    return response.status(400).json({ error: "At least one message is required." });
  }

  try {
    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || DEFAULT_MODEL,
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await groqResponse.json();

    if (!groqResponse.ok) {
      console.error("Groq request failed:", groqResponse.status, data?.error?.message);
      return response.status(502).json({ error: "The AI service is currently unavailable." });
    }

    const content = data?.choices?.[0]?.message?.content;
    if (typeof content !== "string" || !content.trim()) {
      return response.status(502).json({ error: "The AI service returned an empty response." });
    }

    return response.status(200).json({ content });
  } catch (error) {
    console.error("Groq request failed:", error);
    return response.status(502).json({ error: "The AI service is currently unavailable." });
  }
}
