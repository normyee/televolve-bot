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

<style src="./RegisterView.css" scoped></style>
