function cashRegister(assortedHPBooks) {
  let HPvalues = assortedHPBooks.values()
  if (HPvalues.next().value == 1 && HPvalues.next().value == 1) {
    return 16 - 0.8
  } else if (assortedHPBooks.values().next().value == 1) {
    return 8
  }
}

module.exports = cashRegister;
