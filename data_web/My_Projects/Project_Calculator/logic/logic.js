class Calculatorlogic {
    constructor (topInput, bottomInput) {
        this.topInput = topInput;
        this.bottomInput = bottomInput;
    }
    recordNum (number) { //does what its name suggests, records the array text value as an actual variable
        this.bottomInput = number;
    }
    changingD () {
        bottomInput.innerText = bottomInput.innerText.toString() + this.bottomInput.toString();
    }
    back () {
        bottomInput.innerText = bottomInput.innerText.toString().slice(0, -1);
    }
    recordOps(operation) {
        this.topInput = operation;
    }
    continuous (operation) {
        if (bottomInput.innerText === '' && topInput.innerText != '') {
            this.topInput = operation;
            topInput.innerText = topInput.innerText + this.topInput;
        } else {
            return;
        }
    }
    switch () {
        if (bottomInput.innerText === '' && topInput.innerText != '') {
            return;
        }
        topInput.innerText = bottomInput.innerText + this.topInput ;
        bottomInput.innerText = '';
    }
    logic () {
        switch (topInput.innerText.slice(-1)) {
            case '/':
                topInput.innerText = topInput.innerText.slice(0, -1) / bottomInput.innerText;
                bottomInput.innerText = '';
            break;
            case '*':
                topInput.innerText = topInput.innerText.slice(0, -1) * bottomInput.innerText;
                bottomInput.innerText = '';
            break;
            case '-':
                topInput.innerText = topInput.innerText.slice(0, -1) - bottomInput.innerText;
                bottomInput.innerText = '';
            break;
            case '+':
                topInput.innerText = (topInput.innerText.slice(0, -1) - '') + (bottomInput.innerText - '');
                bottomInput.innerText = '';
            break;
        }
    }
    ac () {
        topInput.innerText = '';
        bottomInput.innerText = '';
    }
}

const num = document.querySelectorAll('[number]');
const backspace = document.querySelector('[delete]');
const destroy = document.querySelector('[allClear]')
const ops = document.querySelectorAll('[operation]')
const enter = document.querySelector('[enter]')
const topInput = document.querySelector('[topDisplay]');
const bottomInput = document.querySelector('[bottomDisplay]');
const logicCalc = new Calculatorlogic(topInput);

num.forEach(button => { //Note this syntax for the For Each function, useful for arrays
    button.addEventListener('click', () => {
        logicCalc.recordNum(button.innerText); //This first function is a critical to recording the actual text within the element for the other function to use
        logicCalc.changingD();
    })
})
ops.forEach(button => {
    button.addEventListener('click', () => {
        logicCalc.continuous(button.innerText);
        logicCalc.recordOps(button.innerText);
        logicCalc.switch();
    })
})
backspace.addEventListener('click', () => {
    logicCalc.back();
})
destroy.addEventListener('click', () => {
    logicCalc.ac();
})
enter.addEventListener('click', () =>{
    logicCalc.logic();
})
//Get Decimal Button to work perhaps, make so it checks if the top element has an operation already, if so then another operation cannot work, disable?

