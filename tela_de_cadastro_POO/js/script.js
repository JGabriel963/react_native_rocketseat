class Validation {
    constructor() {
        this.validations = [
            'data-min-length',
        ]
    }

    validate(form) {
        const inputs = form.querySelectorAll('input')
        const inputArray = Array.from(inputs)
        inputArray.forEach(input => {
            for (let i = 0; this.validations.length > i; i++) {
                if (input.getAttribute(this.validations[i]) !== null) {
                    const method = this.validations[i].replace('data', '').replace('-', '')

                    const value = input.getAttribute(this.validations[i])

                    method(input, value)
                }
            }
        }, this)
    }

    minlength(input, value) {
        console.log(input);
        console.log(value);
    }
}



const form = document.getElementById('register-form')
const submit = document.getElementById('btn-submit')

const validator = new Validation();

submit.addEventListener('click', (ev) => {
    ev.preventDefault();
    validator.validate(form)
    
})