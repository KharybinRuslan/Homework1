//Задание 1
let catalog = [
    ['Столы', 'Дорогой стол', 'Большой стол'],
    ['Диваны', 'Красный диван', 'Белый диван']
]

for (let item of catalog) {
    for (let i = 0; i < item.length; i++) {
        if (i === 0) {
            console.log(`Категория ${item[i]}`);
        } else {
            console.log(`\t ${item[i]}`);
        }
    }
}



//Задание 2
const array = [1, 5, 4, 10, 0, 3];
const index = array.indexOf(4);

console.log(index); // Выведет: 2



//Задание 3
const arr = [1, 3, 5, 10, 20];
const result = arr.join(' ');
console.log(result); // Выведет: "1 3 5 10 20"



//Задание 4
const rows = 3;
const cols = 3;
const multiArray = [];

for (let i = 0; i < rows; i++) {
    const innerArray = [];
    for (let j = 0; j < cols; j++) {
        innerArray.push(1);
    }
    multiArray.push(innerArray);
}

console.log(multiArray); // Выведет: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]


//Задание 5
let number = [1, 1, 1];
number.push(2, 2, 2);
console.log(number);


//Задание 6
let arrays = [9, 8, 7, 'a', 6, 5];
arrays = arrays.filter(element => element !== 'a'); // Удаление буквы 'a'
arrays.sort((a, b) => a - b); // Сортировка массива чисел
console.log(arrays);


//Задание 7
const numbers = [9, 8, 7, 6, 5];

const userInput = prompt("Угадайте число:");
const guessedNumber = parseInt(userInput); // Преобразуем введенное значение в число

if (numbers.includes(guessedNumber)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}


//Задание 8
let str = 'abcdef';
let strArray = str.split(''); // Преобразуем строку в массив символов
strArray.reverse(); // Переворачиваем массив
str = strArray.join(''); // Объединяем элементы массива обратно в строку

console.log(str); // Выведет: 'fedcba'


//Задание 9
const array3 = [[1, 2, 3], [4, 5, 6]];
const flattenedArray3 = [].concat(...array3);

console.log(flattenedArray3); // Выведет: [1, 2, 3, 4, 5, 6]


//Задание 10
const arrayz = [3, 7, 2, 5, 9, 1, 4, 6, 8, 10]; // Произвольный массив чисел от 1 до 10
const length = arrayz.length;

for (let i = 0; i < length - 1; i++) {
    const currentElement = arrayz[i];
    const nextElement = arrayz[i + 1];
    const sum = currentElement + nextElement;
    console.log(`Сумма элементов ${currentElement} и ${nextElement} равна ${sum}`);
}


//Задание 11
function squareArray(numbers) {
    return numbers.map(num => num * num);
}

const originalArray = [1, 2, 3, 4, 5];
const squaredArray = squareArray(originalArray);

console.log(squaredArray);


//Задание 12
function wordLengths(strings) {
    return strings.map(str => str.length);
}

const stringsArray = ["apple", "banana", "orange", "kiwi"];
const lengthsArray = wordLengths(stringsArray);

console.log(lengthsArray);


//Задание 13
function negativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}

const numbersArray = [-3, 2, -5, 7, -1, 0, -9];
const negativeArray = negativeNumbers(numbersArray);

console.log(negativeArray);


//Задание 14
// Функция для генерации случайного числа в диапазоне от min до max (включительно)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Создание исходного массива
const originalArrayz = [];
for (let i = 0; i < 10; i++) {
    originalArrayz.push(getRandomNumber(0, 10));
}

console.log("Исходный массив:", originalArrayz);

// Создание массива с четными значениями
const evenArrayz = originalArrayz.filter(num => num % 2 === 0);

console.log("Массив с четными значениями:", evenArrayz);


//Задание 15
// Функция для генерации случайного числа в диапазоне от min до max (включительно)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Создание массива из 6 случайных чисел
const arrays1 = [];
for (let i = 0; i < 6; i++) {
    arrays1.push(getRandomNumber(1, 10));
}

console.log("Массив:", arrays1);

// Вычисление среднего арифметического
const sum = arrays1.reduce((acc, curr) => acc + curr, 0);
const average = sum / arrays1.length;

console.log("Среднее арифметическое:", average);