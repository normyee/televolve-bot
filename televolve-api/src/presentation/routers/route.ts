import { Request, Response, Router } from "express";
import { TelegramBotController } from "../../infra/http/controller/telegram-bot.controller";
import { TelegramBotService } from "../../service/telegram-bot.service";
import { TelegramBot } from "../../infra/provider/telegram-bot";
import { PrismaService } from "../../infra/provider/prisma-service";

const router = Router();
const telegramBotController = new TelegramBotController(
  new TelegramBotService(new TelegramBot(), new PrismaService()),
);

// Rotas de métodos HTTP do Telegram

// Rota que retorna todos os chats e mensagens
router.get("/getChats", (req: Request, res: Response) => {
  telegramBotController.returnAllChatsAndMessages(req, res);
});

// Rota que retorna chat pelo ID
router.get("/getChats/:id", (req: Request, res: Response) => {
  telegramBotController.returnChatAndMessagesById(req, res);
});

// Rota para envio de mensagens
router.post("/sendMessage", async (req: Request, res: Response) => {
  telegramBotController.sendMessage(req, res);
});

export { router };
