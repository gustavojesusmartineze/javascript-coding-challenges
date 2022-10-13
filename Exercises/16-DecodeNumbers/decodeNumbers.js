function decodeNumbers(symbols) {
  const numbers = {
    '.' : 1,
    ',' : 5,
    ':' : 10,
    ';' : 50,
    '!' : 100,
  };

  let splitedSymbols = symbols.split('');
  const keys = Object.keys(numbers);

  let total = 0;

  for (let i = splitedSymbols.length - 1; i >= 0 ; i--) {
    if (! keys.includes(splitedSymbols[i])) {
      return NaN;
    }

    total = calcValue(numbers, splitedSymbols[i+1], splitedSymbols[i], total);
  }

  return total;
}

function calcValue(numbers, previousSymbol, currentSymbol, acumm) {
  if (previousSymbol === undefined) {
    acumm = numbers[currentSymbol];
  } else if (numbers[currentSymbol] < numbers[previousSymbol]) { 
    acumm = acumm - numbers[currentSymbol];
  } else {
    acumm = acumm + numbers[currentSymbol];
  }

  return acumm;
}

module.exports = {
  decodeNumbers,
};
