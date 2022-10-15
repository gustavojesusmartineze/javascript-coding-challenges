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
