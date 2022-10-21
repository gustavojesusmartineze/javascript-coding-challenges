function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzbuzz\n');
    } else if (i % 5 === 0) {
      console.log('buzz\n');
    } else if (i % 3 === 0) {
      console.log('fizz\n');
    } else {
      console.log(`${i}\n`);
    }
  }
}

module.exports = {
  fizzBuzz,
}
