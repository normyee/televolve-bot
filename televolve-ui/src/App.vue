<script setup>
import { RouterView } from 'vue-router';
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

//Método de cíclo de vida do Vue para checar se existe um usuário atual.
onBeforeMount(() => {
  store.dispatch('fetchUser');
});
</script>

<template>
  <RouterView />
</template>

<style src="./assets/global.css"></style>
