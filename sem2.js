// Задание 1
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

console.log(`Пользователь ввел ${num1} и ${num2}`);
console.log(`${num1} меньше или равно 1: ${num1 <= 1}`);
console.log(`${num2} больше или равно 3: ${num2 >= 3}`);

// Задание 2
let test = confirm("Да или нет?");
test === true ? console.log("+++") : console.log("---");

// Задание 3
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let day = getRandomInt(1, 31);
console.log(`День месяца: ${day}`);

if (day <= 10) {
    console.log("Относится к 1 декаде месяца");
} else if (day > 10 && day <= 20) {
    console.log("Относится к 2 декаде месяца");
} else {
    console.log("Относится к 3 декаде месяца");
}