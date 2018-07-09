const { isPrime } = require('./is-prime');

it('should return correct result', () => {
  expect(isPrime(0)).toBeFalsy();
  expect(isPrime(1)).toBeFalsy();
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(3)).toBeTruthy();
  expect(isPrime(4)).toBeFalsy();
  expect(isPrime(17)).toBeTruthy();
  expect(isPrime(89)).toBeTruthy();
  expect(isPrime(10000000000000)).toBeFalsy();
});
