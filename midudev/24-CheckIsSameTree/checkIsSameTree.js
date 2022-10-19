function checkIsSameTree(treeA, treeB) {
  if(treeA == null && treeB == null){
    return true;
  } else if (treeA != null && treeB != null) {
    return(
      treeA.value == treeB.value && checkIsSameTree(treeA.left, treeB.left) && checkIsSameTree(treeA.right, treeB.right)
    );
  }

  return false;
}

module.exports = {
  checkIsSameTree,
};
