

# Count Decorations
## Introduction
Oh! Christmas is coming and we haven't decorated the tree yet. 🎄😱

We need a function that by passing a binary tree tells us the number of decorations we need. For this we have an object that would be the representation of the tree and that indicates the number of branches to decorate at each level.


### Examples

The best thing is that we see an example:

```
// we have the tree as an object
const tree = {
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
}

/* Graphically it would be like this:
    1
  / \
 23

1 + 2 + 3 = 6
*/

countDecorations(tree) // 6

const bigTree = {
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
}

/*
        1
      / \
     5 6
    / / \
   7 5 1
  /
 3
*/

countDecorations(bigTree) // 28
```

### Important
By the way, Bellf Gates has told me that this type of exercise is very typical in job interviews for programmers. Did you know?