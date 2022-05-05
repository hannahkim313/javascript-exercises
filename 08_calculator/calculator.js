const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
    let sum = 0;

	for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
};

const multiply = function(numbers) {
    let product = 1;

    for (let i = 0; i < numbers.length; i ++) {
        product *= numbers[i];
    }

    return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
    if (a === 0) return 1;

	let numbers = [];
    let product = 1;

    for (let i = 1; i <= a; i++) {
        numbers.push(i);
    }

    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }

    return product;
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
