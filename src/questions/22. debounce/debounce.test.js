const { debounce } = require('./debounce');

it('should be called once', async () => {
  const fn = jest.fn();

  let deb = debounce(fn, 100);
  deb(1);
  deb(2);
  deb(3);

  await new Promise(r => setTimeout(r, 1000));

  expect(fn).toHaveBeenCalledTimes(1);
})