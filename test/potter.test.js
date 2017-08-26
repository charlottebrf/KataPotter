const cashRegister = require('../src/potter');

test('one copy of a HP book costs the standard amount', () => {
  let assortedHPBooks = new Map([['Harry Potter and the Philosopher\'s Stone', 1]]);
  expect(cashRegister(assortedHPBooks)).toBe(8);
});

test('two different copies of a HP book costs gives a 5% discount', () => {
    let assortedHPBooks = new Map([['Harry Potter and the Philosopher\'s Stone', 1], ['Second book', 1]]);
  expect(cashRegister(assortedHPBooks)).toBe(15.2);
});

test('two different copies of a HP book costs gives a 10% discount', () => {
    let assortedHPBooks = new Map([['Harry Potter and the Philosopher\'s Stone', 1], ['Second book', 1], ['Third book', 1]]);
  expect(cashRegister(assortedHPBooks)).toBe(21.60);
});
