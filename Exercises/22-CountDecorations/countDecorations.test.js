const { countDecorations } = require('./countDecorations');
const { expect } = require('@jest/globals');


test('should return true', () => {
  const input = {
    value: 1, // the root node is always one, because it is the star ⭐
    left: {
      value: 2, // left node needs two decorations
      left: null, // has no more branches
      right: null // has no more branches
    },
    right: {
      value: 3, // the node on the right needs three decorations
      left: null, // has no more branches
      right: null // has no more branches
    }
  };

  // Graphically it would be like this:
  // 1 + 2 + 3 = 6
  const expected = 6; 
  
  const result = countDecorations(input);

  expect(result).toBe(expected);
});
