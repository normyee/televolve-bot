import { randomUUID } from "crypto";
import { ChatLog } from "./chatlog.entity";

export class Message {
  private _id: string;
  private _messageId?: string;
  private _senderId?: string;
  private _isBot: boolean;
  private _text?: string;
  private _username?: string;
  private _type: string;
  private _date: Date;
  private _chatLog: ChatLog;
  private _chatLogId: string;

  constructor(
    id: string,
    isBot: boolean,
    type: string,
    date: Date,
    chatLog: ChatLog,
    chatLogId: string,
    messageId?: string,
    senderId?: string,
    text?: string,
    username?: string,
  ) {
    this._id = id ?? randomUUID();
    this._messageId = messageId;
    this._senderId = senderId;
    this._isBot = isBot;
    this._text = text;
    this._username = username;
    this._type = type;
    this._date = date;
    this._chatLog = chatLog;
    this._chatLogId = chatLogId;
  }

  // Métodos "get" para acessar os atributos privados

  get id(): string {
    return this._id;
  }

  get messageId(): string | undefined {
    return this._messageId;
  }

  get senderId(): string | undefined {
    return this._senderId;
  }

  get isBot(): boolean {
    return this._isBot;
  }

  get text(): string | undefined {
    return this._text;
  }

  get username(): string | undefined {
    return this._username;
  }

  get type(): string {
    return this._type;
  }

  get date(): Date {
    return this._date;
  }

  get chatLog(): ChatLog {
    return this._chatLog;
  }

  get chatLogId(): string {
    return this._chatLogId;
  }
}
