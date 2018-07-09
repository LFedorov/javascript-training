const { factorial } = require('./factorial');

it('should return corret values', () => {
  expect(factorial(0)).toEqual(1);
  expect(factorial(1)).toEqual(1);
  expect(factorial(5)).toEqual(120);
  expect(factorial(6)).toEqual(720);
})