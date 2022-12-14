const { isValidLetter } = require('./validLetter');
const { expect } = require('@jest/globals');

test('can check for valid Letter', () => {
  const letter = 'bike car (ball) bike car plush';

  const expected = true;

  const result = isValidLetter(letter);

  expect(result).toBe(expected);
});

test('can check for valid Letter begins with ()', () => {
  const letter = '(doll) bike console';

  const expected = true;

  const result = isValidLetter(letter);

  expect(result).toBe(expected);
});

test('can check for invalid Letter', () => {
  const letter = 'bike car (ball bike car';

  const expected = false;

  const result = isValidLetter(letter);

  expect(result).toBe(expected);
});

test('can check for invalid Letter due no closing ()', () => {
  const letter = 'bike car (ball bike car';

  const expected = false;

  const result = isValidLetter(letter);

  expect(result).toBe(expected);
});

test('can check for invalid Letter due opening [', () => {
  const letter = 'teddy (bike [car) bike car balloon';

  const expected = false;

  const result = isValidLetter(letter);

  expect(result).toBe(expected);
});

test('can check for invalid Letter due opening {', () => {
  const letter = '(teddy {) bike';

  const expected = false;

  const result = isValidLetter(letter);

  expect(result).toBe(expected);
});

test('can check for invalid Letter due gift outside ()', () => {
  const letter = '() bike';

  const expected = false;

  const result = isValidLetter(letter);

  expect(result).toBe(expected);
});

test('can check for invalid Letter due gift outside (())', () => {
  const letter = '(()) bike';

  const expected = false;

  const result = isValidLetter(letter);

  expect(result).toBe(expected);
});

test('can check for invalid Letter due gift outside (()', () => {
  const letter = '(a() bike (a)';

  const expected = false;

  const result = isValidLetter(letter);

  expect(result).toBe(expected);
});

test('can check for invalid Letter due gift outside ) (', () => {
  const letter = ')bici( casa play';

  const expected = false;

  const result = isValidLetter(letter);

  expect(result).toBe(expected);
});
