const { learn } = require('./learn');
const { expect } = require('@jest/globals');

test('should return [0, 2]', () => {
  const courses = [2, 3, 8, 1, 4];
  const time = 10;

  // with 10 hours available it is best that we complete the courses at index 0 and 2.
  const expected = [0, 2]; 
  
  const result = learn(time, courses);

  expect(result).toStrictEqual(expected);
});

test('should return [1, 2]', () => {
  const courses = [2, 10, 4, 1];
  const time = 15;

  // The courses in [1, 2] are 14 hours, it is the best option.
  const expected = [1, 2]; 
  
  const result = learn(time, courses);

  expect(result).toStrictEqual(expected);
});

test('should return [0, 1]', () => {
  const courses = [10, 15, 20, 5];
  const time = 25;

  // courses [0, 1] and [2, 3] complete with exactly 25 hours but we always return the first one we find
  const expected = [0, 1]; 
  
  const result = learn(time, courses);

  expect(result).toStrictEqual(expected);
});

test('should return [1, 2]', () => {
  const courses = [8, 2, 1];
  const time = 8;

  // to do two courses, we can't do the 8 hour one, so we return the 1 and 2.
  const expected = [1, 2]; 
  
  const result = learn(time, courses);

  expect(result).toStrictEqual(expected);
});
