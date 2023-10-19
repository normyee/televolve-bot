<template>
  <div class="container">
    <main class="centered-div">
      <SlideBar></SlideBar>
      <div class="message-container">
        <div class="header">
          <div class="chat-title">
            <div class="avatar">
              <img src="../assets/img/telegram.png" alt="profile-icon" />
            </div>
            <div class="message-header-content">
              <h4>SISIAMIMI</h4>
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
        <div class="message-content">
          <p class="chat-message chat-received bubble left">
            Mensagem RECEBIDA 👻<span class="chat-time">11:38 pm</span>
          </p>
          <p class="chat-message chat-sent bubble right">
            Mensagem ENVIADA 👻<span class="chat-time">11:39 pm</span>
          </p>
          <p
            v-for="(message, index) in sentMessages"
            :key="index"
            class="chat-message chat-sent bubble right"
          >
            {{ message.text }}<span class="chat-time">{{ message.time }}</span>
          </p>
        </div>
        <MessageFooter @send="send"></MessageFooter>
      </div>
    </main>
  </div>
</template>

<script setup>
import MessageFooter from '../components/MessageFooter/MessageFooter.vue';
import SlideBar from '../components/SlideBar/SlideBar.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';

// eslint-disable-next-line no-unused-vars
const store = useStore();
const sentMessages = ref([]);

// Formatação de horas.
const formatTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Formata horas.
  const formattedHours = hours < 10 ? `0${hours}` : hours;

  // Formata minutos.
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  //Retorna formatado o horário.
  return `${formattedHours}:${formattedMinutes}`;
};

// Função que recebe o valor do input do elemento filho do componente MessageFooter.
const send = ({ messageInput }) => {
  const messageText = messageInput._value;

  if (messageText.trim() !== '') {
    sentMessages.value.push({
      text: messageText,
      time: formatTime()
    });
  }
};
</script>

<style src="./HomeView.css" scoped></style>
