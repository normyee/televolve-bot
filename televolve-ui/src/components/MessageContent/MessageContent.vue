<template>
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
</template>

<script setup>
import MessageFooter from '../MessageFooter/MessageFooter.vue';
import { ref } from 'vue';

const sentMessages = ref([]);

// Função que lida com formatação de horas.
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

// Evento de emitir a mensagem do input do Componente MessageFooter
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

<style src="./MessageContent.css" scoped></style>
