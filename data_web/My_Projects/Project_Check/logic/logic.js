// Input Elements
const inputWage = document.querySelector('[wage]')
const inputHours = document.querySelector('[Hour]')
const inputDays = document.querySelector('[Day]')

const inputWage2 = document.querySelector('[wage2]')
const hours2 = document.querySelector('[Hour2]')
const days2 = document.querySelector('[Day2]')

// Buttons
const dailyp = document.querySelector('[daily]')
const yearlyp = document.querySelector('[yearly]')
const monthlyp = document.querySelector('[monthly]')
const weeklyp = document.querySelector('[weekly]')
const check = document.querySelector('[check]')

const switchButton = document.querySelector('[switch]')
const reset = document.querySelector('[reset]')
const submit = document.querySelector('[submit]')
const compare = document.querySelector('[compare]')

// Arrays, Outputs, and more
const pay = [dailyp, yearlyp, monthlyp, weeklyp, check]
const firstSet = document.querySelectorAll('[first]')
const secondSet = document.querySelectorAll('[second]')
const outputP = document.querySelector('[result]')
let switchSets = 1



// This function is essential in making the compare work
// submit2.addEventListener('click', ()=> { 
//     if (inputWage2.value != '' && hours2.value != '' && days2.value != '') {
//         inputWage2.setAttribute('disabled', '')
//         hours2.setAttribute('disabled', '')
//         days2.setAttribute('disabled', '')


//         pay.forEach(button => {
//             button.removeAttribute('disabled')
//             button.addEventListener('click', () => {
//                 let change = true
//                 calcPay(button.innerText[0], inputWage2.value, hours2.value, days2.value, change)
//             })
//         })
//     }
// })

// Event Listeners
switchButton.addEventListener('click', () => {
    switchInputs(firstSet, secondSet)
})

reset.addEventListener('click', () => {
    resetValues(inputWage, inputHours, inputDays)
})

submit.addEventListener('click', ()=> {
    submitValues(inputWage, inputHours, inputDays)
            })
})

// Switches between first and second set of values
// You might have to incorporate reset and submit event listeners in order to tell which set is selected
function switchInputs (firstSet, secondSet) {
    if (switchSets === 1) {
        firstSet.forEach(element => {
            element.setAttribute('disabled', '')
        })

        secondSet.forEach(element => {
            element.removeAttribute('disabled')
        })

        switchSets = 0 
        alert('Second Set of Values')

    } else if (switchSets === 0) {
        firstSet.forEach(element => {
            element.removeAttribute('disabled')
        })

        secondSet.forEach(element => {
            element.setAttribute('disabled', '')
        })

        switchSets = 1
        alert('First Set of Values')
    }

}

function resetValues (wage, hours, days) {
    wage.value = ''
    wage.removeAttribute('disabled')
    hours.value = ''
    hours.removeAttribute('disabled')
    days.value = ''
    days.removeAttribute('disabled')
}

function submitValues (wage, hours, days) {
    if (wage.value != '' && hours.value != '' && days.value != '') {
        wage.setAttribute('disabled', '')
        hours.setAttribute('disabled', '')
        days.setAttribute('disabled', '')
        
        pay.forEach(button => {
            button.removeAttribute('disabled')
            button.addEventListener('click', () => {
                let change = false
                calcPay(button.innerText[0], inputWage.value, hours.value, days.value, change)
            })
        })
    }  
}

function calcPay (input, wage, hour, day, compare) {
    let week = 2 // In Weeks
    let month = 4
    let year = 48 
    switch (input) {
        case "D":
            if (compare == false) {
                x  = (wage * hour)
                outputP.innerText = `Pay: $${x}`
            } else if (compare == true) {  
                x = (wage * hour) //Second Set
                y = (inputWage.value * hours.value) // First Set
                outputP.innerText = `For working ${hours.value} hours you get paid: $${y}. For working ${hour} hours you get paid: $${x}`
            }
        break;

        case "Y":
            if (compare == false) {
                x  = (wage * hour * day * year)
                outputP.innerText = `Pay: $${x}`
            } else if (compare == true) {  
                x = (wage * hour * day * year) 
                y = (inputWage.value * hours.value * days.value * year )
                outputP.innerText = `By working ${days.value} days with ${hours.value} hours each, the salary is: $${y}. With ${day} days and ${hour} hours each your salary pay is: $${x}`

            }
        break;

        case "M":
            if (compare == false) {
                x  = (wage * hour * day * month)
                outputP.innerText = `Pay: $${x}`
            } else if (compare == true) {  
                x = (wage * hour * day * month) 
                y = (inputWage.value * hours.value *days.value * month )
                outputP.innerText = `By working ${days.value} days with ${hours.value} hours each, the monthly pay will be: $${y}. With ${day} days and ${hour} hours each your monthly pay is: $${x}`
            }
        break;

        case "W":
            if (compare == false) {
                x  = (wage * hour * day)
                outputP.innerText = `Pay: $${x}`
            } else if (compare == true) {  
                x = (wage * hour * day) 
                y = (inputWage.value * hours.value *days.value )
                outputP.innerText = `By working ${days.value} days with ${hours.value} hours each, you get paid: $${y}. With ${day} days and ${hour} hours each you get paid: $${x}`
            }
        break;

        case "C":
            if (compare == false) {
                x  = (wage * hour * day * week)
                outputP.innerText = `Pay: $${x}`
            } else if (compare == true) {  
                x = (wage * hour * day * week) 
                y = (inputWage.value * hours.value *days.value * week )
                outputP.innerText = `By working ${days.value} days with ${hours.value} hours each, the check will be: $${y}. With ${day} days and ${hour} hours each your check is: $${x}`
            }
        break;

    }
}
