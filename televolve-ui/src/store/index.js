import { createStore } from 'vuex';
import router from '../router';
import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import handleAuthError from '../utils/auth-handler';

const HOME_ROUTE = '/home';
const LOGIN_ROUTE = '/login';
const REGISTER_ROUTE = '/register';

export default createStore({
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    }
  },
  actions: {
    async login({ commit }, userDetails) {
      const { email, password } = userDetails;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        commit('SET_USER', auth.currentUser);
        router.push(HOME_ROUTE);
      } catch (error) {
        handleAuthError.execute(error);
      }
    },
    async register({ commit }, userDetails) {
      const { email, password } = userDetails;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        commit('SET_USER', auth.currentUser);
        router.push(HOME_ROUTE);
      } catch (error) {
        handleAuthError.execute(error);
      }
    },
    async logout({ commit }) {
      await signOut(auth);
      commit('CLEAR_USER');
      router.push(LOGIN_ROUTE);
    },
    fetchUser({ commit }) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          commit('CLEAR_USER');
        } else {
          commit('SET_USER', user);

          if (router.isReady() && router.currentRoute.value.path === LOGIN_ROUTE || REGISTER_ROUTE) {
            router.push(HOME_ROUTE);
          }
        }
      });
    }
  }
});
