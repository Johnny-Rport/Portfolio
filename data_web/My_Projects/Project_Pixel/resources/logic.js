 

const canvas = document.querySelector('canvas')
const reset = document.querySelector('[reset]')
const size = document.querySelector('[size]')
const ctx = canvas.getContext('2d')
const colors = document.querySelector('[color]')
const brushPick = document.querySelector('[brush]')
const erasePick = document.querySelector('[erase]')
size.value = 1
let color = []
let doAct = false
let brushMode = 'BRUSH'
let x1 = 0
let y1 = 0
let x2
let y2

canvas.addEventListener('mousedown', ()=>{
    doAct = true
})

canvas.addEventListener('mouseup', ()=>{
    doAct = false
    x2 = undefined
    y2 = undefined
})

canvas.addEventListener('mouseout', ()=>{
    doAct = false
    x2 = undefined
    y2 = undefined
 })

canvas.addEventListener('mousemove', (e)=> {
    if (doAct == true) {
        x1 = x2
        y1 = y2
        x2 = e.offsetX
        y2 = e.offsetY
        draw()

    }
})


// Brush Width
size.addEventListener('click', ()=> {
    ctx.lineWidth = size.value
})

brushPick.addEventListener('click', ()=> {
    setMode(brushPick.innerText.toUpperCase())
})

erasePick.addEventListener('click', ()=> {
    setMode(erasePick.innerText.toUpperCase())
})

// Resets Canvas
reset.addEventListener('click', ()=> {
    ctx.clearRect(0,0,canvas.width, canvas.height)
})

// Grabs Color Options
for (let item = 0; item < colors.childElementCount; item++) {
    color.push(colors.children[item])   
}

// Assigns an event listener that will then choose a color
color.forEach(item => {
    item.addEventListener('click', ()=> {
        brushMode = 'BRUSH'
        setColor(item.attributes[0].name)
    })
})

function draw() {
    switch(brushMode) {
        case 'BRUSH':
            ctx.beginPath()
            ctx.lineJoin = 'round'
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()

            requestAnimationFrame(draw)
        break;

        case 'ERASE':
            ctx.fillStyle = '#99FFFF'
            ctx.beginPath()
            ctx.arc(x2, y2, 10, 0, Math.PI * 2)
            ctx.fill()
        break;

        default:
            console.log('broke')
        break;
    }
}

function setColor(color) {
    switch (color) {
        case 'red':
            ctx.strokeStyle = '#FF0000'
        break;

        case 'blue':
            ctx.strokeStyle = '#0000ff'
        break;

        case 'green':
            ctx.strokeStyle = '#008000'
        break;

        case 'orange':
            ctx.strokeStyle = '#ffa500'
        break;

        case 'purple':
            ctx.strokeStyle = '#800080'
        break;

        case 'black':
            ctx.strokeStyle = '#000000'
        break;

        default:
            console.log("Broke")
        break;
    }
}

function setMode(mode) {
    switch(mode) {
        case 'BRUSH':
            brushMode = mode 
        break;

        case 'ERASE':
            brushMode = mode
        break;

        default:
            console.log("Broke")
        break;
    }
}