const { fibonacci } = require('./fibonacci');
const { expect } = require('@jest/globals');

test('should return 1 for fibonacci of 2', () => {
  const number = 2;
  const expected = 1;

  const result = fibonacci(number);

  expect(result).toBe(expected);
});

test('should return 2 for fibonacci of 3', () => {
  const number = 3;
  const expected = 2;

  const result = fibonacci(number);

  expect(result).toBe(expected);
});

test('should return 3 for fibonacci of 4', () => {
  const number = 4;
  const expected = 3;

  const result = fibonacci(number);

  expect(result).toBe(expected);
});

test('should return 55 for fibonacci of 10', () => {
  const number = 10;
  const expected = 55;

  const result = fibonacci(number);

  expect(result).toBe(expected);
});

test('should return 610 for fibonacci of 15', () => {
  const number = 15;
  const expected = 610;

  const result = fibonacci(number);

  expect(result).toBe(expected);
});

test('should return 6765 for fibonacci of 20', () => {
  const number = 20;
  const expected = 6765;

  const result = fibonacci(number);

  expect(result).toBe(expected);
});
