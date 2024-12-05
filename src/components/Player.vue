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

k.loadFont('agat', 'UI/agat-8.ttf')

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
        if (props.isGameStarted && !isDialogActive) {
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
        if (props.isGameStarted && !isDialogActive) {
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
        if (props.isGameStarted && !isDialogActive) {
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
        if (props.isGameStarted && !isDialogActive) {
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
    
    //--- LEVELID 0 ---

    // --- ДИАЛОГИ ---
    type Dialog = {
        speaker: string,
        text: string,
    }

    let isDialogActive = false
    let dialogs = [] as Dialog[]
    let curDialog = 0

    const catDialogs = [
        { speaker: 'Кот', text: 'Где я?' },
        { speaker: 'Кот', text: 'Наверное, нужно осмотреться' },
    ]
    const dragonDialogs = [
        { speaker: 'Кот', text: 'Кто ты?' },
        { speaker: 'Неизвестный', text: 'Я злой и могучий дракон!' },
        { speaker: 'Дракон', text: '*рычание*' },
    ]

    const obstacleDialog = [
    { speaker: 'Кот', text: 'Как мне пройти дальше?' },
    { speaker: 'Кот', text: 'Может,можно сдвинуть это?' },
    ]

    let Bubble = undefined as any;
    let circle = undefined as any;
    let BubbleInstruction = undefined as any;
    let Text = undefined as any;
    
    function CreateDialog() {
        
        if (curDialog >= dialogs.length) {
            dialogs = []
            curDialog = 0
            endDialog()
            return
        }

        isDialogActive = true

        Bubble = k.add([
            k.rect(k.width() - 800, 120, { radius: 32 }),
            k.pos(k.center().x, k.height() - 90),
            k.anchor('center'),
            k.opacity(0.9),
            k.outline(4),
            k.color(),
            // k.area(),
            'Bubble'
        ])
        circle = k.add([
            k.rect(100, 70, { radius: 50 }),
            k.pos(Bubble.pos.x + 520, Bubble.pos.y + 40),
            k.anchor('center'),
            k.color(113, 153, 191),
            k.opacity(0.9),
            k.area(),
            'circle'
        ])
        BubbleInstruction = k.add([
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
        Text = k.add([
            k.text('', {
                size: 100,
                width: 1000,
                align: "center",
                font: "alagard",
            }),
            k.pos(k.center().x, k.height() - 90),
            k.anchor("center"),
            k.color(0, 0, 0),
            k.scale(0.5),
            k.z(3)
        ])
            
        const dialog = dialogs[curDialog]
        if (Text) Text.text = `${dialog.speaker}: ${dialog.text}`
        curDialog++
    
        k.wait(5, ()=>{
            updateDialog()
        })

    }
    
    function updateDialog() {
        k.destroy(Bubble)
        k.destroy(circle)
        k.destroy(BubbleInstruction)
        k.destroy(Text)
        CreateDialog()
    }

    function endDialog(){
        isDialogActive = false
    }


    k.onKeyRelease('enter', () => {
        if(isDialogActive){

            k.wait(.2, ()=>{
                updateDialog()
            })
        }
    })


    // ------------------------------------------------------------------------------------



    if (levelIndex === 0) {
        // --- ПАДЕНИЕ КОТА ---
        k.onUpdate('cat', () => {
            if (props.isGameStarted && !fall) {
                fall = true
                fallingCat.play("fall")
                k.tween(fallingCat.pos, k.vec2(300, 150), 1, (p) => {
                    fallingCat.pos = p
                    // k.shake(1)
                })
                setTimeout(() => {
                    cat.pos = k.vec2(300, 150)
                    fallingCat.play('idle')
                    fallingCat.destroy()
                    cat.play('idleR')
                }, 1000)
                k.wait(1.5, () => {
                    dialogs = catDialogs
                    CreateDialog()
                })
            }
        })

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
    const buttonText = k.add([
        k.text("E", {
            size: 15,
            font: "sans-serif",
        }),
        k.pos(dragon.pos.x +30, dragon.pos.y+25),
        k.anchor("center"),
        k.color(255, 255, 255),
        k.z(1),
        'buttonText'
    ])

   let circle1 = k.add([
            k.rect(30, 30, { radius: 50 }),
            k.pos(dragon.pos.x +30, dragon.pos.y+25),
            k.anchor('center'),
            k.color(113, 153, 191),
            k.outline(2),
            k.opacity(0.9),
            k.area(),
            'circle'
        ])

    k.onKeyPress('e', () => {
        k.destroy(buttonText)
        k.destroy(circle1)

        dialogs = dragonDialogs
        CreateDialog()
    })
    k.wait(3, () => {
        k.destroy(buttonText)
        k.destroy(circle1)
    })
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
            k.body({mass: 7}),
            k.area(),
            'obstacle'
        ])
    }

    cat.onCollide('obstacle', () => {
        dialogs = obstacleDialog
        CreateDialog()
    })


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
        const cobra = k.add([
        k.sprite('cobra'),
            k.pos(200,400),
            k.scale(2.5),
            k.body(),
            k.area({ shape: new k.Rect(k.vec2(5, 20), 15, 10) }),
            k.state('move', ['idle', 'walk', 'attack']),
            'cobra'
        ])
        cobra.play('idle')

        cobra.onStateEnter("idle", async () => {
        await k.wait(0.5)
        cobra.enterState("attack")
    })

const ENEMY_SPEED = 160
const BULLET_SPEED = 800

    cobra.onStateEnter("attack", async () => {

if (cat.exists()) {

    const dir = cat.pos.sub(cobra.pos).unit()

    k.add([
        k.pos(cobra.pos),
        k.move(dir, BULLET_SPEED),
        k.rect(12, 12),
        k.area(),
        k.offscreen({ destroy: true }),
        k.anchor("center"),
        k.color(k.BLUE),
        "bullet",
    ])

}

await k.wait(1)
cobra.enterState("move")

})

cobra.onStateEnter("move", async () => {
await k.wait(2)
cobra.enterState("idle")
})

cobra.onStateUpdate("move", () => {
if (!cat.exists()) return
const dir = cat.pos.sub(cobra.pos).unit()
cobra.move(dir.scale(ENEMY_SPEED))
})


cat.onCollide("bullet", (bullet) => {
k.destroy(bullet)
k.destroy(cat)
k.addKaboom(bullet.pos)
})





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



</script>

<style scoped></style>