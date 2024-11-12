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
        idle: {from: 0, to: 7, loop: true },
        walk: {from: 8, to: 15, loop: true}
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

// --- УРОВНИ ---


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
"_cttttttttttttttttttttttd",
"l                       r",
"l                       r",
"l                       r",
"l                       r",
"l                       r",
"l                       tttttd",
"l            cttttd          r",
"l            r___l           r",
"l            r___l           r",
"l            r___l     h     r",
"l            r___l           r",
"l            r___l           r",
"l            r___l       rwwwb",
"l            r___l       r",
"l            r___l       r",
"awwwwwwwwwwwwb___awwwwwwwb",
],
[
"_ctttttttttttttttttd_____cttttttttd",            
"l                  r____l         r",
"l                  rtttttt        r",
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
"|____cttt   rtttd________________|",
"|___l           r",
"|___l           r",
"|___l           r",
"|___l           r",
"|___l           r",
"|___l           r",
"|___l      j    r",
"|___l           r",
"|___l           r",
"|___awwwwwwwwwwwb",
],
[
"_ctttttttttd",
"l          r",
"l          r",
"l          r____ctttttttttd",
"l          r___l          r",
"l          r___l          r___cttttttd",
"l          r___l          r__l       r",
"l          r___l          r__l       r",
"l          wwwwwb         r__l    o  r",
"l                         r__l       r",
"l                         r__l       r",
"l                       cwb__awwd  cwb",
"l          cwwwwwd      r|____|l   r",
"l          r___|l       r_____|l   r",
"l          r___|l       ttd___|l   r",
"l          r___|l         r___|l   r",
"l          r___|l         r___|l   r",
"l          r___|l         wwwwwwb  r",
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
            k.pos(60, 70),
            k.area(),
            'ladder_lvlTwo'
        ],
        'h': () => [
            k.sprite('ladder_lvlTwo'),
            k.pos(60, 70),
            k.area(),
            'ladder_lvlThree'
        ],
        'j': () => [
            k.sprite('ladder_lvlTwo'),
            k.pos(60, 70),
            k.area(),
            'ladder_lvlFour'
        ],
        'o': () => [
            k.sprite('ladder_lvlTwo'),
            k.pos(60, 70),
            k.area(),
            'ladder_lvlFive'
        ],
        'e': () => [
        k.sprite('kid'),
        k.pos(620,30),
        k.scale(1.2),
        k.area(),
        k.body({isStatic:true}),
        ],
    },

}

