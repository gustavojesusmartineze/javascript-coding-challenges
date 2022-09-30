const { sheepCounter } = require('./sheepCounter');

test('can filter sheeps', () => {
  const sheeps = [
    { name: 'Noa', color: 'blue' },
    { name: 'Euge', color: 'red' },
    { name: 'Navidad', color: 'red' },
    { name: 'Ki Na Ma', color: 'red'},
    { name: 'AAAAAaaaaa', color: 'red' },
    { name: 'Nnnnnnnn', color: 'red'}
  ];

  const expected = [
    { name: 'Navidad', color: 'red' },
    { name: 'Ki Na Ma', color: 'red' }
  ];

  const filteredSheeps = sheepCounter(sheeps);

  expect(filteredSheeps).toStrictEqual(expected);
});
