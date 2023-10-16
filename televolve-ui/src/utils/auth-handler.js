import notification from './notification-popup';

export class HandleAuthError {
  constructor(notification) {
    this.notification = notification;
  }

  execute(error) {
    switch (error.code) {
      case 'auth/user-not-found':
        this.notification.warn('Usuário não encontrado!');
        break;
      case 'auth/wrong-password':
        this.notification.warn('Senha incorreta!');
        break;
      case 'auth/email-already-in-use':
        this.notification.warn('Email já em uso!');
        break;
      case 'auth/invalid-email':
        this.notification.warn('Email inválido!');
        break;
      case 'auth/operation-not-allowed':
        this.notification.error('Esta operação não é permitida!');
        break;
      case 'auth/weak-password':
        this.notification.warn('Senha fraca!');
        break;
      default:
        this.notification.warn('Ooops! Algo deu errado!');
    }
  }
}

export default new HandleAuthError(notification);
