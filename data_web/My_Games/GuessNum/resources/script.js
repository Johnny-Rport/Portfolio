const button = document.getElementById("submit")
const change = document.getElementById("change")
const reset = document.getElementById("reset")
const characters = document.getElementById("text")
const input = document.getElementById("guess")
const attempt = document.getElementById("attempts")
const mode1 = document.querySelector("[mode1]")
const mode2 = document.querySelector("[mode2]")
const mode3 = document.querySelector("[mode3]")

//Starts game
let mode = 1
let num = Math.round(Math.random()*11)
console.log(num)


//Click event to change 
button.addEventListener("click", () => { 
    submit(num)
})

//Compares
function submit (num) {
    let answer = num
    if (input.value == answer) {
        characters.innerText = "You got it RIGHT!!!"
        characters.style.backgroundColor = "transparent"

    } else if (input.value > answer) {
        characters.style.backgroundColor = "transparent"
        characters.innerText = "You got it wrong! Need a smaller number."

    } else if (input.value < answer) {
        characters.style.backgroundColor = "transparent"
        characters.innerText = "You got it wrong! Need a bigger number."
    }
    

    attempt.valueAsNumber += 1
}

//Resets attempts
reset.addEventListener("click", () => { 
    attempt.valueAsNumber = 0
})

//1 - 10
mode1.addEventListener('click', () => {
    mode = 1
    changeMode(mode)
})

//1 - 50 
mode2.addEventListener('click', () => {
    mode = 2
    changeMode(mode)
})

//1 - 100
mode3.addEventListener('click', () => {
    mode = 3
    changeMode(mode)
})

//Changes Number according to mode
function changeMode (mode) {
    if (mode == 1) {
        num = Math.round(Math.random()*11)
        characters.innerText = "Answer"
        characters.style.backgroundColor = "red"
        attempt.valueAsNumber = 0
    } else if (mode == 2) {
        num = Math.round(Math.random()*51)
        characters.innerText = "Answer"
        characters.style.backgroundColor = "red"
        attempt.valueAsNumber = 0
    } else if (mode == 3) {
        num = Math.round(Math.random()*101)
        characters.innerText = "Answer"
        characters.style.backgroundColor = "red"
        attempt.valueAsNumber = 0
    }
}

//Click Event to change number
change.addEventListener("click", () => { 
    changeNum()
})

//Changes the Number
function changeNum () {
    if (mode == 1) {
        characters.innerText = "Answer"
        characters.style.backgroundColor = "red"
        num = Math.round(Math.random()*11)
    } else if (mode == 2) {
        characters.innerText = "Answer"
        characters.style.backgroundColor = "red"
        num = Math.round(Math.random()*51)
    } else if (mode == 3) {
        characters.innerText = "Answer"
        characters.style.backgroundColor = "red"
        num = Math.round(Math.random()*101)
    }
}
