/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/


// 1. Сначала объявите функцию filter
const filter = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const index = i;
    if (callback(element, index) === true) {
      newArray.push(element);
    }
  }
  return newArray;
};

// 2. Затем вызовите её и присвойте результат переменной oddNumbers
const numbers = [1, 2, 3, 4, 5];
const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0;
});

console.log(oddNumbers); // [1, 3, 5]