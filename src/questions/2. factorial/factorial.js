/*
  Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.
*/

function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  let res = 1;

  for (let i = 1; i <= num; i++) {
    res = res * i;
  }

  return res;
}

module.exports = {
  factorial,
};
