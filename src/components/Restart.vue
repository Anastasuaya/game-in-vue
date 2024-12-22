<template>
    <div class="modal-overlay">
      <div class="modal">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
        <button @click="$emit('restart')">Перезапустить</button>
        <button @click="$emit('close')">Закрыть</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps<{
    title: string;
    message: string;
  }>();
  </script>
  
  <style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  </style>