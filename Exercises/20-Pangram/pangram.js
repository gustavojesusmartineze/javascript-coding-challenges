function clean(character) {
  let specialChar = {
    'á' : 'a',
    'é' : 'e',
    'í' : 'i',
    'ó' : 'o',
    'ú' : 'u',
  }

  if (Object.keys(specialChar).includes(character)) {
    return specialChar[character];
  }

  return character;
}

function pangram(letter) {
  let alphabet = 'abcdefghijklmnñopqrstuvwxyz'.split('');

  for (let i=0; i < letter.length; i++) {
    const character = clean(letter[i]).toLowerCase();

    if (alphabet.includes(character)) {
      const idex = alphabet.indexOf(character);
      alphabet = alphabet.slice(0, idex).concat(alphabet.slice(idex+1, alphabet.length));
    }

  }

  return alphabet.length === 0;
}

module.exports = {
  pangram,
};
