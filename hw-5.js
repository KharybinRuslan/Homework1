//ЗАДАЧА 1
function minOfTwoNumbers(firstNumber, secondNumber) {
    return Math.min(firstNumber, secondNumber);
}

let number1 = 8;
let number2 = 4;
let result = minOfTwoNumbers(number1, number2);
console.log("Меньшее число: " + result); // Выведет: Меньшее число: 4



//ЗАДАЧА 2
function checkNumberEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

let userInput = prompt("Введите число:");

let number = parseFloat(userInput);

let results = checkNumberEvenOrOdd(number);
console.log(results);



//ЗАДАЧА 3
function printSquare(numbers) {
    console.log("Квадрат числа " + numbers + " равен: " + (numbers * numbers));
}

function getSquare(numbers) {
    return numbers * numbers;
}

let usersInput = prompt("Введите число:");

let numbers = parseFloat(usersInput);

printSquare(numbers);

let square = getSquare(numbers);
console.log("Квадрат числа " + numbers + " равен: " + square);



//ЗАДАЧА 4
function welcomeMessage() {

    let age = parseInt(prompt("Сколько вам лет?"));

    if (age < 0) {
        console.log("Вы ввели неправильное значение");
    } else if (age <= 12) {
        console.log("Привет, друг!");
    } else {
        console.log("Добро пожаловать!");
    }
}

welcomeMessage();



//ЗАДАЧА 5
function multiplyNumbers(num1, num2) {
    // Проверка, являются ли оба параметра числами
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        // Если оба параметра являются числами, вернуть их произведение
        return num1 * num2;
    }
}

// Примеры использования функции:
console.log(multiplyNumbers(5, 10)); // Выведет: 50
console.log(multiplyNumbers("5", 10)); // Выведет: Одно или оба значения не являются числом
console.log(multiplyNumbers("5", "abc")); // Выведет: Одно или оба значения не являются числом





//ЗАДАЧА 6
function cubeNumber() {
    // Запросить у пользователя число
    let userInput = prompt("Введите число:");
    
    // Проверить, является ли введенное значение числом
    if (isNaN(userInput)) {
        return 'Переданный параметр не является числом';
    } else {
        // Преобразовать введенную строку в число и возвести его в куб
        let number = parseFloat(userInput);
        let result = Math.pow(number, 3);
        return number + " в кубе равняется " + result;
    }
}

// Проверка работы функции с числами от 0 до 10
for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));
}



//ЗАДАЧА 7
// Определение объекта circle1
let circle1 = {
    radius: 5,

    // Метод для вычисления площади круга
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },

    // Метод для вычисления периметра окружности
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

// Определение объекта circle2
let circle2 = {
    radius: 8,

    // Метод для вычисления площади круга
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },

    // Метод для вычисления периметра окружности
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

// Проверка работы методов для circle1
console.log("Площадь круга circle1:", circle1.getArea());
console.log("Периметр окружности circle1:", circle1.getPerimeter());

// Проверка работы методов для circle2
console.log("Площадь круга circle2:", circle2.getArea());
console.log("Периметр окружности circle2:", circle2.getPerimeter());




//ЗАДАЧА 8
