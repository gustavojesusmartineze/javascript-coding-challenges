

# Create Xmas Tree
## Introduction
It's time to put up the Christmas tree at home! 🎄

To do this we are going to create a function that receives the height of the tree, which will be a positive integer from `1` to, at most, `100`.

### Examples

If we passed it the argument `5`, it would paint this:

```
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

We create a triangle of asterisks `*` with the given height and, on the sides, use the underscore `_` for spaces. It is very important that our tree always has the same length on each side.

All trees, however small or large, have a trunk with two lines of `#`.

Another example with a tree of height 3:

```
__*__
_***_
*****
__#__
__#__
```

### Important
Note that the tree is a string and you need the line breaks `\n` for each line for the tree to form properly.