// Минимальное число в массиве
const arr = [1, 5, 7, 9];
const min = Math.min(...arr);
console.log(`Минимальное число в массиве: ${min}`);

// Счетчик
function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getCount() {
            return count;
        }
    };
}

console.log(`Проверка работы счетчика:`);
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 3
counter.decrement();
console.log(counter.getCount()); // 2

// Рекурсивная функция поиска элемента по классу
function findElementByClass(rootElement, className) {
    if (rootElement.classList.contains(className)) {
        return rootElement;
    }

    for (const child of rootElement.children) {
        const foundElement = findElementByClass(child, className);
        if (foundElement) {
            return foundElement;
        }
    }
    return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);