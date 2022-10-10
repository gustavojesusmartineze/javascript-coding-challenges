

# Wrap Gifts
## Introduction
There are too many gifts 🎁! And wrapping them is crazy...

We are going to create a function that, passing an array of gifts, returns another array but where all the gifts have been wrapped with asterisks both on top and on the sides.

You just have to keep in mind a few things ✌️:

If the array is empty, return an empty array.
The gifts are emojis 🎁... so keep that in mind when counting their length...
Luckily, each position in the array always has the same length...

### Examples

```
wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
```
