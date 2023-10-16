import notification from './notification-popup';

// Classe que lida com erros de autenticação.
export class HandleAuthError {

  // Injeção de dependência da classe que lida com notificações/popup
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

// Passando a instância da classe Notification.
export default new HandleAuthError(notification);
