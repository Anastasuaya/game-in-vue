<template>
    <div></div>
</template>

<script setup lang="ts">
import kaboom from 'kaboom'
// import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs"
import { getLevels } from './../lib/levels'
import { getSprites } from './../sprites/sprites'
import { getTiles } from './../objects/objects'
const props = defineProps(['isGameStarted'])

const k = kaboom({ background: [0, 0, 0] })
const { levels, tilesForMap } = getLevels(k)
console.log(tilesForMap)
getSprites(k)
getTiles(k)


// --- SCENE ---
k.scene("game", ({ levelIndex }) => {
    k.addLevel(levels[levelIndex], tilesForMap)

    // --- paused menu ---
    // const game = k.add([
    // 		k.timer(),
    // 	])

    // const pauseMenu = k.add([
    // 		k.rect(300, 400),
    // 		k.color(255, 255, 255),
    // 		k.outline(4),
    // 		k.anchor("center"),
    // 		k.pos(k.center().add(0, 700)),
    // 	])

    // 	pauseMenu.hidden = true
    // 	pauseMenu.paused = true

    // let curTween = null

    // k.onKeyPress("p", () => {
    //     game.paused = !game.paused
    //     if (curTween) curTween.cancel()
    //     curTween = k.tween(
    //         pauseMenu.pos,
    //         game.paused ? k.center() : k.center().add(0, 700),
    //         1,
    //         (p) => pauseMenu.pos = p,
    //         easings.easeOutElastic,
    //     )
    //     if (game.paused) {
    //         pauseMenu.hidden = false
    //         pauseMenu.paused = false
    //     } else {
    //         curTween.onEnd(() => {
    //             pauseMenu.hidden = true
    //             pauseMenu.paused = true
    //         })
    //     }
    // })

    // --- cat ---
    const cat_HEALTH = 200;
    let cat = k.add([
        k.sprite('cat'),
        k.pos(200, -150),
        k.scale(2),
        k.area({ shape: new k.Rect(k.vec2(2, 6), 25, 20) }),
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
    k.onKeyRelease('left', () => {
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
    k.onKeyRelease('up', () => {
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
    k.onKeyRelease('right', () => {
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
    k.onKeyRelease('down', () => {
        if (props.isGameStarted) {
            down = false
            cat.play('idle')
        }

    })
    //-------------------------------------------


    // --- LEVELS ---
    //-------------------------------------------
    //--- LEVELID 0 ---

    // --- ДИАЛОГИ ---

    // const CatDialogs = [
    //     'Где я?',
    //     'Наверное, нужно осмотреться',
    // ]

    // const DragonDialog = [ 
    // 'Я злой и могучий дракон!',
    //     '*рычание*',
    // ]

    // let CatCurDialog = 0
    // let DragonCurDialog = 0


    // const dialog = [
    //     { speaker: 'cat', text: 'Где я?' },
    //     { speaker: 'cat', text: 'Наверное, нужно осмотреться' },
    //     { speaker: 'cat', text: 'Кто ты?' },
    //     { speaker: 'dragon', text: 'Я злой и могучий дракон!' },
    //     { speaker: 'dragon', text: '*рычание*' },
    // ]


    
//     const dialog = [
//          [ 'cat','Где я?' ],
//         [ 'cat' ,'Наверное, нужно осмотреться'],
//         ['cat','Кто ты?'],
//         // [ 'dragon','Я злой и могучий дракон!' ],
//     ]

//     let curDialog = 0
//     function catDialog(){
//            const Bubble = k.add([
//         k.rect(k.width() - 800, 120, { radius: 32 }),
//         k.pos(k.center().x, k.height() - 90),
//         k.anchor('center'),
//         k.opacity(0.9),
//         k.outline(4),
//         k.color(),
//         // k.area(),
//         'Bubble'
//     ])

//     const Text = k.add([
//         k.text('', {
//             size: 100,
//             width: 800,
//             align: "center",
//             font: "alagard",
//         }),
//         k.pos(Bubble.pos),
//         k.anchor("center"),
//         k.color(0, 0, 0),
//         k.scale(0.5),
//         k.z(3)
//     ])

//     const circle = k.add([
//         k.rect(100, 70, { radius: 50 }),
//         k.pos(Bubble.pos.x + 520, Bubble.pos.y + 40),
//         k.anchor('center'),
//         k.color(113, 153, 191),
//         k.opacity(0.9),
//         k.area(),
//         'circle'
//     ])


//     const BubbleInstruction = k.add([
//         k.text("↵", {
//             size: 50,
//             font: "sans-serif",
//         }),
//         k.pos(circle.pos.x, circle.pos.y + 5),
//         k.anchor("center"),
//         k.color(0, 0, 0),
//         k.z(3),
//         k.area(),
//         'BubbleInstruction'
//     ])

//     k.onKeyPress('enter', ()=> {
//         	// Cycle through the dialogs
// 	curDialog = (curDialog + 1) % dialog.length
// 	updateDialog()

// })

// // Update the on screen sprite & text
// function updateDialog() {

// 	const  [char,dialogs] = dialog[curDialog]
//     cat.use(k.sprite(char))
// 	// Update the dialog text
// 	Text.text = dialogs

// }
// updateDialog()
// k.wait(3, () => {
//     k.destroy(Bubble)
//     k.destroy(Text)
//     k.destroy(BubbleInstruction)
//     k.destroy(circle)
// })
//     }

    // ------------------------------------------------------------------------------------



    if (levelIndex === 0) {
        // --- ПАДЕНИЕ КОТА ---
        k.onUpdate('cat', () => {
            if (props.isGameStarted && !fall) {
                fall = true
                fallingCat.play("fall")
                k.tween(fallingCat.pos, k.vec2(300, 150), 1, (p) => {
                    fallingCat.pos = p
                })
                setTimeout(() => {
                    cat.pos = k.vec2(300, 150)
                    fallingCat.play('idle')
                    fallingCat.destroy()
                    cat.play('idleR')
                }, 1000)
                k.wait(1.5, () => {
                    // catDialog()
                    // k.onKeyPress('enter', () => {
                    //     CatCurDialog++
                    //     const dialog = CatDialogs[CatCurDialog]
                    //     Text.text = dialog
                    // })

                })
            }
        })

        const CatOrDragonDialog = [
            [ 'dragon', 'Я злой и могучий дракон!' ],
            ['dragon', '*рычание*']
        ]

    function catDragonDialog(){
           const Bubble = k.add([
        k.rect(k.width() - 800, 120, { radius: 32 }),
        k.pos(k.center().x, k.height() - 90),
        k.anchor('center'),
        k.opacity(0.9),
        k.outline(4),
        k.color(),
        // k.area(),
        'Bubble'
    ])

    const Text = k.add([
        k.text('', {
            size: 100,
            width: 800,
            align: "center",
            font: "alagard",
        }),
        k.pos(Bubble.pos),
        k.anchor("center"),
        k.color(0, 0, 0),
        k.scale(0.5),
        k.z(3)
    ])

    const circle = k.add([
        k.rect(100, 70, { radius: 50 }),
        k.pos(Bubble.pos.x + 520, Bubble.pos.y + 40),
        k.anchor('center'),
        k.color(113, 153, 191),
        k.opacity(0.9),
        k.area(),
        'circle'
    ])


    const BubbleInstruction = k.add([
        k.text("↵", {
            size: 50,
            font: "sans-serif",
        }),
        k.pos(circle.pos.x, circle.pos.y + 5),
        k.anchor("center"),
        k.color(0, 0, 0),
        k.z(3),
        k.area(),
        'BubbleInstruction'
    ])

    k.onKeyPress('enter', ()=> {
        	// Cycle through the dialogs
	curDialog = (curDialog + 1) % dialog.length
	updateDialog()

})

// Update the on screen sprite & text
function updateDialog() {

	const  [char,dialogs] = CatOrDragonDialog[curDialog]
    dragon.use(k.sprite(char))
	// Update the dialog text
	Text.text = dialogs

}
updateDialog()
// k.wait(6, () => {
//     k.destroy(Bubble)
//     k.destroy(Text)
//     k.destroy(BubbleInstruction)
//     k.destroy(circle)
// })
    }
        // NPC
        // --- DRAGON --- 
        const dragon = k.add([
            k.sprite('dragon'),
            k.pos(350, 600),
            k.scale(2.5),
            k.body({ isStatic: true }),
            k.area({ shape: new k.Rect(k.vec2(10, 20), 10, 10) }),
            'dragon',

        ])

        dragon.play('idle')

        cat.onCollide("dragon", () => {
            dragon.flipX = true
            // // catDialog()
            // k.wait(4,() =>{
            //     catDragonDialog()
            // })
                    })
        // --- BAT ---
        const bat = k.add([
            k.sprite('bat'),
            k.pos(350, 300),
            k.scale(2),
            k.z(2),
            'bat'
        ])
        bat.play('walk')

        let speed = 100
        let direction = 1
        let yDirection = 1

        k.onUpdate(() => {
            if (props.isGameStarted) {
                bat.pos.x += speed * direction * k.dt()
                bat.pos.y += speed * yDirection * k.dt()
                if (bat.pos.x > 500) {
                    direction = -1
                    bat.flipX = true
                } else if (bat.pos.x < 200) {
                    direction = 1
                    bat.flipX = false
                }
                if (bat.pos.y > 300) {
                    yDirection = -1
                    bat.flipX = true
                } else if (bat.pos.y < 250) {
                    yDirection = 1
                    bat.flipX = false
                }
            }
        })


        //--- OBSTACLES ---
        k.add([
            k.sprite('obstacle'),
            // k.rect(118, 32), 
            k.pos(200, 400),
            // k.body({mass: 7}),
            k.area(),
        ])
    }



    cat.onCollide('ladder_lvlTwo', () => {
        if (props.isGameStarted) {
            levelIndex = 1
            k.go("game", { levelIndex: levelIndex },)

        }
    })

    //--- LEVELID ONE ---
    if (levelIndex === 1) {
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


    //--- LEVELID TWO---
    if (levelIndex === 2) {
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

    //--- LEVELID THREE---
    if (levelIndex === 3) {
        cat.pos = k.vec2(300, 250)
        cat.onCollide('ladder_lvlFive', () => {
            if (props.isGameStarted) {
                levelIndex = 4
                k.go("game", { levelIndex: levelIndex })
            }
        })
    }
    // --- LEVELID FOUR ---
    if (levelIndex === 4) {
        cat.pos = k.vec2(300, 250)
        cat.onCollide('ladder_lvlSix', () => {
            if (props.isGameStarted) {
                levelIndex = 5
                k.go("game", { levelIndex: levelIndex })
            }
        })
    }

    // --- LEVELID FIVE ---
    if (levelIndex === 5) {
        cat.pos = k.vec2(300, 250)
        cat.onCollide('ladder_lvlSix', () => {
            if (props.isGameStarted) {
                levelIndex = 0
                k.go("game", { levelIndex: levelIndex })
            }
        })
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
// ])



// function toggleSpeechBubble() {
//     if (Bubble.pos.x < 0) {
//         Bubble.pos = k.vec2(200, k.height()/2-30)
//         // speechText.pos = k.vec2(200, k.height()/2-30)  // Align text with bubble
//         triangleVisible = true
//         BubbleInstruction.pos = k.vec2(299, k.height()/2-13)
//         BubbleInstruction.pos = k.vec2(299, k.height()/2-12)
//     } else {
//         Bubble.pos = k.vec2(-100, -100)
//         // speechText.pos = k.vec2(-100, -100)  // Hide text with bubble
//         triangleVisible = false;
//         BubbleInstruction.pos = k.vec2(-100, -100)
//         BubbleInstruction.pos = k.vec2(-100, -100)
//     }
// }
// toggleSpeechBubble()

</script>

<style scoped></style>