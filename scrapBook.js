let HPvalues = assortedHPBooks.values()
let returnValue = 0
if (HPvalues.next().value == 1 && HPvalues.next().value == 1 && HPvalues.next().value == 1) {
  returnValue = 24 - 2.4
} else if (HPvalues.next().value == 1 && HPvalues.next().value == 1) {
  returnValue = 16 - 0.8
} else {
  returnValue = 8
}
return returnValue


function cashRegister(assortedHPBooks) {
  if (assortedHPBooks.size == 1) {
    return this.oneBook(assortedHPBooks)
  } else if (assortedHPBooks.size == 1) {
    return this.twoBooks(assortedHPBooks)
  }
}

function oneBook(assortedHPBooks) {
  console.log(assortedHPBooks.values().next())
  if ( assortedHPBooks.values().next() == 1) {
    return 8
  } else {
    return 'Not 8'
  }
}

function twoBooks(assortedHPBooks) {
  if (assortedHPBooks.size == 2 && assortedHPBooks.values().next().value.next().value == 1) {
    return 16 - 0.8
  } else {
    return 'Not 15.2'
  }
}


module.exports = cashRegister;


function cashRegister(assortedHPBooks) {
  let HPvalues = assortedHPBooks.values()
  let key1 = HPvalues.next().key
  if (HPvalues.key == "Harry Potter and the Philosopher's Stone") {
    return 16 - 0.8
  } else if (HPvalues.next().key != "Harry Potter and the Philosopher's Stone") {
    return 8
  } else if (assortedHPBooks.values().next().next().key != "Harry Potter and the Philosopher's Stone" ){
    return 22.60
  }
}

module.exports = cashRegister;
