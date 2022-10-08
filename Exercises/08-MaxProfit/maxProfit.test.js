const { maxProfit } = require('./maxProfit');
const { expect } = require('@jest/globals');

test('should return 16', () => {
  const input = [39, 18, 29, 25, 34, 32, 5];
  const expected = 16; // -> 16 (buys at 18, sells at 34)

  const result = maxProfit(input);

  expect(result).toBe(expected);
});

test('should return 60', () => {
  const input = [10, 20, 30, 40, 50, 60, 70];
  const expected = 60; // -> 60 (buys at 10, sells at 70)

  const result = maxProfit(input);

  expect(result).toBe(expected);
});

test('should return -1', () => {
  const input = [18, 15, 12, 11, 9, 7];
  const expected = -1; // -> -1 (no profit)

  const result = maxProfit(input);

  expect(result).toBe(expected);
});

test('should return -1 due no profit', () => {
  const input = [3, 3, 3, 3, 3];
  const expected = -1; // -> -1 (no profit)

  const result = maxProfit(input);

  expect(result).toBe(expected);
});
