import axios from "axios";

export class TelegramBot {
  // Metódo para enviar mensagem.
  async sendMessage(id: number, text: string): Promise<any> {
    return await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      { chat_id: id, text: text },
    );
  }
}
