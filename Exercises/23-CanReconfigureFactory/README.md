

# Can Reconfigure Factory
## Introduction
We're in Santa's factory 🎅 creating gifts like there's no tomorrow.

We thought we were not going to make it, but **Jelf Bezos** had a brilliant idea to take advantage of the machines and optimize the creation of gifts to the maximum. 🎁

The configuration of the machines is a **string**. We can reconfigure it to make another gift and, for this, we can change each character for another.

But **it has limitations**: when replacing the character, the order must be maintained, the same character cannot be assigned to two different letters (but it can be assigned to itself) and, of course, the length of the string must be the same.

We need a **function that tells us if we can reconfigure a machine so that it can go from one gift to another according to the mentioned rules**.


### Examples

Let's see some examples of sentences:

```
const from = 'BAL'
const to = 'LIB'
const canReconfigure(from, to) // true
/* the transformation would look like this:
B -> L
A -> I
L->B
*/

const from = 'WITH'
const to = 'JUU'
const canReconfigure(from, to) // false
/* can't do transformation:
C -> J
OR -> U
N -> FAIL
*/

const from = 'XBOX'
const to = 'XXBO'
const canReconfigure(from, to) // false
/* can't do transformation:
X -> X
B -> X (FAIL, does not maintain the transformation order and the B cannot be assigned to the X that has already been assigned to another)
OR -> B
X -> O (FAIL, X cannot be assigned to O which is already assigned to X)
*/

const from = 'XBOX'
const to = 'XOBX'
const canReconfigure(from, to) // true

const from = 'MMM'
const to = 'MID'
cons canReconfigure(from, to) // false
/* can't do transformation:
M -> M (OK, assigns the same character to itself)
M -> I (FAIL, assigns the same character to two different letters)
M -> D (FAIL, assigns the same character to two different letters)
*/

const from = 'AA'
const to = 'MID'
cons canReconfigure(from, to) // false -> does not have the same length
```
