function sumPairs(numbers, result) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      if (sum === result) {
        return [numbers[i], numbers[j]];
      }
    }
  }

  return null;
}

module.exports = {
  sumPairs,
}
