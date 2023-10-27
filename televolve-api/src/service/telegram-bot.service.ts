import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { InvalidIDException } from "../errors/invalid-id-error";
import { TelegramBotRepository } from "./telegram-bot.repository";
import { ITelegramBotOperations } from "../infra/provider/telegram-bot-repository";
import { IChatService } from "../infra/provider/chat-service.repository";
const prisma = new PrismaClient();

export class TelegramBotService implements TelegramBotRepository {
  constructor(
    private readonly telegramBotOperations: ITelegramBotOperations,
    private readonly chatService: IChatService,
  ) {}

  // Método para enviar mensagens.
  async sendMessage(req: Request, res: Response) {
    try {
      const { chat_id, text } = req.body;
      const { result } = await this.telegramBotOperations.sendMessage(
        chat_id,
        text,
      );

      const chatExists = await prisma.chatLog.findUnique({
        where: {
          chatId: String(chat_id),
        },
      });

      if (!chatExists) {
        throw new Error("Chat doesn't exist");
      }

      const messages_data = {
        senderId: String(result.from.id),
        messageId: String(result.message_id),
        isBot: true,
        text: text,
        username: result.from.username,
        type: "sent",
        chatLogId: chatExists.id,
      };

      // Cria nova mensagem para chatlog existente
      await prisma.message.create({ data: messages_data });

      return res
        .status(200)
        .json({ message: "Message sent!", success: true, result: result });
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
      const results = await this.chatService.findAllChatsAndMessages();

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
      const limit = req.query.limit;

      const result = await this.chatService.findChatById(
        id,
        limit ? Number(limit) : undefined,
      );

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
