/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

// function isNumeric(str) {
//   if (typeof str !== 'number') {
//     return false
//   }
//   const num = parseFloat(str)
//   return isNumeric(num)
// }

/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

// function isNumeric(str) {
//   if (typeof str !== 'number') {
//     return false
//   }
//   const num = parseFloat(str)
//   return isNumeric(num)
// }

function isNumeric(str) {
  if (typeof str !== 'string' || str.trim() === '') { //два сравнения перый если срт не строка, а второй если она пустая, если при использовании .trim нет пробельных символов то будет true
    return false;
  }

  const num = Number(str);

  return isFinite(num);
}


// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
const exemple = isNumeric("123a")
console.log(exemple);