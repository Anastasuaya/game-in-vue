<template>
    <div></div>
</template>

<script setup lang="ts">
import kaboom from 'kaboom'
// import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs"
import { getLevels } from './../lib/levels'
import { getSprites } from './../sprites/sprites'
import { getTiles } from './../objects/objects'
import { effect } from 'vue';
const props = defineProps(['isGameStarted'])

const k = kaboom({ background: [0, 0, 0] })
const { levels, tilesForMap } = getLevels(k)
console.log(tilesForMap)
getSprites(k)
getTiles(k)

k.loadFont('agat', 'UI/agat-8.ttf')

// --- SCENE ---
k.scene("game", ({ levelIndex }) => {
    const lvl = k.addLevel(levels[levelIndex], tilesForMap)
    
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

        // ------------------------------------------------------------------------------------
        // --- СОЗДАНИЕ ИГРОКА ---
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
    // ------------------------------------------------------------------------------------

    // --- МЕХАНИКА БОЯ ---
    const BULLET_SPEED = 100

function handleOut() {
    return {
        id: "handleout",
        require: ["pos"],
        update() {
            const spos = this.screenPos()
            if (
                spos.x < 0 ||
                spos.x > k.width() ||
                spos.y < 0 ||
                spos.y > k.height()
            ) {
                this.trigger("out")
            }
        },
    }
}

const SPEED = 640

// Создаем функцию для стрельбы
function shoot() {
    const mpos = k.mousePos() // Позиция мыши
    const dir = mpos.sub(cat.pos).unit() // Рассчитываем направление стрельбы


     const bullet =   k.add([
        k.pos(cat.pos.x + 20, cat.pos.y + 20),
        k.move(dir, BULLET_SPEED),
        k.rect(12, 12),
        k.area(),
        // k.body(),
        k.offscreen({ destroy: true }),
        k.anchor("center"),
        k.color(0, 153, 153),
        "bullet",
        { dir: dir }
    ])
    bullet.onCollide('wall', ()=>{
        k.destroy(bullet)
    })
}

k.onKeyPress("space", shoot)
k.onClick(shoot)

k.onUpdate("bullet", (b) => {
    b.move(b.dir.scale(BULLET_SPEED))
})

// связываем пользовательское событие "out" с тегом "bullet"
k.onCollide("wall-Bottom", "bullet", (bullet) => {
    // k.addKaboom(bullet.pos)
    console.log('collide')
    k.wait(.3, () => {
        k.destroy(bullet) // уничтожаем пулю
    })
}) 
// пуля не дестроится

    // ------------------------------------------------------------------------------------

// --- ПОЛОСА ЗДОРОВЬЯ ---

    function healthBar(){

   if (levelIndex == 1 || levelIndex == 2 || levelIndex == 4 ) { // Not useful for now, but when it will be, the OR opperator is -->  (levelId == 1 || levelId == 4)

                        if (cat.hp() === 180) {
                        // Healthbar.set(cat.hp())
                        // k.shake(10)
                        }
                        if (cat.hp() === 160) {
                        }
                        if (cat.hp() === 140) {
                        }
                        if (cat.hp() === 120) {
                        }
                        if (cat.hp() === 100) {
                        }
                        if (cat.hp() === 80) {

                        }
                        if (cat.hp() === 60) {
                        }
                        if (cat.hp() === 40) {

                        }
                        if (cat.hp() === 20) {

                        }
                    
                    }
    
const Healthbar = cat.add([
            k.rect(30, 3),
            k.pos(cat.pos.x -300, cat.pos.y -250),
            k.color(20, 200,0),
            k.z(2),
            k.outline(1),
            {
                max: cat_HEALTH,
                set(hp: any) {
                    this.width = 30 * hp / this.max
                },
            },
        ])
        const HealthbarGreyOutline = cat.add([
            k.rect(30, 3),
            k.pos(cat.pos.x -300, cat.pos.y -250),
            k.color(200, 200, 200),
            // k.anchor("left"),
            // k.fixed(),
            k.z(1),
            k.outline(1),
            {
                max: cat_HEALTH,
                set(hp: any) {
                    this.width = 30 * hp / this.max
                },
            },
        ])
}  

function colorizeHealthBar(healthBar: any) {
    if (healthBar.width < 200) {
      healthBar.use(k.color(250, 150, 0));
    }

    if (healthBar.width < 100) {
      healthBar.use(k.color(200, 0, 0));
    }
  }   
    // ------------------------------------------------------------------------------------
    // --- УПРАВЛЕНИЕ ИГРОКОМ ---

    let left = false
    let right = false
    let up = false
    let down = false
    let fall = false

    k.onKeyDown("a",  () => {
        if (props.isGameStarted && !isDialogActive) {
            cat.move(-140, 0)
            if (!left) {
                cat.play('SideL')
            }
            left = true
        }
    })
    k.onKeyRelease('a', () => {
        left = false
        cat.play('idleL')
    })

    k.onKeyDown("w", () => {
        if (props.isGameStarted && !isDialogActive) {
            cat.move(0, -140)
            if (!up) {
                cat.play('Back')
            }
            up = true
        }
    })
    k.onKeyRelease('w', () => {
        up = false
        cat.play('idleBack')
    })

    k.onKeyDown("d", () => {
        if (props.isGameStarted && !isDialogActive) {
            cat.move(140, 0)
            if (!right) {
                cat.play('SideR')
            }
            right = true
        }
    })
    k.onKeyRelease('d', () => {
        right = false
        cat.play('idleR')
    })

    k.onKeyDown("s", () => {
        if (props.isGameStarted && !isDialogActive) {
            cat.move(0, 140)
            if (!down) {
                cat.play('Forward')
            }
            down = true
        }
    })
    k.onKeyRelease('s', () => {
        if (props.isGameStarted) {
            down = false
            cat.play('idle')
        }

    })

    // ------------------------------------------------------------------------------------

    // --- ДИАЛОГИ ---
    type Dialog = {
        speaker: string,
        text: string,
    }

    let isDialogActive = false
    let dialogs = [] as Dialog[]
    let curDialog = 0
    // ------------------------------------------------------------------------------------
    // --- ДИАЛОГИ 1 УРОВНЯ ---
    const catDialogs = [
        { speaker: 'Кот', text: 'Где я?' },
        { speaker: 'Кот', text: 'Наверное, нужно осмотреться' },
    ]
    
    const obstacleDialog = [
    { speaker: 'Кот', text: 'Как мне пройти дальше?' },
    { speaker: 'Кот', text: 'Может,можно сдвинуть это?' },
    ]

    const dragonDialogs = [
        { speaker: 'Кот', text: 'Кто ты?' },
        { speaker: 'Неизвестный', text: 'Я злой и могучий дракон!' },
        { speaker: 'Дракон', text: '*рычание*' },
    ]
    // ------------------------------------------------------------------------------------
    // --- ДИАЛОГИ 2 УРОВНЯ ---
    const skullDialog = [
        {speaker: '',text:'*Чьи-то черепа.*'},
        {speaker:'',text:'*Выглядит устрашающе*'},
        {speaker:'Кот', text:'Куда же я всё-таки попал?'},
    ]
    // ------------------------------------------------------------------------------------
    // --- ДИАЛОГИ 3 УРОВНЯ ---
    const foxDialog = [
        {speaker:'Кот',text:'Привет, кто ты?'},
        {speaker:'Неизвестная',text:'Тебя не учили, что нельзя так незаметно подкрадываться?'},
        {speaker:'Кот', text:'Извини. Я был слишком рад увидеть здесь кого-то ещё'},
        {speaker:'Кот',text:'Те дракон и змеи были не очень-то разговорчивыми'},
        {speaker:'Неизвестная',text:'Я лиса-Алиса'},
        {speaker:'Кот',text:'Алиса! может хотя бы ты расскажешь мне, куда я попал?'},
        {speaker:'Алиса',text:'*Молчание.*'},
    ]
    // ------------------------------------------------------------------------------------

    // --- ОБЛАКО ДИАЛОГА ---
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
                size: 70,
                width: 1100,
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
    function createBat(){
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
    }
    // ------------------------------------------------------------------------------------
    // --- LEVELS ---
    
    //--- LEVELID 0 ---

    if (levelIndex === 0) {
        // --- ПАДЕНИЕ КОТА ---
        k.onUpdate('cat', () => {
            if (props.isGameStarted && !fall) {
                fall = true
                fallingCat.play("fall")
                k.tween(fallingCat.pos, k.vec2(300, 150), 1, (p) => {
                    fallingCat.pos = p
                    k.shake(1)
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

createBat() 
// const bat = k.add([
//             k.sprite('bat'),
//             k.pos(350, 300),
//             k.scale(2),
//             k.z(2),
//             'bat'
//         ])
//         bat.play('walk')

//         let speed = 100
//         let direction = 1
//         let yDirection = 1

//         k.onUpdate(() => {
//             if (props.isGameStarted) {
//                 bat.pos.x += speed * direction * k.dt()
//                 bat.pos.y += speed * yDirection * k.dt()
//                 if (bat.pos.x > 500) {
//                     direction = -1
//                     bat.flipX = true
//                 } else if (bat.pos.x < 200) {
//                     direction = 1
//                     bat.flipX = false
//                 }
//                 if (bat.pos.y > 300) {
//                     yDirection = -1
//                     bat.flipX = true
//                 } else if (bat.pos.y < 250) {
//                     yDirection = 1
//                     bat.flipX = false
//                 }
//             }
//         })
//         //--- OBSTACLES ---
        k.add([
            k.sprite('obstacle'),
            // k.rect(118, 32), 
            k.pos(200, 400),
            k.body({mass: 7}),
            k.area(),
            'obstacle'
        ])   
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

    }


    // ------------------------------------------------------------------------------------
    //--- LEVELID ONE ---
    if (levelIndex === 1) {
        cat.pos = k.vec2(300, 250)
        cat.onCollide('ladder_lvlThree', () => {
            if (props.isGameStarted) {
                levelIndex = 2
                k.go("game", { levelIndex: levelIndex })
            }
        })
        healthBar()

    const skull = k.add([
            k.sprite('skull'),
            k.pos(700,200),
            k.scale(1.5),
            k.area(),
            k.body({isStatic: true}),
            'skull'
        ])

        cat.onCollide('skull', () => {
        dialogs = skullDialog
        CreateDialog()
    })


// --- COBRA ---
let cobraCount = 0; // Счётчик убитых кобр
const MAX_COBRAS = 20; // Максимальное количество кобр

function createCobra(x, y) {
    const cobra = k.add([
        k.sprite('cobra'),
        k.pos(x, y), // Используем переданные координаты
        k.scale(2.5),
        k.body(),
        k.area({ shape: new k.Rect(k.vec2(5, 20), 15, 10) }),
        k.state('move', ['idle', 'attack', 'move']),
        'cobra'
    ])

    cobra.play('idle')
    const cobra_SPEED = 120

    cobra.onStateEnter("idle", async () => {
        await k.wait(0.5)
        cobra.enterState("move")
    })

    cobra.onStateEnter("attack", async () => {
        if (cat.exists()) {
            // Логика атаки кота
            cobra.play('attack')
            cat.color = k.RED
            await k.wait(0.5)
            cat.color = k.WHITE
        }
        await k.wait(0.5) // Ждем перед возвращением в состояние движения
        cobra.enterState("move")
    })

    cobra.onStateEnter("move", async () => {
        await k.wait(2) // Ждем 2 секунды прежде, чем продолжить
        cobra.play('idle') // Переходим в состояние ожидания
    })

    cobra.onStateUpdate("move", async () => {
        if (!cat.exists()) return
        const dir = cat.pos.sub(cobra.pos).unit()
        cobra.move(dir.scale(cobra_SPEED))

        // Если кобра близко к коту, атакуем
        const distanceToCat = cobra.pos.dist(cat.pos);
        if (distanceToCat < 10) { // Радиус атаки
            cobra.enterState("attack") // Переходим в состояние атаки
        }
    })

    cat.onCollide('cobra', () => {
        cat.hurt(20)
    })

    cobra.onCollide('bullet', () => {
   const effect = k.add([
            k.sprite('purpleEffect'),
            k.pos(cobra.pos.x, cobra.pos.y + 20),
            k.scale(2)
        ]).play('explosion')
        k.destroy(cobra)
        k.shake(1)
        
        // Увеличиваем счётчик убитых кобр
        cobraCount++
        updateCobraCountMessage() // Обновляем сообщение о количестве убитых кобр

        // Если количество убитых кобр меньше максимума, создаем новую кобру
        if (cobraCount < MAX_COBRAS) {
            createCobra(k.rand(600,450), k.rand(100,300))
        } else {
            showMessage("Ура, змеи побеждены! Продолжай двигаться дальше")
            k.wait(3, () => {
                k.destroyAll('showMessage')
            })
        }
    })
}
        // Функция для отображения сообщения о числе убитых кобр
        function showMessage(message) {
    k.add([
        k.text(message, { size: 32 }),
        k.pos(k.width() / 2, 70),
        k.anchor('center'),
        'showMessage'
    ])
}

function updateCobraCountMessage() {
    k.destroyAll('cobraCountMessage') 
        k.add([
        k.text(`Убей 20 змей. Убито: ${cobraCount}`, { size: 32 }),
        k.pos(k.width() / 2, 70),
        k.anchor('center'),
        'cobraCountMessage' 
    ])
if(cobraCount === MAX_COBRAS) {
    k.destroyAll('cobraCountMessage')
}
} 
createCobra(k.rand(200,250), k.rand(100,250))
// добавить кобре эффект спавна

const children = k.add([
    k.sprite('children'),
    k.pos(300,500),
    k.body({isStatic: true}),
    k.area(),
])

createBat()

}

    // ------------------------------------------------------------------------------------
    //--- LEVELID TWO---
    if (levelIndex === 2) {
        cat.pos = k.vec2(300, 250)
        cat.onCollide('ladder_lvlFour', () => {
            if (props.isGameStarted) {
                levelIndex = 3
                k.go("game", { levelIndex: levelIndex })
            }
        })
        healthBar()
        // --- FOX ---
        const fox = k.add([
            k.sprite('fox'),
            k.pos(1050,350),
            k.scale(2.5),
            k.body({isStatic: true}),
            k.area({ shape: new k.Rect(k.vec2(9, 20), 15, 10) }),
            'fox'
        ])
        fox.play('look')
        fox.flipX =true

        cat.onCollide('fox', () => {
            fox.play('fright')
            k.wait(.5, () => {
                fox.play('idle')
                dialogs = foxDialog
                CreateDialog()
               
            }) 
            k.wait(7, () => {
                k.tween(fox.pos, k.vec2(1050, 450), 1, (p) => {
                    fox.pos = p})
                    fox.play('run')
                    k.wait(1, () => {
                        fox.play('sleep')
                    })
                })
        })

        // АНИМИРОВАТЬ ШИПЫ
        const thorns = k.add([
            k.sprite('thorns'),
            // k.rect(118, 32), 
            k.pos(480, 550),
            // k.body({isStatic: true}),
            k.area(),
            'thorns'
        ])
        // thorns.play('movement')
        
        k.add([
            k.sprite('thorns1'),
            // k.rect(118, 32), 
            k.pos(450, 550),
            // k.body({isStatic: true}),
            k.area(),
            'thorns'
        ])
        k.add([
            k.sprite('thorns2'),
            // k.rect(118, 32), 
            k.pos(420, 550),
            // k.body({isStatic: true}),
            k.area(),
            'thorns'
        ])

    const PotionHP = k.add([
            k.sprite('healthPotion'),
            k.pos(650,150),
            k.scale(2)
        ])

        
    const orange = k.add([
        k.sprite('orangeEffect'),
        k.pos(639,157),
        k.scale(2)
    ])
    orange.play('explosion')
    }


    // ------------------------------------------------------------------------------------
    //--- LEVELID THREE---
    if (levelIndex === 3) {
        cat.pos = k.vec2(300, 250)
        cat.onCollide('ladder_lvlFive', () => {
            if (props.isGameStarted) {
                levelIndex = 4
                k.go("game", { levelIndex: levelIndex })
            }
        })
        healthBar()    
        //ДОБАВИТЬ СЮДА ДЕРЕВО С ВОДОЙ

    }

    // ------------------------------------------------------------------------------------
    
    // --- LEVELID FOUR ---
    if (levelIndex === 4) {
        cat.pos = k.vec2(300, 250)
        cat.onCollide('ladder_lvlSix', () => {
            if (props.isGameStarted) {
                levelIndex = 5
                k.go("game", { levelIndex: levelIndex })
            }
        })
        healthBar()
    }

    // ------------------------------------------------------------------------------------
    // --- LEVELID FIVE ---
    if (levelIndex === 5) {
        cat.pos = k.vec2(300, 250)
        cat.onCollide('ladder_lvlSix', () => {
            if (props.isGameStarted) {
                levelIndex = 0
                k.go("game", { levelIndex: levelIndex })
            }
        })
        healthBar()
    }

    // ------------------------------------------------------------------------------------



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