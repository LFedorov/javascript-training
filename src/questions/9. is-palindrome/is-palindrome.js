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

  const max = chars.length - 1;
  const mid = Math.floor(max / 2);

  for (let i = 0; i <= mid; i++) {
    if (chars[i] !== chars[max - i]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isPalindrome,
};
