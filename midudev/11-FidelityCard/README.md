

# Fidelity Card
## Introduction
This December there are super interesting movies in the cinema... and I have to optimize how I spend my money.

My favorite cinema has two possibilities:

• Single use ticket: It costs $12 for each movie.

• Loyalty card: It costs $250 but every time you go you **pay only 75% of the price of the ticket.** The best thing is that it accumulates! And every time you go, you pay 75% of the ticket price you paid last time.

### Examples
Example of each when buying 3 tickets and the price you would pay in total:

```
// Standard ticket: 12$ * 3 = 36$
// Fidelity Card: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
```

I need a function that, when passing the number of times I go to the movies, tells me if it is worth buying the loyalty card or not.

```
shouldBuyFidelity(1) // false -> Better to buy single-use tickets
shouldBuyFidelity(100) // true -> Better to buy loyalty card
```
### Important
The difficulty of the challenge is to find a simple formula that tells us the price with the accumulated discount for the loyalty card. 😜