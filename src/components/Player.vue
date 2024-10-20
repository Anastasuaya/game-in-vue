<template>

</template>

<script lang="ts">
import kaboom from 'kaboom';
import { ref, onMounted } from 'vue';

const k = kaboom({background: [0,0,0]})

//Загрузка спрайтов
//Спрайты персонажа спереди
k.loadSprite('cat', './sprites/cat_sprite.png',{
  sliceX: 18,
  sliceY: 9,
  anims: {
    idleSitdown: { from: 0, to: 3, loop: false },
    idleForward: { from: 8, to: 11, loop: false },
    // idleSideL: {from: 8, to: 11, loop: true },
    // idleBack: {from: 12, to: 15, loop: true },
    // idleSideR: {from: 16, to: 19, loop: true },
    // jump: {from: 20, to: 27, loop: false }
  }
} ) 


//   sliceX: 8,
//   sliceY: 6,
//   anims: {
//     // idleSitdown: { from: 0, to: 3, loop: false },
//     idleForward: { from: 4, to: 7, loop: true },
//     idleSideL: {from: 8, to: 11, loop: true },
//     idleBack: {from: 12, to: 15, loop: true },
//     idleSideR: {from: 16, to: 19, loop: true },
//     jump: {from: 20, to: 27, loop: false }
//   }
// }) 


//Карта 1 уровень
// k.loadSprite('floor', './map/level_one_floor.png')
// k.loadSprite('wall', './map/level_one_wall.png')
// k.loadSprite('ladder', './map/level_one_ladder.png')

//Создание игрового персонажа
const cat = k.add([
  k.sprite('cat', {anim: 'idleForward'}),
  k.pos(100, 100),
  k.body(),
  k.area(),
  k.scale(2)
])
// Начальная анимация 
// let currentAnim = 'idleForward'

// Управление игроком
k.onKeyPress('left', () => {
  cat.move(-100, 0);
    cat.play('idleSideL');
});

k.onKeyPress('right', () => {
  cat.move(100, 0);
    cat.play('idleSideR');
});

k.onKeyPress('up', () => {
  cat.move(0, -100);
    cat.play('idleBack');
});

k.onKeyPress('down', () => {
  cat.move(0, 100);
    cat.play('idleForward');
});

// Обработка отпускания клавиш
// k.onKeyRelease('left', () => {
//   cat.play('idleForward');
//   currentAnim = 'idleForward';
// });

// k.onKeyRelease('right', () => {
//   cat.play('idleForward');
//   currentAnim = 'idleForward';
// });

// k.onKeyRelease('up', () => {
//   cat.play('idleForward');
//   currentAnim = 'idleForward';
// });

// k.onKeyRelease('down', () => {
//   cat.play('idleForward');
//   currentAnim = 'idleForward';
// });
</script>

<style scoped>

</style>