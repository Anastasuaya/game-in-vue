<template>
    <div></div>
</template>

<script setup lang="ts">
import kaboom from 'kaboom'
// import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs"
import { getLevels } from './../lib/levels'
import { getSprites } from './../sprites/sprites'
import { getTiles } from './../objects/objects'
// import { effect } from 'vue';
const props = defineProps(['isGameStarted'])

const k = kaboom({ background: [0, 0, 0] })
const { levels, tilesForMap } = getLevels(k)
// console.log(tilesForMap)
getSprites(k)
getTiles(k)

// k.loadFont('agat', 'UI/agat-8.ttf')
const cat_HEALTH = 200
let curHealth = cat_HEALTH

// --- SCENE ---
k.scene("game", ({ levelIndex }) => {
    k.addLevel(levels[levelIndex], tilesForMap)

    // --- МЕНЮ ПАУЗЫ ---
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
    // --- КОТ ---
    let Healthbar: any
    let cat = k.add([
        k.sprite('cat'),
        k.pos(200, -150),
        k.scale(2),
        k.area({ shape: new k.Rect(k.vec2(2, 6), 25, 20) }),
        k.body(),
        k.health(curHealth),
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
    // --- СТРЕЛЬБА ---
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


        const bullet = k.add([
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
        bullet.onCollide('wall', () => {
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
    // ------------------------------------------------------------------------------------
    // --- ПОЛОСА ЗДОРОВЬЯ ---
    // let gameOver = false
    function healthBar() {
        Healthbar = cat.add([
            k.rect(30, 3),
            k.pos(cat.pos.x - 300, cat.pos.y - 250),
            k.color(20, 200, 0),
            k.z(2),
            k.outline(1),
            {
                max: cat_HEALTH,
                set(hp: any) {
                    this.width = 30 * hp / this.max
                    colorizeHealthBar(this) // Обновляем цвет полоски здоровья
                },
            },
        ])
        const HealthbarGreyOutline = cat.add([
            k.rect(30, 3),
            k.pos(cat.pos.x - 300, cat.pos.y - 250),
            k.color(200, 200, 200),
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
    function takeDamage(amount: any) {
        curHealth -= amount // Уменьшаем текущее здоровье
        if (curHealth < 0) {
            curHealth = 0 // Не допускаем отрицательного здоровья
        }
        Healthbar.set(curHealth) // Обновляем полоску здоровья

        // if (curHealth === 0 && !gameOver) {
        //     gameOver = true // Устанавливаем состояние игры как завершённое
        //     // endGame() // Вызываем функцию завершения игры
        // }
    }
    // Функция для изменения цвета полоски здоровья
    function colorizeHealthBar(healthBar: any) {
        if (healthBar.width == 27) {
            healthBar.use(k.color(5, 250, 30))
        }
        if (healthBar.width <= 14) {
            healthBar.use(k.color(250, 207, 3)) // Желтый цвет
        }
        if (healthBar.width <= 8) {
            healthBar.use(k.color(200, 0, 0)) // Красный цвет
        }
    }
    // Функция для начала нового уровня
    function updateHealthBar() {
        Healthbar.set(curHealth) // Устанавливаем текущее здоровье на полоске
        colorizeHealthBar(Healthbar) // Обновляем цвет полоски здоровья
    }
    // Функция для начала нового уровня
    function startNewLevel() {
        // Текущее здоровье остается без изменений
        updateHealthBar() // Обновляем полоску здоровья для нового уровня
    }
    // Функция завершения игры
    // function endGame() {

    //     const blackBackground = k.add([
    //         k.rect(k.width(), k.height()),
    //         k.pos(0, 0),
    //         k.color(0, 0, 0),
    //         k.z(10), // Устанавливаем нижний уровень рисования
    //         'gameOverBackground',
    //     ])
    //     // Отображаем сообщение об окончании игры
    //     k.add([
    //         k.text('Игра окончена!', { size: 48 }),
    //         k.pos(k.width() / 2, k.height() / 2 - 50),
    //         k.anchor('center'),
    //         k.z(11)
    //     ])

    //     // Кнопка "Начать заново"
    //     const restartButton = k.add([
    //         k.rect(400, 50),
    //         k.pos(k.width() / 2 - 100, k.height() / 2 + 20),
    //         k.color(0, 0, 0),
    //         k.anchor('center'),
    //         'restartButton',
    //         k.z(11)
    //     ])

    //     k.add([
    //         k.text('Начать заново', { size: 24 }),
    //         k.pos(k.width() / 2, k.height() / 2 + 20),
    //         k.anchor('center'),
    //         k.z(1)
    //     ]);

    //     // Обработка нажатия на кнопку перезапуска
    //     restartButton.onKeyPress('space',() => {
    //         restartGame(); // Вызываем функцию обязательного перезапуска
    //         k.destroyAll('restartButton'); 
    //         k.destroyAll('showMessage');
    //     });
    //     restartButton.onMousePress(() => {
    //         restartGame(); // Вызываем функцию обязательного перезапуска
    //     });
    // }

    // // Функция для начала нового уровня или перезапуска игры
    // function restartGame() {
    //     curHealth = cat_HEALTH // Обновляем здоровье кота
    //     gameOver = false // Сбрасываем состояние игры
    //     updateHealthBar() // Обновляем полоску здоровья
    // }
    healthBar() // полоска здоровья
    // Когда кот получает урон
    takeDamage(20)
    // Переход на следующий уровень
    startNewLevel()
    // ------------------------------------------------------------------------------------
    // --- УПРАВЛЕНИЕ ИГРОКОМ ---
    let left = false
    let right = false
    let up = false
    let down = false
    let fall = false



    k.onKeyDown("a", () => {
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

    const dragonDialogs = [
        { speaker: 'Кот', text: 'Кто ты?' },
        { speaker: 'Неизвестный', text: 'Я злой и могучий дракон!' },
        { speaker: 'Дракон', text: '*рычание*' },
    ]
    // ------------------------------------------------------------------------------------
    // --- ДИАЛОГ С ПРЕПЯТСТВИЕМ ---
    const obstacleDialog = [
        { speaker: 'Кот', text: 'Как мне пройти дальше?' },
        { speaker: 'Кот', text: 'Может,можно сдвинуть это?' },
    ]
    const skullDialog = [
        { speaker: '', text: '*Чьи-то черепа.*' },
        { speaker: '', text: '*Выглядит устрашающе*' },
        { speaker: 'Кот', text: 'Куда же я всё-таки попал?' },
    ]
    const lavaDialog = [
        { speaker: 'Кот', text: 'Опасно подходить так близко к лаве.' },
    ]
    const ElDialog = [
        { speaker: 'Кот', text: 'Горячо!' },
    ]
    // ------------------------------------------------------------------------------------
    // --- ДИАЛОГИ 3 УРОВНЯ ---
    const foxDialog = [
        { speaker: 'Кот', text: 'Привет, кто ты?' },
        { speaker: 'Неизвестная', text: 'Тебя не учили, что нельзя так незаметно подкрадываться?' },
        { speaker: 'Кот', text: 'Извини. Я был слишком рад увидеть здесь кого-то ещё' },
        { speaker: 'Кот', text: 'Те дракон и змеи были не очень-то разговорчивыми' },
        { speaker: 'Неизвестная', text: 'Я лиса-Алиса' },
        { speaker: 'Кот', text: 'Алиса! может хотя бы ты расскажешь мне, куда я попал?' },
        { speaker: 'Алиса', text: '*Молчание.*' },
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
            // k.pos(k.camPos(cat.pos).y, k.camPos(cat.pos).x),
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

        k.wait(5, () => {
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

    function endDialog() {
        isDialogActive = false
    }


    k.onKeyRelease('enter', () => {
        if (isDialogActive) {

            k.wait(.2, () => {
                updateDialog()
            })
        }
    })
    // ------------------------------------------------------------------------------------
    // --- СОЗДАНИЕ НПС, МОБОВ ---
    function createBat(x: any, y: any) {
        const bat = k.add([
            k.sprite('bat'),
            k.pos(x, y),
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

    function createElemental(x: any, y: any) {
        const fireElemental = k.add([
            k.sprite('fireElemental'),
            k.pos(x, y),
            k.area({ shape: new k.Rect(k.vec2(9, 20), 15, 10) }),
            k.body(),
            k.scale(1.5),
            'fireElemental'
        ])
        fireElemental.play('walk')

        let speed = 100
        let direction = 1
        let yDirection = 1

        k.onUpdate(() => {
            if (props.isGameStarted) {
                fireElemental.pos.x += speed * direction * k.dt()
                fireElemental.pos.y += speed * yDirection * k.dt()
                if (fireElemental.pos.x > 400) {
                    direction = -1
                    fireElemental.flipX = true
                } else if (fireElemental.pos.x < 200) {
                    direction = 1
                    fireElemental.flipX = false
                }
                if (fireElemental.pos.y > 300) {
                    yDirection = -1
                    fireElemental.flipX = true
                } else if (fireElemental.pos.y < 250) {
                    yDirection = 1
                    fireElemental.flipX = false
                }
            }
        })

        cat.onCollide('fireElemental', () => {
            dialogs = ElDialog
            CreateDialog()
            takeDamage(5)
            cat.hurt(5)
            cat.color = k.RED
            k.wait(0.3)
            cat.color = k.WHITE
        })
    }
    // ------------------------------------------------------------------------------------
    // --- COBRA ---
    let cobraCount = 0; // Счётчик убитых кобр
    const MAX_COBRAS = 20; // Максимальное количество кобр

    function createCobra(x: any, y: any) {

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

        if (props.isGameStarted) {

            cobra.onStateEnter("idle", async () => {
                await k.wait(0.5)
                cobra.enterState("move")
            })

            cobra.onStateEnter("attack", async () => {
                if (cat.exists()) {
                    // Логика атаки кота
                    cobra.play('attack')
                    takeDamage(20)
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

                if (dir.x < 0) {
                    cobra.flipX = true; // Двигается влево
                } else {
                    cobra.flipX = false; // Двигается вправо
                }

                // Если кобра близко к коту, атакуем
                const distanceToCat = cobra.pos.dist(cat.pos)
                if (distanceToCat < 10) { // Радиус атаки
                    cobra.enterState("attack") // Переходим в состояние атаки
                }
            })

            cat.onCollide('cobra', () => {
                cat.hurt(20)
            })

        }
        cobra.onCollide('bullet', () => {
            k.add([
                k.sprite('purpleEffect'),
                k.pos(cobra.pos.x, cobra.pos.y + 20),
                k.scale(2)
            ]).play('explosion')
            k.destroy(cobra)
            k.shake(2)

            // Увеличиваем счётчик убитых кобр
            cobraCount++
            updateCobraCountMessage() // Обновляем сообщение о количестве убитых кобр

            // Если количество убитых кобр меньше максимума, создаем новую кобру
            if (cobraCount < MAX_COBRAS) {
                createCobra(k.rand(600, 450), k.rand(100, 300))
            } else {
                showMessage("Ура, змеи побеждены! Продолжай двигаться дальше")
                k.wait(3, () => {
                    k.destroyAll('showMessage')
                })
            }
        })
    }
    // Функция для отображения сообщения о числе убитых кобр
    function showMessage(message: any) {
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
        if (cobraCount === MAX_COBRAS) {
            k.destroyAll('cobraCountMessage')
        }
    }
    // ------------------------------------------------------------------------------------
    // --- ОБЪЕКТЫ, ПРЕПЯТСТВИЯ ---
    function skull(x: any, y: any) {
        const skull = k.add([
            k.sprite('skull'),
            k.pos(x, y),
            k.scale(1.5),
            k.area(),
            k.body({ isStatic: true }),
            'skull'
        ])
        cat.onCollide('skull', () => {
            dialogs = skullDialog
            CreateDialog()
        })
    }
    function children(x: any, y: any) {
        const children = k.add([
            k.sprite('children'),
            k.pos(x, y),
            k.body({ isStatic: true }),
            k.area(),
            'children'
        ])
        cat.onCollide('children', () => {
            dialogs = skullDialog
            CreateDialog()
        })
    }

    function PotionHP(x: any, y: any) {
        const Potion = k.add([
            k.sprite('healthPotion'),
            k.pos(x, y),
            k.scale(2),
            k.area(),
            'potionHP'
        ])
        const orange = k.add([
            k.sprite('orangeEffect'),
            k.pos(Potion.pos.x - 11, Potion.pos.y + 7),
            k.scale(2),
            k.area(),
            'orange'
        ])
        orange.play('explosion')

        cat.onCollide('orange', () => {
            console.log('potion')
            pickPotion()
            Potion.destroy()
            orange.destroy()
        })

        function pickPotion() {
            if (curHealth < cat_HEALTH) {
                curHealth = cat_HEALTH // Увеличиваем здоровье до максимума
                updateHealthBar() // Обновляем полоску здоровья
                // PotionHP.destroy()
                // orange.destroy() // Удаляем зелье после подбора
            }

        }
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
        //--- NPC ---
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
                k.pos(dragon.pos.x + 30, dragon.pos.y + 25),
                k.anchor("center"),
                k.color(255, 255, 255),
                k.z(1),
                'buttonText'
            ])

            let circle1 = k.add([
                k.rect(30, 30, { radius: 50 }),
                k.pos(dragon.pos.x + 30, dragon.pos.y + 25),
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

        createBat(400, 350)

        //--- OBSTACLES ---
        k.add([
            k.sprite('obstacle'),
            // k.rect(118, 32), 
            k.pos(200, 400),
            k.body({ mass: 7 }),
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
        createCobra(k.rand(200, 250), k.rand(100, 250))
        skull(700, 200)
        children(300, 500)
        // createBat()

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
        // cat.onUpdate(() => {
        //             // Set the viewport center to cat.pos
        //             k.camPos(cat.pos)
        //         })
    
        //         cat.onPhysicsResolve(() => {
        //             // Set the viewport center to cat.pos
        //             k.camPos(cat.pos)
        //         })
        healthBar()
        startNewLevel()
        // --- FOX ---
        const fox = k.add([
            k.sprite('fox'),
            k.pos(1050, 350),
            k.scale(2.5),
            k.body({ isStatic: true }),
            k.area({ shape: new k.Rect(k.vec2(9, 20), 15, 10) }),
            'fox'
        ])
        fox.play('look')
        fox.flipX = true
        cat.onCollide('fox', () => {
            fox.play('fright')
            k.wait(.5, () => {
                fox.play('idle')
                dialogs = foxDialog
                CreateDialog()

            })
            k.wait(7, () => {
                k.tween(fox.pos, k.vec2(1050, 450), 1, (p) => {
                    fox.pos = p
                })
                fox.play('run')
                k.wait(1, () => {
                    fox.play('sleep')
                })
            })
        })

        k.add([
            k.sprite('obstacle1'),
            // k.rect(118, 32), 
            k.pos(425, 500),
            k.body({ mass: 7 }),
            k.area(),
            'obstacle1'
        ])
        cat.onCollide('obstacle1', () => {
            dialogs = obstacleDialog
            CreateDialog()
        })
        PotionHP(650, 150)
        children(250, 390)
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
        startNewLevel()
        createElemental(400, 400)
        createElemental(400, 500)
        //ДОБАВИТЬ СЮДА ДЕРЕВО С ВОДОЙ
        const three = k.add([
            k.sprite('three'),
            k.pos(250, 460),
            k.scale(3),
            k.z(3)
        ])
        cat.onCollide('lava', () => {
            dialogs = lavaDialog
            CreateDialog()
        })
        skull(700,300)
    }

    if(levelIndex === 4) {
        cat.pos = k.vec2(300, 250)
        cat.onCollide('ladder_lvlSix', () => {
            if (props.isGameStarted) {
                levelIndex = 5
                k.go("game", { levelIndex: levelIndex })
            }
        })
        healthBar()

        const spider = k.add([
            k.sprite('spider'),
            k.pos(1000,700),
            k.area(),
            k.scale(2),
            'spider'
        ])
        spider.play('idle')

        const spiderTwo = k.add([
            k.sprite('spider'),
            k.pos(960,700),
            k.area(),
            k.scale(2),
            'spider'
        ])
        spiderTwo.play('die')
        spiderTwo.flipX = true
        // k.wait(4, () => {
        // const cobweb = k.add([
        //         k.sprite('spider'),
        //         k.scale(2),
        //         k.pos(998,700),
        //         'cobweb',
        //     ]).play('cobweb')
        // })

        createCobra(k.rand(900, 700), k.rand(1000, 600))
    }

    // ------------------------------------------------------------------------------------
    // --- LEVELID FIVE ---
    if (levelIndex === 5) {
        cat.pos = k.vec2(300, 250)
        cat.onCollide('ladder_lvlSix', () => {
            if (props.isGameStarted) {
                levelIndex = 6
                k.go("game", { levelIndex: levelIndex })
            }
        })
        healthBar()

        const boss_HEALTH = 400

        const boss = k.add([
            k.sprite('boss'),
            k.pos(700, 500),
            k.scale(4),
            k.area({ shape: new k.Rect(k.vec2(15, 30), 30, 35) }),
            k.body(),
            k.health(boss_HEALTH),
            'boss'
        ])
        boss.play('idle')

        // function bossHealthBar() {

            const healthbar = boss.add([
                    k.rect(300, 7, { radius: 32 }),
                    k.pos(k.width()/4, k.center().y - 90),
                    // k.pos(boss.pos.x, boss.pos.y + 70),
                    k.color(229, 57, 51),
                    // k.fixed(),
                    k.z(2),
                    k.outline(2),
                    {
                        max: boss_HEALTH,
                        set(hp) {
                            this.width = k.width()/2 * hp / this.max
                        },
                    },
                ])
                const healthbarGreyOutline = boss.add([
                    k.rect(300, 7,{ radius: 32 }),
                    k.pos(k.width()/4, k.center().y - 90),
                    // k.pos(boss.pos.x, boss.pos.y + 70),
                    k.color(200, 200, 200),
                    // k.fixed(),
                    k.z(1),
                    k.outline(2),
                    {
                        max: boss_HEALTH,
                    }
                ])
        // }
        // bossHealthBar()
        // НЕ ПОНИМАЮ, ЧТО НЕ ТАК АААААААА
        // КАК ИСПРАВИТЬ БЛЯЯЯЯЯЯЯ
        createCobra(k.rand(200, 250), k.rand(100, 250))
        skull(1030, 200)
        children(600, 500)
    }
    if (levelIndex === 6) {
        cat.pos = k.vec2(300, 250)
        cat.onCollide('ladder_lvlSix', () => {
            if (props.isGameStarted) {
                levelIndex = 0
                k.go("game", { levelIndex: levelIndex })
            }
        })

        const statue = k.add([
            k.sprite('statue'),
            k.pos(1000, 170),
            k.body({ isStatic: true }),
            k.area(),
            k.scale(2)
        ])

        const coffin = k.add([
            k.sprite('coffin'),
            k.pos(700, 200),
            k.area(),
            k.body({isStatic: true})
        ])
    }
    // ------------------------------------------------------------------------------------


})


function start() {
    k.go("game", {
        levelIndex: 5,
        score: 0,
        lives: 3,
    })
}

start()

</script>

<style scoped></style>