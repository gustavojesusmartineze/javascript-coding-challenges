

# Check Is Same Tree
## Introduction
Grandpa 👴 says he sees all Christmas trees the same... Grandma 👵, on the other hand, thinks not. That all Christmas trees are different...

Let's make a function that tells us if two Christmas trees are the same. To do this, we are going to compare the trees that we already created in [22-CountDecorations](/22-CountDecorations/)

We have to see if both trees have the same structure and the same values in all branches. 

### Examples

Here are some examples:

```
const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

checkIsSameTree(tree, tree) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true
```

### Important
Brother-in-law 🦹‍♂️, who knows it all, told me to be careful because **the JSON.stringify trick may not work..**. since the trees may be the same but the rendering order of the left and right branches can be reverse...