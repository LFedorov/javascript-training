const { filter } = require('./filter');

it('should return correct values', () => {
  const actual = filter([1, 2, 3, 4], n => n < 3);
  const expected = [1, 2];

  expect(actual).toEqual(expected);
})