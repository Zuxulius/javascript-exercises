const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(anArray) {
  return anArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
  )};

const multiply = function(anArray) {
  return anArray.reduce(
    (accumulator, currentValue) => accumulator * currentValue 
  )};

const power = function(a, b) {
  return a**b
};

const factorial = function(a) {
  let accumulator = 1;
  while (a>0) {
    accumulator *= a;
    a--;
  } return accumulator
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
