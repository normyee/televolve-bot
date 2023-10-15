<template>
  <div class="container-page">
    <div class="left-box">
      <img :src="img" alt="" />
    </div>
    <div class="right-box">
      <h1>CRIE SUA CONTA</h1>
      <form @submit.prevent="register" class="register-form">
        <span class="texts">E-mail</span>
        <input
          class="inputs"
          type="text"
          placeholder="Digite seu email..."
          v-model="register_form.email"
        />
        <span class="texts">Senha</span>
        <input
          class="inputs"
          type="password"
          placeholder="Digite sua senha..."
          v-model="register_form.password"
        />
        <button type="submit" class="button">Entrar</button>
        <hr class="horizontal-line" />
        <span class="span-register"
          >Já possui uma conta no Televolve? <a :href="linkToLogin">👉Faça login</a></span
        >
      </form>
    </div>
  </div>
</template>

<script setup>
import img from '../assets/televolve.png';

import { ref } from 'vue';
import { useStore } from 'vuex';

const register_form = ref({});
const store = useStore();
const linkToLogin = 'http://localhost:5173/login';

const register = () => {
  store.dispatch('register', register_form.value);
};
</script>

<style scoped>
.container-page {
  width: 100%;
  height: 100vh;
  display: flex;
  font-size: 0.9rem;
  align-items: center;
  justify-content: center;
}

.right-box {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: black;
  flex-direction: column;
  color: white;
  justify-content: center;
}

.left-box {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
}

.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5rem;
}

.inputs {
  width: 20rem;
  height: 2rem;
  border-radius: 8px;
  border: none;
  outline: none;
}

.inputs::placeholder {
  text-align: center;
  line-height: inherit;
}

.inputs:focus {
  outline: 2px solid grey;
}

.button {
  width: 20rem;
  height: 2.5rem;
  border-radius: 30px;
  margin: 1rem;
  border: none;
  cursor: pointer;
}

.button:hover {
  background: rgba(128, 128, 128, 1);
}

.button:active {
  transform: translate(0px, 0px) scale(1.1, 1);
  transition: transform 300ms ease-out;
}

.texts {
  display: flex;
  padding: 7px 15px 8px 15px;
  color: #bbb;
  font-size: 0.76rem;
  width: 100%;
}

.horizontal-line {
  width: 100%;
  margin-top: 20px;
  border: none;
  height: 1px;
  background-color: grey;
}

.span-register {
  display: flex;
  padding: 7px 15px 8px 15px;
  color: #bbb;
  font-size: 0.9rem;
  width: 100%;
}

h1 {
  margin-bottom: 120px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
