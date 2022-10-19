function shouldBuyFidelity(times) {
  const DEFAULT_COST = 12;
  const FIDELITY_COST = 250;
  const DISCOUNT = 0.75;

  let totalWithFidelity = FIDELITY_COST;
  let i = 1;
  const initialCost = times * DEFAULT_COST;

  while (i <= times) {
    const currentDiscount = DEFAULT_COST * (DISCOUNT ** i);
    totalWithFidelity += currentDiscount;
    i++;
  }

  return initialCost > totalWithFidelity;
}

module.exports = {
  shouldBuyFidelity,
};
