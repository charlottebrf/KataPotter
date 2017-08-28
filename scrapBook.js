//
// function cashRegister(assortedHPBooks) {
//   if (assortedHPBooks.length == 1) {
//     return oneBook()
//   } else if (assortedHPBooks.length == 2) {
//     return twoBooks(assortedHPBooks)
//   } else if (assortedHPBooks.length == 3) {
//     return threeBooks(assortedHPBooks)
//   }  else if (assortedHPBooks.length == 4) {
//     return fourBooks(assortedHPBooks)
//   } else if (assortedHPBooks.length == 5) {
//     return fiveBooks(assortedHPBooks)
//   }
// }
//
// function twoBooks(assortedHPBooks) {
//   if (allDifferentBooks(assortedHPBooks) == true) {
//     return twoDifferentBooks()
//   } else if (uniqueBooks(assortedHPBooks) == 1) {
//     return 2 * oneBook()
//   }
// }
//
// function threeBooks(assortedHPBooks) {
//   if (allDifferentBooks(assortedHPBooks) == true) {
//     return threeDifferentBooks()
//   } else if (uniqueBooks(assortedHPBooks) == 2) {
//     return oneBook() + twoDifferentBooks()
//   } else {
//     return 3 * oneBook()
//   }
// }
//
// function fourBooks(assortedHPBooks) {
//   if (allDifferentBooks(assortedHPBooks) == true) {
//     return fourDifferentBooks()
//   } else if (uniqueBooks(assortedHPBooks) == 3) {
//     return oneBook() + threeDifferentBooks()
//   } else if (uniqueBooks(assortedHPBooks) == 2) {
//     return (2 * oneBook()) + twoDifferentBooks()
//   } else {
//     return 4 * oneBook()
//   }
// }
//
// function fiveBooks(assortedHPBooks) {
//   if (allDifferentBooks(assortedHPBooks) == true) {
//     return fiveDifferentBooks()
//   } else if (uniqueBooks(assortedHPBooks) == 4) {
//     return oneBook() + fourDifferentBooks()
//   } else if (uniqueBooks(assortedHPBooks) == 3) {
//     return (2 * oneBook()) + threeDifferentBooks()
//   } else if (uniqueBooks(assortedHPBooks) == 2){
//     return (3 * oneBook()) + twoDifferentBooks()
//   } else {
//     return 5 * oneBook()
//   }
// }

// function allDifferentBooks(assortedHPBooks) {
//   let allBooks = assortedHPBooks.length
//   let uniqueBooks = unique(assortedHPBooks).length
//   return allBooks == uniqueBooks
// }
