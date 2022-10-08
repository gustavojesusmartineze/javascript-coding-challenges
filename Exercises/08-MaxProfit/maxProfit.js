function maxProfit(prices) {
  let maxProfit = prices[1] - prices[0];
  let minBuy = prices[0];

  for (let i = 0; i < prices.length; i++) {
    const currentProfit = prices[i] - minBuy;

    maxProfit = Math.max(maxProfit, currentProfit);
    minBuy = Math.min(minBuy, prices[i]);
  }

  return maxProfit > 0 ? maxProfit : - 1;
}

module.exports = {
  maxProfit,
};
