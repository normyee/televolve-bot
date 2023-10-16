<template>
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
    <SectionDivider
      spanMessage="Já possui uma conta no Televolve?   "
      linkMessage="👉Faça login"
      to="/login"
    ></SectionDivider>
  </form>
</template>

<script setup>
import { useStore } from 'vuex';
import SectionDivider from '../SectionDivider/SectionDivider.vue';
import { ref } from 'vue';

const register_form = ref({});
const store = useStore();

// Ativa o método "register" do store ao acionar o evento de submit.
const register = () => {
  store.dispatch('register', register_form.value);
};
</script>

<style src="./RegisterForm.css" scoped></style>
