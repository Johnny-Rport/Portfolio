const container = document.querySelector("[container]")
const listButton = document.querySelector("[listButton]")
const userInput = document.querySelector("[itemUser]")

listButton.addEventListener('click', () => {
    createItem()
})

// Fucking break apart this function too many responsibilities
function createItem() {
    const newItem = document.createElement("div")
    const newDesc = document.createElement("p")
    const newDelete = document.createElement("button")
    const newEdit = document.createElement("button")

    container.appendChild(newItem)
    newItem.classList.add('newItem')

    let textContent = document.createTextNode(userInput.value)
    newItem.appendChild(newDesc)
    newDesc.appendChild(textContent)
    newDesc.classList.add("newDesc")
    
    textContent = document.createTextNode("Delete")
    newItem.appendChild(newDelete)
    newDelete.appendChild(textContent)
    newDelete.classList.add("newButton")

    textContent = document.createTextNode("Edit")
    newItem.appendChild(newEdit)
    newEdit.appendChild(textContent)
    newEdit.classList.add("newButton")

    newDelete.addEventListener('click', ()=> {
        deleteItem(newItem)
    })

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
    parentDiv.removeChild(parentDesc)
    
    parentDiv.appendChild(newInput)
    newInput.classList.add("newThings")
    
    parentDiv.appendChild(newSubmit)
    newSubmit.classList.add("newThings")
    
    let textContent = document.createTextNode("Create an Item")
    newSubmit.appendChild(textContent)
    
    
    newSubmit.addEventListener('click', ()=> {
        textContent = newInput.value
        console.log(textContent)
        // text is save, now save it into a new p element which will then delete the other ones since its no longer needed, ultimately, the edit is succesful
    })
}

