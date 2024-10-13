
<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2 style="color: black;">Добро пожаловать в RPG игру!</h2>
        <p style="color: black;">Нажмите "Начать игру" для начала приключения.</p>
        <button @click="startGame">Начать игру</button>
        <button class="close-button" @click="closeModal">Закрыть</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    isVisible: Boolean,
  });
  
  const emits = defineEmits(['update:isVisible', 'startGame']);
  
  const closeModal = () => {
    emits('update:isVisible', false);
  };
  
  const startGame = () => {
    emits('startGame');
    closeModal();
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    text-align: center;
  }
  
  .close-button {
    margin-top: 10px;
  }
  </style>
  