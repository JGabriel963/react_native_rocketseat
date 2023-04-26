const previousOperationText = document.querySelector('#previous-operation')

export class Calculate {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    }

    // add digit to calculator screen
    addDigit(digit) {
        // check if current operation already has a dot
        if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }

        this.currentOperation = digit
        this.updateScreen()

    }


    // Process all calculator operations
    processOperation(operation) {
        // Check if current is empty
        if (this.currentOperationText.innerText === "" && operation !== "C") {
            // Change operation
            if(this.previousOperationText.innerText !== "") {
                this.changeOperation(operation)
            }
            return;
        }
        
        // Get current and previous value
        let operationValue
        const previous = Number(this.previousOperationText.innerText.split(" ")[0]);
        const current = Number(this.currentOperationText.innerText);


        switch(operation) {
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "-":
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "/":
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "*":
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "DEL":
                this.processDelOperator();
                break
            case "CE":
                this.preocessClearCurrentOperation();
                break
            case "C":
                this.preocessClearOperator();
                break
            case "=":
                this.processEqualOperator();
                break
            default:
                return;
        }

    }


    // Change values of calculator screen
    updateScreen(
        operationValue = null, 
        operation = null, 
        current = null, 
        previous = null
        ) {

            console.log({operationValue, operation,current, previous});

        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            // Check if value is zero, if it is just add current value
            if (previous === 0) {
                operationValue = current
            }

            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = "";
        }
    }


    changeOperation(operation) {
        const mathOperations = ["*", "/", "+", "-"]

        if(!mathOperations.includes(operation)) {
            return
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation

    }

    processDelOperator() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
    }

    preocessClearCurrentOperation() {
        this.currentOperationText.innerText = ""
    }

    preocessClearOperator() {
        this.previousOperationText.innerText = ""
        this.currentOperationText.innerText = ""
    }

    processEqualOperator() {

        const operation = previousOperationText.innerText.split(" ")[1]

        this.processOperation(operation)
        this.currentOperationText.innerText = this.previousOperationText.innerText.slice(0, -1)
        this.previousOperationText.innerText = ""

    }
}