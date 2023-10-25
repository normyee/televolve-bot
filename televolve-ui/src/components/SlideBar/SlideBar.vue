<template>
  <div class="slidebar" @click="clickedChat($event)">
    <div class="header">
      <div class="avatar">
        <img :src="botProfileImg" alt="profile" />
      </div>
    </div>
    <div class="slidebar-chats">
      <div
        v-for="chat in chats.result"
        :key="chat.chatId"
        class="slidebar-chat"
        :data-chat-id="chat.chatId"
        :data-chat-name="chat.name"
      >
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>{{ chat.name }}</h4>
          <p>{{ chat.messages[chat.messages.length - 1].text }}</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import botProfileImg from '../../assets/img/profile.png';
import defaultProfile from '../../assets/img/telegram.png';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = new useStore();

// ref para selecionar o elemento anterior.
const selectedChat = ref(null);
const chats = ref([]);

const clickedChat = (e) => {
  const target = e.target.closest('.slidebar-chat');
  console.log('chatID: ', target.getAttribute('data-chat-id'));
  console.log('chat: ', target.getAttribute('data-chat-name'));
  if (target) {
    // Remove a cor de fundo do elemento anterior clicado.
    if (selectedChat.value) {
      selectedChat.value.style.backgroundColor = '';
    }
    // Define a cor de fundo no elemento clicado.
    target.style.backgroundColor = '#c2c5c6';
    // Armazena o elemento clicado como o novo elemento selecionado.
    selectedChat.value = target;

    const nome = target.getAttribute('data-chat-name');
    const id = target.getAttribute('data-chat-id');

    store.dispatch('selectChat', {
      chatId: id,
      chatName: nome
    });
  }
};

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/getChats');
    chats.value = response.data;
  } catch (error) {
    console.error('Erro ao buscar os chats:', error);
  }
});
</script>

<style src="./SlideBar.css" scoped></style>
