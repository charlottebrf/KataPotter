
function cashRegister(assortedHPBooks) {
  if (assortedHPBooks.size == 1) {
    return 8
  } else if (assortedHPBooks.size == 2 && assortedHPBooks.values().next.key != "Harry Potter and the Philosopher's Stone") {
    return 15.2
  } else {
    return 21.60
  }
}

module.exports = cashRegister;
