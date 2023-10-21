<template>
  <div class="message-content">
    <!-- { MENSAGENS} -->
    <p
      v-for="(message, index) in allMessages"
      :key="index"
      :class="message.type === 'sent' ? 'chat-message chat-sent bubble right' : 'chat-message chat-received bubble left'"
    >
      {{ message.text }}<span class="chat-time">{{ message.time }}</span>
    </p>
  </div>
  <MessageFooter @send="send"></MessageFooter>
</template>

<script setup>
import MessageFooter from '../MessageFooter/MessageFooter.vue';
import { ref } from 'vue';
import { io } from 'socket.io-client';

const allMessages = ref([]);

const socket = io('http://localhost:8000');

socket.on('received_message', (data) => {
  console.log('dado: ', data.data.text);
  const message = {
    text: data.data.text,
    time: formatTime(),
    type: 'received'
  };
  allMessages.value.push(message);
});

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
    const message = {
      text: messageText,
      time: formatTime(),
      type: 'sent'
    };
    allMessages.value.push(message);
  }
};
</script>

<style src="./MessageContent.css" scoped></style>
