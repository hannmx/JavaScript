// Управление персоналом компании
class Employee {
    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Имя: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Отдел: ${this.department}`);
    }
}

// Пример использования наследования класса
const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод:
// Name: John Smith
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales

// Управление списком заказов
class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        let totalPrice = 0;
        for (let product of this.products) {
            totalPrice += product.price;
        }
        return totalPrice;
    }
}

// Пример использования класса
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600