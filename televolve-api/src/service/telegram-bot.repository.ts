import { Request, Response } from "express";
export interface TelegramBotRepository {
  sendMessage(req: Request, res: Response): Promise<Response>;

  returnAllChatsAndMessages(req: Request, res: Response): Promise<Response>;

  returnChatAndMessagesById(req: Request, res: Response): Promise<Response>;
}
