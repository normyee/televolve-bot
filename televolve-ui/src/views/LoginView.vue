<template>
  <div class="container-page">
    <div class="left-box">
      <img :src="img" alt="" />
    </div>
    <div class="right-box">
      <h1>LOGUE AGORA</h1>
      <AuthForm></AuthForm>
    </div>
  </div>
</template>

<script setup>
import AuthForm from '../components/AuthForm/AuthForm.vue';
import img from '../assets/televolve.png';
</script>

<style src="./LoginView.css" scoped></style>
