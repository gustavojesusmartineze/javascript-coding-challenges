const { listGifts } = require('./listGifts');
const { expect } = require('@jest/globals');

test('can list gift', () => {
  const letter = 'bike car ball _playstation bike car teddy';

  const expected = {
    bike: 2,
    car: 2,
    ball: 1,
    teddy: 1
  };

  const result = listGifts(letter);

  expect(result).toStrictEqual(expected);
});

test('can list gift with multiple whitespaces', () => {
  const letter = 'bike   car   ball _playstation  bike car  teddy ';

  const expected = {
    bike: 2,
    car: 2,
    ball: 1,
    teddy: 1
  };

  const result = listGifts(letter);

  expect(result).toStrictEqual(expected);
});
