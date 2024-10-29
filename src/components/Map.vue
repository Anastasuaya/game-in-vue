<template>

</template>

<script setup lang="ts">
import kaboom from 'kaboom';
import { onMounted } from "vue";

onMounted(() => {
  const k = kaboom({ background: [0, 0, 0] });

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
    k.body(),
    'wall'
])

k.add([
    k.sprite('ladder'),
    k.pos(400,30),
    k.scale(0.9),
    k.area(),
    'ladder'
])
})
</script>

<style scoped>


</style>