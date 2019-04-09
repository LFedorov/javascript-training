const { includes } = require('./includes');

it('should return false on empty array', () => {
  expect(includes([], 1)).toEqual(false);
});

it('should return correct values', () => {
  expect(includes([1], 1)).toEqual(true);
  expect(includes([1], 2)).toEqual(false);
  expect(includes([1, 3, 8, 10], 8)).toEqual(true);
  expect(includes([1, 3, 8, 8, 15], 15)).toEqual(true);
  expect(includes([1, 3, 8, 10, 15], 9)).toEqual(false);
});
