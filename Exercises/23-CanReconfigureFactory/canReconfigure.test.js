const { canReconfigure } = require('./canReconfigure');
const { expect } = require('@jest/globals');

test('should return true', () => {
  const from = 'BAL'
  const to = 'LIB'

  const expected = true; 
  
  const result = canReconfigure(from, to);

  expect(result).toBe(expected);
});

test('should return false', () => {
  const from = 'WITH'
  const to = 'JUU'

  const expected = false; 
  
  const result = canReconfigure(from, to);

  expect(result).toBe(expected);
});
