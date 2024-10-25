<template>
<div id="app">
<Intro 
v-if="!isGameStarted" 
@startGame="handleStartGame"
@opSettings="opSettings"
@opHelp="opHelp"
></Intro>
<Setting v-if="isSettinsOpen" @close="closeSet"></Setting>
<Help v-if="isHelpOpen" @close="closeHelp"></Help>
<div v-else>
<Player></Player>  
</div>
</div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import Intro from './components/Intro.vue';
import Player from './components/Player.vue';
import Setting from './components/Setting.vue';
import Help from './components/Help.vue';

//Начало игры
const isGameStarted = ref(false)
const isSettinsOpen = ref(false)
const isHelpOpen = ref(false)

//Обработка кнопок
//Начало игры
const handleStartGame = () => {
    isGameStarted.value = true
}

//Открытие настроек
const opSettings = () => {
    isSettinsOpen.value = true
}
//Закрытие настроек
const closeSet = () => {
    isSettinsOpen.value = false
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
