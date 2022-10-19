const { checkIsSameTree } = require('./checkIsSameTree');
const { expect } = require('@jest/globals');

test('should return true for treeA, treeA', () => {
  const treeA = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
  };

  const expected = true; 
  
  const result = checkIsSameTree(treeA, treeA);

  expect(result).toBe(expected);
});

test('should return false for treeA, treeB', () => {
  const treeA = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
  };

  const treeB = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
  }

  const expected = false; 
  
  const result = checkIsSameTree(treeA, treeB);

  expect(result).toBe(expected);
});
