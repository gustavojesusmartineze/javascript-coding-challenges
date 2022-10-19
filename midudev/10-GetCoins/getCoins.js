function getCoins(change) {
  let result = [0, 0, 0, 0, 0, 0];

  function subtract (res) {
    switch(true) {
      case (res >= 50):
        result[5] += 1;
        change -= 50;
        break;
      case (res / 20 >= 1):
        result[4] += 1;
        change -= 20;
        break;
      case (res / 10 >= 1):
        result[3] += 1;
        change -= 10;
        break;
      case (res / 5 >= 1):
        result[2] += 1;
        change -= 5;
        break;
      case (res / 2 >= 1):
        result[1] += 1;
        change -= 2;
        break;
      case (res / 1 >= 1):
        result[0] += 1;
        change -= 1;
        break;
    }
  }

  while(change > 0) {
    subtract(change);
  }

  return result;
}


module.exports = {
  getCoins,
};
