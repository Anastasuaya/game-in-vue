<template>
    <div v-if="isVisible" class="modalOvrl">
        <div class="modalCont">
            <h2>Help</h2>
            <p>Use WASD for character control</p>
            <p>Press 'e' for start dialogs</p>
            <p>Use ЛКМ or 'space' for attack</p>
            <button @click="close">close</button>
        </div>
    </div>
    </template>
    
    <script setup lang="ts">
    import { ref, defineEmits } from 'vue';
    
    const emit = defineEmits(['close'])
    const isVisible = ref(true)
    
    const close = () => {
        isVisible.value = false
        emit('close')
    }
    </script>
    
    <style scoped>
    .modalOvrl {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      /* background-image: url(UI/background.png); */
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000; /* Поверх всего содержимого */
    }
    
    .modalCont {
      background: white;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
    }
    </style>