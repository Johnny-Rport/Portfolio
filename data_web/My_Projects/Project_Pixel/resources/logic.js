class colorPicker {
    constructor(color) {
        this.color = color
    }

    setColor() {
        switch (this.color) {
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
    
}

const canvas = document.querySelector('canvas')
const reset = document.querySelector('[reset]')
const ctx = canvas.getContext('2d')
const colors = document.querySelector('[color]')
let color = []
// Make an input for stroke width

let doAct = false
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


reset.addEventListener('click', ()=> {
    empty()
})

function draw() {
    ctx.beginPath()
    ctx.lineJoin = 'round'
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()

    requestAnimationFrame(draw)
}

function empty(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
}

for (let item = 0; item < colors.childElementCount; item++) {
    color.push(colors.children[item])   
}

color.forEach(item => {
    item.addEventListener('click', ()=> {
        let brush  = new colorPicker(item.attributes[0].name)
        brush.setColor()
    })
})