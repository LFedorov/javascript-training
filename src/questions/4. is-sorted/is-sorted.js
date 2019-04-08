/*
  Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, 
  отсортирован ли переданный ей числовой массив.
*/

function isSorted(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isSorted,
};
