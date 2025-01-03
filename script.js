const calc = document.getElementById("calc");
const disp = document.getElementById("display");
const butt1 = document.getElementById("calculate");
const numberButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');

let num1 = '';
let num2 = '';
let oper = '';
let result = '';

// // Input tracking
// calc.addEventListener('input', () => {
//   disp.textContent = calc.value;
// });

// // Calculate button event
// butt1.addEventListener("click", () => {
//   result = calculate(calc.value);
//   disp.textContent = result;
// });

function calculate(calc) {
  if (calc.includes('**')) {
    const [num1, num2] = calc.split('**').map(Number);
    return Math.pow(num1, num2);
  }
  
  const operators = ['+', '-', '*', '/','%'];
  const operator = operators.find(op => calc.includes(op));
  
  if (operator) {
    const [num1, num2] = calc.split(operator).map(Number);
    return operate(operator, num1, num2);
  }
  
  return "Invalid Input";
}



operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const operator = button.textContent;
    calc.value += operator;
  });
});

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    calc.value += number;
  });
});

// Decimal point
document.getElementById('decimal').addEventListener('click', () => {
  calc.value += '.';
});

// Backspace functionality
document.getElementById('backspace').addEventListener('click', () => {
  calc.value = calc.value.slice(0, -1);
});

butt1.addEventListener("click", () => {
  const inputValue = calc.value;
  const result = calculate(inputValue);
  calc.value = result;
});

document.getElementById("clear").addEventListener("click",() => {
  calc.value = "";
});

function operate(op, n1, n2) {
  switch (op) {
    case '+': return add(n1, n2);
    case '-': return subtract(n1, n2);
    case '*': return multiply(n1, n2);
    case '/': return divide(n1, n2);
    case '%': return percent(n1,n2);
    default: return "Invalid Operation";
  }
}

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
function percent(a,b) {return (a/100)*b;}

