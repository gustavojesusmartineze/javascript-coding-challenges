

# Can Mouse Eat
## Introduction
Yesterday, on Christmas Eve, a family had dinner in style... With so many drinks 🍾 on top of that, they still haven't removed the dishes and food from yesterday...

A little mouse named midurat 🐭, who saw the hidden feast yesterday, is licking his mustaches when he sees all the delicacies in the dining room.

Of course, you have to be careful 😶 and only make the right moves to eat something. Therefore, the mouse, which has seen midudev's videos, will create a function to know if his next move is correct or not ✅.

The little mouse can move in 4 directions: up, down, left, right and the dining room is a matrix (an array of arrays) where each position can be:

- An `empty` space is that there is nothing
- An `m` is the mouse
- A `*` is the food 

### Examples

Here are some examples:

```
const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false
```

### Important
Keep in mind that the mouse wants to look for food in different rooms and that each one can have different dimensions!