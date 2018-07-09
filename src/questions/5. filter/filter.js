/*
  Создайте собственную реализацию функции filter()
*/

function filter(arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (fn(current)) {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  filter,
}