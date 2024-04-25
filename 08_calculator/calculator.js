const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total += num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total *= num);
};

const power = function(num1, num2) {
  let num = num1;
  for (let i = 1; i < num2; i++) {
    num *= num1;
  }
  return num;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
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
