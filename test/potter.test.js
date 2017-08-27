const cashRegister = require('../src/potter')

test('one copy of a HP book costs the standard amount', () => {
  let assortedHPBooks = ["Harry Potter and the Philosopher\'s Stone"]
  expect(cashRegister(assortedHPBooks)).toBe(8)
})

test('two different copies of a HP book costs gives a 5% discount', () => {
    let assortedHPBooks = ["Harry Potter and the Philosopher\'s Stone",
                          "Harry Potter and the Chamber of Secrets"]
  expect(cashRegister(assortedHPBooks)).toBe(15.2)
})

test('two of the same copies of a HP book costs the standard amount', () => {
    let assortedHPBooks = ["Harry Potter and the Philosopher\'s Stone",
                          "Harry Potter and the Philosopher\'s Stone"]
  expect(cashRegister(assortedHPBooks)).toBe(16)
})

test('three different copies of a HP book costs gives a 10% discount', () => {
    let assortedHPBooks = ["Harry Potter and the Philosopher\'s Stone",
                          "Harry Potter and the Chamber of Secrets",
                          "Harry Potter and the Prisoner of Azkaban"]
  expect(cashRegister(assortedHPBooks)).toBe(21.60)
})

test('three books with two different copies gives a 5% discount on two books', () => {
    let assortedHPBooks = ["Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Chamber of Secrets",
                            "Harry Potter and the Chamber of Secrets"]
  expect(cashRegister(assortedHPBooks)).toBe(23.20)
})

test('three of the same copies of a HP book costs the standard amount', () => {
  let assortedHPBooks = ["Harry Potter and the Philosopher\'s Stone",
                        "Harry Potter and the Philosopher\'s Stone",
                        "Harry Potter and the Philosopher\'s Stone"]
    expect(cashRegister(assortedHPBooks)).toBe(24)
})

test('four different copies of a HP book costs gives a 20% discount', () => {
    let assortedHPBooks = ["Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Chamber of Secrets",
                            "Harry Potter and the Prisoner of Azkaban",
                            "Harry Potter and the Goblet of fire"]
  expect(cashRegister(assortedHPBooks)).toBe(25.60)
})

test('four books with three different copies gives a 10% discount', () => {
  let assortedHPBooks = ["Harry Potter and the Philosopher\'s Stone",
                          "Harry Potter and the Chamber of Secrets",
                          "Harry Potter and the Prisoner of Azkaban",
                          "Harry Potter and the Prisoner of Azkaban"]
  expect(cashRegister(assortedHPBooks)).toBe(29.60)
})

test('four books with two different copies gives a 5% discount', () => {
  let assortedHPBooks = ["Harry Potter and the Philosopher\'s Stone",
                         "Harry Potter and the Prisoner of Azkaban",
                          "Harry Potter and the Prisoner of Azkaban",
                          "Harry Potter and the Prisoner of Azkaban"]
  expect(cashRegister(assortedHPBooks)).toBe(31.20)
})

test('four books of the same book gives the standard price', () => {
  let assortedHPBooks = ["Harry Potter and the Prisoner of Azkaban",
                         "Harry Potter and the Prisoner of Azkaban",
                         "Harry Potter and the Prisoner of Azkaban",
                          "Harry Potter and the Prisoner of Azkaban"]
  expect(cashRegister(assortedHPBooks)).toBe(32.00)
})


test('five different copies of a HP book costs gives a 25% discount', () => {
    let assortedHPBooks =  ["Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Chamber of Secrets",
                            "Harry Potter and the Prisoner of Azkaban",
                            "Harry Potter and the Goblet of fire",
                            "Order of the Phoenix"]
  expect(cashRegister(assortedHPBooks)).toBe(30.00)
})

test('five books with 4 different HP books gives the 20% discount', () => {
    let assortedHPBooks =  ["Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Prisoner of Azkaban",
                            "Harry Potter and the Goblet of fire",
                            "Order of the Phoenix"]
  expect(cashRegister(assortedHPBooks)).toBe(33.60)
})

test('five books with 3 different HP books gives the 10% discount', () => {
    let assortedHPBooks =  ["Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Goblet of fire",
                            "Order of the Phoenix"]
  expect(cashRegister(assortedHPBooks)).toBe(37.60)
})

test('five books with 2 different HP books gives the 5% discount', () => {
    let assortedHPBooks =  ["Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Philosopher\'s Stone",
                            "Order of the Phoenix"]
  expect(cashRegister(assortedHPBooks)).toBe(39.20)
})


test('five books of the same titles gives the standard price', () => {
    let assortedHPBooks =  ["Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Philosopher\'s Stone",
                            "Harry Potter and the Philosopher\'s Stone"]
  expect(cashRegister(assortedHPBooks)).toBe(40.00)
})
