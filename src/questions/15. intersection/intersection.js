// Реализуйте функцию intersection(), которая принимает два массива
// и возвращает их пересечение. Можете ли вы добиться того, чтобы
// функция решала эту задачу за время O(M+N), где M и N — длины массивов?

function intersection(a, b) {
  const memory = new Map();

  for (const key of a) {
    memory.has(key) ? memory.set(key, memory.get(key) + 1) : memory.set(key, 1);
  }

  for (const key of b) {
    memory.has(key) ? memory.set(key, memory.get(key) + 1) : memory.set(key, 1);
  }

  const result = [];

  for (const [key, value] of memory) {
    if (value > 1) {
      result.push(key);
    }
  }

  return result;
}

module.exports = {
  intersection,
};
