

# Route With Gifts
## Introduction
Routes are being prepared for Santa's sleigh 🎅. We have warehouses all over the world so that Santa can collect the gifts and deliver them to the final destination. 🎁

We need to know if the routes we're creating make sense or if Santa is going to have to drop presents along the way. 🥺

For that we are going to create a function that receives two parameters:

- A number with **the maximum capacity of gifts on the sleigh**.
- The journey that is an array of arrays. Each subarray contains three numbers that represent:
  - `trip[0]` = number of gifts to transport
  - `trip[1]` = gift collection point
  - `trip[2]` = gift delivery point

The route always goes from left to right (Santa will never go back) but... keep in mind that in the middle of the route he may have to collect gifts when he already has some on him!


### Examples

The best thing is that we see an example:

```
canCarry(4, [[2, 5, 8], [3, 6, 10]]) // false
// At point 5 collect 2 gifts...
// At point 6 collect 3 gifts...
// From point 6 to 8 I would have 5 gifts in total
// And his capacity is 4... so he couldn't!

canCarry(3, [[1, 1, 5], [2, 2, 10]]) // true
// At point 1 collect 1 gift...
// At point 2 collect 2 gifts...
// At point 5 give 1 gift...
// At point 10 give 2 gifts...
// Yes you can! Never exceeded the maximum load of 3 gifts

canCarry(3, [[2, 1, 5],[3, 5, 7]]) // true -> never exceeds the maximum capacity
canCarry(4, [[2, 3, 8],[2, 5, 7]]) // true -> from point 5 to 7 carries 4 gifts and does not exceed the maximum

canCarry(1, [[2, 3, 8]]) // false -> couldn't even carry the first trip
canCarry(2, [[1, 2, 4], [2, 3, 8]]) // false -> from point 3 to 4 exceeds the maximum capacity because it would carry 3 gifts
```

### Important
The difficult, and important, thing is that you understand that Santa Claus is delivering and collecting gifts and that sometimes that can make him exceed the maximum load.