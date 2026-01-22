// Gemini AI Service for Succession Counselor
// Using Google Generative AI free tier

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

const SUCCESSION_SYSTEM_PROMPT = `You are a compassionate and knowledgeable Succession Counselor specialized in Kenyan inheritance law and digital asset management. Your role is to help families navigate the complex process of claiming digital assets and managing succession after someone's passing in Kenya.

You understand:
- The Kenyan Law of Succession Act
- Digital asset succession (M-Pesa, mobile banking, Sacco accounts)
- Probate and Letters of Administration processes
- Land title succession and the Kenyan Land Registry
- Insurance payouts and unclaimed benefits
- Cultural sensitivity around death and inheritance

Guidelines:
1. Be compassionate and culturally sensitive - acknowledge that this is a difficult time
2. Provide clear, step-by-step guidance on legal processes
3. Explain complex legal terms in simple Kenyan English or Swahili
4. Ask clarifying questions to provide more specific advice
5. Always recommend consulting with qualified legal professionals for complex matters
6. Provide estimated timelines and costs where applicable
7. Reference relevant Kenyan laws and institutions (e.g., Law of Succession Act, UFAA, Land Registry)
8. Help users understand what documents they need to gather

When users ask about specific processes (M-Pesa claims, Probate, Sacco transfers, land succession), provide detailed, actionable steps they can follow.`;

interface GeminiRequest {
  contents: Array<{
    role: "user" | "model";
    parts: Array<{ text: string }>;
  }>;
  systemInstruction?: {
    parts: Array<{ text: string }>;
  };
  generationConfig?: {
    temperature?: number;
    topP?: number;
    topK?: number;
    maxOutputTokens?: number;
  };
}

interface GeminiResponse {
  candidates?: Array<{
    content: {
      parts: Array<{ text: string }>;
    };
  }>;
  error?: {
    message: string;
    code?: number;
  };
}

export class GeminiService {
  private conversationHistory: Array<{
    role: "user" | "model";
    parts: Array<{ text: string }>;
  }> = [];

  async sendMessage(userMessage: string): Promise<string> {
    if (!GEMINI_API_KEY) {
      throw new Error(
        "Gemini API key not configured. Please set VITE_GEMINI_API_KEY in your .env.local file. Get a free key at https://aistudio.google.com/apikey"
      );
    }

    // Add user message to history
    this.conversationHistory.push({
      role: "user",
      parts: [{ text: userMessage }],
    });

    const requestBody: GeminiRequest = {
      contents: this.conversationHistory,
      systemInstruction: {
        parts: [{ text: SUCCESSION_SYSTEM_PROMPT }],
      },
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
      },
    };

    try {
      const response = await fetch(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data: GeminiResponse = await response.json();

      if (!response.ok || data.error) {
        const errorMessage = data.error?.message || `API Error: ${response.status}`;
        throw new Error(errorMessage);
      }

      if (!data.candidates || !data.candidates[0]) {
        throw new Error("No response received from Gemini API");
      }

      const assistantMessage =
        data.candidates[0].content.parts[0].text;

      // Add assistant response to history
      this.conversationHistory.push({
        role: "model",
        parts: [{ text: assistantMessage }],
      });

      // Keep conversation history manageable (last 10 exchanges)
      if (this.conversationHistory.length > 20) {
        this.conversationHistory = this.conversationHistory.slice(-20);
      }

      return assistantMessage;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      throw new Error(`Failed to get response from Gemini: ${errorMessage}`);
    }
  }

  clearHistory(): void {
    this.conversationHistory = [];
  }

  getHistory() {
    return this.conversationHistory;
  }
}

export const geminiService = new GeminiService();
