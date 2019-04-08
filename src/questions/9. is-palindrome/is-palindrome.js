/**
  Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того, 
  является ли переданная ей строка палиндромом 
  (функция нечувствительна к регистру и к наличию в строке пробелов).
*/

function isPalindrome(str) {
  if (str.length === 0) {
    return true;
  }

  const chars = str.toLowerCase().replace(/[^a-zа-я]/g, '');

  if (chars.length === 0) {
    return false;
  }

  const mid = Math.floor(chars.length / 2);

  for (let i = 0; i < mid; i++) {
    let j = chars.length - 1 - i;

    if (chars[i] !== chars[j]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isPalindrome,
};
