<template>
  <div class="container-page">
    <div class="left-box">
      <img :src="img" alt="" />
    </div>
    <div class="right-box">
      <h1>LOGUE AGORA</h1>
      <form @submit.prevent="login" class="login-form">
        <span class="texts">E-mail</span>
        <input
          class="inputs"
          type="text"
          placeholder="Digite seu email..."
          v-model="login_form.email"
        />
        <span class="texts">Senha</span>
        <input
          class="inputs"
          type="password"
          placeholder="Digite sua senha..."
          v-model="login_form.password"
        />
        <button type="submit" class="button">Entrar</button>
        <hr class="horizontal-line" />
        <span class="span-register"
          >Novo no Televolve? <a :href="linkToRegister">👉Crie uma conta</a></span
        >
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import img from '../assets/televolve.png';
import { useStore } from 'vuex';

const login_form = ref({});
const store = useStore();
const linkToRegister = 'http://localhost:5173/register';

const login = () => {
  store.dispatch('login', login_form.value);
};
</script>

<style src="./LoginView.css" scoped></style>
