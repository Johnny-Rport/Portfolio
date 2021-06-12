class Agecalc { //* This is an object class that defines objects through a class name, it contains things like functions that are useful to modify when something happens like clicking a button; in this case Agecalc represents the whole document as a whole object
    constructor (birthYear, currentYear, result) { //* constructor allows you to define variables for the class object so the functions in the class works
        this.birthYear = birthYear;
        this.currentYear = currentYear
        this.result = result;
    }
    showYear () { //IT WORKS
        let age = this.currentYear.value - this.birthYear.value;
        this.result.innerHTML = `You are ${age} years old!`
    }
}


const birthYear = document.querySelector(`[valueAsBir]`); //* document.quereySelector(``) helps select the element, like defining it as a variable to be used, the brackets are to help identify the element with those letters
const currentYear = document.querySelector(`[valueAsCur]`)
const button = document.querySelector(`[valueAsButton]`)
const result = document.querySelector(`[valueAsResult]`)
const calc = new Agecalc (birthYear, currentYear, result) //* This allows the eventlisten below to function properly by calling the variable calc a variation of the class Agecalc with the its variables as well.

button.addEventListener(`click`, () => {
   // calc.output(this.birthYear, this.result);
    calc.showYear()
}) 

