

# Sled Jump
## Introduction
We're making the final adjustments to Santa's sleigh!

As you already know, the sled is flying and we are adjusting the motor so that it makes parabolas as optimal as possible. For this, the jump must always be upwards and, from the highest point, it must always go downwards...

Our trusted mechanic, **Kiko Belfs**, who has a great Tesla, has explained to us that the jumps can be seen as arrays... and that we just have to make sure that **the numbers go up and down correctly.** He also warns us that we will only pass **arrays of at least three positions.**

He has passed us some examples of what our function should look like and some results:

### Examples

```
checkSledJump([1, 2, 3, 2, 1]) // true: go up and down strictly
checkSledJump([0, 1, 0]) // -> true: go up and down strictly
checkSledJump([0, 3, 2, 1]) // -> true: go up and down strictly
checkSledJump([0, 1000, 1]) // -> true: go up and down strictly

checkSledJump([2, 4, 4, 6, 2]) // false: don't strictly jump
checkSledJump([1, 2, 3]) // false: only go up
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: go up and down and up... no good!
```

### Important
**The important thing:** walk the array from left to right to see that the rise is always strict, detect the highest point and then see that the fall is strictly downward...