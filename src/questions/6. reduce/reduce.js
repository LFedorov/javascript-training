/*
  Создайте собственную реализацию функции reduce().
*/

function reduce(arr, fn, acc) {
  let res = acc;

  for (let i = 0; i < arr.length; i++) {
    res = fn(res, arr[i]);
  }

  return res;
}

module.exports = {
  reduce,
};
