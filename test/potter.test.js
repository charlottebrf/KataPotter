const cashRegister = require('../src/potter')

test('one copy of a HP book costs the standard amount', () => {
  let assortedHPBooks = new Map([['BookTitle1', "Harry Potter and the Philosopher\'s Stone"]])
  expect(cashRegister(assortedHPBooks)).toBe(8)
})

test('two different copies of a HP book costs gives a 5% discount', () => {
    let assortedHPBooks = new Map([['BookTitle1', "Harry Potter and the Philosopher\'s Stone"], ['BookTitle2', "Harry Potter and the Chamber of Secrets"]])
  expect(cashRegister(assortedHPBooks)).toBe(15.2)
})

test('three different copies of a HP book costs gives a 10% discount', () => {
    let assortedHPBooks = new Map([['BookTitle1', "Harry Potter and the Philosopher\'s Stone"], ['BookTitle2', "Harry Potter and the Chamber of Secrets"], ['BookTitle3', "Harry Potter and the Prisoner of Azkaban"]])
  expect(cashRegister(assortedHPBooks)).toBe(21.60)
})

test('four different copies of a HP book costs gives a 20% discount', () => {
    let assortedHPBooks = new Map([['BookTitle1', "Harry Potter and the Philosopher\'s Stone"], ['BookTitle2', "Harry Potter and the Chamber of Secrets"], ['BookTitle3', "Harry Potter and the Prisoner of Azkaban"], ['BookTitle4', "Harry Potter and the Goblet of fire"]])
  expect(cashRegister(assortedHPBooks)).toBe(25.60)
})

test('five different copies of a HP book costs gives a 25% discount', () => {
    let assortedHPBooks = new Map([['BookTitle1', "Harry Potter and the Philosopher\'s Stone"], ['BookTitle2', "Harry Potter and the Chamber of Secrets"], ['BookTitle3', "Harry Potter and the Prisoner of Azkaban"], ['BookTitle4', "Harry Potter and the Goblet of fire"], ['BookTitle5', "Order of the Phoenix"]])
  expect(cashRegister(assortedHPBooks)).toBe(30.00)
})
