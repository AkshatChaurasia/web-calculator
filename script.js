const calc = document.getElementById("calc");
const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.operand');

// Decimal Point Handling
document.getElementById('decimal').addEventListener('click', () => {
  const lastPart = calc.value.split(/[+\-*/%]/).pop();
  if (!lastPart.includes('.')) {
    calc.value += '.';
  }
});

// Operator Handling
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const operator = button.textContent;
    const lastChar = calc.value.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    
    // To ensure not more than 2 operators are being used in an expression simultaneously
    if (operators.includes(lastChar)) {
      calc.value = calc.value.slice(0, -1) + operator;
    } else {
      calc.value += operator;
    }
  });
});

// Number Buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calc.value += button.textContent;
  });
});

function calculate(expression) {
  const operators = ['+', '-', '*', '/', '%', '**'];
  const operator = operators.find(op => expression.includes(op));
  
  if (!operator) return "Invalid Input";
  
  const [left, right] = expression.split(operator).map(Number);
  
  switch(operator) {
    case '+': return left + right;
    case '-': return left - right;
    case '*': return left * right;
    case '/': 
      return right !== 0 ? left / right : "Divide by Zero Error";
    case '%': return left % right;
    case '**': return Math.pow(left, right);
    default: return "Invalid Operation";
  }
}

// Calculate Event
document.getElementById("calculate").addEventListener("click", () => {
  try {
    const result = calculate(calc.value);
    calc.value = result;
  } catch (error) {
    calc.value = "Error";
  }
});

// Clear the input
document.getElementById("clear").addEventListener("click", () => {
  calc.value = "";
});

// Backspace
document.getElementById("backspace").addEventListener("click", () => {
  calc.value = calc.value.slice(0, -1);
});
