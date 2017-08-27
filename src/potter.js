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
  } else if (assortedHPBooks.length == 3) {
    return threeBooks(assortedHPBooks)
  }  else if (assortedHPBooks.length == 4) {
    return fourBooks(assortedHPBooks)
  } else if (assortedHPBooks.length == 5) {
    return fiveBooks(assortedHPBooks)
  }
}

function twoBooks(assortedHPBooks) {
  if (allDifferentBooks(assortedHPBooks) == true) {
    return twoDifferentBooks()
  } else if (duplicativeBooks(assortedHPBooks) == 1) {
    return 2 * oneBook()
  }
}

function threeBooks(assortedHPBooks) {
  if (allDifferentBooks(assortedHPBooks) == true) {
    return threeDifferentBooks()
  } else if (duplicativeBooks(assortedHPBooks) == 2) {
    return oneBook() + twoDifferentBooks()
  } else {
    return 3 * oneBook()
  }
}

function fourBooks(assortedHPBooks) {
  if (allDifferentBooks(assortedHPBooks) == true) {
    return fourDifferentBooks()
  } else if (duplicativeBooks(assortedHPBooks) == 3) {
    return oneBook() + threeDifferentBooks()
  } else if (duplicativeBooks(assortedHPBooks) == 2) {
    return (2 * oneBook()) + twoDifferentBooks()
  } else {
    return 4 * oneBook()
  }
}

function fiveBooks(assortedHPBooks) {
  if (allDifferentBooks(assortedHPBooks) == true) {
    return fiveDifferentBooks()
  } else if (duplicativeBooks(assortedHPBooks) == 4) {
    return oneBook() + fourDifferentBooks()
  } else if (duplicativeBooks(assortedHPBooks) == 3) {
    return (2 * oneBook()) + threeDifferentBooks()
  } else if (duplicativeBooks(assortedHPBooks) == 2){
    return (3 * oneBook()) + twoDifferentBooks()
  } else {
    return 5 * oneBook()
  }
}

function allDifferentBooks(assortedHPBooks) {
  let allBooks = assortedHPBooks.length
  let uniqueBooks = unique(assortedHPBooks).length
  return allBooks == uniqueBooks
}

function duplicativeBooks(assortedHPBooks) {
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
