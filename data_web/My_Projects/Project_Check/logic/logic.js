// Input Elements
const inputWage = document.querySelector('[wage]')
const inputHours = document.querySelector('[Hour]')
const inputDays = document.querySelector('[Day]')

const inputWage2 = document.querySelector('[wage2]')
const inputHours2 = document.querySelector('[Hour2]')
const inputDays2 = document.querySelector('[Day2]')

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
const difference = document.querySelector('[difference]')

// Arrays, Outputs, and more
const pay = [dailyp, yearlyp, monthlyp, weeklyp, check]
const firstSet = document.querySelectorAll('[first]')
const secondSet = document.querySelectorAll('[second]')
const outputResult = document.querySelector('[result]')
let switchSets = 1

// Event Listeners
switchButton.addEventListener('click', () => {
    switchInputs(firstSet, secondSet)
    dailyp.setAttribute('disabled', '')
    weeklyp.setAttribute('disabled', '')
    monthlyp.setAttribute('disabled', '')
    yearlyp.setAttribute('disabled', '')
    check.setAttribute('disabled', '')
})

reset.addEventListener('click', () => {
    if (switchSets === 1) {
        resetValues(inputWage, inputHours, inputDays)
    } else if (switchSets === 0) {
        resetValues(inputWage2, inputHours2, inputDays2)
    }
   
})

submit.addEventListener('click', ()=> {
    if (switchSets === 1) {
        submitValues(inputWage, inputHours, inputDays)
    } else if (switchSets === 0) {
        submitValues(inputWage2, inputHours2, inputDays2)
    }
})

compare.addEventListener('click', ()=> {
    if (inputWage.value != '' && inputHours.value != '' && inputDays.value != '' && inputWage2.value != '' && inputHours2.value != '' && inputDays2.value != '') {
        
        pay.forEach(button => {
            button.removeAttribute('disabled')
            button.addEventListener('click', () => {
                let change = true
                calcPay(button.innerText[0], inputWage2.value, inputHours2.value, inputDays2.value, change)
            })
        })
    }
})

// Switches between first and second set of values
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

// Resets selected set of Values
function resetValues (wage, hours, days) {
    wage.value = ''
    wage.removeAttribute('disabled')
    hours.value = ''
    hours.removeAttribute('disabled')
    days.value = ''
    days.removeAttribute('disabled')

    dailyp.setAttribute('disabled', '')
    weeklyp.setAttribute('disabled', '')
    monthlyp.setAttribute('disabled', '')
    yearlyp.setAttribute('disabled', '')
    check.setAttribute('disabled', '')
}

// Submits selected set of Values
function submitValues (wage, hours, days) {
    if (wage.value != '' && hours.value != '' && days.value != '') {
        wage.setAttribute('disabled', '')
        hours.setAttribute('disabled', '')
        days.setAttribute('disabled', '')
        
        pay.forEach(button => {
            button.removeAttribute('disabled')
            button.addEventListener('click', () => {
                let change = false
                calcPay(button.innerText[0], wage.value, hours.value, days.value, change)
            })
        })
    }  
}

// Outputs Pay Estimation
function calcPay (input, wage, hour, day, compare) {
    let week = 2 // In Weeks
    let month = 4
    let year = 48 
    switch (input) {
        case "D":
            if (compare == false) {
                x  = (wage * hour)
                outputResult.innerText = `Pay: $${x}`
            } else if (compare == true) {  
                x = (wage * hour) //Second Set
                y = (inputWage.value * inputHours.value) // First Set
                outputResult.innerText = `With a wage of $${inputWage.value} with ${inputHours.value} hour(s) for ${inputDays.value} day(s) you get paid: $${y} Daily`
                outputResult.innerText += `\n With a wage of $${wage} with ${hour} hour(s) for ${day} day(s) you get paid: $${x} Daily`
            }
        break;

        case "Y":
            if (compare == false) {
                x  = (wage * hour * day * year)
                outputResult.innerText = `Pay: $${x}`
            } else if (compare == true) {  
                x = (wage * hour * day * year) 
                y = (inputWage.value * inputHours.value * inputDays.value * year )
                outputResult.innerText = `With a wage of $${inputWage.value} with ${inputHours.value} hour(s) for ${inputDays.value} day(s) you get paid: $${y} Yearly`
                outputResult.innerText += `\n With a wage of $${wage} with ${hour} hour(s) for ${day} day(s) you get paid: $${x} Yearly`

            }
        break;

        case "M":
            if (compare == false) {
                x  = (wage * hour * day * month)
                outputResult.innerText = `Pay: $${x}`
            } else if (compare == true) {  
                x = (wage * hour * day * month) 
                y = (inputWage.value * inputHours.value *inputDays.value * month )
                outputResult.innerText = `With a wage of $${inputWage.value} with ${inputHours.value} hour(s) for ${inputDays.value} day(s) you get paid: $${y} Monthly`
                outputResult.innerText += `\n With a wage of $${wage} with ${hour} hour(s) for ${day} day(s) you get paid: $${x} Monthly`
            }
        break;

        case "W":
            if (compare == false) {
                x  = (wage * hour * day)
                outputResult.innerText = `Pay: $${x}`
            } else if (compare == true) {  
                x = (wage * hour * day) 
                y = (inputWage.value * inputHours.value *inputDays.value )
                outputResult.innerText = `With a wage of $${inputWage.value} with ${inputHours.value} hour(s) for ${inputDays.value} day(s) you get paid: $${y} Weekly`
                outputResult.innerText += `\n With a wage of $${wage} with ${hour} hour(s) for ${day} day(s) you get paid: $${x} Weekly`
            }
        break;

        case "C":
            if (compare == false) {
                x  = (wage * hour * day * week)
                outputResult.innerText = `Pay: $${x}`
            } else if (compare == true) {  
                x = (wage * hour * day * week) 
                y = (inputWage.value * inputHours.value * inputDays.value * week )
                outputResult.innerText = `With a wage of $${inputWage.value} with ${inputHours.value} hour(s) for ${inputDays.value} day(s) you get paid: $${y} every check`
                outputResult.innerText += `\n With a wage of $${wage} with ${hour} hour(s) for ${day} day(s) you get paid: $${x} every check`
            }
        break;

    }
}
