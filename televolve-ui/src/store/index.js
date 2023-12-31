import { createStore } from 'vuex';
import authPerform from '../utils/auth-perform';

export default createStore({
  state: {
    user: null,
    selectedChat: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
    SET_SELECTED_CHAT(state, chatData) {
      state.selectedChat = chatData;
    }
  },

  // Seção de métodos que lidam com lógica de autenticação.
  actions: {
    // Função que loga.
    async login({ commit }, userDetails) {
      await authPerform.signInUser(commit, userDetails);
    },

    // Função que cadastra.
    async register({ commit }, userDetails) {
      await authPerform.signUpUser(commit, userDetails);
    },

    // Função que desloga usuário.
    async logOut({ commit }) {
      await authPerform.logOut(commit);
    },

    // Função que lida o estado atual do usuário.
    async fetchUser({ commit }) {
      await authPerform.findUser(commit);
    },

    selectChat({ commit }, chatData) {
      commit('SET_SELECTED_CHAT', chatData);
    },
  }
});
