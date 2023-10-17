<template>
  <div class="container-page">
    <div class="left-box">
      <img :src="img" alt="" />
    </div>
    <div class="right-box">
      <h1>CRIE SUA CONTA</h1>
      <RegisterForm></RegisterForm>
    </div>
  </div>
</template>

<script setup>
import img from '../assets/img/televolve.png';
import RegisterForm from '../components/RegisterForm/RegisterForm.vue';
</script>

<style src="./RegisterView.css" scoped></style>
