<template>
  <div v-if="isClicked" class="emoji-picker" ref="target">
    <EmojiPicker :native="true" @select="onSelectEmoji" />
  </div>
  <div class="message-footer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      @click="showsEmoji"
      class="emojis"
    >
      <path
        d="M10.5199 19.8634C10.5955 18.6615 10.8833 17.5172 11.3463 16.4676C9.81124 16.3252 8.41864 15.6867 7.33309 14.7151L8.66691 13.2248C9.55217 14.0172 10.7188 14.4978 12 14.4978C12.1763 14.4978 12.3501 14.4887 12.5211 14.471C14.227 12.2169 16.8661 10.7083 19.8634 10.5199C19.1692 6.80877 15.9126 4 12 4C7.58172 4 4 7.58172 4 12C4 15.9126 6.80877 19.1692 10.5199 19.8634ZM19.0233 12.636C15.7891 13.2396 13.2396 15.7891 12.636 19.0233L19.0233 12.636ZM22 12C22 12.1677 21.9959 12.3344 21.9877 12.5L12.5 21.9877C12.3344 21.9959 12.1677 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10 10C10 10.8284 9.32843 11.5 8.5 11.5C7.67157 11.5 7 10.8284 7 10C7 9.17157 7.67157 8.5 8.5 8.5C9.32843 8.5 10 9.17157 10 10ZM17 10C17 10.8284 16.3284 11.5 15.5 11.5C14.6716 11.5 14 10.8284 14 10C14 9.17157 14.6716 8.5 15.5 8.5C16.3284 8.5 17 9.17157 17 10Z"
      ></path>
    </svg>
    <input
      type="text"
      name=""
      placeholder="Digite uma mensagem"
      v-model="pickedEmoji"
      @keydown.enter="send"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      class="send-input"
      @click="send"
    >
      <path
        d="M3 13.0001H9V11.0001H3V1.8457C3 1.56956 3.22386 1.3457 3.5 1.3457C3.58425 1.3457 3.66714 1.36699 3.74096 1.4076L22.2034 11.562C22.4454 11.695 22.5337 11.9991 22.4006 12.241C22.3549 12.3241 22.2865 12.3925 22.2034 12.4382L3.74096 22.5925C3.499 22.7256 3.19497 22.6374 3.06189 22.3954C3.02129 22.3216 3 22.2387 3 22.1544V13.0001Z"
      ></path>
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EmojiPicker from 'vue3-emoji-picker';
import 'vue3-emoji-picker/css';
import { onClickOutside } from '@vueuse/core';
import axios from 'axios';
import { useStore } from 'vuex';

const store = useStore();

const isClicked = ref(false);
const pickedEmoji = ref('');
const target = ref(null);

const showsEmoji = () => {
  isClicked.value = !isClicked.value;
};

const onSelectEmoji = (emoji) => {
  pickedEmoji.value += emoji.i;
};

onClickOutside(target, () => {
  showsEmoji();
});

const emit = defineEmits(['send']);

// Método que envia mensagem e emite dados da mensagem para o componente que lida com conteúdo de mensagens.
const send = async () => {
  emit('send', { messageInput: pickedEmoji });
  const message = pickedEmoji.value;
  pickedEmoji.value = '';

  const payload = {
    chat_id: store.state.selectedChat.chatId,
    text: message
  };

  await axios.post('http://localhost:8000/sendMessage', payload);
  
};
</script>

<style src="./MessageFooter.css" scoped></style>
