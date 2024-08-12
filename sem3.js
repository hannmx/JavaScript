// Задание 1
let num = prompt("Введите число для возведения в куб");

function power(num) {
    return num ** 3;
}

console.log(`${power(num)}`);

// Задание 2
let salary = prompt("Введите Вашу заработную плату");

function salaryIncludeTax(sal) {
    sal = sal - sal * 0.13;
    return sal;
}

console.log(`Размер заработной платы за вычетом налогов равен: ${salaryIncludeTax(salary)} руб.`);

// Задание 3
let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");
let num3 = prompt("Введите третье число");

function FindMaxNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(`Максимальное значение из этих чисел: ${FindMaxNumber(num1, num2, num3)}`);

// Задание 4
let param1 = prompt("Введите первое число");
let param2 = prompt("Введите второе число");

param1 = parseFloat(param1);
param2 = parseFloat(param2);

function sum(param1, param2) {
    return param1 + param2;
}

console.log(`Результат суммы чисел: ${sum(param1, param2)}`);

function diff(param1, param2) {
    if (param1 > param2) {
        return param1 - param2;
    } else {
        return param2 - param1;
    }
}

console.log(`Результат разности чисел: ${diff(param1, param2)}`);

function mult(param1, param2) {
    return param1 * param2;
}

console.log(`Результат умножения чисел: ${mult(param1, param2)}`);

function div(param1, param2) {
    return param1 / param2;
}

console.log(`Результат деления чисел: ${div(param1, param2)}`);