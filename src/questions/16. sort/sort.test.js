const { sort } = require('./sort');

it('should return correct values', () => {
  expect(sort([])).toEqual([]);
  expect(sort([-4, 1, Infinity, 3, 3, 0])).toEqual([-4, 0, 1, 3, 3, Infinity]);
});
