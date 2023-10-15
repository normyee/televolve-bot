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

<style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600;700;800&family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Rubik:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
}
</style>
