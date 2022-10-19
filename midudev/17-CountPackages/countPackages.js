function countPackages(carriers, carrierID) {
  let carrierIDs = [carrierID];
  let total = 0;

  for (let i = 0; i < carriers.length; i++) {
    if (carrierIDs.includes(carriers[i][0])) {
      total += carriers[i][1];
      carrierIDs.push(...carriers[i][2]);
    }
  }

  return total;
}

module.exports = {
  countPackages,
};
