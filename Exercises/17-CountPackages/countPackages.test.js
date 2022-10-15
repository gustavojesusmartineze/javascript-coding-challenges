const { countPackages } = require('./countPackages');
const { expect } = require('@jest/globals');

test('should return 9', () => {
  const carriers = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []]
  ];

  const carrierID = 'dapelu';

  const expected = 9; 
  
  const result = countPackages(carriers, carrierID);

  expect(result).toBe(expected);
});

test('should return 15', () => {
  const carriers = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []]
  ];

  const carrierID = 'camila';

  const expected = 15; 

  const result = countPackages(carriers, carrierID);

  expect(result).toBe(expected);
});
