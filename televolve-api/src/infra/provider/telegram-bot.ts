import axios from "axios";
import { TelegramBotAPIResponse } from "../../common/types";
import { ITelegramBotOperations } from "./telegram-bot-repository";

export class TelegramBotOperations implements ITelegramBotOperations {
  // Metódo para enviar mensagem
  async sendMessage(id: number, text: string): Promise<TelegramBotAPIResponse> {
    const { data } = await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      { chat_id: id, text: text },
    );

    return data;
  }
}
