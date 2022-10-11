const { wrapGifts } = require('./wrapGifts');
const { expect } = require('@jest/globals');

test('should return gift wrapped', () => {
  const input = ["📷", "⚽️"];

  const expected = [
    '****',
    '*📷*',
    '*⚽️*',
    '****'
  ]; 
  
  const result = wrapGifts(input);

  expect(result).toStrictEqual(expected);
});

test('should return gift wrapped second case', () => {
  const input = ["🏈🎸", "🎮🧸"];

  const expected = [
    '******',
    '*🏈🎸*',
    '*🎮🧸*',
    '******'
  ]; 

  const result = wrapGifts(input);

  expect(result).toStrictEqual(expected);
});
