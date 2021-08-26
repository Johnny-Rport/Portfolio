const inputWage = document.querySelector('[wage]')
const hours = document.querySelector('[Hour]')
const days = document.querySelector('[Day]')
const inputWage2 = document.querySelector('[wage2]')
const hours2 = document.querySelector('[Hour2]')
const days2 = document.querySelector('[Day2]')

const reset = document.querySelector('[reset]')
const submit = document.querySelector('[submit]')
const reset2 = document.querySelector('[reset2]')
const submit2 = document.querySelector('[submit2]')

const dailyp = document.querySelector('[daily]')
const yearlyp = document.querySelector('[yearly]')
const monthlyp = document.querySelector('[monthly]')
const weeklyp = document.querySelector('[weekly]')
const check = document.querySelector('[check]')

const pay = [dailyp, yearlyp, monthlyp, weeklyp, check]
const hiddenE = document.querySelectorAll('[hidden]')
const shownE = document.querySelectorAll('[shown]')
const outputP = document.querySelector('[result]')
const compare = document.querySelector('[compare]')

reset.addEventListener('click', () => {
    inputWage.value = ''
    inputWage.removeAttribute('disabled')
    hours.value = ''
    hours.removeAttribute('disabled')
    days.value = ''
    days.removeAttribute('disabled')
    
})

reset2.addEventListener('click', () => {
    inputWage2.value = ''
    inputWage2.removeAttribute('disabled')
    hours2.value = ''
    hours2.removeAttribute('disabled')
    days2.value = ''
    days2.removeAttribute('disabled')
})

submit.addEventListener('click', ()=> {

    if (inputWage.value != '' && hours.value != '' && days.value != '') {
        inputWage.setAttribute('disabled', '')
        hours.setAttribute('disabled', '')
        days.setAttribute('disabled', '')
        
        pay.forEach(button => {
            button.removeAttribute('disabled')
            button.addEventListener('click', () => {
                calcPay(button.innerText[0], inputWage.value, hours.value, days.value)
            })
        })
    }
})

submit2.addEventListener('click', ()=> { //Instead of copying the first button this will instead show a another table that will show the comparision of all the salaries between the first and second values.

    if (inputWage2.value != '' && hours2.value != '' && days2.value != '') {
        inputWage2.setAttribute('disabled', '')
        hours2.setAttribute('disabled', '')
        days2.setAttribute('disabled', '')
        
        pay.forEach(button => {
            button.removeAttribute('disabled')
            button.addEventListener('click', () => {
                calcPay(button.innerText[0], inputWage2.value, hours2.value, days2.value)
            })
        })
    }
})

compare.addEventListener('click', () => {
    hiddenE.forEach(element => {
        element.removeAttribute('hidden')
    })

    shownE.forEach(element => {
        element.setAttribute('hidden', '')
    })

    alert('Enter the second set of values')
})


function calcPay (input, wage, hours, days) {
    let week = 2 //Weeks
    let month = 4
    let year = 48 
    switch (input) {
        case "D":
            x  = (wage * hours)
            outputP.innerText = 'Pay: $' + x
        break;

        case "Y":
            x  = (wage * hours * days * year )
            outputP.innerText = 'Pay: $' + x
        break;

        case "M":
            x  = (wage * hours * days * month)
            outputP.innerText = 'Pay: $' + x
        break;

        case "W":
            x  = (wage * hours * days)
            outputP.innerText = 'Pay: $' + x
        break;

        case "C":
            x  = (wage * hours * days * week)
            outputP.innerText = 'Pay: $' + x
        break;

    }
}
