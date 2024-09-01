// Управление библиотекой книг
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Название: ${this.title}`);
        console.log(`Автор: ${this.author}`);
        console.log(`Количество страниц: ${this.pages}`);
    }
}

// Пример использования класса
const book1 = new Book("JavaScript: The Definitive Guide", "David Flanagan", 1000);
book1.displayInfo();

const book2 = new  Book("HTML и CSS: Проектирование и построение веб-сайтов", "Джон Дакетт", 500);
book2.displayInfo();

// Управление списком студентов
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`Имя: ${this.name}`);
        console.log(`Возраст: ${this.age}`);
        console.log(`Класс: ${this.grade}`);
    }
}

// Пример использования класса
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"