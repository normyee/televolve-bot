import { auth } from '../services/firebase';
import router from '../router';
import handleAuthError from './auth-handler';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const HOME_ROUTE = '/home';
const LOGIN_ROUTE = '/login';
const REGISTER_ROUTE = '/register';

// Classe de utilidade que lida com autenticação.
class AuthPerform {
  // Método para logar usuário.
  async signInUser(commit, userDetails) {
    try {
      await signInWithEmailAndPassword(auth, userDetails.email, userDetails.password);

      // Defina o usuário atual pelo Vuex.
      commit('SET_USER', auth.currentUser);
      router.push(HOME_ROUTE);
    } catch (error) {
      // Tratamento de erro de autenticação.
      handleAuthError.execute(error);
    }
  }

  // Método para cadastrar usuário.
  async signUpUser(commit, userDetails) {
    try {
      await createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password);

      // Defina o usuário atual pelo Vuex.
      commit('SET_USER', auth.currentUser);
      router.push(HOME_ROUTE);
    } catch (error) {
      // Tratamento de erro de autenticação.
      handleAuthError.execute(error);
    }
  }

  // Método para deslogar usuário.
  async logOut(commit) {
    await signOut(auth);

    // Limpa os dados do usuário pelo Vuex.
    commit('CLEAR_USER');
    router.push(LOGIN_ROUTE);
  }

  // Método para encontrar e atualizar o estado do usuário.
  async findUser(commit) {
    auth.onAuthStateChanged(async (user) => {
      if (user === null) {

         // Se o usuário estiver deslogado, limpa os dados do usuário pelo Vuex.
        commit('CLEAR_USER');
      } else {
         // Se o usuário estiver logado, atualiza os dados do usuário pelo Vuex.
        commit('SET_USER', user);

        // Lógica para averiguar se a rota atual é /login ou /register, caso alguma condição seja verdadeira, redireciona para /home.
        if (
          router.isReady() &&
          (router.currentRoute.value.path === LOGIN_ROUTE ||
            router.currentRoute.value.path === REGISTER_ROUTE)
        ) {
          router.push(HOME_ROUTE);
        }
      }
    });
  }
}

export default new AuthPerform();
