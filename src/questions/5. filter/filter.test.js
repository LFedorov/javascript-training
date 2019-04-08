const { filter } = require('./filter');

it('should return correct values', () => {
  const actual = filter([1, 2, 3, 4], n => n < 3);
  const expected = [1, 2];

  expect(actual).toEqual(expected);
});

it('should return empty array if items not found', () => {
  const actual = filter([1, 2, 3], x => x > 3);
  const expected = [];

  expect(actual).toEqual(expected);
});
