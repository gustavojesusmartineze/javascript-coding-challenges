

# Fix Files
## Introduction
Evelyn Belefzin 👩‍💻 is working on an operating system to be used in Santa's workshop 🎅.

She has noticed that in the workshop nobody pays attention to file names and sometimes they try to save the same file more than once... so it is important **that we manage duplicate names well.**

We have to **create a function that, when passing an array of file names,** returns an array with the same number of elements but where the names that were repeated are appended to the end `(k)` where k would be the number of times that it was found repeated.


### Examples

The best thing is that we see an example:


```
const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) = ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// note that the elves already had files with (1)... and they may be repeated!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
```

### Important
By the way, **we have been told that they are Agile and use Scrum**. That is why they want to know how long it will take to know when they will be able to use it. That there is a rush 😝 So get on Discord and tell us.
