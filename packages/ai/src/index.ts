import OpenAI from "openai";

export interface AiConfig {
  apiKey: string;
  baseUrl: string;
  model: string;
  temperature?: number;
  maxTokens?: number;
  organization?: string;
}

export class AiProvider {
  private client: OpenAI;
  private config: AiConfig;

  constructor(config: AiConfig) {
    this.config = config;
    this.client = new OpenAI({
      apiKey: config.apiKey,
      baseURL: config.baseUrl,
      organization: config.organization,
    });
  }

  async chat(systemPrompt: string, userPrompt: string) {
    try {
      const response = await this.client.chat.completions.create({
        model: this.config.model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: this.config.temperature ?? 0.7,
        max_tokens: this.config.maxTokens ?? 1000,
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error("AI Provider Error:", error);
      throw new Error("Failed to get AI response");
    }
  }

  async healthCheck() {
    try {
      // Smallest possible request to check connectivity
      await this.client.models.list();
      return true;
    } catch (error) {
      return false;
    }
  }
}
