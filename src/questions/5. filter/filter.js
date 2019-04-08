// Создайте собственную реализацию функции filter()

function filter(arr, predicate) {
  return arr.reduce((result, item) => {
    if (predicate(item)) {
      result.push(item);
    }

    return result;
  }, []);
}

module.exports = {
  filter,
};
