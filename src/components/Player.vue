<template>
<div></div>
</template>

<script setup lang="ts">
import kaboom from 'kaboom';

const props = defineProps(['isGameStarted'])

const k = kaboom({background: [0,0,0]})

//Загрузка спрайтов
//Объекты для взаимодействия
k.loadSpriteAtlas('/objects/Objects_blood.png', {
    'kid': {
        'x': 1,
        'y': 2,
        'width':
    },
})
//Уровни
k.loadSpriteAtlas('/map/base_tileset.png', {
    'ladder': {
       'x': 290,
       'y': 3,
       'width': 96,
       'height': 96, 
    //    sliceX: 12,
    //    sliceY: 9
    },
    'floor': {
       'x': 9,
       'y': 3,
       'width': 288,
       'height': 96, 
       sliceX: 9,
       sliceY: 3,
       
    },
    'wall-top': {
       'x': 60,
       'y': 194,
       'width': 32,
       'height': 32, 
    },
    'wall-topLeft': {
        'x': 95,
       'y': 194,
       'width': 32,
       'height': 32, 
    },
    'wall-topRight': {
        'x': 5,
       'y': 194,
       'width': 32,
       'height': 32, 
    },
    'wall-Left': {
        'x': 5,
       'y': 200,
       'width': 32,
       'height': 32, 
    },
    'wall-Right': {
        'x': 96,
       'y': 209,
       'width': 32,
       'height': 32, 
    },
    'wall-Bottom': {
        'x': 25,
       'y': 290,
       'width': 64,
       'height': 32, 
    },
    'wall-BotR': {
        'x': 100,
       'y': 290,
       'width': 32,
       'height': 32, 
    },
    'wall-BotL': {
        'x': 1,
       'y': 290,
       'width': 32,
       'height': 32, 
    },

})


k.addLevel([
"            ",
"            ",
"            ",
"            ",
"            ",
"            ",
"            ",
"      ",
"      ",
"      ",
"                   ",
"                   ",
"                   ",
"                   ",
"                   ",
"                   ",
"                   ",
"                   ",
"                   ",
], {
    tileHeight: 32,
    tileWidth: 32,
    tiles: {
        " ": () => [
            k.sprite('floor', {frame: ~~k.rand(18)}),
            k.pos(600,100),
            // k.area(),
            // k.scale(1.5)
        ]
    }
})

 k.addLevel ([
"            ",
"ctttttttttttd",
"le          r",
"l           r",
"l           r",
"l           r",
"l           r",
"l           r",
"l           r",
"lppppprwwwwwwb",
"l     r",
"l     tttttttttttttd",
"l                  r",
"l                  r",
"l                  r",
"l                  r",
"l            g     r",
"l                  r",
"l                  r",
"l                  r",
"l                  r",
" awwwwwwwwwwwwwwwwwwb",

], {
    tileHeight: 32,
    tileWidth: 32,
    tiles: {
        't': () => [
            k.sprite('wall-top'),
            k.pos(600,40),
            k.area(),
            k.body({isStatic:true})
        ],
        'd': () => [
            k.sprite('wall-topLeft'),
            k.pos(600,40),
        ],
        'c': () => [
            k.sprite('wall-topRight'),
            k.pos(600,40),
        ],
        'l': () => [
            k.sprite('wall-Left'),
            k.pos(600,40),
            k.area(),
            k.body({isStatic:true})
        ],
        'r': () => [
            k.sprite('wall-Right'),
            k.pos(600,40),
            k.area(),
            k.body({isStatic:true})
        ],
        'w': () => [
            k.sprite('wall-Bottom'),
            k.pos(568,36),
            k.area(),
            k.body({isStatic:true})
        ],
        'b': () => [
            k.sprite('wall-BotR'),
            k.pos(570,36),
            k.area(),
            k.body({isStatic:true})
        ],
        'a': () => [
            k.sprite('wall-BotL'),
            k.pos(568,36),
            k.area(),
            k.body({isStatic:true})
        ],
        'g': () => [
            k.sprite('ladder'),
            k.pos(650, 30)
        ],
        'e': () => [
        k.sprite('kid')
        ]
    }
})

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
    //   fall: {from: 20, to: 23, loop: false},
      idleBack: { from: 24, to: 27, loop: false},
      idleR: {from: 28, to: 31, loop: false },
      idleL: {from: 32, to: 35, loop: false },

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



//FOX
// const fox = k.add([
//     k.sprite('fox'),
//     k.pos(550,100),
//     k.scale(2.5),
//     k.body(),
//     k.area(),
//     'fox'
// ])
// fox.play('look')

//BAT
// const bat = k.add([
// k.sprite('bat'),
//     k.pos(550,100),
//     k.scale(2.5),
//     k.body(),
//     k.area(),
//     'bat'
// ])
// bat.play('walk')

//COBRA
// const cobra = k.add([
// k.sprite('cobra'),
//     k.pos(550,100),
//     k.scale(2.5),
//     k.body(),
//     k.area(),
//     'cobra'
// ])
// cobra.play('idle')


//Главный герой
const cat = k.add([
  k.sprite('cat'),
  k.pos(700,100),
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

// k.onUpdate("cat", () => {
//     cat.move(0, 100)
//     if (cat.pos.x < 50) {
//     } 
// })





</script>

<style scoped>

@keyframes fall {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(200px); /* Падает вниз */
  }
  100% {
    transform: translateY(0); /* Возвращается на место */
  }
}
.cat {
  animation: fall 0.5s ease-in-out forwards; /* Применение анимации */
}
</style>