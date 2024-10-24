<template>

</template>

<script setup lang="ts">
import kaboom from 'kaboom';

const k = kaboom({background: [0,0,0]})

k.loadSprite('enemy', './sprites/Shardsou.png', {
  // sliceX: 90,
  // sliceY: 95,
})

k.add([
k.sprite('enemy'),
  k.pos(100,100),
  k.scale(),
  k.body(),
  k.area(),
  'enemy',
])
</script>

