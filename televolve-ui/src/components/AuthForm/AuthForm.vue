<template>
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
      >Novo no Televolve?
      <router-link class="link-to" to="/register">👉Crie uma conta</router-link></span
    >
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const login_form = ref({});
const store = useStore();

const login = () => {
  store.dispatch('login', login_form.value);
};
</script>

<style src="./AuthForm.css" scoped></style>
