import { Request, Response } from "express";
import { TelegramBotRepository } from "../../../service/telegram-bot.repository";

export class TelegramBotController {
  constructor(private readonly telegramBotRepository: TelegramBotRepository) {}
  async sendMessage(req: Request, res: Response) {
    return await this.telegramBotRepository.sendMessage(req, res);
  }

  async returnAllChatsAndMessages(req: Request, res: Response) {
    return await this.telegramBotRepository.returnAllChatsAndMessages(req, res);
  }

  async returnChatAndMessagesById(req: Request, res: Response) {
    return await this.telegramBotRepository.returnChatAndMessagesById(req, res);
  }
}
