<template>
  <main class="home">
    <h1>Home</h1>
    <button @click="$store.dispatch('logOut')">Sair</button>
  </main>
</template>

<script setup>
import { useStore } from 'vuex';

// eslint-disable-next-line no-unused-vars
const store = useStore();
</script>

<style lang="scss" scoped></style>
