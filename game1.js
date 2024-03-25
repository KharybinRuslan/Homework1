// Функция для определения времени года
function determineSeason(monthNumber) {
    if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
        return 'Зима';
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        return 'Весна';
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        return 'Лето';
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        return 'Осень';
    } else {
        return 'Недопустимое значение, введите числа от 1 до 12';
    }
}

// Обработчик события для кнопки
document.getElementById("checkButton").addEventListener("click", function() {
    let monthInput = prompt("Введите номер месяца (от 1 до 12):");
    let month = parseInt(monthInput);

    if (!isNaN(month) && month >= 1 && month <= 12) {
        alert("Время года: " + determineSeason(month));
    } else {
        alert("Недопустимое значение, введите числа от 1 до 12");
    }
});

// Обработчик события для блока game1
document.getElementById("game1").addEventListener("click", function() {
    let monthInput = prompt("Введите номер месяца (от 1 до 12):");
    let month = parseInt(monthInput);

    if (!isNaN(month) && month >= 1 && month <= 12) {
        alert("Время года: " + determineSeason(month));
    } else {
        alert("Недопустимое значение, введите числа от 1 до 12");
    }
});