function isBalanced(str) {
  const memory = [];

  for (const char of str) {
    if (char === '{') {
      memory.push(char);
    } else if (char === '}') {
      if (memory.length === 0) {
        return false;
      }

      memory.pop();
    }
  }

  return memory.length === 0;
}

module.exports = {
  isBalanced,
};
