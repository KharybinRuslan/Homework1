// ЗАДАЧА 1
for (let i = 0; i < 2; i++) {
    console.log("Привет");
}


// Задача 2
for (let i = 1; i <= 5; i++){
    console.log(i);
}

// Задача 3
let i = 7;

while (i <= 22) {
    console.log(i);
    i++;
}

// Задача 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
 };
 
 for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
 }

// Задача 5
let n = 1000;
let num;

for (num = 0; n >= 50; num++) {
    n /= 2;
}

console.log("Результат деления: " + n);
console.log("Количество итераций: " + num);

// Задача 6
const firstFriday = 5;

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}