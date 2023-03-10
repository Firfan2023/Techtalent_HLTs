
//week 6 CL2 - Basic Calculator.

// define variables num1, num2 and operation
let num1 = 20;
let num2 = 8;
let operation = "multiply"; // can be "add", "subtract", "multiply", or "divide"

// define functions to perform the arithmetic operations
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// use a switch statement to determine which operation to perform
let result;
switch (operation) {
  case "add":
    result = add(num1, num2);
    break;
  case "subtract":
    result = subtract(num1, num2);
    break;
  case "multiply":
    result = multiply(num1, num2);
    break;
  case "divide":
    result = divide(num1, num2);
    break;
  default:
    console.log("Invalid operation");
}

// print the result to the console
console.log(`The result of ${operation}ing ${num1} and ${num2} is ${result}.`);


