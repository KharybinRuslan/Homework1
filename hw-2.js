//ЗАДАЧА 1
let c = 10;
alert(c);
c=20;
alert(c);


//ЗАДАЧА 2
//Год выпуска первого iPhone - 2007
let firstiPhoneYear = 2007;
alert(`Дата выхода первого iPhone - ${firstiPhoneYear} год`);


//ЗАДАЧА 3
//Имя создателя языка JS - Брендан Эйх
let nameJS = 'Брендан Эйх';
alert(`Имя создателя языка JS - ${nameJS}`);


//ЗАДАЧА 4
let x = 10;
let y = 2;

let sum = x + y; // 12
let difference = x - y; // 8
let product = x * y; // 20
let quotient = x / y; // 5

alert("Сумма: " + sum);
alert("Разность: " + difference);
alert("Произведение: " + product);
alert("Частное: " + quotient);


//ЗАДАЧА 5
let result = 2 ** 5; // 32
alert(`Возведение 2 в 5-ю степень: ${result}`);


//ЗАДАЧА 6
let a = 9;
let b = 2;
let remainder = a % b; // 1
alert(`Остаток от деления перемнных a=9 и b=2: ${remainder}`)


//ЗАДАЧА 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);


//ЗАДАЧА 8
let age = parseInt(prompt("Сколько вам лет?"));
// Выводим сообщение на экран с помощью alert()
alert("Вам " + age + " " + getAgeEnding(age));
function getAgeEnding(age) {
// Определяем правильное согласование для слова "год"
    if (age % 10 == 1 && age % 100 != 11) {
        return "год";
    } else if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) {
        return "года";
    } else {
        return "лет";
    }
}


//ЗАДАЧА 9
//Задание 9.0
let user = {
    name: "Ruslan",
    age: 23,     
    isAdmin: true 
};
//Задание 9.1
user.cityOfResidence = "Russian";
//Задание 9.2
user.age = 30;
//Задание 9.3
delete user["cityOfResidence"];
//Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);


//ЗАДАЧА 10
let userName = prompt("Введите ваше имя:");
alert("Привет, " + userName + "!");









