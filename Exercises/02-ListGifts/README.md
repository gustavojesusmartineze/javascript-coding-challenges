

# Sheep Counter
## Introduction
You have received a letter ✉️ with all the gifts you must prepare. The issue is that it is a text string and it is very difficult to read 😱. Luckily they have put each gift separated by space! (**Although be careful**, because being children, they have still sneaked more spaces than necessary)

On top of that we have noticed that some words come with a **_** in front of the word, for example **_playstation**, which means that it is crossed out and does not have to be counted.

Transform the text to an object that contains the name of each gift and the times it appears. 

### Examples

For example, if we have the text:

```
const letter = 'bike car ball _playstation bike car teddy'
```

When executing the method it should return the following:

```
const gifts = listGifts(letter)

console.log(gifts)
/*
{
  bike: 2,
  car: 2,
  ball: 1,
  teddy: 1
}
*/
```

### Important
Keep in mind that the tests can be more exhaustive... 😝 **Be careful with counting empty spaces!**
