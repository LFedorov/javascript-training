// Реализуйте функцию includes(), которая возвращает true или false
// в зависимости от того, встречается ли переданное ей число в переданном
// ей отсортированном массиве. Может ли функция решить эту задачу за время O(log(N))?

function includes(arr, num) {
  if (arr.length === 0) {
    return false;
  }

  if (arr.length === 1) {
    return arr[0] === num;
  }

  const max = arr.length;
  const mid = Math.floor(max / 2);

  if (arr[mid] === num) {
    return true;
  }

  return arr[mid] > num ? includes(arr.slice(0, mid), num) : includes(arr.slice(mid + 1, max), num);
}

module.exports = {
  includes,
};
