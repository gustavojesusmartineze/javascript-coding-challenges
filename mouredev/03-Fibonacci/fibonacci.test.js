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
