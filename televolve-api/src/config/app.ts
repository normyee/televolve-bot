import express, { Application } from "express";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { router } from "../presentation/routers/route";
import TelegramBot from "node-telegram-bot-api";

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
    this.io.on("connection", (socket) => {
      console.log("ID:", socket.id);

      bot.on("message", (msg) => {
        console.log("=================================");
        console.log("INCOMING MESSAGE: ", msg);
        console.log("=================================");
        socket.emit("received_message", { data: msg });
      });
    });
  }
}
