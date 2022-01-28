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
  let multiply = 1;
  numbers.forEach(number => {
    multiply *= number;
  });
  return multiply;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

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