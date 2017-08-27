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

function allDifferentBooks(assortedHPBooks) {
  let uniqueBooks = unique(assortedHPBooks)
  if (assortedHPBooks == uniqueBooks) {
    return true
  }
}

function countDuplicativeBooks(assortedHPBooks) {
  let result = []
  assortedHPBooks.forEach(function(element, index) {
    if (assortedHPBooks.indexOf(element, index + 1) > -1) {
      result.push(element)
    }
  })
  console.log(result)
  return result
}


function twoBooks(assortedHPBooks) {
  if(allDifferentBooks(assortedHPBooks) == true) {
    return twoDifferentBooks()
  } else {
    let duplicatives = countDuplicativeBooks(assortedHPBooks)
    if (duplicatives.length == 2) {
      return oneBook() + twoDifferentBooks()
    }
  }
}


module.exports = cashRegister;
