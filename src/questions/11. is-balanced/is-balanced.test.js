const { isBalanced } = require('./is-balanced');

it('should return correct values', () => {
  expect(isBalanced('}{')).toEqual(false);
  expect(isBalanced('{{}')).toEqual(false);
  expect(isBalanced('{}{}')).toEqual(true);
  expect(isBalanced('foo { bar { baz } boo }')).toEqual(true);
  expect(isBalanced('foo { bar { baz }')).toEqual(false);
  expect(isBalanced('foo { bar } }')).toEqual(false);
});
