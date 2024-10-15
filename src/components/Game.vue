<template>
 <div id="game-container"></div> 
</template>

<script setup lang="ts">
import { ref } from 'vue';
import kaboom from 'kaboom'; 
 
const k = kaboom({ global: true, }); 

const gameContainer = ref<HTMLDivElement | null>(null)
 
// Загрузка спрайтов 
k.loadSprite('player', './sprites/Cat_walk_forward_1.png'); 
k.loadSprite('background', './map/level_two.png'); 

//Создание background'а
const phone = k.add([
  k.sprite('background'),
  k.pos(50,50),
  k.scale(0.7)
])

// Создание игрового объекта (персонажа) 
const player = k.add([ 
  k.sprite('player'), 
  k.pos(100, 100), 
  k.area(), 
  k.body(), 
  k.scale(2)
]); 
 
// Управление игроком 
k.onKeyDown('left', () => { 
  player.move(-100, 0); 
}); 
k.onKeyDown('right', () => { 
  player.move(100, 0); 
}); 
k.onKeyDown('up', () => { 
  player.move(0, -100); 
}); 
k.onKeyDown('down', () => { 
  player.move(0, 100); 
}); 
 






</script> 


<style scoped>
</style>