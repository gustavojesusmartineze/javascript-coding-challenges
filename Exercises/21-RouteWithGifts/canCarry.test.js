const { canCarry } = require('./canCarry');
const { expect } = require('@jest/globals');


test('should return true', () => {
  const capacity = 3;
  const trip = [[1, 1, 5], [2, 2, 10]];

  const expected = true; 
  
  const result = canCarry(capacity, trip);

  expect(result).toBe(expected);
});

test('should return true case 1', () => {
  const capacity = 3;
  const trip = [[2, 1, 5],[3, 5, 7]];

  const expected = true; 
  
  const result = canCarry(capacity, trip);

  expect(result).toBe(expected);
});

test('should return true case 2', () => {
  const capacity = 4;
  const trip = [[2, 3, 8],[2, 5, 7]];

  const expected = true; 
  
  const result = canCarry(capacity, trip);

  expect(result).toBe(expected);
});

test('should return false', () => {
  const capacity = 4;
  const trip = [[2, 5, 8], [3, 6, 10]];

  const expected = false; 
  
  const result = canCarry(capacity, trip);

  expect(result).toBe(expected);
});
