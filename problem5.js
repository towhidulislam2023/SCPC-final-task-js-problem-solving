// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Cannot divide by zero!";
      }
    default:
      return "Invalid operator!";
  }
}

console.log(calculate(5, "+", 3));
console.log(calculate(10, "-", 4));
console.log(calculate(6, "*", 5));
console.log(calculate(12, "/", 4));
console.log(calculate(10, "/", 0));
console.log(calculate(8, "%", 2));
