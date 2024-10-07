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

inputButton.forEach((button) =>{
    button.addEventListener("click", (input) => {
        // debugger
        let buttonText = button.textContent;
        if (displayPara.textContent == 'ready'){
            return displayPara.textContent = truncateText(buttonText);
        }else{
            return displayPara.textContent += truncateText(buttonText) ;
        }
    });
});


