import { randomUUID } from "crypto";
import { Message } from "./message.entity";

export class ChatLog {
  private _id: string;
  private _chatId: string;
  private _chatType: string;
  private _name?: string;
  private _messages: Message[];
  private _date: Date;

  constructor(
    id: string,
    chatId: string,
    chatType: string,
    messages: Message[],
    name?: string,
  ) {
    this._id = id ?? randomUUID();
    this._chatId = chatId;
    this._chatType = chatType;
    this._name = name;
    this._messages = messages;
    this._date = new Date();
  }

  // Métodos "get" para acessar os atributos privados

  get id(): string {
    return this._id;
  }

  get chatId(): string {
    return this._chatId;
  }

  get chatType(): string {
    return this._chatType;
  }

  get name(): string | undefined {
    return this._name;
  }

  get messages(): Message[] {
    return this._messages;
  }

  get date(): Date {
    return this._date;
  }
}
