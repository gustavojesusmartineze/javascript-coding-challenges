const { createXmasTree } = require('./createXmasTree');

test('can create a 3 level three', () => {
  const input = 3;

  const expected = "____*____\n___***___\n__*****__\n____#____\n ____#____";

  const result = createXmasTree(input);

  expect(result).toBe(expected);
});

test('can create a 5 level three', () => {
  const input = 3;

  const expected = "____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n ____#____";

  const result = createXmasTree(input);

  expect(result).toBe(expected);
});
