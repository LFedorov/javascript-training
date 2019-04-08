/* 
  Реализуйте функцию isPrime(), которая возвращает true или false, 
  указывая, является ли переданное ей число простым.
  Простое число — это натуральное число, большее единицы, 
  имеющее ровно два натуральных делителя: 1 и само себя.
*/

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isPrime,
};
