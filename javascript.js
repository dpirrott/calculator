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

const multiply = function(x, y) {
  return x * y;
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
      return add(Number(x), Number(y));
    case "subtract":
      return subtract(Number(x), Number(y));
    case "multiply":
      return multiply(Number(x), Number(y));
    case "divide":
      return divide(Number(x), Number(y));
  }
}

const executeFinalCalc = function() {
  if(displayValue !== "") {
    result = operate(calcData.number, displayValue, calcData.operation);
    displayValue = result;
    displayWriter(result);
    calcData.number = "";
    // calcData.operation = "reset"; 
  }
}

// const executeMiddleCalc = function(x, y, operation) {
//   result = operate(x, y, operation);
//   displayValue = "";
//   displayWriter(result);
// }

const storeAndClear = function(e) {
  
  if (calcData.number === "") {
    calcData.number = displayValue;
    calcData.operation = e.srcElement.id;
    displayValue = "";
  } else {
    calcData.operation = e.srcElement.id;
    if (displayValue !== "") {
      calcData.number = operate(calcData.number, displayValue, calcData.operation);
      displayValue = "";
      calcData.operation = e.srcElement.id;
      displayWriter(calcData.number);
    }
  }
}

const clearDisplay = function() {
  displayValue = "";
  displayWriter(displayValue);
}

const clearDisplayAndData = function() {
  clearDisplay();
  calcData.number = "";
  calcData.operation = "";
}

const displayWriter = function(value) {
  display.innerText = value === "Error" ? "Error" : String(value).slice(0, 14);
}

const combineNumber = function(e) {
  tempNumber = e.srcElement.innerText;
  displayValue += tempNumber;
  displayWriter(displayValue);
}

const setupEventListeners = function() {
  numbers.forEach(number => {
    number.addEventListener('click', combineNumber);
  });
  clearBtn.addEventListener('click', clearDisplayAndData)
  operations.forEach(operation => {
    operation.addEventListener('click', storeAndClear);
  });
  equalsBtn.addEventListener('click', executeFinalCalc)
}

let displayValue = "";
let tempNumber = "";
let calcData = {
  number: "",
  operation: ""
};
let result = 0;

let display = document.querySelector('#display');
const numbers = document.querySelectorAll(".number");
const clearBtn = document.querySelector('#clear');
const operations = document.querySelectorAll('.operation');
const equalsBtn = document.querySelector('#equal');

setupEventListeners();