export interface IChatService {
  findChatById(chatId: string, numberOfMessages?: number): any;

  findAllChatsAndMessages(): any;
}
