const { indexOf } = require('./index-of');

it('should return correct values', () => {
  expect(indexOf([1, 2, 3], 1)).toEqual(0);
  expect(indexOf([1, 2, 3], 4)).toEqual(-1);
})