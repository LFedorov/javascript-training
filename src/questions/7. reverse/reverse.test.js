const { reverse } = require('./reverse');

it('should returrn correct values', () => {
  expect(reverse('')).toEqual('');
  expect(reverse('abcdef')).toEqual('fedcba');
})