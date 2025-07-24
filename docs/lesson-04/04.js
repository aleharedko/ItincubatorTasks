/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(pushString) {
    let stringPush = '';
    for (let index = 0; index < pushString.length; index++) {
        let char = pushString[index];
        stringPush += char + char

    }
    return stringPush

}

let trys = doubleEachCharacter('str')
console.log(trys);
