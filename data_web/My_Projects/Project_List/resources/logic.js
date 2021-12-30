const container = document.querySelector("[container]")
const listButton = document.querySelector("[listButton]")
const userInput = document.querySelector("[itemUser]")
const deleteDone = document.querySelector("[deleteDone]")
const undoButton = document.querySelector('[undoButton]')
const redoButton = document.querySelector('[redoButton]')
let currentState = []
let historyState = []
let indexCount = -1

// Starts recording State, and first action
setHistory(currentState, 0)
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

// Creates the item
function createItem(newItem, newDesc, newInput) {
    let textContent = document.createTextNode(newInput.value)
    newItem.appendChild(newDesc)
    newDesc.appendChild(textContent)
    newDesc.classList.add("newDesc")
    undoButton.setAttribute('disabled', '')
    redoButton.setAttribute('disabled', '')
    currentState.push(newItem)
    setHistory(currentState, 0)
}  
    
// Creates the Delete button for the item 
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

// Creates the Edit button for the item
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

// Creates Done button for the item
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

// Deletes item
function deleteItem(parentDiv) {
    let copyState = []
    currentState.filter(element => {
        if (element != parentDiv) {
            copyState.push(element)
        }

        currentState = copyState
    })
    undoButton.removeAttribute('disabled')
    redoButton.setAttribute('disabled', '')

    container.removeChild(parentDiv)
    setHistory(currentState, 0)
    
}

// Edits item
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

// Marks item done
function markDone(newItem) {
    if (newItem.hasAttribute('done') != true) {
        newItem.setAttribute("done", "")
    } else if (newItem.hasAttribute('done') == true) {
        newItem.removeAttribute('done')
    }

}

// Delete all items that are marked Done
deleteDone.addEventListener('click', ()=> {
    undoButton.removeAttribute('disabled')
    redoButton.setAttribute('disabled', '')
    let items = document.querySelectorAll('[newItem]')
    let copyState = []
    items.forEach(item => {
        if (item.hasAttribute('done')) {
            container.removeChild(item)
        } else {
            copyState.push(item)
        }
    })

    currentState = copyState
    
    setHistory(currentState, 0)
})

// Undos any delete action
undoButton.addEventListener('click', ()=> {
    undoButton.setAttribute('disabled', '')
    redoButton.removeAttribute('disabled')
    reverseState()
})

// Redos undo actions
redoButton.addEventListener('click', ()=> {
    redoButton.setAttribute('disabled', '')
    undoButton.removeAttribute('disabled')
    reverseState()
})

// Finds and Reverses state
function reverseState() {
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

            setHistory(currentState, 1)
        break;
            
        
        default:
            console.log('broken')
        break;
    }
}


// Sets History
function setHistory(state, action) {
    switch(action) {
        case 0:
            indexCount += 1
            historyState.push(state.slice())
        break;

        case 1:
            indexCount += 2
            historyState.push(state.slice())
        break;
    }

    
}