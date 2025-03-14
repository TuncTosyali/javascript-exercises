const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (anArray) {
  return anArray.reduce(add, 0);
};

const multiply = function (anArray) {
  return anArray.reduce((total, value) => total * value);
};

const power = function (base, toPower) {
  return Math.pow(base, toPower);
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n*factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
