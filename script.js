function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a/b;
}

function modulus (a, b){
    return a%b;
}
function power (a, b){
    return Math.pow(a, b);
}

let numberOne ;
let numberTwo;
let operand;

const inputButton = document.querySelectorAll("button");
const displayPara = document.querySelector(".displayPara");


function operate (num1, num2, operand1){

}
function truncateText(text) {
    if (text.length > 20) {
      return text.substring(0, 20) + '...';
    } else {
      return text;
    }
  }
let clickedButtons = []; 

inputButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    let buttonText = button.textContent;
    if (displayPara.textContent === 'ready') {
      displayPara.textContent = truncateText(buttonText);
    } else {
      displayPara.textContent += truncateText(buttonText);
    }
    clickedButtons.push(buttonText);
  });
});

console.log(clickedButtons);

