function groupBy(collection, it) {
  let response = { };

  collection.forEach(element => {
    if (typeof element === 'object') {
      const keys = Object.keys(response);
      const value = element[it];

      const responseValue =  keys.indexOf(String(value)) != -1 
        ? [...response[value], element]
        : [element];

      response[value] = responseValue;
    } else {
      let value;
    
      if (typeof it != 'function') {
        const itFunction = new Function("e", `return e.${it}`);
        value = itFunction(element);
      } else {
        value = it(element);
      }

      const keys = Object.keys(response);

      const responseValue =  keys.indexOf(String(value)) != -1 
        ? [...response[value], element]
        : [element];

      response[value] = responseValue;
    }
  });

  return response;
}

module.exports = {
  groupBy,
};
