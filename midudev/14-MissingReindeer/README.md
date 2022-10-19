

# Missing Reindeer
## Introduction
We've lost a reindeer and it's just over a week until Christmas! 😱

The worst thing is that there are so many that we don't know which one is missing... What a mess! Let's see, Elfon Musk has made an inventory and gives us an array with the ids of each reindeer.

👍 **The good thing:** the ids are numbers that can go from 0 to 100, they are not repeated and only one reindeer has been lost.

👎 **The bad:** the list is messy and the last one could be missing...

We need a function that, when passed the list of reindeer ids, tells us immediately which one is missing:

### Examples

```
missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (it's the last one that's missing!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (it's the last one that's missing!)
```

It seems easy with a complexity of O(n)... do you think you could do better?