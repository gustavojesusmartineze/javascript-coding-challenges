function countDecorations(bigTree) {
  if (bigTree && bigTree.value) {
    return bigTree.value + countDecorations(bigTree.left)  +  countDecorations(bigTree.right);
  }

  return 0;
}

module.exports = {
  countDecorations,
};
