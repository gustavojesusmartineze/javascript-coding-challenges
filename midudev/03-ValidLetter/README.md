

# Valid Letter
## Introduction
The Grinch is opening the letters that were going to Santa Claus and leaving them in a mess. 😱

Letters are a string of text that includes gifts and parentheses `()`.

To know if a letter is valid ✅, you must check that the parentheses close correctly and that, in addition, they are not empty.

**But beware!** Because the Grinch has left braces `{` and square brackets `[` inside the parentheses **that make them invalid**. Luckily he has only left them in the middle of the parentheses...

### Examples

```
"bike car (ball) bike car plush" // -> true ✅
"(doll) bike console" // true ✅

"bike car (ball bike car" // -> false ❌
"teddy (bike [car) bike car balloon" // -> false ❌
"(teddy {) bike" // -> false ❌
"() bike" // false ❌
```


### Important
Create a function that, passing the text of the letter, returns `true` if it is valid and `false` if it is not. And put an end to the Grinch's mischief!
