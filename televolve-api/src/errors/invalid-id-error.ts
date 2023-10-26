// Erro personalizado quando um ID de chat é inválido
export class InvalidIDException extends Error {
  private _message: string;
  private _statusCode: number;

  constructor(message: string, statusCode = 404) {
    super(message);
    this._message = message;
    this._statusCode = statusCode;
  }

  get message() {
    return this._message;
  }

  get statusCode() {
    return this._statusCode;
  }
}
