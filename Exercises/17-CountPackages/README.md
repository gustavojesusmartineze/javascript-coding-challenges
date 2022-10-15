

# Count Packages
## Introduction
Package companies 📦 are preparing for the holidays and the shipping madness that awaits them.

The company works with fleets of vans 🚛 and trucks 🚚. Fleets have an organization chart, as there are ranges of experience level.

We need to know the number of packages that a person will be able to manage in a day. To do this, the number of packages that person can carry and **all the carriers that he has in his team are counted**. The bad thing is that the data is stored in a strange way in an array:

The array contains other arrays that contain the data of each carrier

`carrier[0]` -> Carrier Name/ID
`carrier[1]` -> Packages handled in one day
`carrier[2]` -> Array with its subordinates

### Examples

So that we can see it in code, both the array and the two-parameter function to get the desired number:

```
const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

countPackages(carriers, 'dapelu') // 9
// 5 from dapelu, 2 from midu and 2 from jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

countPackages(carriers2, 'camila') // 15
// 5 from camila, 4 from sergiomartinez, 3 from conchaasensio, 2 from facundocapua and 1 from faviola = 15
```

### Important
**Be careful!** As you have seen in the second example, **the organization chart can have different levels and we also get information that we may not need.** We must take into account the `carrierID` parameter to correctly calculate the number and count all your equipment.