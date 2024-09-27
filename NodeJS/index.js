// Функция для генерации случайных имен
function getRandomName() {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
    return names[Math.floor(Math.random() * names.length)];
  }
  
  // Функция для генерации случайных чисел
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Функция для генерации случайного пароля
  function generatePassword(length = 8) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
  }
  
  // Экспортируем функции
  module.exports = {
    getRandomName,
    getRandomNumber,
    generatePassword,
  };
  