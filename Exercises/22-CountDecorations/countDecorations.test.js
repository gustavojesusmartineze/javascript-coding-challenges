const { countDecorations } = require('./countDecorations');
const { expect } = require('@jest/globals');

test('should return 6', () => {
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


test('should return 28', () => {
  const input = {
    value: 1,
    left: {
      value: 5,
      left: {
        value: 7,
        left: {
          value: 3,
          left:null,
          right: null
        },
        right: null
      },
      right: null
    },
    right: {
      value: 6,
      left: {
        value: 5,
        left:null,
        right: null
      },
      right: {
        value: 1,
        left:null,
        right: null
      }
    }
  };

  const expected = 28; 
  
  const result = countDecorations(input);

  expect(result).toBe(expected);
});
