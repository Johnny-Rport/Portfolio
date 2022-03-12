const canvas = document.querySelector('canvas')
const reset = document.querySelector('[reset]')

canvas.style.setProperty('border', 'black solid 6px')
canvas.style.setProperty('width', '40vw')
canvas.style.setProperty('height', '50vh')

// Figure out how to make it only track the mouse when the mouse is held down
canvas.addEventListener('mousemove', (e)=> {
    x = e.clientX
    y = e.clientY   
    
    console.log(x, y)
}) 

reset.addEventListener('click', ()=> {
    empty()
})

function draw(x,y) {
    const line = canvas.getContext('2d')

    line.beginPath()
    line.moveTo(x, y);
    line.lineTo(x, y);
    line.stroke();
}

function empty(){
    const x = canvas.getContext('2d')
    x.clearRect(0,0,canvas.width, canvas.height)
}


