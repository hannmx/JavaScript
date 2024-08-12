// Задание 1
let i = 0;
console.log(`${i} - это ноль`);
for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}

// Задание 2
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 4 && arr[i] != 5) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);

// Задание 3
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 10));
}
console.log("Случайные числа:", randomNumbers);

let sum = 0;
for (let i = 0; i < randomNumbers.length; i++) {
    sum += randomNumbers[i];
}
console.log("Сумма элементов: ", sum);

let min = 0;
for (let i = 0; i < randomNumbers.length; i++) {
     if (randomNumbers[i] < min) {
        min = randomNumbers[i];
     }
}
console.log("Минимальное значение: ", min);

let containsThree = randomNumbers.includes(3);
console.log("Есть ли в массиве число 3?", containsThree);

// Задание 4
for (let i = 0; i <= 20; i++) {
    console.log('x'.repeat(i));    
}