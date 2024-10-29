<template>
<div></div>
</template>

<script setup lang="ts">
import kaboom from 'kaboom';


const k = kaboom({background: [0,0,0]})

//Загрузка спрайтов
//Персонажи
k.loadSprite('cat', '/sprites/cat_sprite.png', {
  sliceX: 4,
  sliceY: 6,
  anims: {
      idle: {from: 0, to: 3, loop: false },
      Forward: {from: 4, to: 7, loop: true  },
      SideL: {from: 8, to: 11, loop: true  },
      Back: {from: 12, to: 15, loop: true  },
      SideR: {from: 16, to: 19, loop: true  },
      jump: {from: 20, to: 23, loop: false },
      fall: {from: 0, to: 0, loop: false },
  }
})

//Уровни
k.loadSprite('floor', '/map/level_one_floor.png')
k.loadSprite('wall', '/map/level_one_wall.png')
k.loadSprite('ladder', '/map/level_one_ladder.png')

k.add([
    k.sprite('floor'),
    k.pos(400,30),
    k.scale(0.9),
    k.area(), 
])

k.add([
    k.sprite('wall'),
    k.pos(400,30),  
    k.scale(0.9),
    k.area(),
    'wall'
])

k.add([
    k.sprite('ladder'),
    k.pos(400,30),
    k.scale(0.9),
    k.area(),
    'ladder'
])


const cat = k.add([
  k.sprite('cat'),
  k.pos(550,100),
  k.scale(2),
  k.body(),
  k.area(),
  'cat',
])
 

k.onKeyDown("left", () => {
    cat.move(-100, 0)
    cat.play('SideL')
})
k.onKeyDown("up", () => {
    cat.move(0, -100)
    cat.play('Back')
})
k.onKeyDown("right", () => {
    cat.move(100, 0)
    cat.play('SideR')
})
k.onKeyDown("down", () => {
    cat.move(0, 100)
    cat.play('Forward')
})

cat.onCollide("wall", () => {
})


</script>

<style scoped>
/* Убедитесь, что стиль div не влияет на размер канваса или компонентов */
div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Если нужно, чтобы события мыши не производили действие на этот div */
}
</style>