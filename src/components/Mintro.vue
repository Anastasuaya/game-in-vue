<template>
<div v-if="isVisible" class="modalOvrl">
    <div class="modalCont">
        <h2>Lux in fine</h2>
        <button @click="startGame">Play</button>
        <button @click="opSettings">Setting</button>
        <button @click="opHelp">Help</button>
    </div>
</div>
</template>

<script setup lang="ts">
import {ref, defineEmits} from 'vue'


//Состояние видимости модльного окна
const isVisible = ref(true)
const emit = defineEmits(['startGame', 'opSettings', 'opHelp'])

//Обработка нажатия кнопок
const startGame = () => {
    isVisible.value = false
    emit('startGame')
}

const opSettings = () => {
    emit('opSettings')
}

const opHelp = () => {
    emit('opHelp')
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
  /* background-color: black; */
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