import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class PrismaService {
  // Método que retorna chat pelo ID
  async findByIdChat(chatId: string) {
    return await prisma.chatLog.findUnique({
      where: {
        chatId: chatId,
      },
      include: {
        messages: true,
      },
    });
  }
}
