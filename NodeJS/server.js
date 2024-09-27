const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Путь к файлу для хранения счетчиков
const filePath = path.join(__dirname, 'viewsCount.json');

// Функция для чтения данных из файла
const loadViewCounts = () => {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } else {
        return { '/': 0, '/about': 0 }; // Если файл не существует, установим начальные значения
    }
};

// Функция для записи данных в файл
const saveViewCounts = (viewCounts) => {
    fs.writeFileSync(filePath, JSON.stringify(viewCounts, null, 2));
};

// Загружаем начальные данные при старте сервера
let viewCounts = loadViewCounts();

// Обработчик для главной страницы "/"
app.get('/', (req, res) => {
    viewCounts['/'] += 1; // Увеличиваем счетчик для главной страницы
    saveViewCounts(viewCounts); // Сохраняем обновленные данные
    res.send(`
        <h1>Добро пожаловать на главную страницу!</h1>
        <p>Просмотров: ${viewCounts['/']}</p>
        <a href="/about">Перейти на страницу обо мне</a>
    `);
});

// Обработчик для страницы "Обо мне" "/about"
app.get('/about', (req, res) => {
    viewCounts['/about'] += 1; // Увеличиваем счетчик для страницы "Обо мне"
    saveViewCounts(viewCounts); // Сохраняем обновленные данные
    res.send(`
        <h1>Добро пожаловать на страницу обо мне!</h1>
        <p>Просмотров: ${viewCounts['/about']}</p>
        <a href="/">Перейти на главную страницу</a>
    `);
});

// Обработчик для несуществующих страниц
app.use((req, res) => {
    res.status(404).send('<h1>Страница не найдена</h1>');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
