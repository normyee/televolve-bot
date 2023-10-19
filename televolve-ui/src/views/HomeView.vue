<template>
  <div class="container">
    <main class="centered-div">
      <SlideBar></SlideBar>
      <MessageContainer></MessageContainer>
    </main>
  </div>
</template>

<script setup>
import SlideBar from '../components/SlideBar/SlideBar.vue';
import MessageContainer from '../components/MessageContainer/MessageContainer.vue';
</script>

<style src="./HomeView.css" scoped></style>
