function canCarry(capacity, trip) {
  const deliveryPoints = trip.reduce((acc, delivery) => [...acc, delivery[2]], []);
  const bag = [];

  for (let i = 0; i < trip.length; i++) {
    const gifts = trip[i][0];
    const collectionPoint = trip[i][1];

    if (collectionPoint >= deliveryPoints[0]) {
      const delivered = bag.shift();
      capacity = capacity + delivered;
    }

    bag.push(gifts);
    capacity = capacity - gifts;

    // check if the capacity was execedd
    if (capacity < 0) {
      return false;
    }
  }

  return true;
}

module.exports = {
  canCarry,
};
