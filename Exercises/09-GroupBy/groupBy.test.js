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