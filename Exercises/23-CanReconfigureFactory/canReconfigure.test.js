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

test('should return false case 1', () => {
  const from = 'XBOX'
  const to = 'XXBO'

  const expected = false; 
  
  const result = canReconfigure(from, to);

  expect(result).toBe(expected);
});

test('should return true case 1', () => {
  const from = 'XBOX'
  const to = 'XOBX'

  const expected = true; 
  
  const result = canReconfigure(from, to);

  expect(result).toBe(expected);
});

test('should return false case 2', () => {
  const from = 'MMM'
  const to = 'MID'

  const expected = false; 
  
  const result = canReconfigure(from, to);

  expect(result).toBe(expected);
});
