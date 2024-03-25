//ЗАДАНИЕ 1
const answer = 'js';
console.log(answer.toUpperCase());



//ЗАДАНИЕ 2
function filterStringsByPrefix(array, prefix) {
    // Приведем префикс к нижнему регистру для сравнения без учета регистра
    const lowerCasePrefix = prefix.toLowerCase();

    // Используем метод filter() для отбора строк, начинающихся с заданного префикса
    const filteredArray = array.filter(str => str.toLowerCase().startsWith(lowerCasePrefix));

    return filteredArray;
}

// Пример использования:
const stringsArray = ["apple", "Banana", "apricot", "Orange"];
const prefix = "Ap";
const result = filterStringsByPrefix(stringsArray, prefix);
console.log(result); // ["apple", "apricot"]



//ЗАДАНИЕ 3
const number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));


//ЗАДАНИЕ 4
let numbers = [52, 53, 49, 77, 21, 32];
console.log("Минимальное значение:", Math.min(...numbers));
console.log("Максимальное значение:", Math.max(...numbers));



//ЗАДАНИЕ 5
// Функция для генерации случайного числа от 1 до 10
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Функция для вывода случайного числа в консоль
function printRandomNumber() {
    const randomNumber = getRandomNumber();
    console.log("Случайное число от 1 до 10:", randomNumber);
}

// Вызов функции для вывода случайного числа в консоль
printRandomNumber();



//ЗАДАНИЕ 6
function generateRandomArray(number) {
    const array = [];
    const length = Math.floor(number / 2); // Длина массива в два раза меньше переданного числа

    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (number + 1))); // Генерация случайного числа от 0 до number
    }

    return array;
}

// Пример использования:
const inputNumber = 10;
const randomArray = generateRandomArray(inputNumber);
console.log(randomArray);



//ЗАДАНИЕ 7
function getRandomNumberInRange(min, max) {
    // Используем Math.floor() для округления вниз до целого числа
    // Используем Math.random() для генерации случайного числа в диапазоне [0, 1)
    // Умножаем результат на (max - min + 1), чтобы получить случайное число в диапазоне [0, max - min + 1)
    // Прибавляем min, чтобы сместить диапазон к [min, max]
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Пример использования:
const minRange = 5;
const maxRange = 10;
const randomNum = getRandomNumberInRange(minRange, maxRange);
console.log(randomNum);



//ЗАДАНИЕ 8
const currentDate = new Date();
console.log(currentDate);



//ЗАДАНИЕ 9
// Создаем объект Date, содержащий текущую дату и время
const currentedDate = new Date();

// Создаем новый объект Date, добавляя 73 дня к текущей дате
const futureDate = new Date();
futureDate.setDate(currentedDate.getDate() + 73);

// Выводим дату, которая наступит через 73 дня после текущей
console.log("Текущая дата:", currentedDate.toDateString());
console.log("Дата через 73 дня:", futureDate.toDateString());



//ЗАДАНИЕ 10
function formatDateRussian(date) {
    // Массивы для русских названий месяцев и дней недели
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

    // Получаем значения даты и времени
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dayOfWeek = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Формируем строку с датой и временем
    const formattedDate = `Дата: ${day} ${months[month]} ${year} — это ${daysOfWeek[dayOfWeek]}.\n Время: ${hours}:${minutes}:${seconds}`;

    return formattedDate;
}

// Пример использования:
const currentsDate = new Date();
const formattedDateTime = formatDateRussian(currentsDate);
console.log(formattedDateTime);


