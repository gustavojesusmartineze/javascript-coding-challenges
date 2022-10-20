const { daysToXmas } = require('./daysToXmas');
const { expect } = require('@jest/globals');

test('should return 24 days to xmas', () => {
  const input =  new Date('Dec 1, 2021');

  const expected = 24;

  const result = daysToXmas(input);

  expect(result).toBe(expected);
});

test('should return 1 day to xmas', () => {
  const input =  new Date('Dec 24, 2021 00:00:01');

  const expected = 1;

  const result = daysToXmas(input);

  expect(result).toBe(expected);
});

test('should return 1 day to xmas for full format', () => {
  const input =  new Date('Dec 24, 2021 23:59:59');

  const expected = 1;

  const result = daysToXmas(input);

  expect(result).toBe(expected);
});

test('should return 5 days to xmas', () => {
  const input = new Date("December 20, 2021 03:24:00");

  const expected = 5;

  const result = daysToXmas(input);

  expect(result).toBe(expected);
});

test('should return 0 days to xmas', () => {
  const input = new Date('Dec 25, 2021');

  const expected = 0;

  const result = daysToXmas(input);

  expect(result).toBe(expected);
});

test('should return 0 days to xmas', () => {
  const input = new Date('Dec 26, 2021');

  const expected = -1;

  const result = daysToXmas(input);

  expect(result).toBe(expected);
});

test('should return -6 days to xmas', () => {
  const input = new Date('Dec 31, 2021');

  const expected = -6;

  const result = daysToXmas(input);

  expect(result).toBe(expected);
});

test('should return -7 days to xmas', () => {
  const input = new Date('Jan 1, 2022 00:00:01');

  const expected = -7;

  const result = daysToXmas(input);

  expect(result).toBe(expected);
});

test('should return -7 days to xmas for full format', () => {
  const input = new Date('Jan 1, 2022 23:59:59');

  const expected = -7;

  const result = daysToXmas(input);

  expect(result).toBe(expected);
});
