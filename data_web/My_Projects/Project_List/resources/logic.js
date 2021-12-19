const container = document.querySelector("[container]")
const listButton = document.querySelector("[listButton]")
const userInput = document.querySelector("[itemUser]")
const deleteButton = document.querySelector("[deleteDone]")

listButton.addEventListener('click', () => {
    const newItem = document.createElement("div")
    const newDesc = document.createElement("p")
    
    container.appendChild(newItem)
    newItem.classList.add('newItem')

    newDesc.addEventListener('click', ()=> {
        if (newItem.hasAttribute('done') != true) {
            markDone(newItem)
        } else if (newItem.hasAttribute('done') == true) {
            newItem.removeAttribute('done')
        }
    })

    newItem.addEventListener('dblclick', ()=> {
        editItem(newItem, newDesc)
    })
   
    createItem(newItem, newDesc, userInput)
    createDelete(newItem, newDesc)
    createEdit(newItem, newDesc)
    createDone(newItem)
})

function createItem(newItem, newDesc, newInput) {
    let textContent = document.createTextNode(newInput.value)
    newItem.appendChild(newDesc)
    newDesc.appendChild(textContent)
    newDesc.classList.add("newDesc")
    
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

}

function createDone(newItem) {
    const newButton = document.createElement("button")
    let textContent = document.createTextNode("Mark Done")
    newItem.appendChild(newButton)
    newButton.appendChild(textContent)
    newButton.classList.add("newButton")

    newButton.addEventListener('click', ()=> {
        markDone(newItem)
    })
}

function deleteItem(parentDiv) {
    container.removeChild(parentDiv)
}

function editItem(parentDiv, parentDesc) {
    const newInput = document.createElement("input")
    const newSubmit = document.createElement("button")
    
    let textContent = parentDesc.innerText
    parentDiv.appendChild(newInput)
    newInput.value = textContent
    newInput.classList.add("newThings")
    
    textContent = document.createTextNode("Submit")
    parentDiv.appendChild(newSubmit)
    newSubmit.classList.add("newThings")
    newSubmit.appendChild(textContent)
    
    parentDesc.innerText = ''
    parentDiv.removeChild(parentDesc)
    
    newSubmit.addEventListener('click', ()=> {
        createItem(parentDiv, parentDesc, newInput)
        parentDiv.removeChild(newInput)
        parentDiv.removeChild(newSubmit)
        parentDiv.removeAttribute('done')

    })
}

function markDone(newItem) {
    newItem.setAttribute("done", "")

}

deleteButton.addEventListener('click', ()=> {
    let doneItems = document.querySelectorAll('[done]')
    doneItems.forEach(item => {
        container.removeChild(item)
    })
    
})