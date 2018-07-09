/*
  Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки. 
  Не пользуйтесь встроенной функцией reverse().
*/

function reverse(str) {
  let result = '';
  
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

module.exports = {
  reverse,
}