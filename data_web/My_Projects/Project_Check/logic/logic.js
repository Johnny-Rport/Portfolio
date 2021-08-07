const inputHour = document.querySelector('[hour]')
const inputDay = document.querySelector('[day]')
const submitBut = document.querySelector('[submit]')

const daily = document.querySelector('[daily]')
const weekly = document.querySelector('[weekly]')
const monthly = document.querySelector('[monthly]')
const yearly = document.querySelector('[yearly]')
const check = document.querySelector('[check]')

const disabled = document.querySelectorAll('[disabled]')

submitBut.addEventListener('click', ()=> {
    if (inputHour.value != '' && inputDay.value != '') {
        disabled.forEach(button => {
            button.removeAttribute('disabled')
        })
    } else {
        disabled.forEach(button => {
            button.setAttribute('disabled', '')
        })
    }
})

