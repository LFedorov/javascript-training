/*
  Создайте собственную реализацию функции indexOf() для массивов
*/

function indexOf(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}

module.exports = {
  indexOf,
};
