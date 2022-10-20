const { fizzBuzz } = require('./fizzBuzz');
const { expect } = require('@jest/globals');

test('print fizzBuzz of 15', () => {
  const number = 15;

  const logSpy = jest.spyOn(console, 'log');

  fizzBuzz(number);
  expect(logSpy).toHaveBeenCalledTimes(15);
  expect(logSpy).toHaveBeenCalledWith('1\n');
  expect(logSpy).toHaveBeenCalledWith('2\n');
  expect(logSpy).toHaveBeenCalledWith('fizz\n');
  expect(logSpy).toHaveBeenCalledWith('4\n');
  expect(logSpy).toHaveBeenCalledWith('buzz\n');
  expect(logSpy).toHaveBeenCalledWith('fizz\n');
  expect(logSpy).toHaveBeenCalledWith('7\n');
  expect(logSpy).toHaveBeenCalledWith('8\n');
  expect(logSpy).toHaveBeenCalledWith('fizz\n');
  expect(logSpy).toHaveBeenCalledWith('buzz\n');
  expect(logSpy).toHaveBeenCalledWith('11\n');
  expect(logSpy).toHaveBeenCalledWith('fizz\n');
  expect(logSpy).toHaveBeenCalledWith('13\n');
  expect(logSpy).toHaveBeenCalledWith('14\n');
  expect(logSpy).toHaveBeenCalledWith('fizzbuzz\n');
});

test('print fizzBuzz of 30', () => {
  const number = 30;

  const logSpy = jest.spyOn(console, 'log');

  fizzBuzz(number);
  expect(logSpy).toHaveBeenCalledTimes(30);
  expect(logSpy).toHaveBeenCalledWith('1\n');
  expect(logSpy).toHaveBeenCalledWith('2\n');
  expect(logSpy).toHaveBeenCalledWith('fizz\n');
  expect(logSpy).toHaveBeenCalledWith('4\n');
  expect(logSpy).toHaveBeenCalledWith('buzz\n');
  expect(logSpy).toHaveBeenCalledWith('fizz\n');
  expect(logSpy).toHaveBeenCalledWith('7\n');
  expect(logSpy).toHaveBeenCalledWith('8\n');
  expect(logSpy).toHaveBeenCalledWith('fizz\n');
  expect(logSpy).toHaveBeenCalledWith('buzz\n');
  expect(logSpy).toHaveBeenCalledWith('11\n');
  expect(logSpy).toHaveBeenCalledWith('fizz\n');
  expect(logSpy).toHaveBeenCalledWith('13\n');
  expect(logSpy).toHaveBeenCalledWith('14\n');
  expect(logSpy).toHaveBeenCalledWith('fizzbuzz\n');
  expect(logSpy).toHaveBeenCalledWith('fizz\n');
  expect(logSpy).toHaveBeenCalledWith('17\n');
  expect(logSpy).toHaveBeenCalledWith('fizz\n');
  expect(logSpy).toHaveBeenCalledWith('19\n');
  expect(logSpy).toHaveBeenCalledWith('buzz\n');
  expect(logSpy).toHaveBeenCalledWith('fizz\n');
  expect(logSpy).toHaveBeenCalledWith('22\n');
  expect(logSpy).toHaveBeenCalledWith('23\n');
  expect(logSpy).toHaveBeenCalledWith('fizz\n');
  expect(logSpy).toHaveBeenCalledWith('buzz\n');
  expect(logSpy).toHaveBeenCalledWith('26\n');
  expect(logSpy).toHaveBeenCalledWith('fizz\n');
  expect(logSpy).toHaveBeenCalledWith('28\n');
  expect(logSpy).toHaveBeenCalledWith('29\n');
  expect(logSpy).toHaveBeenCalledWith('fizzbuzz\n');
});
