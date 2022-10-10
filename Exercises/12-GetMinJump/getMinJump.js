function getMinJump(obstacles) {
  const max = Math.max(...obstacles);

  const jumpsArr = Array.from({length: max}).fill(0)
    .reduce((acc, _, index) => {
      if (!obstacles.includes(index + 1)) {
        acc.push(index + 1);
      }
      return acc;
    },[]);

    // console.log(max);
    // console.log(jumpsArr);

  for (let i =0; i<jumpsArr.length;i++) {

    let candidates = [];

    for (let j=0; j<= max; j+=jumpsArr[i]) {
      // console.log(j);
      candidates.push(j);
    }

    // console.log(candidates);

    if (candidates.every((item) => !obstacles.includes(item))) {
      return jumpsArr[i];
    }

  }
}

module.exports = {
  getMinJump,
};
