<template>
  <div class="header">
    <div class="chat-title">
      <div class="avatar">
        <img :src="defaultProfile" alt="profile-icon" />
      </div>
      <div class="message-header-content">
        <h4 v-if="$store.state.selectedChat !== null">{{ $store.state.selectedChat.chatName }}</h4>
      </div>
    </div>
    <div class="header-right" @click="$store.dispatch('logOut')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        class="icon"
      >
        <path
          d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import defaultProfile from '../../assets/img/telegram.png';
import { useStore } from 'vuex';

// eslint-disable-next-line no-unused-vars
const store = useStore();


</script>

<style src="./HeaderComponent.css" scoped></style>
