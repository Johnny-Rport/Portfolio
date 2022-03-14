const canvas = document.querySelector('canvas')
const reset = document.querySelector('[reset]')

// Figure out how to make it only track the mouse when the mouse is held down
canvas.addEventListener('mousedown', ()=>{
   doAction = true
})

canvas.addEventListener('mouseup', ()=>{
    doAction = false
 })

canvas.addEventListener('mousemove', (e)=> {
    if (doAction == true) {
        let x = e.offsetX
        let y = e.offsetY 
        draw(x, y)
    }
})


reset.addEventListener('click', ()=> {
    empty()
})

function draw(x, y) {
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.arc(x, y, 5, 0, 2 * Math.PI)
    ctx.fill()
    
}

function empty(){
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0,0,canvas.width, canvas.height)
}


