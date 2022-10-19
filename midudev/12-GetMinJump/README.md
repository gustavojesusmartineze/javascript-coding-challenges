

# Get Min Jump
## Introduction
In Santa's workshop 🎅 the electric motor sleds are being prepared to make the perfect route to leave the gifts.

**The route starts at point 0 and from there goes to the right in a straight line.**

Keanu Relfes 🧝 has prepared us a list of obstacles to avoid. The problem is that it has given us **the list of obstacle positions out of order...** 😅 although at least **position 0 can never have an obstacle.**

On top of that, the sled can only be set to jump a fixed number of positions... 😱

We need a function that tells us the minimum length of the sled jump to avoid all the obstacles on the route.

### Examples

```
const obstacles = [5, 3, 6, 7, 9]
getMinJump(obstacles) // -> 4

// S is jump, X is obstacle
/* This would be the representation:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

const obstacles = [2, 4, 6, 8, 10]
getMinJump(obstacles) // -> 7

/* This would be the representation: 
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Jump lengths:
// 1 would fall into 2
// 2 would fall into 2
// 3 would fall into 6
// 4 would fall into 4
// 5 would fall into 10
// 6 would fall into 6
// 7 is the ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/
```

### Important
The difficulty of the challenge is to think that we can only configure the jump of the sled once and that we are looking for the minimum jump that would help us to overcome all the obstacles.