const { checkSledJump } = require('./sledJump');
const { expect } = require('@jest/globals');

test('should return true go up and down strictly case 1', () => {
  const input = [1, 2, 3, 2, 1];

  const expected = true; 
  
  const result = checkSledJump(input);

  expect(result).toBe(expected);
});

test('should return true go up and down strictly case 2', () => {
  const input = [0, 1, 0];

  const expected = true; 
  
  const result = checkSledJump(input);

  expect(result).toBe(expected);
});

test('should return true go up and down strictly case 3', () => {
  const input = [0, 3, 2, 1];

  const expected = true; 
  
  const result = checkSledJump(input);

  expect(result).toBe(expected);
});

test('should return true go up and down strictly case 4', () => {
  const input = [0, 1000, 1];

  const expected = true; 
  
  const result = checkSledJump(input);

  expect(result).toBe(expected);
});

test('should return true false: not strictly jump', () => {
  const input = [2, 4, 4, 6, 2];

  const expected = false; 
  
  const result = checkSledJump(input);

  expect(result).toBe(expected);
});

test('should return true false: false: only go up', () => {
  const input = [1, 2, 3];

  const expected = false; 
  
  const result = checkSledJump(input);

  expect(result).toBe(expected);
});

test('should return true false: go up and down and up... no good!', () => {
  const input = [1, 2, 3, 2, 1, 2, 3];

  const expected = false; 
  
  const result = checkSledJump(input);

  expect(result).toBe(expected);
});