k.scene("game", ({ levelIndex }) => {
    k.addLevel(levels[levelIndex], tilesForMap)


    // --- КОТ ---
    const cat = k.add([
        k.sprite('cat'),
        k.pos(200, -100),
        k.scale(2),
        k.body(),
        k.area(),
        k.z(1),
        'cat',
    ])
    cat.play('idle')


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
//     k.pos(350,300),
//     k.scale(2),
//     k.body(),
//     k.area(),
//     'bat'
// ])
// bat.play('walk')

// --- COBRA ---
// const cobra = k.add([
// k.sprite('cobra'),
//     k.pos(200,400),
//     k.scale(2.5),
//     k.body(),
//     k.area(),
//     k.state('move', ['idle', 'walk']),
//     'cobra'
// ])
// cobra.play('idle')



// --- флаги ---
let left = false
let right = false
let up = false
let down = false
let fall = false 

// --- ПАДЕНИЕ КОТА ---

k.onUpdate('cat', () => {
    if (props.isGameStarted && !fall) {   
        fall = true
        cat.play("fall")
        k.tween(cat.pos, k.vec2(300, 150), 1, (p) => {
            cat.pos = p
        })
    }
})

// --- УПРАВЛЕНИЕ ---


k.onKeyDown("left", () => {
    if (props.isGameStarted) {
        cat.move(-140, 0)
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
        cat.move(0, -140)
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
        cat.move(140, 0)
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
        cat.move(0, 140)
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


cat.onCollide('ladder_lvlTwo', ()=> {
    if (props.isGameStarted) {
        levelIndex = 1
        k.go("game", { levelIndex: levelIndex },)
    }
 })

cat.onCollide('ladder_lvlThree', () => {
    if (props.isGameStarted) {
        levelIndex = 2
        k.go("game", { levelIndex: levelIndex })
    }
})

cat.onCollide('ladder_lvlFour', () => {
    if (props.isGameStarted) {
        levelIndex = 3
        k.go("game", { levelIndex: levelIndex })
    }
})
})



function start() {
    k.go("game", {
        levelIndex: 0,
        score: 0,
        lives: 3,
    })
}

start()





// --- ДИАЛОГИ levelID=0 ---
// const dialogs = [
//     "Sorcière, la forêt murmure d'un danger...",
//     "...une plante envahissante nommée[green] Ambroisie[/green]...",
//     "Elle ne devrait pas se trouver ici.",
//     "Les plantes envahissantes comme[green] Ambroisie[/green] nuisent à la forêt...",
//     " étouffant la vie de nos espèces natives.",
//     "Sorcière, je t'en supplie, débarrasse-nous-en!",
//     "Le temps presse et la forêt souffre."
// ];


// let curDialog = 0;

// Speech Bubble
// let speechBubble = k.add([
//     k.rect(200, 36, { radius: 8 }),  
//     k.pos(-100, -100),
//     k.anchor("center"),
//     k.color(0, 0, 0),
//     k.opacity(0.9),
//     k.area(),
//     "speechBubble"
// ]);

// //speech bubble triangle
// let triangleVisible = false;

// function drawSpeechBubbleTriangle() {
//     if (triangleVisible) {
//         drawTriangle({
//             p1: k.vec2(0, 0),
//             p2: k.vec2(20, 12),
//             p3: k.vec2(17, 0),
//             pos: k.vec2(210, height()/2-12), 
//             color: rgb(0, 0, 0),
//             opacity: 0.9,
//         });
//     }
// }

// onDraw(() => {
//     drawSpeechBubbleTriangle();
// });



// //speech bubble ↵ instruction
// let speechBubbleInstruction = add([
//     text("↵", {
//         size: 10, 
//         font: "sans-serif",
//     }),
//     pos(-100, -100),
//     anchor("center"),
//     color(0, 0, 0),
//     z(3),
//     area(),
// ]);

// //speech bubble ↵ instruction bubble
// let speechBubbleInstructionBubble = add([
//     rect(10, 10, { radius: 8 }),
//     pos(-100, -100),
//     anchor("center"),
//     color(255, 255, 255),
//     z(2),
//     area(),
// ]);




// // Text inside the Speech Bubble
// const speechText = add([
//     text(dialogs[curDialog], {
//         size: 40, 
//         width: 700, 
//         align: "center",
//         font: "alagard",
//         styles: {
//             "green": (idx, ch) => ({
//                 color: rgb(79, 152, 84),
//             }),
//         }
//     }),
//     pos(speechBubble.pos.x, speechBubble.pos.y),
//     anchor("center"),
//     color(255, 255, 255),
//     scale(0.25)
// ]);


// не диалог


//function that displays or hides the elements.
// function toggleSpeechBubble() {
//     if (speechBubble.pos.x < 0) {
//         speechBubble.pos = vec2(200, height()/2-30);
//         speechText.pos = vec2(200, height()/2-30);  // Align text with bubble
//         triangleVisible = true;;
//         speechBubbleInstructionBubble.pos = vec2(299, height()/2-13);
//         speechBubbleInstruction.pos = vec2(299, height()/2-12);
//     } else {
//         speechBubble.pos = vec2(-100, -100);
//         speechText.pos = vec2(-100, -100);  // Hide text with bubble
//         triangleVisible = false;
//         speechBubbleInstructionBubble.pos = vec2(-100, -100);
//         speechBubbleInstruction.pos = vec2(-100, -100);
//     }
// }

</script>

<style scoped>
</style>