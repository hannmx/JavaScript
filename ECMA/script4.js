// Получение данных о пользователе
function getUserData(userId) {
    return fetch(`https://example.com/users/${userId}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Пользователь с ID ${userId} не найден`);
            }
        })

}

// Отправка данных на сервер
function saveUserData(userData) {
    return fetch('https://example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (response.ok) {
                return;
            } else {
                throw new Error('Ошибка при отправке данных на сервер');
            }
        });
}

// Изменение стиля элемента через заданное время
function changeStyleDelayed(elementId, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.color = 'red'; // пример изменения стиля
        } else {
            console.error(`Элемент с ID ${elementId} не найден`);
        }
    }, delay);
}