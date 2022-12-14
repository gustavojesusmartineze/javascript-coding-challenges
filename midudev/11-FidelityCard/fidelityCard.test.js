const { shouldBuyFidelity } = require('./fidelityCard');
const { expect } = require('@jest/globals');

test('should return false for 1', () => {
  const input = 1;

  const expected = false; 
  
  const result = shouldBuyFidelity(input);

  expect(result).toBe(expected);
});

test('should return false for 3', () => {
  const input = 3;

  const expected = false; 
  
  const result = shouldBuyFidelity(input);

  expect(result).toBe(expected);
});

test('should return false for 50', () => {
  const input = 50;

  const expected = true; 
  
  const result = shouldBuyFidelity(input);

  expect(result).toBe(expected);
});

test('should return true', () => {
  const input = 100;

  const expected = true; 
  
  const result = shouldBuyFidelity(input);

  expect(result).toBe(expected);
});
