import { Request, Response, Router } from "express";
import { TelegramBotController } from "../../infra/http/controller/telegram-bot.controller";
import { TelegramBotService } from "../../service/telegram-bot.service";
import { TelegramBotOperations } from "../../infra/provider/telegram-bot";
import { ChatService } from "../../infra/provider/chat-service";
import { SentimentAnalysisProvider } from "../../infra/provider/sentiment-analysis.provider";
import { SentimentAnalysis } from "../../service/sentiment-analysis.service";

const router = Router();
const telegramBotController = new TelegramBotController(
  new TelegramBotService(new TelegramBotOperations(), new ChatService()),
);

const sentimentAnalysis = new SentimentAnalysis(
  new SentimentAnalysisProvider(),
  new ChatService(),
);

router.post("/davinci", (req: Request, res: Response) => {
  sentimentAnalysis.execute(req, res);
});

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
