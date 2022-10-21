function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  
  if (s === t) {
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    const index = t.indexOf(s[i]);
    if (index !== -1) {
      t = t.slice(0, index).concat(t.slice(index+1, t.length));
    }
  }

  return t.length === 0;
}

module.exports = {
  isAnagram,
}
