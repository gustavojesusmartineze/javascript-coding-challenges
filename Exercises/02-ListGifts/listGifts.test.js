const { listGifts } = require('./listGifts');

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
