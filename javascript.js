const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numbers) {
	let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum;
};

const multiply = function(numbers) {
  let multiply = numbers[0];
  numbers.forEach((number, index) => {
    if (index > 0) {
      multiply *= number;
    }
  });
  return multiply;
};

const divide = function(x, y) {
  if (y === 0) { 
    return "Error"
  } else {
    return x / y;
  }
}

const power = function(x, y) {
	return Math.pow(x, y);
};

const operate = function(x, y, operator) {
  switch(operator) {
    case "add":
      return add(x, y);
    case "subtract":
      return subtract(x, y);
    case "multiply":
      return multiply(x, y);
    case "divide":
      return divide(x, y);
  }
}

const displayWriter = function(value) {
  // Update display paragraph with value
}

const setupEventListeners = function() {

}

let displayValue = "";
const numbers = document.getElementsByClassName("number");


setupEventListeners();
// const factorial = function(x) {
// 	let fact = 1;
//   if (x == 0 && x == 1) {
//     return 1;
//   } else {
//     for(let i = x; i >= 1; i-- ){
//       fact *= i;
//     }
//   }
//   return fact;
// };