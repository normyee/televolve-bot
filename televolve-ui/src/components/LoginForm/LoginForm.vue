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
    <SectionDivider
      spanMessage="Novo no Televolve?"
      linkMessage="👉Crie uma conta"
      to="/register"
    ></SectionDivider>
  </form>
</template>

<script setup>
import SectionDivider from '../SectionDivider/SectionDivider.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

const login_form = ref({});
const store = useStore();

// Ativa o método "login" do store ao acionar o evento de submit.
const login = () => {
  store.dispatch('login', login_form.value);
};
</script>

<style src="../LoginForm/LoginForm.css" scoped></style>
