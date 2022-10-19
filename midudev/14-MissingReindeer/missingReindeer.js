function missingReindeer(ids) {
  ids.sort((a, b) => a -b);

  for (let i = 0; i < ids.length; i++) {
    if (i != ids[i]) {
      return i;
    }
  }

  return ids.length;
}

module.exports = {
  missingReindeer,
};
