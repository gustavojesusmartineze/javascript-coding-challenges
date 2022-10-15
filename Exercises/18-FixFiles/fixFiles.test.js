const { fixFiles } = require('./fixFiles');
const { expect } = require('@jest/globals');

test('should return photo(2)', () => {
  const files = ['photo', 'postcard', 'photo', 'photo', 'video'];

  const expected = ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']; 
  
  const result = fixFiles(files);

  expect(result).toStrictEqual(expected);
});

test('should return file(2) game(1)', () => {
  const files = ['file', 'file', 'file', 'game', 'game'];

  const expected = ['file', 'file(1)', 'file(2)', 'game', 'game(1)']; 
  
  const result = fixFiles(files);

  expect(result).toStrictEqual(expected);
});

test('should return icon(1)(1)', () => {
  const files = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];

  // note that the elves already had files with (1)... and they may be repeated!
  const expected = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']; 
  
  const result = fixFiles(files);

  expect(result).toStrictEqual(expected);
});
