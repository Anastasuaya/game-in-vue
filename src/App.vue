<template>
<div id="app">
<Intro 
v-if="!isGameStarted && !isSettingsOpen && !isHelpOpen"
@startGame="handleStartGame"
@opSettings="opSettings"
@opHelp="opHelp"
></Intro>
<Setting v-if="isSettingsOpen" @close="closeSet"></Setting>
<Help v-if="isHelpOpen" @close="closeHelp"></Help>
<div v-else>
<Player 
  :isGameStarted="isGameStarted"
></Player>

</div>
</div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import Intro from './components/Mintro.vue';
import Player from './components/Player.vue';
import Setting from './components/Msetting.vue';
import Help from './components/Mhelp.vue';



//Начало игры
const isGameStarted = ref(false)
const isSettingsOpen = ref(false)
const isHelpOpen = ref(false)

//Обработка кнопок
// Начало игры
const handleStartGame = () => {
    isGameStarted.value = true
    document.querySelector('canvas')?.focus()
}

//Открытие настроек
const opSettings = () => {
    isSettingsOpen.value = true
}
//Закрытие настроек
const closeSet = () => {
    isSettingsOpen.value = false
}
//Открытие помощи
const opHelp = () => {
    isHelpOpen.value = true
}
//Закрытие помощи
const closeHelp = () => {
    isHelpOpen.value = false
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
