import { PrismaClient } from "@prisma/client";
import { TelegramBot } from "../infra/provider/telegram-bot";
import { Request, Response } from "express";
import { InvalidIDException } from "../errors/invalid-id-error";
import { PrismaService } from "../infra/provider/prisma-service";
const prisma = new PrismaClient();

export class TelegramBotService {
  constructor(
    private readonly telegramBot: TelegramBot,
    private readonly prismaService: PrismaService,
  ) {}

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

  // Método para retornar todos os chats e seu log de interações.
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
        .status(404)
        .json({ message: "Couldn't find chats!", success: false });
    }
  }

  // Método para retornar um chat pelo ID e seu log de interações.
  async returnChatAndMessagesById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await this.prismaService.findByIdChat(id);

      if (!result) {
        throw new InvalidIDException("Invalid ID", 404);
      }

      return res
        .status(200)
        .json({ message: "Chat found!", success: true, result: result });
    } catch (error) {
      console.error(error);
      return res.status(404).json({
        message: "Chat not found!",
        success: false,
      });
    }
  }
}
