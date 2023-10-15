<template>
  <div class="container-page">
    <div class="left-box">
      <img :src="img" alt="" />
    </div>
    <div class="right-box">
      <h1>LOGUE SUA CONTA</h1>
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

const login = () => {
  store.dispatch('login', login_form.value);
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

.login-form {
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

h1 {
  margin-bottom: 120px;
}
</style>
