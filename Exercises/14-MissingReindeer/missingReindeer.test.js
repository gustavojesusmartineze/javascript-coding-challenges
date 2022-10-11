const { missingReindeer } = require('./missingReindeer');
const { expect } = require('@jest/globals');

test('should return 1', () => {
  const input = [0, 2, 3];

  const expected = 1; 
  
  const result = missingReindeer(input);

  expect(result).toBe(expected);
});

test('should return 4', () => {
  const input = [5, 6, 1, 2, 3, 7, 0];

  const expected = 4; 
  
  const result = missingReindeer(input);

  expect(result).toBe(expected);
});

test('should return 2 for the last one', () => {
  const input = [0, 1];
  // 2 (it's the last one that's missing!)
  const expected = 2; 
  
  const result = missingReindeer(input);

  expect(result).toBe(expected);
});

test('should return 2', () => {
  const input = [3, 0, 1];

  const expected = 2; 
  
  const result = missingReindeer(input);

  expect(result).toBe(expected);
});

test('should return 8', () => {
  const input = [9, 2, 3, 5, 6, 4, 7, 0, 1];

  const expected = 8; 
  
  const result = missingReindeer(input);

  expect(result).toBe(expected);
});

test('should return 8', () => {
  const input = [0];
  // -> 1 (it's the last one that's missing!)
  const expected = 1; 
  
  const result = missingReindeer(input);

  expect(result).toBe(expected);
});
