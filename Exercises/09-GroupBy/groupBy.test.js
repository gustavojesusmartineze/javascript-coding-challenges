const { groupBy } = require('./groupBy');
const { expect } = require('@jest/globals');

test('should return Math.floor', () => {
  const collection = [6.1, 4.2, 6.3];
  const it = Math.floor;
  const expected = { 6: [6.1, 6.3], 4: [4.2] };
  
  const result = groupBy(collection, it);

  expect(result).toStrictEqual(expected);
});

test('should return length', () => {
  const collection = ['one', 'two', 'three'];
  const it = 'length';
  const expected = { 3: ['one', 'two'], 5: ['three'] };
  
  const result = groupBy(collection, it);

  expect(result).toStrictEqual(expected);
});

test('should return age', () => {
  const collection = [{age: 23}, {age: 24}];
  const it = 'age';
  const expected = { 23: [{age: 23}], 24: [{age: 24}] };
  
  const result = groupBy(collection, it);

  expect(result).toStrictEqual(expected);
});

test('should return timestamp', () => {
  const collection = [1397639141184, 1363223700000];
  const it = timestamp => new Date(timestamp).getFullYear();
  const expected = { 2013: [1363223700000], 2014: [1397639141184] };
  
  const result = groupBy(collection, it);

  expect(result).toStrictEqual(expected);
});

test('should return timestamp', () => {
  const collection = [
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
  ];
  const it = 'rating';
  const expected = {
    8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
    9: [{ title: 'Clean Code', rating: 9 }],
    10: [{ title: 'Aprendiendo Git', rating: 10 }] 
  };
  
  const result = groupBy(collection, it);

  expect(result).toStrictEqual(expected);
});
