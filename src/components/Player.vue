<template>
<div></div>
</template>

<script setup lang="ts">
import kaboom from 'kaboom';

const props = defineProps(['isGameStarted'])

const k = kaboom({background: [0,0,0]})

//Загрузка спрайтов
//Персонажи
k.loadSprite('cat', '/sprites/cat_sprite.png', {
  sliceX: 4,
  sliceY: 9,
  anims: {
      idle: {from: 0, to: 3, loop: false },
      Forward: {from: 4, to: 7, loop: true  },
      SideL: {from: 8, to: 11, loop: true  },
      Back: {from: 12, to: 15, loop: true  },
      SideR: {from: 16, to: 19, loop: true  },
      idleBack: { from: 24, to: 27, loop: false},
      idleR: {from: 28, to: 31, loop: false },
      idleL: {from: 32, to: 35, loop: false }
  }
})

//НПС
k.loadSprite('fox', '/sprites/Fox.png', {
    sliceX: 14,
    sliceY: 7,
    anims: {
        idle: {from: 0, to: 4, loop: false},
        look: {from: 5, to: 18, loop: true},
        run: { from: 19 , to: 26 , loop: true},
    }
})

k.loadSprite('bat','/sprites/Bat.png', {
    sliceX: 5,
    sliceY: 3,
    anims: {
        walk: {from: 5, to: 9, loop: true }
    }
})

k.loadSprite('cobra', '/sprites/Cobra.png', {
    sliceX: 8,
    sliceY: 5,
    anims: {
        idle: {from: 0, to: 7, loop: true }
    }
})

//Уровни
// k.loadSpriteAtlas('/map/base_tileset.png', {
//     'floor': {
        
//     }
// })


//FOX
const fox = k.add([
    k.sprite('fox'),
    k.pos(550,100),
    k.scale(2.5),
    k.body(),
    k.area(),
    'fox'
])
fox.play('look')

//BAT
const bat = k.add([
k.sprite('bat'),
    k.pos(550,100),
    k.scale(2.5),
    k.body(),
    k.area(),
    'bat'
])
bat.play('walk')

//COBRA
const cobra = k.add([
k.sprite('cobra'),
    k.pos(550,100),
    k.scale(2.5),
    k.body(),
    k.area(),
    'cobra'
])
cobra.play('idle')


//Главный герой
const cat = k.add([
  k.sprite('cat'),
  k.pos(550,100),
  k.scale(2),
  k.body(),
  k.area(),
  'cat',
])

cat.play('idle')

let left = false
let right = false
let up = false
let down = false

k.onKeyDown("left", () => {
    if (props.isGameStarted) {
        cat.move(-100, 0)
        if (!left) {
            cat.play('SideL')
        }
        left = true
    }
})
k.onKeyRelease('left', ()=>{
    left = false
    cat.play('idleL')
})

k.onKeyDown("up", () => {
    if (props.isGameStarted) {
        cat.move(0, -100)
        if (!up) {
            cat.play('Back')
        }
        up = true
    }
})
k.onKeyRelease('up', ()=>{
    up = false
    cat.play('idleBack')
})

k.onKeyDown("right", () => {
    if (props.isGameStarted) {
        cat.move(100, 0)
        if (!right) {
            cat.play('SideR')
        }
        right = true
    }
})
k.onKeyRelease('right', ()=>{
    right = false
    cat.play('idleR')
})

k.onKeyDown("down", () => {
    if (props.isGameStarted) {
        cat.move(0, 100)
        if (!down) {
            cat.play('Forward')
        }
        down = true
    }
})
k.onKeyRelease('down', ()=>{
    down = false
    cat.play('idle')
})




//Уровни

// k.addLevel([
//     "          ",
//     "          ",
//     "          ",
//     "          ",
//     "          ",
//     "          ",
//     "          ",
//        "    ",
//        "    ",
// "                 ",
// "                 ",
// "                 ",
// "                 ",
// "                 ",
// "                 ",
// "                 ",
// "                 ",
// "                 ",
// "                 ",
// "                 ",
// ], {

// })

// cat.onCollide("wall", (e) => {
//     console.log('wall', e)
// })


</script>

<style scoped>

</style>