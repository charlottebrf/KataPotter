const cashRegister = require('../src/potter');

test('one copy of a HP book costs 8 EUR', () => {
  let assortedHPBooks = new Map();
  assortedHPBooks = assortedHPBooks.set('Harry Potter and the Philosopher\'s Stone', 1)
  expect(cashRegister(assortedHPBooks)).toBe(8);
});
