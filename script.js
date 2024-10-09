function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  }
  
  function modulus(a, b) {
    return a % b;
  }
  
  function power(a, b) {
    return Math.pow(a, b);
  }
  
  let numberOne;
  let numberTwo;
  let operand;
  
  const inputButton = document.querySelectorAll("button");
  const displayPara = document.querySelector(".displayPara");
  const equalButton = document.querySelector(".equal");
  
  let clickedButtons = [];
  
  inputButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      let buttonText = button.textContent;
      if (displayPara.textContent === "ready") {
        displayPara.textContent = truncateText(buttonText);
      } else {
        displayPara.textContent += truncateText(buttonText);
      }
      clickedButtons.push(buttonText);
    });
  });
  
  function operate(num1, num2, operand1) {
    switch (operand1) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
      case "%":
        return modulus(num1, num2);
      case "^":
        return power(num1, num2);
      default:
        throw new Error(`Invalid operand: ${operand1}`);
    }
  }
  
  function truncateText(text) {
    if (text.length > 20) {
      return text.substring(0, 20) + "...";
    } else {
      return text;
    }
  }
  
  equalButton.addEventListener("click", () => {
    let expression = clickedButtons.join("");
    expression = expression.replace("=", ""); // remove the "=" button from the expression
    let numbers = expression.split(/[+*/^-]/);
    let operators = expression.replace(/[0-9]/g, "").split("");
    let result = Number(numbers[0]);
    for (let i = 0; i < operators.length; i++) {
      let num = Number(numbers[i + 1]);
      let operand = operators[i];
      result = operate(result, num, operand);
    }
    displayPara.textContent = result;
  });