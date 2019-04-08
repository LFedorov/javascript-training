// Создайте реализацию функции sort(), которая сортирует числовой массив за время O(N×log(N)).

function sort(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  const head = arr[0];
  const { left, middle, right } = arr.reduce(
    (result, num) => {
      if (num < head) {
        result.left.push(num);
      } else if (num === head) {
        result.middle.push(num);
      } else {
        result.right.push(num);
      }

      return result;
    },
    { left: [], middle: [], right: [] },
  );

  return sort(left).concat(middle, sort(right));
}

module.exports = {
  sort,
};
