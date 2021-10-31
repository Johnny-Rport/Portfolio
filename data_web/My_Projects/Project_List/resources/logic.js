const container = document.querySelector("[container]")
const listButton = document.querySelector("[listButton]")
const userInput = document.querySelector("[itemUser]")

listButton.addEventListener('click', () => {
    const newItem = document.createElement("div")
    const newDesc = document.createElement("p")
    const newDelete = document.createElement("button")
    const newEdit = document.createElement("button")
    
    container.appendChild(newItem)
    newItem.classList.add('newItem')
    
    createItem(newItem, newDesc, userInput)
    createDelete(newItem, newDelete)
    createEdit(newItem, newDesc, newEdit)
})

function createItem(newItem, newDesc, newInput) {
    let textContent = document.createTextNode(newInput.value)
    newItem.appendChild(newDesc)
    newDesc.appendChild(textContent)
    newDesc.classList.add("newDesc")
    
}  
    
    
function createDelete(newItem, newDelete) {
    let textContent = document.createTextNode("Delete")
    newItem.appendChild(newDelete)
    newDelete.appendChild(textContent)
    newDelete.classList.add("newButton")
    
    newDelete.addEventListener('click', ()=> {
        deleteItem(newItem)
    })
}

function createEdit(newItem, newDesc, newEdit) {
    let textContent = document.createTextNode("Edit")
    newItem.appendChild(newEdit)
    newEdit.appendChild(textContent)
    newEdit.classList.add("newButton")

    newEdit.addEventListener('click', ()=> {
        editItem(newItem, newDesc)
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

    })
}

