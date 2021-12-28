const container = document.querySelector("[container]")
const listButton = document.querySelector("[listButton]")
const userInput = document.querySelector("[itemUser]")
const deleteButton = document.querySelector("[deleteDone]")
const undoButton = document.querySelector('[undoButton]')
let currentState = []
let historyState = []
let indexCount = -1

setHistory(currentState)
listButton.addEventListener('click', () => {
    const newItem = document.createElement("div")
    const newDesc = document.createElement("p")
    
    container.appendChild(newItem)
    newItem.setAttribute('newItem', '')
    
   
    createItem(newItem, newDesc, userInput)
    createDelete(newItem, newDesc)
    createEdit(newItem, newDesc)
    createDone(newItem, newDesc)
})

deleteButton.addEventListener('click', ()=> {
    let doneItems = document.querySelectorAll('[done]')
    doneItems.forEach(item => {
        container.removeChild(item)
    })
    
})

undoButton.addEventListener('click', ()=> {
    undoButton.setAttribute('disabled', '')
    let verify = indexCount >= 1
    switch(verify) {
        case true:
            let mainChilds = document.querySelectorAll('[newItem]')
            mainChilds.forEach(child => {
                container.removeChild(child)
            })
            
            let indexSelector = --indexCount
            for (let state = 0; state < historyState.length; state++) {
                if (indexSelector == state) {
                    currentState = historyState[state]
                    currentState.forEach(element => {
                        container.appendChild(element)
                    })
                }
            }
            indexCount += 2
            setHistory(true)
        break;
            
        
        default:
            console.log('broken')
        break;
    }
})

function createItem(newItem, newDesc, newInput) {
    let textContent = document.createTextNode(newInput.value)
    newItem.appendChild(newDesc)
    newDesc.appendChild(textContent)
    newDesc.classList.add("newDesc")
    undoButton.setAttribute('disabled', '')
    currentState.push(newItem)
    setHistory(currentState)
}  
    
    
function createDelete(newItem) {
    const newButton = document.createElement("button")
    let textContent = document.createTextNode("Delete")
    newItem.appendChild(newButton)
    newButton.appendChild(textContent)
    newButton.classList.add("newButton")
    
    newButton.addEventListener('click', ()=> {
        deleteItem(newItem)
    })
}

function createEdit(newItem, newDesc) {
    const newButton = document.createElement("button")
    let textContent = document.createTextNode("Edit")
    newItem.appendChild(newButton)
    newButton.appendChild(textContent)
    newButton.classList.add("newButton")

    newButton.addEventListener('click', ()=> {
        editItem(newItem, newDesc)
    })

    newItem.addEventListener('dblclick', ()=> {
        editItem(newItem, newDesc)
    })

}

function createDone(newItem, newDesc) {
    const newButton = document.createElement("button")
    let textContent = document.createTextNode("Mark Done")
    newItem.appendChild(newButton)
    newButton.appendChild(textContent)
    newButton.classList.add("newButton")

    newButton.addEventListener('click', ()=> {
        markDone(newItem)
    })

    newDesc.addEventListener('click', ()=> {
        markDone(newItem)
    })
}

function deleteItem(parentDiv) {
    let copyState = []
    currentState.filter(element => {
        if (element != parentDiv) {
            copyState.push(element)
        }

        currentState = copyState
    })
    undoButton.removeAttribute('disabled')

    container.removeChild(parentDiv)
    setHistory(currentState)
    
}

function editItem(parentDiv, parentDesc) {
    const newInput = document.createElement("input")
    const newSubmit = document.createElement("button")

    if (parentDiv.hasAttribute('edit') != true) {
        let textContent = document.createTextNode("Submit")
        parentDiv.appendChild(newSubmit)
        newSubmit.classList.add("newSubmit")
        newSubmit.appendChild(textContent)
    
        textContent = parentDesc.innerText
        parentDiv.appendChild(newInput)
        newInput.value = textContent
        newInput.classList.add("newInput")
        parentDiv.setAttribute('edit', '')
    }
    
    parentDesc.setAttribute('hide', '')
    
    newSubmit.addEventListener('click', ()=> {
        parentDiv.removeChild(newInput)
        parentDiv.removeChild(newSubmit)
        parentDiv.removeAttribute('done')
        parentDiv.removeAttribute('edit')

        parentDesc.innerText = newInput.value
        parentDesc.removeAttribute('hide')

    })
}


function markDone(newItem) {
    if (newItem.hasAttribute('done') != true) {
        newItem.setAttribute("done", "")
    } else if (newItem.hasAttribute('done') == true) {
        newItem.removeAttribute('done')
    }

}


function setHistory(state) {
    switch(state) {
        case currentState:
            if (indexCount < 0) {
                indexCount += 1
                historyState.push(state.slice())
            } else if (indexCount >= 0) {
                indexCount += 1
                historyState.push(state.slice())
                console.log(indexCount)
            }
        break;

        case true:
            historyState.push(currentState.slice())
            console.log(indexCount)
        break;
    }

    
}