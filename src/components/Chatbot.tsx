import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are an AI assistant for Raj Mishra's portfolio website. Your job is to answer questions from recruiters or visitors about Raj in a professional, enthusiastic, and concise manner.

IMPORTANT FACTS ABOUT RAJ:
- Name: Raj Mishra
- Current Education: Master of Computer Applications (MCA) at Manipal University Jaipur
- Past Education: Bachelor of Science from Dr. B.R. Ambedkar University; Entrepreneurship & Technology Bootcamp at PW Institute of Innovation.
- Core Focus: Data Science, AI/ML, and Software Development. Bridging Technology and Business.
- Key Certifications: Specialized courses from Google, IBM, Microsoft, and University of Michigan via Coursera.
- Key Skills: Python, SQL, Machine Learning, Power BI, Tableau, NLP, React, Generative AI.
- Featured Projects:
  1. Business Intelligence Analyst Capstone (IBM Cognos, Looker).
  2. Emotion Detection Web App (Python, Flask, TensorFlow).
  3. AI Career Coach & Voice Assistant (HuggingFace).
  4. Startup Simulation - Last Mile Program (achieved INR 33,000 in sales).
  5. Digital Marketing Capstone (SEO, Google Ads, Mailchimp).
- Contact: raj1103mishra@gmail.com | LinkedIn: raj-mishra-4ba018202
- GitHub: github.com/rajm5113

Be conversational. Do NOT output long essays. Keep answers to 1-3 short paragraphs. Output clean text. Always be positive and encourage them to contact Raj directly.`;

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi, I'm Raj's AI assistant! Ask me anything about his skills, projects, or background.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;

      if (!apiKey) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Error: Groq API Key is missing. Please add VITE_GROQ_API_KEY to your .env.local file.",
          },
        ]);
        setIsLoading(false);
        return;
      }

      const apiMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.filter((m) => m.role !== "system").map((m) => ({ role: m.role, content: m.content })),
        { role: "user", content: userMessage },
      ];

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + apiKey,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const botReply = data.choices[0].message.content;

      setMessages((prev) => [...prev, { role: "assistant", content: botReply }]);
    } catch (error) {
      console.error("Error communicating with Groq:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please contact Raj directly at raj1103mishra@gmail.com!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const userBubble = "bg-blue-600 text-white rounded-tr-none";
  const botBubble = "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-none";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6" />
              <div>
                <h3 className="font-semibold text-sm">Raj's AI Agent</h3>
                <p className="text-xs opacity-80">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat History */}
          <div className="h-80 p-4 overflow-y-auto bg-gray-50 flex flex-col space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div className={"max-w-[80%] rounded-2xl p-3 text-sm " + (msg.role === "user" ? userBubble : botBubble)}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-none p-4 flex space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Ask about Raj..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-2 transition-colors disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <span className="absolute -inset-1 rounded-full bg-blue-400 opacity-30 animate-ping"></span>
          <MessageCircle className="h-6 w-6 relative z-10" />
        </button>
      )}
    </div>
  );
};
