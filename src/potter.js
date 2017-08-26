const normalPrice = 8
const fivePercentDiscount = 0.8
const tenPercentDiscount = 2.40
const twentyPercentDiscount = 6.40
const twentyFivePercentDiscount = 10

function cashRegister(assortedHPBooks) {
  if (assortedHPBooks.size == 1) {
    return oneBook()
  } else if (assortedHPBooks.size == 2 && checkAllDifferentBooks(assortedHPBooks) == true) {
    return twoDifferentBooks()
  } else if (assortedHPBooks.size == 3 && checkAllDifferentBooks(assortedHPBooks) == true) {
    return threeDifferentBooks()
  }  else if (assortedHPBooks.size == 4 && checkAllDifferentBooks(assortedHPBooks) == true) {
    return fourDifferentBooks()
  } else if (assortedHPBooks.size == 5 && checkAllDifferentBooks(assortedHPBooks) == true) {
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

function checkAllDifferentBooks(assortedHPBooks) {
  let  bookTitles = assortedHPBooks.keys()
  for (let book of bookTitles) {
    if (bookTitles.next().value != bookTitles.next().value) {
      return true
    }
  }
}

module.exports = cashRegister;
