

# Complete Two Courses
## Introduction
On the occasion of the most beautiful dates of the year, Platzi has launched a very special promotion because **education is a gift 🎁 forever.**

At Platzi they have **more than 800 courses** 📚 but, of course, our time is limited. So we are going to optimize our available time to **complete two courses using the maximum number of hours available.**

We have to create **a function that receives two parameters.** The first is the number of hours we have available ⏳ and the second is an array where each index is a course and the value is the time it takes to complete.

**We are clear that we want to do two courses,** so the function must return an array with the index of the two courses that we are going to be able to complete with the given available time and using the maximum available time. If we don't have time, we return null


### Examples

Let's see some examples:


```
learn(10, [2, 3, 8, 1, 4]) // [0, 2] -> with 10 hours available it is best that we complete the courses at index 0 and 2.

learn(15, [2, 10, 4, 1]) // [1, 2] -> The courses in [1, 2] are 14 hours, it is the best option.

learn(25, [10, 15, 20, 5]) // [0, 1] -> courses [0, 1] and [2, 3] complete with exactly 25 hours but we always return the first one we find

learn(8, [8, 2, 1]) // [1, 2] -> to do two courses, we can't do the 8 hour one, so we return the 1 and 2.

learn(8, [8, 2, 1, 4, 3]) // [3, 4] -> we use the maximum time available so [3, 4] uses 7 hours and the [1, 2] would only use 3 hours.

learn(4, [10, 14, 20]) // null -> we don't have time to do two courses

learn(5, [5, 5, 5]) // null -> we don't have time to do two courses
```

### Important
Looking at the whole theme of Platzi, we have also realized that they have a special discount for Christmas. Don't know what to give? **Give knowledge 🎓.**