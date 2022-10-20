const { createXmasTree } = require('./createXmasTree');
const { expect } = require('@jest/globals');

test('can create a 3 level three', () => {
  const input = 3;

  const expected = "__*__\n_***_\n*****\n__#__\n__#__";

  const result = createXmasTree(input);

  expect(result).toBe(expected);
});

test('can create a 5 level three', () => {
  const input = 5;

  const expected = "____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____";

  const result = createXmasTree(input);

  expect(result).toBe(expected);
});

test('can create a 7 level three', () => {
  const input = 7;

  const expected = "______*______\n_____***_____\n____*****____\n___*******___\n__*********__\n_***********_\n*************\n______#______\n______#______";

  const result = createXmasTree(input);

  expect(result).toBe(expected);
});
