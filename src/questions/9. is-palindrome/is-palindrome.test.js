const { isPalindrome } = require('./is-palindrome');

it('should return corret values', () => {
  expect(isPalindrome('')).toBeTruthy();
  expect(isPalindrome('abcdcba')).toBeTruthy();
  expect(isPalindrome('abcd')).toBeFalsy();
  expect(isPalindrome('A man a plan a canal Panama')).toBeTruthy();
  expect(isPalindrome('А роза упала на лапу Азора.')).toBeTruthy();
  expect(isPalindrome('Аргентина манит негра')).toBeTruthy();
  expect(isPalindrome('Казак')).toBeTruthy();
  expect(isPalindrome('Лев с ума ламу свел')).toBeTruthy();
  expect(isPalindrome('Замучен он, но не чумаз!')).toBeTruthy();
})