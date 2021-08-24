const inputWage = document.querySelector('[wage]')
const hours = document.querySelector('[Hour]')
const days = document.querySelector('[Day]')

const reset = document.querySelector('[reset]')
const submit = document.querySelector('[submit]')

const dailyp = document.querySelector('[daily]')
const yearlyp = document.querySelector('[yearly]')
const monthlyp = document.querySelector('[monthly]')
const weeklyp = document.querySelector('[weekly]')
const check = document.querySelector('[check]')

const pay = [dailyp, yearlyp, monthlyp, weeklyp, check]
const outputP = document.querySelector('[result]')

submit.addEventListener('click', ()=> {

    if (inputWage.value != '' && hours.value != '' && days.value != '') {
        inputWage.setAttribute('disabled', '')
        hours.setAttribute('disabled', '')
        days.setAttribute('disabled', '')
        
        pay.forEach(button => {
            button.removeAttribute('disabled')
        })
    }
})

pay.forEach(button => {
    button.addEventListener('click', () => {
        calcPay(button.innerText[0])
    })
})

function calcPay (input) {
    const wage = inputWage.value
    switch (input) {
        case "D":
            x  = (wage * hours.value)
            outputP.innerText = 'Pay: $' + x
        break;

    }
}
