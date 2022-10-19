function listGifts(letter) {
  let result = {};
  let splittedLetter = letter.replace(/\s+/g, ' ').trim().split(' ');;

  splittedLetter.forEach(element => {
    if (element.indexOf('_') == -1) {
      result[element] = Object.keys(result).includes(element) ? result[element] + 1 : 1;
    }
  });

  return result;
}

module.exports = {
  listGifts,
}
