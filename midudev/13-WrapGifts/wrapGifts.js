function wrapGifts(gifts) {
  let wrapedGifts = gifts.reduce((accum, current) => {
    let newStr = current.padStart(current.length + 1, "*");
    newStr = newStr.padEnd(current.length + 2, "*");

    return [...accum, newStr];
  }, []);

  // Add wrap at start and end of the array.
  let wrap = "".padStart(wrapedGifts[0].length, "*");
  wrapedGifts.push(wrap);
  wrapedGifts.unshift(wrap);

  return wrapedGifts;
}

module.exports = {
  wrapGifts,
};
