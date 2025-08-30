/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(string) {
  // let creatArray = [string]
  // creatArray.splice
  if(string.length === 0){
    return ''
  }

  let word = string.split(" ")
  let firstWord = word[0]
  const solution = firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
  word[0] = solution 
 // const solution = string.charAt(0).toUpperCase() //+ string.slice(1)
  return word.join(' ')
}

const array = capitalizeWords("hello world from javascript")
console.log(array);

