const { canMouseEat } = require('./canMouseEat');
const { expect } = require('@jest/globals');

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
];

describe("first room", () => {

  test('should return false for up', () => {
    expect(canMouseEat('up', room)).toBe(false);
  });

  test('should return true for down', () => {
    expect(canMouseEat('down', room)).toBe(true);
  });

  test('should return false for right', () => {
    expect(canMouseEat('right', room)).toBe(false);
  });

  test('should return false for left', () => {
    expect(canMouseEat('left', room)).toBe(false);
  });

});

describe("second room", () => {
  const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
  ];

  test('should return false for left', () => {
    expect(canMouseEat('up', room2)).toBe(false);
  });

  test('should return false for down', () => {
    expect(canMouseEat('down', room2)).toBe(false);
  });

  test('should return true for right', () => {
    expect(canMouseEat('right', room2)).toBe(true);
  });

  test('should return false for left', () => {
    expect(canMouseEat('left', room2)).toBe(false);
  });
});

