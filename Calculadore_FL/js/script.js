const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=tecla]');
const operations = document.querySelectorAll('[id*=operador]')

let newNumber = true;
let operador;
let numberPrevious;

const pendingOperation = () => operador !== undefined;

const calculate = () => {
    if (pendingOperation()) {
        const currentNumber = +display.textContent.replace(',', '.');
        newNumber = true;
        const result = eval(`${numberPrevious}${operador}${currentNumber}`)
        updateDisplay(result)
    }
}

const updateDisplay = (text) => {
    if (newNumber) {
        display.textContent = text.toLocaleString('BR');
        newNumber = false;
    } else {
        display.textContent += text.toLocaleString('BR');
    }
}

const insertNumber = (ev) => updateDisplay(ev.target.textContent);

numbers.forEach(number => {
    number.addEventListener('click', insertNumber)
});

const selectOperator = (ev) => {
    if (!newNumber) {
        calculate()
        newNumber = true;
        operador = ev.target.textContent;
        numberPrevious = +display.textContent.replace(',', '.');
    }
    
}

operations.forEach(operation => {
    operation.addEventListener('click', selectOperator)
});

const activeEqual = () => {
    calculate();
    operador = undefined;
}

document.getElementById('igual').addEventListener('click', activeEqual)

const cleanDisplay = () => display.textContent = ''

document.getElementById('limparDisplay').addEventListener('click', cleanDisplay);

const cleanCalculation = () => {
    cleanDisplay()
    operador = undefined;
    newNumber = true;
    numberPrevious = undefined;
}

document.getElementById('limparCalculo').addEventListener('click', cleanCalculation)

const deleteNumbers = () => {
    display.textContent = display.textContent.slice(0, -1)

}

document.getElementById('backspace').addEventListener('click', deleteNumbers)

const invertSign = () => {
    newNumber = true;
    updateDisplay(display.textContent * -1)
}

document.getElementById('inverter').addEventListener('click', invertSign)

const exitedDecimal = () => display.textContent.indexOf(',') !== -1;
const exitedValue = () => display.textContent.length > 0;

const insertDecimal = () => {
    if (!exitedDecimal()) {
        if (exitedValue()) {
            updateDisplay(',')
        } else {
            updateDisplay('0,')
        }
    }
}
document.getElementById('decimal').addEventListener('click', insertDecimal)