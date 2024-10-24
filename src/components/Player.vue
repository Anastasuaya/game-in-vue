<template>

</template>

<script setup lang="ts">
import kaboom from 'kaboom';

const k = kaboom({background: [0,0,0]})

//Загрузка спрайтов
k.loadSprite('cat', './sprites/cat_sprite.png', {
  sliceX: 4,
  sliceY: 6,
  anims: {
      idleSitDown: {from: 0, to: 3, loop: false },
      idleForward: {from: 4, to: 7, loop: true  },
      idleSideL: {from: 8, to: 11, loop: true  },
      idleBack: {from: 12, to: 15, loop: true  },
      idleSideR: {from: 16, to: 19, loop: true  },
      jump: {from: 20, to: 23, loop: false },
  }
})

const cat = k.add([
  k.sprite('cat'),
  k.pos(100,100),
  k.scale(32),
  k.body(),
  k.area(),
  'cat',
])

k.onKeyDown("left", () => {
    cat.move(-100, 0)
    cat.play('idleSideL')
})
k.onKeyDown("up", () => {
    cat.move(0, -100)
    cat.play('idleBack')
})
k.onKeyDown("right", () => {
    cat.move(100, 0)
    cat.play('idleSideR')
})
k.onKeyDown("down", () => {
    cat.move(0, 100)
    cat.play('idleForward')
})
</script>

<style scoped>

</style>