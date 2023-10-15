<script setup>
import { RouterView } from 'vue-router';
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

//Used onBeforeMount to check if there's an user.
onBeforeMount(() => {
  store.dispatch('fetchUser');
});
</script>

<template>
  <RouterView />
</template>

<style src="./assets/global.css"></style>
