const { isAnagram } = require('./isAnagram');
const { expect } = require('@jest/globals');

test('should return true for amor and roma', () => {
  const word1 = "amor";
  const word2 = "roma";
  const expected = true;

  const result = isAnagram(word1, word2);

  expect(result).toBe(expected);
});

test('should return false for rat and car', () => {
  const word1 = "rat";
  const word2 = "car";
  const expected = false;

  const result = isAnagram(word1, word2);

  expect(result).toBe(expected);
});

test('should return true for anagram and nagaram', () => {
  const word1 = "anagram";
  const word2 = "nagaram";
  const expected = true;

  const result = isAnagram(word1, word2);

  expect(result).toBe(expected);
});


test('should return false for alf and alf', () => {
  const word1 = "alf";
  const word2 = "alf";
  const expected = true;

  const result = isAnagram(word1, word2);

  expect(result).toBe(expected);
});
