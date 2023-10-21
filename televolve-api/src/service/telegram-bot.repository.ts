export interface TelegramBotPanel {
  handleIncomingMessage(): any;

  sendMessage(): any;

  retrieveAllMessagesAndChats(): any;
}
