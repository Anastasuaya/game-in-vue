<template>
<!-- // Создание функции для отображения диалога
function showDialogue(text) {
    const dialogue = k.add([
        k.text(text, { size: 16 }),
        k.pos(k.width() / 2, k.height() - 50),
        k.origin('center'),
        k.layer('ui'), // задаем слой для диалога
        k.lifespan(2), // диалог исчезнет через 2 секунды
    ]);
}

// Проверка коллизии и отображение диалога
k.collides('kid', 'cat', () => {
    showDialogue("Привет! Ты кто?");
});

// Основной игровой цикл
k.action(() => {
    // Здесь можно обновлять позицию персонажей и другие действия
}); -->

<!-- 
function showDialogue(dialogue) {
    const { speaker, text } = dialogue;
    
    // Определяем позицию для диалога в зависимости от говорящего
    const posX = speaker === "cat" ? 100 : 500; // 100 для кота, 500 для дракона
    const posY = 50; // Позиция по y

    const label = add([
        text(text, { size: 12 }),
        pos(posX, posY),
        layer("ui"), // Используем отдельный слой для текста
        { lifespan: 3 } // Удаляем текст через 3 секунды
    ]);
    
    // Снимаем с текста, когда он удален
    label.action(() => {
        if (label.lifespan <= 0) {
            destroy(label);
        }
    });
}

// Переменная для отслеживания текущего диалога
let currentDialogueIndex = 0;

// Функция для запуска диалога
function startDialogue() {
    if (currentDialogueIndex < dialogues.length) {
        showDialogue(dialogues[currentDialogueIndex]);
        currentDialogueIndex++;
        
        // Обработчик для перехода к следующему сообщению
        k.wait(3, () => {
            startDialogue();
        });
    }
} -->