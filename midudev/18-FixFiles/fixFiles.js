function fixFiles(files) {
  let  resultFiles = [];

  const obj = files.reduce((accumulator, value) => {
    let currentValue = Object.keys(accumulator).includes(value) ? accumulator[value] + 1 : 0;

    accumulator[value] = currentValue;

    const string = accumulator[value] === 0 ? `${value}` : `${value}(${accumulator[value]})`;
    resultFiles.push(string)

    return accumulator;

  }, {});

  return resultFiles;
}

module.exports = {
  fixFiles,
};
