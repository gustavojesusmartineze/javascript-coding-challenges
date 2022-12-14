const { sumPairs } = require('./sumPairs');
const { expect } = require('@jest/globals');

test('should return [3, 7]', () => {
  const numbers =  [3, 5, 7, 2];
  const sum =  10;

  const expected = [3, 7];

  const result = sumPairs(numbers, sum);

  expect(result).toStrictEqual(expected);
});

test('should return null', () => {
  const numbers =  [-3, -2, 7, -5];
  const sum =  10;

  const expected = null;

  const result = sumPairs(numbers, sum);

  expect(result).toStrictEqual(expected);
});

test('should return [2, 2]', () => {
  const numbers =  [2, 2, 3, 1];
  const sum =  4;

  const expected = [2, 2];

  const result = sumPairs(numbers, sum);

  expect(result).toStrictEqual(expected);
});

test('should return [6, 2]', () => {
  const numbers =  [6, 7, 1, 2];
  const sum =  8;

  const expected = [6, 2];

  const result = sumPairs(numbers, sum);

  expect(result).toStrictEqual(expected);
});

test('should return [1, 5]', () => {
  const numbers =  [0, 2, 2, 3, -1, 1, 5];
  const sum =  6;

  const expected = [1, 5];

  const result = sumPairs(numbers, sum);

  expect(result).toStrictEqual(expected);
});
