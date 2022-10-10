const { getMinJump } = require('./getMinJump');
const { expect } = require('@jest/globals');

test('should return 4', () => {
  const input = [5, 3, 6, 7, 9];

  const expected = 4; 
  
  const result = getMinJump(input);

  expect(result).toBe(expected);
});

test('should return 4', () => {
  const input = [1, 2, 3, 5];

  const expected = 4; 
  
  const result = getMinJump(input);

  expect(result).toBe(expected);
});

test('should return 7', () => {
  const input = [3, 7, 5];

  const expected = 2; 
  
  const result = getMinJump(input);

  expect(result).toBe(expected);
});
