<template>

<!-- <div id="app">
    <div 
      class="falling-object" 
      :class="{ falling: isFalling }" 
      @transitionend="onTransitionEnd"
    ></div>
    <button @click="startFalling">Пустить предмет вниз</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isFalling = ref(false);

function startFalling() {
  isFalling.value = true;
}

function onTransitionEnd() {
  isFalling.value = false; // Сбрасываем состояние после окончания анимации
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.falling-object {
  width: 50px;
  height: 50px;
  background-color: red;
  position: relative;
  transition: transform 1s ease-in; /* Параметры анимации */
}

.falling {
  transform: translateY(400px); /* Сдвиг вниз */
} -->
