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
  if(displayValue !== "" && calcData.number !== "") {
    result = operate(calcData.number, displayValue, calcData.operation);
    displayValue = result;
    displayWriter(result);
    calcData.number = "";
    calcData.operation = "reset"; 
  }
}

const storeAndClear = function(e) {
  
  if (calcData.number === "") {
    calcData.number = displayValue;
    calcData.operation = e.srcElement.id;
    displayValue = "";
  } else if (displayValue !== "") {
      calcData.number = operate(calcData.number, displayValue, calcData.operation);
      displayValue = "";
      calcData.operation = e.srcElement.id;
      displayWriter(calcData.number);
  } else {
    calcData.operation = e.srcElement.id;
  }
}

const toggleNegativeDisplay = function() {
  console.log(displayValue);
  displayValue = displayValue - 2 * displayValue;
  console.log(displayValue);
  displayWriter(displayValue);
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
  display.innerText = value === "Error" ? "Error" : String(value).slice(0, 9);
  console.log(displayValue);
}

const removeNumber = function() {
  
  if (displayValue.length > 0) {
    let tempString = displayValue.split("");
    tempString.pop();
    displayValue = tempString.join('');
    displayWriter(displayValue);
  }
}

const combineNumber = function(e) {
  if (displayValue === "") dotBtn.disabled = false;
  if(calcData.operation === "reset") {
    clearDisplayAndData();
  }
  tempNumber = e.srcElement.innerText;
  if (tempNumber === ".") dotBtn.disabled = true;
  displayValue += tempNumber;
  console.log(displayValue);
  displayWriter(displayValue);
}

const setupEventListeners = function() {
  numbers.forEach(number => {
    number.addEventListener('click', combineNumber);
  });
  clearBtn.addEventListener('click', clearDisplayAndData);
  operations.forEach(operation => {
    if (operation.id !== "neg") operation.addEventListener('click', storeAndClear);
  });
  equalsBtn.addEventListener('click', executeFinalCalc);
  negBtn.addEventListener('click', toggleNegativeDisplay);
  deleteBtn.addEventListener('click', removeNumber);
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
const negBtn = document.querySelector('#neg');
const dotBtn = document.querySelector('#dot');
const deleteBtn = document.querySelector('#delete');
setupEventListeners();