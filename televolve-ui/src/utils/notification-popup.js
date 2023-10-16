import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Objeto de configuração do Toastify.
const toastOptions = {
  autoClose: 2500,
  theme: 'dark',
  closeOnClick: true,
  position: 'top-center',
  hideProgressBar: true
};

// Classe utilitária que lida com notificações pelo Toastify.
class Notification {
  // Método que notifica uma mensagem.
  warn(message) {
    toast.warn(message, toastOptions);
  }

  error(message) {
    toast.error(message, toastOptions);
  }
}

// Exporta a classe instanciada.
export default new Notification();
