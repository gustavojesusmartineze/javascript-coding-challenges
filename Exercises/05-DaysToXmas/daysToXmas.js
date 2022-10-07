function daysToXmas(date) {
  // miliseconds * seconds * minutes * hours 
  const day = (1000 * 60 * 60 * 24);

  // Calculate the time difference of two dates
  let dateFormatted = new Intl.DateTimeFormat('en-US').format(date);
  let tempDate = new Date(dateFormatted);

  // the reference date to know if it is December 25
  const xmas = new Date('Dec 25, 2021').getTime();
  
  // Calculate the number of days between two dates
  let diffDays = parseInt(Math.round(xmas - tempDate.getTime()) / day);

  return diffDays;
}

module.exports = {
  daysToXmas,
}
