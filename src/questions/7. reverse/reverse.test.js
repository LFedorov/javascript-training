const { reverse } = require('./reverse');

it('should return correct values', () => {
  expect(reverse('')).toEqual('');
  expect(reverse('abcdef')).toEqual('fedcba');
})