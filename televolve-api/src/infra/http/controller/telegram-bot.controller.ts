import { TelegramBotService } from "../../../service/telegram-bot.service";
import { Request, Response } from "express";

export class TelegramBotController {
  constructor(private readonly telegrambot: TelegramBotService) {}
  async sendMessage(req: Request, res: Response) {
    return await this.telegrambot.sendMessage(req, res);
  }

  async returnAllChatsAndMessages(req: Request, res: Response) {
    return await this.telegrambot.returnAllChatsAndMessages(req, res);
  }

  async returnChatAndMessagesById(req: Request, res: Response) {
    return await this.telegrambot.returnChatAndMessagesById(req, res);
  }
}
