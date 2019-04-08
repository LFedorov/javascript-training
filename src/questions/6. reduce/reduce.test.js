const { reduce } = require('./reduce');

it('should return correct values', () => {
  const actual = reduce([1, 2, 3, 4], (a, b) => a + b, 0);
  const expected = 10;

  expect(actual).toEqual(expected);
});
