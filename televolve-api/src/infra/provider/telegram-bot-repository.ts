import { TelegramBotAPIResponse } from "../../common/types";

export interface ITelegramBotOperations {
  sendMessage(id: number, text: string): Promise<TelegramBotAPIResponse>;
}
