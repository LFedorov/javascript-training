const { missing } = require('./missing');

it('should return correct values', () => {
  expect(missing([])).toEqual(undefined);
  expect(missing([1, 4, 3])).toEqual(2);
  expect(missing([2, 3, 4])).toEqual(1);
  expect(missing([5, 1, 4, 2])).toEqual(3);
  expect(missing([1, 2, 3, 4])).toEqual(undefined);
})