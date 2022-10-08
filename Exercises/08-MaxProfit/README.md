

# Max Profit
## Introduction
Investing in cryptocurrencies is almost a risk sport. The other day Bitmart was hacked and it has caused the value of Bitcoin, and other currencies, to drop by 25%.

We are going to write a function that receives the price list of a cryptocurrency in one day and we must return the maximum profit that we could make if we bought and sold the investment on the same day.

The price list is an array of numbers and represents time from left to right. So keep in mind that **you can't buy at a price that is to the right of the sell and you can't sell at a price that is to the left of the buy.**

### Examples

```
const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (buys at 18, sells at 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (buys at 10, sells at 70)
```

### Important
**If no profit can be made that day,** we have to return `-1` to prevent us from doing something crazy:

```
const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) = // -> -1 (no profit)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) = // -> -1 (no profit)
```