function canReconfigure(from, to) {
  // Check for different strings.
  if (from.length !== to.length) return false

  const assigned = {};

  for (const i in from) {
    if (Object.values(assigned).some(value => value === to[i]) && assigned[from[i]] !== to[i]) {
      return false;
    }

    if (assigned[from[i]] && assigned[from[i]] !== to[i]) {
      return false;
    }

    assigned[from[i]] = to[i];
  }

  return true;
}

module.exports = {
  canReconfigure,
};
