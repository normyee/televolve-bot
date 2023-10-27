import { PrismaClient } from "@prisma/client";
import { IChatService } from "./chat-service.repository";
const prisma = new PrismaClient();

export class ChatService implements IChatService {
  // Método que retorna chat pelo ID
  async findChatById(chatId: string, numberOfMessages?: number) {
    return await prisma.chatLog.findUnique({
      where: {
        chatId: chatId,
      },
      include: {
        messages: {
          take: numberOfMessages,
        },
      },
    });
  }

  // Método que retorna todos os chats e suas respectivas mensagens
  async findAllChatsAndMessages() {
    return await prisma.chatLog.findMany({
      include: {
        messages: true,
      },
    });
  }
}
