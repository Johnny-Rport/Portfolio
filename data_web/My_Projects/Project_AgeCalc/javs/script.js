
/*var helloWorld = 'Hello World! program in javascript';
var numFact = 50+50;
let explainOne = 'This is a variable and there are many ways to declare variables and use them and it will all pop up when logged.'
let explainTwo = 'There are more advanced ways to use variables than just doing math, they can be useful to create things like showing new variables when an element is clicked on or creating logistical algorithims to end up with a result with a few inputs. These lessons will be learned at a later time, and hopefully it can be applied to the website that I am making because at the moment I can not figure it out';

console.log(`This is my first ${helloWorld}, a fact about 50+50 is that it is ${numFact}.`);
console.log(explainOne);


const age = current-birth +' years of age';
console.log(`Variables are extremely useful to create functionality within a project like finding my age which is ${age}.`);
console.log(explainTwo)*/


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

button.addEventListener(`click`, () => {//*memorize this syntax may come in handy
   // calc.output(this.birthYear, this.result);
    calc.showYear()
}) 

