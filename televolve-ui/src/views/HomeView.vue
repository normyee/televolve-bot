<template>
  <main class="home">
    <h1>Home</h1>
    <button @click="$store.dispatch('logout')">Sair</button>
  </main>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
</script>

<style lang="scss" scoped></style>
