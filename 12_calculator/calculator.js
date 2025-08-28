const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((acc, item) =>acc += item, 0);
};

const multiply = function(array) {
  return array.reduce((acc, item) =>acc *= item, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let rez = 1;
  for (let i = 2; i <= a; i++){
    rez = rez * i;
  }
  return rez;
};

let summ = sum([7]);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
