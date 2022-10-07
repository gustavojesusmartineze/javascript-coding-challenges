

# Sum Pairs
## Introduction
Before we can enjoy Christmas... we have to finish the final exams. And touch a little math! 😱

A function is passed two parameters: an Array with numbers and the result that is expected.

The function must return the two values of the Array that add up to the expected result. Since **there can sometimes be more than two values** that add up, the first one from the left that finds another pair will be returned, **no matter how far to the right it is**.

If not found, `null` is returned.

### Examples

```
sumPairs([3, 5, 7, 2], 10) // [3, 7]

sumPairs([-3, -2, 7, -5], 10) // null

sumPairs([2, 2, 3, 1], 4) // [2, 2]

sumPairs([6, 7, 1, 2], 8) // [6, 2]

sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
```

Once you have the result... how could you make it as optimal as possible **so you don't have to go through the same situations twice** 🤔?

### Important
The result has to be **an array with two numbers**.
