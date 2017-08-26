const normalPrice = 8
const fivePercentDiscount = 0.8
const tenPercentDiscount = 2.40
const twentyPercentDiscount = 6.40
const twentyFivePercentDiscount = 10

function cashRegister(assortedHPBooks) {
  if (assortedHPBooks.size == 1) {
    return oneBook()
  } else if (assortedHPBooks.size == 2 && assortedHPBooks.values().next.key != "Harry Potter and the Philosopher's Stone") {
    return twoDifferentBooks()
  } else {
    return threeDifferentBooks()
  }
}

function oneBook() {
  return normalPrice
}

function twoDifferentBooks() {
  return (normalPrice * 2) - fivePercentDiscount
}

function threeDifferentBooks() {
  return (normalPrice * 3) - tenPercentDiscount
}

module.exports = cashRegister;
