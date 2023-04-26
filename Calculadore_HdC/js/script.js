import { Calculate } from "./Calc.js";

const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')
const buttons = document.querySelectorAll('#buttons-container button')


const calc = new Calculate(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (ev) => {
        const value = ev.target.textContent;

        if(Number(value) >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            calc.processOperation(value)
        }
    })
})