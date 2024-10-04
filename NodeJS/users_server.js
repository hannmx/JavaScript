const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json()); // Для работы с JSON в теле запросов

// --- Работа с пользователями ---

// Путь к файлу для хранения пользователей
const usersFilePath = path.join(__dirname, 'users.json');

// Функция для чтения пользователей из файла
const loadUsers = () => {
    if (fs.existsSync(usersFilePath)) {
        const data = fs.readFileSync(usersFilePath, 'utf8');
        return JSON.parse(data);
    } else {
        return []; // Если файл не существует, вернем пустой массив
    }
};

// Функция для записи пользователей в файл
const saveUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// Получение всех пользователей
app.get('/users', (req, res) => {
    const users = loadUsers();
    res.json(users);
});

// Получение пользователя по id
app.get('/users/:id', (req, res) => {
    const users = loadUsers();
    const user = users.find(u => u.id === Number(req.params.id));
    
    if (user) {
        res.json(user);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
});

// Создание нового пользователя
app.post('/users', (req, res) => {
    const users = loadUsers();
    
    // Проверяем, что в запросе переданы необходимые данные
    if (!req.body.name || !req.body.age) {
        return res.status(400).send({ message: 'Name and age are required' });
    }

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1, // Автогенерация id
        name: req.body.name,
        age: req.body.age
    };
    
    users.push(newUser);
    saveUsers(users);
    res.status(201).json(newUser);
});

// Обновление пользователя
app.put('/users/:id', (req, res) => {
    const users = loadUsers();
    const userIndex = users.findIndex(u => u.id === Number(req.params.id));
    
    if (userIndex !== -1) {
        // Обновляем только те поля, которые были переданы в запросе
        const updatedUser = {
            ...users[userIndex],
            ...(req.body.name && { name: req.body.name }),
            ...(req.body.age && { age: req.body.age })
        };

        users[userIndex] = updatedUser;
        saveUsers(users);
        res.json(updatedUser);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
});

// Удаление пользователя
app.delete('/users/:id', (req, res) => {
    const users = loadUsers();
    const userIndex = users.findIndex(u => u.id === Number(req.params.id));
    
    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1); // Удаляем пользователя
        saveUsers(users);
        res.status(200).send({ message: 'User deleted', user: deletedUser[0] });
    } else {
        res.status(404).send({ message: 'User not found' });
    }
});

// --- Работа с просмотрами страниц ---

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
        <br>
        <a href="/users">Перейти к пользователям</a>
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
