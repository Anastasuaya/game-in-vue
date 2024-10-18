<template>
 <div id="game-container"></div> 
</template>

<script setup lang="ts">

import kaboom from 'kaboom'; 
 
const k = kaboom({ global: true, background: [0,0,0] }); 

 
// Загрузка спрайтов 
k.loadSprite('Cat_walk_1', './sprites/Cat_walk_forward_1.png'); 
k.loadSprite('Cat_walk_2', './sprites/Cat_walk_forward_2.png'); 
k.loadSprite('Cat_walk_3', './sprites/Cat_walk_forward_3.png'); 
k.loadSprite('Cat_walk_4', './sprites/Cat_walk_forward_4.png'); 
k.loadSprite('Cat_back_1', './sprites/Cat_walk_back_1.png')
k.loadSprite('Cat_side_1', './sprites/Cat_walk_side_4.png')
k.loadSprite('Cat_walk_side_right_1', './sprit es/Cat_walk_side_rigth_1.png')
k.loadSprite('Cat_jump_1', './sprites/Cat_jump_1.png')
k.loadSprite('floor', './map/level_one_floor.png'); 
k.loadSprite('wall', './map/level_one_wall.png');
k.loadSprite('ladder', './map/level_one_ladder.png');


//Создание background'а
 k.add([
  k.sprite('floor'),
  k.pos(450,70),
  k.scale(0.8)
])

k.add([
  k.sprite('wall'),
  k.pos(450,70),
  k.scale(0.8)
])



// Создание игрового объекта (персонажа) 
 
 const player1 = k.add([ 
  k.sprite('Cat_walk_1'), 
  k.pos(-70, -510), 
  k.area(), 
  k.body(), 
  k.scale(2)
]);

// Управление игроком 
k.onKeyDown('left', () => { 
  player1.move(-100, 0); 
  player1.use(k.sprite('Cat_side_1'))
}); 
k.onKeyDown('right', () => { 
  player1.move(100, 0); 
  player1.use(k.sprite('Cat_walk_side_right_1'))
}); 
k.onKeyDown('up', () => { 
  player1.move(0, -100); 
  player1.use(k.sprite('Cat_back_1'))
}); 
k.onKeyDown('down', () => { 
  player1.move(0, 100); 
  player1.use(k.sprite('Cat_walk_2'))
});
k.onKeyDown("space", () => {
 player1.jump()

})




 

</script> 


<style scoped>
</style>