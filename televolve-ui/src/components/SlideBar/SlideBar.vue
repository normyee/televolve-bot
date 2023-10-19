<template>
  <div class="slidebar" @click="clickedChat($event)">
    <div class="header">
      <div class="avatar">
        <img :src="botProfileImg" alt="profile" />
      </div>
    </div>
    <div class="slidebar-chats">
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>SISIAMIMI</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
        </div>
        <div class="time">
          <p>2:50pm</p>
        </div>
      </div>
      <div class="slidebar-chat">
        <div class="chat-avatar">
          <img :src="defaultProfile" alt="profile-icon" />
        </div>
        <div class="chat-info">
          <h4>USUÁRIO</h4>
          <p>Última mensagem</p>
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
import { ref } from 'vue';

// ref para selecionar o elemento anterior.
const selectedChat = ref(null);

const clickedChat = (e) => {
  const target = e.target.closest('.slidebar-chat');
  if (target) {
    // Remove a cor de fundo do elemento anterior clicado.
    if (selectedChat.value) {
      selectedChat.value.style.backgroundColor = '';
    }
    // Define a cor de fundo no elemento clicado.
    target.style.backgroundColor = '#c2c5c6';
    // Armazena o elemento clicado como o novo elemento selecionado.
    selectedChat.value = target;
  }
};
</script>

<style src="./SlideBar.css" scoped></style>
