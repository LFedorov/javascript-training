/*
  Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.
*/

function fib(num) {
  if (num < 0) {
    return;
  }

  if (num <= 1) {
    return num;
  }

  let a = 1;
  let b = 1;

  for (let i = 3; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
}

module.exports = {
  fib,
}