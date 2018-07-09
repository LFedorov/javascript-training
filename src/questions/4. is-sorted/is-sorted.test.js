const { isSorted } = require('./is-sorted');

it('should return correct values', () => {
  expect(isSorted([])).toBeTruthy();
  expect(isSorted([-Infinity, -5, 0, 3, 9])).toBeTruthy();
  expect(isSorted([3, 9, -3, 10])).toBeFalsy();
})
