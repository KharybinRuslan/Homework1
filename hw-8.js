//ЗАДАНИЕ 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);




//ЗАДАНИЕ 2
function filter(array, ruleFunction) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peoples, isMale));




//ЗАДАНИЕ 3
// Функция для вывода текущей даты
function printDate() {
    console.log(new Date());
}

// Функция для вывода сообщения о завершении
function printEndMessage() {
    console.log("30 секунд прошло");
}

// Переменная для хранения идентификатора интервала
let intervalId;

// Задаём интервал вывода текущей даты
intervalId = setInterval(printDate, 3000);

// Устанавливаем отложенное выполнение вывода сообщения о завершении через 30 секунд
setTimeout(() => {
    // Очищаем интервал
    clearInterval(intervalId);
    // Выводим сообщение о завершении
    printEndMessage();
}, 30000);




//ЗАДАНИЕ 4
function delayForSecond(callback) {
    setTimeout(callback, 1000); // Задержка выполнения колбэка на 1 секунду (1000 миллисекунд)
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});



//ЗАДАНИЕ 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log('Привет, ${name}!');
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));
