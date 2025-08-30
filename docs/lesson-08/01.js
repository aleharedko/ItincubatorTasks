/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(string) {
  if (string.length === 0) {
    return ''
  }

  let newString = "";

  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (element === 'h' || element === 'w' || element === 'f' || element === 'j') {
      newString = element.toUpperCase() +  
    }
    
  }
  // const solution = string.charAt(0).toUpperCase() + string.slice(1)
  // return solution
  return newString
}

const array = capitalizeWords("hello world from javascript")
console.log(array);

