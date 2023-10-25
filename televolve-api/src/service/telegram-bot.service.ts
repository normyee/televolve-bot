import { PrismaClient } from "@prisma/client";
import { TelegramBot } from "../infra/provider/telegram-bot";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export class TelegramBotService {
  constructor(private readonly telegramBot: TelegramBot) {}

  // Método para enviar mensagens.
  async sendMessage(req: Request, res: Response) {
    try {
      const { chat_id, text } = req.body;
      const result = await this.telegramBot.sendMessage(chat_id, text);

      const chatExists = await prisma.chatLog.findUnique({
        where: {
          chatId: String(chat_id),
        },
      });

      if (!chatExists) {
        throw new Error("Chat doesn't exist");
      }

      const messages_data = {
        senderId: String(result.data.result.from.id),
        messageId: String(result.data.result.message_id),
        isBot: true,
        text: text,
        username: result.data.result.from.username,
        type: "sent",
        chatLogId: chatExists.id,
      };

      // Cria nova mensagem para chatlog existente
      await prisma.message.create({ data: messages_data });

      return res
        .status(200)
        .json({ message: "Message sent!", success: true, result: result.data });
    } catch (error) {
      console.error(error);
      return res
        .status(400)
        .json({ message: "Couldn't send message!", success: false });
    }
  }

  // Método para retornar todos os chats.
  async returnAllChatsAndMessages(req: Request, res: Response) {
    try {
      const results = await prisma.chatLog.findMany({
        include: {
          messages: true,
        },
      });

      return res
        .status(200)
        .json({ message: "Chats found!", success: true, result: results });
    } catch (error) {
      console.error(error);
      return res
        .status(400)
        .json({ message: "Couldn't find chats!", success: false });
    }
  }
}
