const { fib } = require('./fib');

it('should return correct values', () => {
  expect(fib(0)).toEqual(0);
  expect(fib(1)).toEqual(1);
  expect(fib(2)).toEqual(1);
  expect(fib(3)).toEqual(2);
  expect(fib(10)).toEqual(55);
  expect(fib(20)).toEqual(6765);
})