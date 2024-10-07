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

let numberOne ;
let numberTwo;
let operand;

const inputButton = document.querySelectorAll("button");
const displayPara = document.querySelector(".displayPara");


function operate (num1, num2, operand1){

}

function input (input) {
   let displayValue = displayPara.textContent = inputButton.value;
   return displayValue;
}

inputButton.forEach((button) =>{
    button.addEventListener("click", (input) => {
        // debugger
        let buttonText = button.textContent;
        if (displayPara.textContent == 'ready'){
            return displayPara.textContent = buttonText;
        }else{
            return displayPara.textContent += buttonText ;
        }
    });
});


