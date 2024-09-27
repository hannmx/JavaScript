// Импорт функций из вашей библиотеки
const { getRandomName, getRandomNumber, generatePassword } = require('my-random-data-lib');

// Использование функций для вывода случайных данных
console.log(getRandomName()); // Например: "Alice" (или другое случайное имя)
console.log(getRandomNumber(1, 100)); // Например: 57 (случайное число между 1 и 100)
console.log(generatePassword(12)); // Например: 'a1B2c3D4e5F6' (случайный пароль длиной 12 символов)
