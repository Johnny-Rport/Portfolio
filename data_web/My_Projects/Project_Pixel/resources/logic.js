const canvas = document.querySelector('canvas')
const reset = document.querySelector('[reset]')
const ctx = canvas.getContext('2d')
let startAction = true
let doAction = false
let x1 = 0
let y1 = 0
let x2
let y2

canvas.addEventListener('mousedown', ()=>{
    doAction = true
    startAction = false
})

canvas.addEventListener('mouseup', ()=>{
    doAction = false
    startAction = true
 })

canvas.addEventListener('mousemove', (e)=> {
    if (doAction == true) {
        x1 = x2
        y1 = y2
        x2 = e.offsetX
        y2 = e.offsetY
        
        draw()
    }
})


reset.addEventListener('click', ()=> {
    empty()
})

// The draw function connects lines even after the mouse moves to a new position, try to use a startaction boolean
function draw() {
    if (startAction == true) {
        ctx.beginPath()
        ctx.arc(x1, y2, 5, 0, Math.PI * 2)
        ctx.fill()
    } else if (startAction != true) {
        ctx.beginPath()
        ctx.lineJoin = 'round'
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
    }
    
    requestAnimationFrame(draw)
}

function empty(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
}


