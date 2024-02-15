//ЗАДАЧА 1
let password = 'пароль';
let userInput = prompt('Введите пароль:');

if (userInput === userInput) {
    console.log(`Пароль введен верно`)
} else {
    console.log(`Пароль введен неправильно`)
}

//ЗАДАЧА 2
let c = Number(prompt(`Введите любое число`));

if (c > 0 && c < 10) {
    console.log(`Верно`)
} else {
    console.log(`Не Верно`)
}

//ЗАДАЧА 3
let d = Number(prompt(`Введите любое число для d`));
let e = Number(prompt(`Введите любое число для e`));

if (d > 100 || e > 100) {
    console.log(`Верно`)
} else {
    console.log(`Не Верно`)
}


//ЗАДАЧА 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(+a + +b);

//ЗАДАЧА 5
let monthNumber = 12; // Номер месяца

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Этот месяц принадлежит к сезону "зима"');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Этот месяц принадлежит к сезону "весна"');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Этот месяц принадлежит к сезону "лето"');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Этот месяц принадлежит к сезону "осень"');
        break;
    default:
        console.log('Ошибка: номер месяца больше 12');
}

//Задание 7 (дополнительное)
let usersInput = prompt('Пожалуйста, введите любое число:');
let number = parseFloat(usersInput);

if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert('Число ' + number + ' четное.');
    } else {
        alert('Число ' + number + ' нечетное.');
    }
} else {
    alert('Вы ввели некорректное число.');
}

//Задание 8 (дополнительное)
let clientOS = prompt('Введите код операционной системы (0 для iOS, 1 для Android):');

if (clientOS === '0') {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === '1') {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Некорректный код операционной системы');
}

//Задание 9 (дополнительное)
let clienOS = prompt('Введите код операционной системы (0 для iOS, 1 для Android):');
let clienDeviceYear = prompt('Введите год выпуска телефона:');

if (clienOS === '0') {
    if (clienDeviceYear >= 2015) {
        console.log('Установите версию приложения для iOS по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    }
} else if (clienOS === '1') {
    if (clienDeviceYear >= 2015) {
        console.log('Установите версию приложения для Android по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    }
} else {
    console.log('Некорректный код операционной системы');
}