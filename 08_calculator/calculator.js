const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let sumResult = 0
	for(let i = 0; i<a.length; i++) {
    sumResult += a[i];
  }
  return sumResult;
};

const multiply = function(a) {
  let product = 1;
	for(let i = 0; i<a.length; i++) {
    product *= a[i];
  }
  return product;
};

const power = function(a, b) {
  let powerResult = 1;
  for(let i = 0; i<b; i++) {
    powerResult *= a;
  }

  return powerResult;
};

const factorial = function(a) {
	let factorialResult = 1;
  for(let i = 1; i<=a; i++) {
    factorialResult *= i;
  }
  return factorialResult;
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
