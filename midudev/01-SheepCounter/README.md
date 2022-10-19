

# Sheep Counter
## Introduction
Consider a list/array of sheep. Each sheep has a **name** and a **color**. Make a function that returns a list with all the sheep that are **red** and whose name also contains both the letters **n** AND **a**, regardless of order, capitalization or spaces .

### Examples

For example, if we have the sheep:

```
const sheeps = [
  { name: 'Noa', color: 'blue' },
  { name: 'Euge', color: 'red' },
  { name: 'Navidad', color: 'red' },
  { name: 'Ki Na Ma', color: 'red'},
  { name: 'AAAAAaaaaa', color: 'red' },
  { name: 'Nnnnnnnn', color: 'red'}
];
```

When executing the method it should return the following:

```
const filteredSheeps = sheepCounter(sheeps);

console.log(filteredSheeps);

[
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }
]
```

### Important
Remember. **It must contain the two letters 'a' and 'n' in the name.** Don't count sheep that only have one of the letters, it must have both.
