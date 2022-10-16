const { pangram } = require('./pangram');
const { expect } = require('@jest/globals');

test('should return true', () => {
  const input = 'Extraño pan de col y kiwi se quemó bajo fugaz vaho';

  const expected = true; 
  
  const result = pangram(input);

  expect(result).toBe(expected);
});

test('should return true case 1', () => {
  const input = 'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!';

  const expected = true; 
  
  const result = pangram(input);

  expect(result).toBe(expected);
});

test('should return false', () => {
  const input = 'Esto es una frase larga pero no tiene todas las letras del abecedario';

  const expected = false; 
  
  const result = pangram(input);

  expect(result).toBe(expected);
});
