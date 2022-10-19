function isValidLetter(letter) {
  const invalidBrackets = [ '[', ']', '{', '}' ];

  const isInvalid = invalidBrackets.some((bracket => {
    return letter.includes(bracket);
  }));

  if (isInvalid) {
    return false;
  }

  // depth of the parenthesis
  // ex : ( 1 ( 2 ) ( 2 ( 3 ) ) )
  let deph = 0;
  const splitedLetter = letter.split('');

  for (let i = 0; i < splitedLetter.length; i++) {
    if (splitedLetter[i] === '(') {
      // if the char is an opening parenthesis then we increase the depth
      deph ++;
    } else if (splitedLetter[i] === ')' && splitedLetter[i-1] != '(' ) {
      // if the char is an closing parenthesis then we decrease the depth
      deph --;
    }

    if (deph < 0) return false;
  }

  if (deph > 0) return false;

  return true;
}

module.exports = {
  isValidLetter,
}
