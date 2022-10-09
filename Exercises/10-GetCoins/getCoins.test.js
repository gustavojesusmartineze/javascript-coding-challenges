const { getCoins } = require('./getCoins');
const { expect } = require('@jest/globals');

test('should return change for 51', () => {
  const input = 51;
  // one 1 cent coin and one 50 cent coin
  const expected = [1, 0, 0, 0, 0, 1]; 
  
  const result = getCoins(input);

  expect(result).toStrictEqual(expected);
});

test('should return change for 3', () => {
  const input = 3;
  // one 1 cent coin and one 2 cent coin
  const expected = [1, 1, 0, 0, 0, 0]; 
  
  const result = getCoins(input);

  expect(result).toStrictEqual(expected);
});

test('should return change for 5', () => {
  const input = 5;
  // a 5 cent coin
  const expected = [0, 0, 1, 0, 0, 0]; 
  
  const result = getCoins(input);

  expect(result).toStrictEqual(expected);
});

test('should return change for 5', () => {
  const input = 16;
  // a 1 cent coin, a 5 cent coin and a 10 cent coin
  const expected = [1, 0, 1, 1, 0, 0]; 
  
  const result = getCoins(input);

  expect(result).toStrictEqual(expected);
});

test('should return change for 5', () => {
  const input = 100;
  // two 50 cent coins
  const expected = [0, 0, 0, 0, 0, 2]; 
  
  const result = getCoins(input);

  expect(result).toStrictEqual(expected);
});
