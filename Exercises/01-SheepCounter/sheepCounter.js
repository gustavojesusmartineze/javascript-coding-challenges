function sheepCounter(sheeps) {
  return sheeps.filter((element) => {
    const colorCondition = element.color === 'red';
    const nameCondition = (element.name.toLowerCase().indexOf('n') > -1 && element.name.toLowerCase().indexOf('a') > -1);

    return colorCondition && nameCondition;
  });
}

module.exports = {
  sheepCounter,
}
