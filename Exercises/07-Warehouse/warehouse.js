function contains(store, product) {
  // This array will be filled with all the products of the warehouse
  let products = [];

  const iterate = (object) => {
    Object.keys(object).forEach(key => {
      if (typeof object[key] === 'object' && object[key] !== null) {
        iterate(object[key])
      } else {
        products.push(object[key]);
      }
    });
  }

  iterate(store);

  return products.includes(product);
}

module.exports = {
  contains,
};
