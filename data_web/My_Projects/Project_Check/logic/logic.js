const inputHour = document.querySelector('[hour]') //Beginning Section where input is made
const inputDay = document.querySelector('[day]')
const submit = document.querySelector('[submit]')
const reset = document.querySelector('[reset]')

const disabled = document.querySelectorAll('[disabled]') //Array of other buttons with disabled trait
const daily = document.querySelector('[daily]')
const weekly = document.querySelector('[weekly]')
const monthly = document.querySelector('[monthly]')
const yearly = document.querySelector('[yearly]')
const check = document.querySelector('[check]')

const result = document.getElementById('result') //Ending Section where output is locating

submit.addEventListener('click', ()=> { //When Submit is clicked disables the inputs and enables the buttons
    if (inputHour.value != '' && inputDay.value != '') {
        disabled.forEach(button => {
            button.removeAttribute('disabled')
            inputHour.setAttribute('disabled', '')
            inputDay.setAttribute('disabled', '')
        })
    } else { //Otherwise the buttons are all disabled
        disabled.forEach(button => {
            button.setAttribute('disabled', '')
        })
    }
})

reset.addEventListener('click', ()=> { //Resets
    inputHour.value = ""
    inputDay.value = ""
    inputHour.removeAttribute('disabled')
    inputDay.removeAttribute('disabled')
    disabled.forEach(button => {
        button.setAttribute('disabled', '')
    })
    result.innerText = "pay"
})


daily.addEventListener('click', () => {
    Salary = 14 * inputHour.value
    result.innerText = '$' + Salary
})

weekly.addEventListener('click', () => {
    Salary = 14 * inputHour.value * inputDay.value
    result.innerText = '$' + Salary
})

monthly.addEventListener('click', () => {
    Salary = 14 * inputHour.value * inputDay.value * 2 * 2
    result.innerText = '$' + Salary
})

yearly.addEventListener('click', () => {
    Salary = 14 * inputHour.value * inputDay.value * 2 * 2 * 12
    result.innerText = '$' + Salary
})

check.addEventListener('click', () => {
    Salary = 14 * inputHour.value * inputDay.value * 2
    result.innerText = '$' + Salary
})