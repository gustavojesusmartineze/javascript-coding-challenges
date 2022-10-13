const { decodeNumbers } = require('./decodeNumber');
const { expect } = require('@jest/globals');

test('should return 3', () => {
  const input = '...';

  const expected = 3; 
  
  const result = decodeNumbers(input);

  expect(result).toBe(expected);
});

test('should return 4', () => {
  const input = '.,';

  const expected = 4; // 4 (5 - 1)
  
  const result = decodeNumbers(input);

  expect(result).toBe(expected);
});

test('should return 6', () => {
  const input = ',.';

  const expected = 6; // 6 (5 + 1)
  
  const result = decodeNumbers(input);

  expect(result).toBe(expected);
});

test('should return 8', () => {
  const input = ',...';

  const expected = 8; // 8 (5 + 3)
  
  const result = decodeNumbers(input);

  expect(result).toBe(expected);
});

test('should return 49', () => {
  const input = '.;';

  const expected = 49; // 49 (50 - 1)
  
  const result = decodeNumbers(input);

  expect(result).toBe(expected);
});

test('should return 5', () => {
  const input = '..,';

  const expected = 5; // 5 (-1 + 1 + 5)
  
  const result = decodeNumbers(input);

  expect(result).toBe(expected);
});

test('should return 95', () => {
  const input = '..,!';

  const expected = 95; // 95 (1 - 1 - 5 + 100)
  
  const result = decodeNumbers(input);

  expect(result).toBe(expected);
});

test('should return 49', () => {
  const input = '.;!';

  const expected = 49; // 49 (-1 -50 + 100)
  
  const result = decodeNumbers(input);

  expect(result).toBe(expected);
});
