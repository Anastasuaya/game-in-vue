<template>

<div>
    <!-- <GameModal
      :isVisible="isModalVisible"
      @update:isVisible="isModalVisible = $event"
      @startGame="handleStartGame"
    /> -->

    <div ref="gameContainer" v-if="gameStarted" style="position: relative; width: 100%; height: 400px;">
      <!-- Здесь будет контент игры, созданного с использованием Kaboom.js -->
    </div>
  </div>


<luxInFine></luxInFine>


</template>

<script setup lang="ts">
import luxInFine from './components/Player.vue';
import { ref, onMounted, onBeforeUnmount, defineComponent } from 'vue';
import GameModal from './components/GameModal.vue';

import kaboom from 'kaboom';

const gameStarted = ref(false);
const gameContainer = ref<HTMLDivElement | null>(null);
let k: any;
const isModalVisible = ref(false);


// Открываем модальное окно при монтировании компонента
onMounted(() => {
  isModalVisible.value = true; // Устанавливаем состояние видимости в true
});

const handleStartGame = () => {
  console.log('Игра начата!'); // Логика для начала игры
  isModalVisible.value = false; // Закрываем модальное окно, когда игра начата
};

// Функция для инициализации Kaboom
const startGame = () => {
  if (!gameContainer.value) return;

  // Создание экземпляра Kaboom
  k = kaboom({
    global: true,
    // container: gameContainer.value, // Привязываем Kaboom к нашему контейнеру
    width: 640, // ширина канваса
    height: 480, // высота канваса
    scale: 2, // масштабирование
  });

  // Пример добавления фона (можете заменить на свою графику)
  k.add([
    k.sprite('background', { // предполагаем наличие спрайта
      url: 'https://i.imgur.com/0Z3hKib.png'
    }),
    k.pos(320, 240), // центр холста
    k.scale(1), // масштаб
  ]);
};

onBeforeUnmount(() => {
  // Если Kaboom был инициализирован, отключаем его
  if (k) {
    k.destroy(); 
  }
});

onMounted(() => {
  // Вызываем инициализацию для первой загрузки, если нужно
});

</script>

<style scoped>
/* Стили для основного приложения */
button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
