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
