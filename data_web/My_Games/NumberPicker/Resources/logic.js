const input1 = document.querySelector('[input]')
const input2 = document.querySelector('[input2]')
const output1 = document.querySelector('[result]')


function loopNums() {
    let repeats = []    
    for (i = 0; i < input1.value.length; i++) {
        for (j = 0; j < input2.value.length; j++) {
            if (input1.value[i] === input2.value[j]) {
                repeats.push(input1.value[j])
                let numPeat = repeats.length
                 output1.innerText = `The number ${input2.value} is repeated ${numPeat} times within the given set of numbers.`
                //  Use a switch method to create multiple situations where if it is 1 or zero then it says something different.
            }
        }
    }
    
}