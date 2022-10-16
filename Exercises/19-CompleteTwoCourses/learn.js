function learn(time, courses) {
  let result = [];

  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const currentTime = courses[i] + courses[j];

      if (i!=j && currentTime === time) {
        return  [i, j];
      } else if (i!=j && currentTime < time) {
        const stored = result.length > 0 ? courses[result[0]] + courses[result[1]] : 0;
        result = currentTime > stored ? [i, j] : result;
      }
    }
  }

  return result.length > 0 ? result : null;
}

module.exports = {
  learn,
};
