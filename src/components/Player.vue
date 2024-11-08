<template>
<div></div>
</template>

<script setup lang="ts">
import kaboom from 'kaboom';

const props = defineProps(['isGameStarted'])

const k = kaboom({background: [0,0,0]})

// --- СПРАЙТЫ ---

// --- ПЕРСОНАЖИ ---
// --- ИГРОК ---
k.loadSprite('cat', '/sprites/cat_sprite.png', {
  sliceX: 4,
  sliceY: 9,
  anims: {
      idle: {from: 0, to: 3, loop: false },
      Forward: {from: 4, to: 7, loop: true  },
      SideL: {from: 8, to: 11, loop: true  },
      Back: {from: 12, to: 15, loop: true  },
      SideR: {from: 16, to: 19, loop: true  },
      fall: {from: 20, to: 23, loop: false},
      idleBack: { from: 24, to: 27, loop: false},
      idleR: {from: 28, to: 31, loop: false },
      idleL: {from: 32, to: 35, loop: false },

  }
})

// --- НПС ---
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



// --- BACKGROUND ---
k.loadSprite('bacground_lvl1', '/map/lvl1.png')

// --- ОБЪЕКТЫ ДЛЯ ВЗАИМОДЕЙСТВИЯ ---
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
// --- ТАЙЛЫ ДЛЯ КАРТЫ ---
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

// --- LVL 1 ---


const levels = [
    [
"_cttttttttttd",
"l           r",
"l           r",
"l           r",
"l           r",
"l           r",
"l           r",
"l           r",
"l     rwwwwwb",
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
"awwwwwwwwwwwwwwwwwwb",  
],
[            
"                         ",
"cttttttttttttttttttttttttd",
"l                       r",
"l                       r",
"l                       r",
"l                       r",
"l                       r",
"l                       atttttd",
"l            cttttd          r",
"l            r   l           r",
"l            r   l           r",
"l            r   l     g     r",
"l            r   l           r",
"l            r   l           r",
"l            r   l       rwwwb",
"l            r   l       r",
"l            r   l       r",
"awwwwwwwwwwwwb   awwwwwwwb",
],
[
"ctttttttttttttttttttd___cttttttttttd",            
"l                  r____l         r",
"l                  rttttl         r",
"l                                 r",
"l                                 r",
"l                                 r",
"l                  rwwwwl         r",
"l                  r____l         r",
"l                  r____l         r",
"l                  r____l         r",
"awwwwwww    wwwwwwwb____l         r",
"|______l    r___________l         r",
"|______l    r___________l         r",
"|______l    r___________l         r",
"|______l    r___________awwwwwwwwwb",
"|___cttl    rttttd________________|",
"|___l           r",
"|___l           r",
"|___l           r",
"|___l           r",
"|___l           r",
"|___l           r",
"|___l      g    r",
"|___l           r",
"|___l           r",
"|___awwwwwwwwwwwb",
],
[
" ctttd ctttd",
"l  __rl_   r",
"l __wra_   r",
"l   r_l    r    ctttttttttd           ",
"l __rww_   r   l          r           ",
"l         |r___l          r   cttttttd",
"l         |r___l          r  l       r",
"l         |r___l         |r_|l       r",
"l         awwwwwb        |r_|l       r",
"l         |____|         |r_|l       r",
"l                        |r_|l       r",
"l                       cwb_|awwd  cwb",
"l          cwwwwwd      r|____|l   r",
"l          r___|l      |r_____|l   r",
"l          r___|l      attd___|l   r",
"l          r___|l      |__r___|l   r",
"l          r___|l        |r___|l   r",
"l          r___|l        awwwwwwb  r",
"l          r___|l                  r",
"l          r___|l                  r",
"awwwwwwwwwwb___|awwwwwwwwwwwwwwwwwwb",
],
]
const tilesForMap = {
    tileHeight: 32,
    tileWidth: 32,
    pos: k.vec2(64, 64),
    tiles: {
        " ": () => [
            k.sprite('floor_stone', {frame: ~~k.rand(4)}),
            k.pos(70,70),
            k.z(-1)
    ],
    't': () => [
            k.sprite('wall-top'),
            k.pos(70,71),
            k.area({collisionIgnore: ['cat']}),
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
            k.pos(60, 70),
            'ladder_lvls'
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
    },

}

k.scene("game", ({ levelIndex }) => {
    k.addLevel(levels[levelIndex], tilesForMap);

    const cat = k.add([
        k.sprite('cat'),
        k.pos(200, -100),
        k.scale(2),
        k.body(),
        k.area(),
        k.z(1),
        'cat',
    ]);
    cat.play('idle');
 
    
    
let left = false
let right = false
let up = false
let down = false

// --- УПРАВЛЕНИЕ ---
let fall = false; 

k.onUpdate('cat', () => {
    if (props.isGameStarted && !fall) {   
        fall = true
        cat.play("fall")
        k.tween(cat.pos, k.vec2(300, 150), 1, (p) => {
            cat.pos = p
        })
    }
})

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
    if(props.isGameStarted) {
         down = false
    cat.play('idle')   
    }

})


});


function start() {
    k.go("game", {
        levelIndex: 0,
        score: 0,
        lives: 3,
    });
}

start();




// --- FOX ---
// const fox = k.add([
//     k.sprite('fox'),
//     k.pos(550,100),
//     k.scale(2.5),
//     k.body(),
//     k.area(),
//     'fox'
// ])
// fox.play('look')

// --- BAT ---
// const bat = k.add([
// k.sprite('bat'),
//     k.pos(550,100),
//     k.scale(2.5),
//     k.body(),
//     k.area(),
//     'bat'
// ])
// bat.play('walk')

// --- COBRA ---
// const cobra = k.add([
// k.sprite('cobra'),
//     k.pos(550,100),
//     k.scale(2.5),
//     k.body(),
//     k.area(),
//     'cobra'
// ])
// cobra.play('idle')




</script>

<style scoped>
</style>