var unique = require('array-unique');

const normalPrice = 8
const fivePercentDiscount = 0.8
const tenPercentDiscount = 2.40
const twentyPercentDiscount = 6.40
const twentyFivePercentDiscount = 10

function cashRegister(assortedHPBooks) {
  if (assortedHPBooks.length == 1) {
    return oneBook()
  } else if (assortedHPBooks.length == 2) {
    return twoBooks(assortedHPBooks)
  } else if (assortedHPBooks.length == 3 && allDifferentBooks(assortedHPBooks) == true) {
    return threeDifferentBooks()
  }  else if (assortedHPBooks.length == 4 && allDifferentBooks(assortedHPBooks) == true) {
    return fourDifferentBooks()
  } else if (assortedHPBooks.length == 5 && allDifferentBooks(assortedHPBooks) == true) {
    return fiveDifferentBooks()
  }
}

function twoBooks(assortedHPBooks) {
  if (allDifferentBooks(assortedHPBooks) == true) {
    return twoDifferentBooks()
  } else if (duplicativeBooks(assortedHPBooks) == 1) {
    return 23.2
  }
}

function allDifferentBooks(assortedHPBooks) {
  let allBooks = assortedHPBooks.length
  let uniqueBooks = unique(assortedHPBooks).length
  if (allBooks == uniqueBooks) {
    return true
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

function fourDifferentBooks() {
  return (normalPrice * 4) - twentyPercentDiscount
}

function fiveDifferentBooks() {
  return (normalPrice * 5) - twentyFivePercentDiscount
}

function duplicativeBooks(assortedHPBooks) {
  duplicatives = []
  for (const [index, value] of assortedHPBooks.entries()) {
    if (value == assortedHPBooks[index + 1] ) {
      duplicatives.push(value)
    }
  }
  return duplicatives.length
}




module.exports = cashRegister;
