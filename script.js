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
    a = parseInt(a);
    b = parseInt(b);
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Both operands must be numbers!");
    }
    if (b === 0) {
      throw new Error("Cannot perform modulus by zero!");
    }
    return a % b;
  }
  
  function power(a, b) {
    return Math.pow(a, b);
  }
  
  let numberOne;
  let numberTwo;
  let operator;
  
  const inputButton = document.querySelectorAll("button");
  const displayPara = document.querySelector(".displayPara");
  const equalButton = document.querySelector(".equal");
  
  let clickedButtons = [];
  
  const clearButton = document.querySelector(".cancel");
  
  clearButton.addEventListener("click", () => {
    displayPara.textContent = "ready";
    clickedButtons = [];
  });
  
  inputButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      let buttonText = button.textContent;
      if (buttonText === ".") {
        let currentText = displayPara.textContent;
        let parts = currentText.split(/[+*/%-]/);
        let lastPart = parts[parts.length - 1];
        
        if (!lastPart.includes(".")) {
          displayPara.textContent += buttonText;
          clickedButtons.push(buttonText);
        }
      }else if (buttonText === "AC") {
        clearButton.click(); // simulate a click on the "C" button
        return;
      } else if (buttonText === "C") {
        let currentText = displayPara.textContent;
        if (currentText !== "ready") {
          let newText = currentText;
          if (currentText[currentText.length - 1] === ' ') {
            newText = currentText.slice(0, -3); // remove the last operator or number
          } else {
            newText = currentText.slice(0, -1); // remove the last character
          }
          displayPara.textContent = newText;
          if (clickedButtons.length > 0) {
            clickedButtons.pop();
          }
        }
        return;
      } else if (buttonText === "=") {
        debugger
        let expression = clickedButtons.join("");
        let parts = expression.split(/([+*/%-])/); // Split on operators, but keep them in the parts array
        for (let i = 0; i < parts.length; i++) {
          if (parts[i].indexOf(".") > -1) {
            parts[i] = parts[i].replace(/\.(?=.*\.)/g, "");
          }
        }
        expression = parts.join(""); // Join the parts back together with the operators
        expression = expression.replace(/[=]/g, "");
        let numbers = expression.split(/[+*/%-]/);
        let operators = expression.replace(/[.0-9]/g, "").split("");
        let result = Number(numbers[0]);
        for (let i = 0; i < operators.length; i++) {
          let num = Number(numbers[i + 1]);
          let operator = operators[i];
          result = operate(result, num, operator);
        }
        displayPara.textContent = result.toString(); // display the result as a string
        clickedButtons = []; // clear the clickedButtons array
      } else if (displayPara.textContent === "ready") {
        displayPara.textContent = buttonText;
      } else {
        if (buttonText !== "=" && buttonText !== ".") { // add this condition
          displayPara.textContent += buttonText;
        }
      }
      clickedButtons.push(buttonText);
    });
  });
  
  document.addEventListener("keydown", (event) => {
    const keyValue = event.key;
    const button = document.querySelector(`button[data-key="${keyValue}"]`);
  
    if (button) {
      button.click(); // simulate a click on the corresponding button
    }
  });
  
  function operate(num1, num2, operator) {
    switch (operator) {
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
        throw new Error(`Invalid operator: ${operator}`);
    }
  }
  
  function truncateText(text) {
    if (text.length > 20) {
      return text.substring(0, 20) + "...";
    } else {
      return text;
    }
  }