const http = require('http');

// Счетчики просмотров
let mainPageViews = 0;
let aboutPageViews = 0;

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if (req.url === '/') {
        mainPageViews++;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`
            <h1>Добро пожаловать на главную страницу!</h1>
            <p>Просмотров: ${mainPageViews}</p>
            <a href="/about">Перейти на страницу обо мне</a>
        `);
    } else if (req.url === '/about') {
        aboutPageViews++;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`
            <h1>Добро пожаловать на страницу обо мне!</h1>
            <p>Просмотров: ${aboutPageViews}</p>
            <a href="/">Перейти на главную страницу</a>
        `);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<h1>Страница не найдена</h1>');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на ${port} порту.`);
})