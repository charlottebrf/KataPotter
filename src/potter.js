var unique = require('array-unique');

const normalPrice = 8
const fivePercentDiscount = 0.8
const tenPercentDiscount = 2.40
const twentyPercentDiscount = 6.40
const twentyFivePercentDiscount = 10

function cashRegister(assortedHPBooks) {
  let length = assortedHPBooks.length
  let unique = uniqueBooks(assortedHPBooks)
  let discount = calculateDiscount(unique)
  let normalBooks = length - unique
  return (normalBooks * oneBook()) + discount
}

function calculateDiscount(unique) {
  switch (unique) {
    case 1:
    return oneBook()
    break;
    case 2:
    return twoDifferentBooks()
    break;
    case 3:
    return threeDifferentBooks()
    break;
    case 4:
    return fourDifferentBooks()
    break;
    case 5:
    return fiveDifferentBooks()
    break;
  }
}

function uniqueBooks(assortedHPBooks) {
  return unique(assortedHPBooks).length
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

function fourDifferentBooks() {
  return (normalPrice * 4) - twentyPercentDiscount
}

function fiveDifferentBooks() {
  return (normalPrice * 5) - twentyFivePercentDiscount
}


module.exports = cashRegister;
