function checkSledJump(heights) {
  let previousJump = heights[0];
  let ascending = true;

  for (let i = 1; i < heights.length; i++) {
    if (heights[i] === previousJump) {
      return false;
    } else if (ascending) {
      ascending = heights[i] > previousJump ? true : false;
    } else if (!ascending) {
      if (heights[i] > previousJump) {
        return false;
      }
    }

    previousJump = heights[i];
  }

  // false: only goes up
  if (ascending === true) {
    return false;
  }

  return true;
}

module.exports = {
  checkSledJump,
};
