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
        'y': 1,
        'width': 25,
        'height': 55,
        // sliceX: 1,
        // sliceY: 1
    },
    'skull': {
        'x': 5,
        'y': 85,
        'width': 26,
        'height': 25,

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
    'ladder_lvlTwo': {
       'x': 290,
       'y': 95,
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
    'floor_stone': {
        'x': 25,
        'y': 135,
        'width': 200,
       'height': 200, 
       sliceX: 4,
       sliceY: 6,
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

//LVL 1
// k.scene("Principal", ({levelId} = {levelId: 0}) => {


//     const levels = [

// [
// "            ",
// "ctttttttttttd",
// "le          r",
// "l           r",
// "l           r",
// "l           r",
// "l         j r",
// "l           r",
// "l           r",
// "lppppprwwwwwwb",
// "l     r",
// "l     tttttttttttttd",
// "l                  r",
// "l            j     r",
// "l                  r",
// "l                  r",
// "l            g     r",
// "l                  r",
// "l          j       r",
// "l                  r",
// "l j                r",
// " awwwwwwwwwwwwwwwwwwb",  
// ],

// [
            
// "                         ",
// "cttttttttttttttttttttttttd",
// "l                       r",
// "l                       r",
// "l                       r",
// "l                       r",
// "l                       r",
// "l                       atttttd",
// "l            cttttd          r",
// "l            r   l           r",
// "l            r   l           r",
// "l            r   l     g     r",
// "l            r   l           r",
// "l            r   l           r",
// "l            r   l       rwwwb",
// "l            r   l       r",
// "l            r   l       r",
// "awwwwwwwwwwwwb   awwwwwwwb",
// ],

//     ]
// }

 
// k.addLevel([
// "            ",
// "            ",
// "            ",
// "            ",
// "            ",
// "            ",
// "            ",
// "      ",
// "      ",
// "      ",
// "                   ",
// "                   ",
// "                   ",
// "                   ",
// "                   ",
// "                   ",
// "                   ",
// "                   ",
// "                   ",
// ], {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         " ": () => [
//             k.sprite('floor', {frame: ~~k.rand(18)}),
//             k.pos(600,100),
//             // k.area(),
//             // k.scale(1.5)
//         ]
//     }
// })

// const lvlOne = k.addLevel(
//     [
// "            ",
// "ctttttttttttd",
// "le          r",
// "l           r",
// "l           r",
// "l           r",
// "l         j r",
// "l           r",
// "l           r",
// "lppppprwwwwwwb",
// "l     r",
// "l     tttttttttttttd",
// "l                  r",
// "l            j     r",
// "l                  r",
// "l                  r",
// "l            g     r",
// "l                  r",
// "l          j       r",
// "l                  r",
// "l j                r",
// " awwwwwwwwwwwwwwwwwwb",  
//     ],

//     {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         't': () => [
//             k.sprite('wall-top'),
//             k.pos(600,40),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'd': () => [
//             k.sprite('wall-topLeft'),
//             k.pos(600,40),
//         ],
//         'c': () => [
//             k.sprite('wall-topRight'),
//             k.pos(600,40),
//         ],
//         'l': () => [
//             k.sprite('wall-Left'),
//             k.pos(600,40),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'r': () => [
//             k.sprite('wall-Right'),
//             k.pos(600,40),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'w': () => [
//             k.sprite('wall-Bottom'),
//             k.pos(568,36),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'b': () => [
//             k.sprite('wall-BotR'),
//             k.pos(570,36),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'a': () => [
//             k.sprite('wall-BotL'),
//             k.pos(568,36),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'g': () => [
//             k.sprite('ladder'),
//             k.pos(650, 30)
//         ],
//         'e': () => [
//         k.sprite('kid'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true}),
//         ],
//         'j': () => [
//         k.sprite('skull'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true})
//         ],
//     }
// }
// )

// k.addLevel([
// "_________________________",
// "|                       |",
// "|                       |",
// "|                       |",
// "|                       |",
// "|                       |",
// "|                       |",
// "|            |___|            ",
// "|            |___|            ",
// "|            |___|            ",
// "|            |___|            ",
// "|            |___|            ",
// "|            |___|            ",
// "|            |___|       ",
// "|            |___|       ",
// "|            |___|       ",

// ], {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         " ": () => [
//             k.sprite('floor_stone', {frame: ~~k.rand(4)}),

//             k.pos(600,100),
//             // k.area(),
//             // k.scale(1.5)
//         ]
//     }
// })


// const lvlTwo = k.addLevel(
//     [
            
// "                         ",
// "cttttttttttttttttttttttttd",
// "l                       r",
// "l                       r",
// "l                       r",
// "l                       r",
// "l                       r",
// "l                       atttttd",
// "l            cttttd          r",
// "l            r   l           r",
// "l            r   l           r",
// "l            r   l     g     r",
// "l            r   l           r",
// "l            r   l           r",
// "l            r   l       rwwwb",
// "l            r   l       r",
// "l            r   l       r",
// "awwwwwwwwwwwwb   awwwwwwwb",
//     ],
//  {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         't': () => [
//             k.sprite('wall-top'),
//             k.pos(605,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'd': () => [
//             k.sprite('wall-topLeft'),
//             k.pos(585,70),
//         ],
//         'c': () => [
//             k.sprite('wall-topRight'),
//             k.pos(605,70),
//         ],
//         'l': () => [
//             k.sprite('wall-Left'),
//             k.pos(605,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'r': () => [
//             k.sprite('wall-Right'),
//             k.pos(615,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'w': () => [
//             k.sprite('wall-Bottom'),
//             k.pos(600,69),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'b': () => [
//             k.sprite('wall-BotR'),
//             k.pos(620,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'a': () => [
//             k.sprite('wall-BotL'),
//             k.pos(605,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'g': () => [
//             k.sprite('ladder_lvlTwo'),
//             k.pos(650, 30)
//         ],
//         'e': () => [
//         k.sprite('kid'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true}),
//         ],
//         'j': () => [
//         k.sprite('skull'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true})
//         ],
//     }
//  }
//  )

// k.addLevel([
// "|                  |____|         ",
// "|                  |____|         ",
// "|                                 ",
// "|                                 ",
// "|                                 ",
// "|                  |____|         ",
// "|                  |____|         ",
// "|                  |____|         ",
// "|                  |____|         ",
// "|______|    |___________|         ",
// "|______|    |___________|         ",
// "|______|    |___________|         ",
// "|______|    |___________|         ",
// "|______|    |_____________________",
// "|______|    |_____________________|",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// ], {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         " ": () => [
//             k.sprite('floor_stone', {frame: ~~k.rand(4)}),

//             k.pos(600,100),
//             // k.area(),
//             // k.scale(1.5)
//         ]
//     }
// })

// const lvlTwo = k.addLevel(
//     [
// "ctttttttttttttttttttd___cttttttttttd",            
// "l                  r____l         r",
// "l                  rttttl         r",
// "l                                 r",
// "l                                 r",
// "l                                 r",
// "l                  rwwwwl         r",
// "l                  r____l         r",
// "l                  r____l         r",
// "l                  r____l         r",
// "awwwwwww    wwwwwwwb____l         r",
// "|______l    r___________l         r",
// "|______l    r___________l         r",
// "|______l    r___________l         r",
// "|______l    r___________awwwwwwwwwb",
// "|___cttl    rttttd________________|",
// "|___l           r",
// "|___l           r",
// "|___l           r",
// "|___l           r",
// "|___l           r",
// "|___l           r",
// "|___l      g    r",
// "|___l           r",
// "|___l           r",
// "|___awwwwwwwwwwwb",
//     ],
//  {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         't': () => [
//             k.sprite('wall-top'),
//             k.pos(605,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'd': () => [
//             k.sprite('wall-topLeft'),
//             k.pos(585,70),
//         ],
//         'c': () => [
//             k.sprite('wall-topRight'),
//             k.pos(605,70),
//         ],
//         'l': () => [
//             k.sprite('wall-Left'),
//             k.pos(605,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'r': () => [
//             k.sprite('wall-Right'),
//             k.pos(615,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'w': () => [
//             k.sprite('wall-Bottom'),
//             k.pos(600,69),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'b': () => [
//             k.sprite('wall-BotR'),
//             k.pos(620,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'a': () => [
//             k.sprite('wall-BotL'),
//             k.pos(605,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'g': () => [
//             k.sprite('ladder_lvlTwo'),
//             k.pos(650, 30)
//         ],
//         'e': () => [
//         k.sprite('kid'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true}),
//         ],
//         'j': () => [
//         k.sprite('skull'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true})
//         ],
//     }
//  }
//  )

k.addLevel([
"    __    ",
"   ____   ",
"   ____   ",
"          |____|         ",
"          |______|       ",
"          |______|       |__|       ",
"          |____|         |__|       ",
"          |____|         |__|       ",
"                         |__|       ",
"                         |__|       ",
"                         |____|   ",
"__        |____|       |______|   ",
"__        |____|       |______|   ",
"__        |____|       |______|   ",
"          |____|         |____|   ",
"          |____|         |____|   ",
"    __    |____|                  ",
"   ||||   |____|                  ",
"   |__|   |____|                  ",

], {
    tileHeight: 32,
    tileWidth: 32,
    tiles: {
        " ": () => [
            k.sprite('floor_stone', {frame: ~~k.rand(4)}),

            k.pos(100,100),
            // k.area(),
            // k.scale(1.5)
        ]
    }
})


const lvlTwo = k.addLevel(
    [
"cttttd     ",
"   __rl_   ",
"  __wba_   ",
"   r__l    ",
"  __rww_   ",
"          |____|         ",
"          |______|       ",
"          |______|       |__|       ",
"          |____|         |__|       ",
"          |____|         |__|       ",
"                         |__|       ",
"                         |__|       ",
"                         |____|   ",
"__        |____|       |______|   ",
"__        |____|       |______|   ",
"__        |____|       |______|   ",
"          |____|         |____|   ",
"          |____|         |____|   ",
"    __    |____|                  ",
"   ||||   |____|                  ",
"   |__|   |____|                  ",

    ],
 {
    tileHeight: 32,
    tileWidth: 32,
    tiles: {
        't': () => [
            k.sprite('wall-top'),
            k.pos(70,70),
            k.area(),
            k.body({isStatic:true})
        ],
        'd': () => [
            k.sprite('wall-topLeft'),
            k.pos(70,70),
        ],
        'c': () => [
            k.sprite('wall-topRight'),
            k.pos(70,70),
        ],
        'l': () => [
            k.sprite('wall-Left'),
            k.pos(100,70),
            k.area(),
            k.body({isStatic:true})
        ],
        'r': () => [
            k.sprite('wall-Right'),
            k.pos(70,70),
            k.area(),
            k.body({isStatic:true})
        ],
        'w': () => [
            k.sprite('wall-Bottom'),
            k.pos(70,69),
            k.area(),
            k.body({isStatic:true})
        ],
        'b': () => [
            k.sprite('wall-BotR'),
            k.pos(73,70),
            k.area(),
            k.body({isStatic:true})
        ],
        'a': () => [
            k.sprite('wall-BotL'),
            k.pos(100,70),
            k.area(),
            k.body({isStatic:true})
        ],
        'g': () => [
            k.sprite('ladder_lvlTwo'),
            k.pos(60, 80)
        ],
        'e': () => [
        k.sprite('kid'),
        k.pos(620,30),
        k.scale(1.2),
        k.area(),
        k.body({isStatic:true}),
        ],
        'j': () => [
        k.sprite('skull'),
        k.pos(620,30),
        k.scale(1.2),
        k.area(),
        k.body({isStatic:true})
        ],
    }
 }
 )


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
  k.pos(700,300),
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



</script>

<style scoped>
</style>