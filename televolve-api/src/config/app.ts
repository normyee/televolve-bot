import express, { Application } from "express";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { router } from "../presentation/routers/route";
import TelegramBot from "node-telegram-bot-api";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const bot = new TelegramBot("6310188561:AAGCR_CLdMi-M2G-fH4LgjdawuNj9umFcsk", {
  polling: true,
});

export class App {
  private app: Application;
  private http: http.Server;
  private io: Server;

  constructor() {
    // Incialização
    this.app = express();
    this.http = http.createServer(this.app);
    this.app.use(cors());
    this.app.use(express.json());
    dotenv.config();
    this.io = new Server(this.http, {
      cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
      },
    });

    // Rota
    this.app.use(router);

    // WebSockets
    this.socketChatHandler();
  }

  // Métodos

  boostrap() {
    this.http.listen(8000, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });
  }

  socketChatHandler() {
    bot.on("message", async (msg) => {
      console.log("=================================");
      console.log("INCOMING MESSAGE: ", msg);
      console.log("=================================");

      console.log(String(-2328328));

      const chatLog = {
        chatId: String(msg.chat.id),
        chatType: msg.chat.type,
        name: msg.chat.title ?? msg.from?.username,
        messages: {
          create: {
            senderId: String(msg.from?.id),
            messageId: String(msg.message_id),
            isBot: msg.from?.is_bot,
            text: msg.text,
            username: msg.from?.username,
            type: "received",
          },
        },
      };

      const chatFound = await prisma.chatLog.findUnique({
        where: {
          chatId: String(msg.chat.id),
        },
      });

      if (chatFound) {
        const messages_data = {
          senderId: String(msg.from?.id),
          messageId: String(msg.message_id),
          isBot: msg.from?.is_bot,
          text: msg.text,
          username: msg.from?.username,
          type: "received",
          chatLogId: chatFound.id,
        };

        await prisma.message.create({ data: messages_data });
      } else {
        await prisma.chatLog.create({
          data: chatLog,
        });
      }

      const teste = await prisma.chatLog.findMany({
        include: {
          messages: true,
        },
      });

      console.log(teste);
      this.io.emit("received_message", { data: msg });
    });
  }
}

/*
A) RECEBER MENSAGENS
1 - arrumar o banco de dados V
2 - criar um novo registro de chatlog caso o chat da mensagem de origem ainda não tenha um registro (if) V
3 - caso já tenha um registro, adicionar a nova mensagem para ID do chat V

B) ENVIAR MENSAGENS
1 - procurar pelo id o chat do destinado da mensagem V
2 - adicionar a nova mensagem V

C) ROTA PARA AVALIAR O SENTIMENTO DAS ÚLTIMAS 10 MENSAGENS DE UM CHATLOG

D) CRIAR UM MIDDLEWARE DE AUTENTICAÇÃO DE ROTA
*/
