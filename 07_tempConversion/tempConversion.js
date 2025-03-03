const convertToCelsius = function (inFah) {
  let outCel=Math.round(((inFah-32)*(5/9))*10)/10;
  return outCel;
};

const convertToFahrenheit = function (inCel) {
  let outFah=Math.round(((inCel*(9/5))+32)*10)/10;
  return outFah;
};

//convertToCelsius(65);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
