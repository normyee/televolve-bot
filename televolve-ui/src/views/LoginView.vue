<template>
  <div class="container-page">
    <div class="left-box">
      <img :src="img" alt="" />
    </div>
    <div class="right-box">
      <h1>LOGUE AGORA</h1>
      <LoginForm></LoginForm>
    </div>
  </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm/loginform.vue';
import img from '../assets/televolve.png';
</script>

<style src="./LoginView.css" scoped></style>
