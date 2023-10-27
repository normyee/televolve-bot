import { ChatService } from "../infra/provider/chat-service";
import { SentimentAnalysisProvider } from "../infra/provider/sentiment-analysis.provider";
import { Request, Response } from "express";

export class SentimentAnalysis {
  constructor(
    private readonly sentimentAnalysis: SentimentAnalysisProvider,
    private readonly chatService: ChatService,
  ) {}

  async execute(req: Request, res: Response) {
    const { id, api_key } = req.body;
    const limit = Number(req.query.limit);

    const content = await this.chatService.findChatById(
      String(id),
      limit ? Number(limit) : undefined,
    );

    const textList: (string | null)[] = [];

    if (content) {
      content.messages.map((message) => textList.push(message.text));
    }

    const filteredTextList: string[] = textList.filter(
      (text) => text !== null,
    ) as string[];
    const result = await this.sentimentAnalysis.execute(
      filteredTextList,
      api_key,
    );

    return res.json({ result: result });
  }
}
