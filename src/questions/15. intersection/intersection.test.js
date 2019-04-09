const { intersection } = require('./intersection');

it('should return correct values', () => {
  expect(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])).toEqual([1, 4]);
  expect(intersection([1, 5, 4, 2], [7, 12])).toEqual([]);
});
