<template>
<div></div>
</template>

<script setup lang="ts">
import kaboom from 'kaboom';
import {getLevels} from './../lib/levels'

const props = defineProps(['isGameStarted'])

const k = kaboom({background: [0,0,0]})
const {levels,tilesForMap} = getLevels(k)
console.log(tilesForMap)
// --- СПРАЙТЫ ---

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
    'obstacle': {
        'x': 200,
        'y': 240,
        'width': 128,
       'height': 32, 
    },

})

// --- SCENE ---
k.scene("game", ({ levelIndex }) => {
    k.addLevel(levels[levelIndex], tilesForMap)



    // --- cat ---
    const cat_HEALTH = 200;
    let cat = k.add([
        k.sprite('cat'),
        k.pos(200, -150),
        k.scale(2),
        k.area(),
        k.body(),
        k.health(cat_HEALTH),
        k.z(1),
        'cat',
    ])
    const fallingCat = k.add([
        k.sprite('cat'),
        k.pos(200, -100),
        k.scale(2),
        k.area(),
        k.z(1),
        'fallingCat',
    ])
    cat.play('idle')





// --- УПРАВЛЕНИЕ ИГРОКОМ ---

let left = false
let right = false
let up = false
let down = false
let fall = false 

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
//-------------------------------------------

// --- ДИАЛОГИ ---


// --- LEVELS ---
//-------------------------------------------
//--- LEVEL ONE ---
if(levelIndex === 0) {
    // --- ПАДЕНИЕ КОТА ---
    k.onUpdate('cat', () => {
    if (props.isGameStarted && !fall) {   
        fall = true
        fallingCat.play("fall")
        k.tween(fallingCat.pos, k.vec2(300, 150), 1, (p) => {
            fallingCat.pos = p
        })
        setTimeout(()=>{
            cat.pos = k.vec2(300,150)
            fallingCat.play('idle')
            fallingCat.destroy()
            cat.play('idle')
        },1000)
    }
})
cat.onCollide('ladder_lvlTwo', ()=> {
    if (props.isGameStarted) {
        levelIndex = 1
        k.go("game", { levelIndex: levelIndex },)
        
    }
 })

// NPC
// --- BAT ---
const bat = k.add([
k.sprite('bat'),
    k.pos(350,300),
    k.scale(2),
    k.z(2),
    'bat'
])
bat.play('walk')

let speed = 100
let direction = 1
let yDirection = 1

k.onUpdate(() => {
    if(props.isGameStarted){
      bat.pos.x += speed * direction * k.dt() 
      bat.pos.y += speed * yDirection * k.dt() 
    if (bat.pos.x > 500) { 
        direction = -1
        bat.flipX = true
    } else if (bat.pos.x < 200) { 
        direction = 1 
        bat.flipX =false
    }
    if (bat.pos.y > 300) { 
        yDirection = -1
        bat.flipX = true
    } else if (bat.pos.y < 250) { 
        yDirection = 1 
        bat.flipX =false
    }
    }
})

//--- OBSTACLES ---
k.add([
    k.sprite('obstacle'),
    k.pos(200,400),
    k.body(),
    k.area(),
])
}

//--- LEVEL TWO ---
if(levelIndex === 1) {
    cat.pos = k.vec2(300, 250)
    cat.onCollide('ladder_lvlThree', () => {
    if (props.isGameStarted) {
        levelIndex = 2
        k.go("game", { levelIndex: levelIndex })
    }
})

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
}


//--- LEVEL THREE---
if(levelIndex === 2){
    cat.pos = k.vec2(300, 250)
cat.onCollide('ladder_lvlFour', () => {
    if (props.isGameStarted) {
        levelIndex = 3
        k.go("game", { levelIndex: levelIndex })
    }
})

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

}

//--- LEVEL FOUR ---
if(levelIndex === 3){
    cat.pos = k.vec2(300, 250)
}

//-------------------------------------------



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