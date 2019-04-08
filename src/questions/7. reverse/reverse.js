// Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки.
// Не пользуйтесь встроенной функцией reverse().

function reverse(str) {
  const max = str.length - 1;
  const mid = Math.floor(max / 2);

  let result = [];

  for (let i = 0; i <= mid; i++) {
    result[i] = str[max - i];
    result[max - i] = str[i];
  }

  return result.join('');
}

module.exports = {
  reverse,
};
