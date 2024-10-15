<template>


</template>
<script setup lang="ts">

import kaboom from 'kaboom'; 

const k = kaboom()


k.loadSprite('Cat_walk_1', './sprites/Cat_walk_forward_1.png'); 
k.loadSprite('Cat_walk_2', './sprites/Cat_walk_forward_2.png'); 
k.loadSprite('Cat_walk_3', './sprites/Cat_walk_forward_3.png'); 
k.loadSprite('Cat_walk_4', './sprites/Cat_walk_forward_4.png'); 
k.loadSprite('Cat_back_1', './sprites/Cat_walk_back_1.png')
k.loadSprite('Cat_side_1', './sprites/Cat_walk_side_4.png')
k.loadSprite('Cat_walk_side_right_1', './sprites/Cat_walk_side_rigth_1.png')
k.loadSprite('Cat_jump_1', './sprites/Cat_jump_1.png')
k.loadSprite('background', './map/level_two.png'); 
</script>