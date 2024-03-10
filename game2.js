// Слова для запоминания
const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

// Функция для запуска игры
function startGame() {
    // Показываем слова для запоминания
    alert("Запомните следующие слова: " + words.join(', '));

    // Массив для хранения ответов пользователя
    const userWords = [];

    // Запрашиваем у пользователя каждое слово
    for (let i = 0; i < words.length; i++) {
        let userWord = prompt("Введите слово №" + (i + 1));
        // Приводим введенное слово к нижнему регистру
        userWord = userWord.toLowerCase();
        userWords.push(userWord);
    }

    // Сравниваем введенные слова с исходными, игнорируя регистр
    let correctCount = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === userWords[i]) {
            correctCount++;
        }
    }

    // Выводим результат
    const resultMessage = "Вы правильно ввели " + correctCount + " из " + words.length + " слов.";
    alert(resultMessage);
}

// Находим кнопку "Играть" по идентификатору
const playButton = document.getElementById('playButton');

// Назначаем обработчик события на кнопку "Играть"
playButton.addEventListener('click', startGame);

// Находим блок ".frame__game" по атрибуту alt у изображения
const frameGame = document.querySelector('img[alt="Game2"]').closest('.frame__game');

// Назначаем обработчик события на блок ".frame__game"
frameGame.addEventListener('click', startGame);