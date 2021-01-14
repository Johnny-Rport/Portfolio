const feetNum = document.querySelector('[ft]'); //Feet to Inches
const inchNum = document.querySelector('[in]');
const equal1 = document.querySelector('[equal1]');

equal1.addEventListener('click', () => {
    if (inchNum.value === '' || inchNum.value === '0') {
        let inches = feetNum.value * 12;
        inchNum.value = inches;
    }
    if (feetNum.value === '' || feetNum.value === '0') {
        let feet = inchNum.value / 12; 
        feetNum.value = feet;
    } 
})

const pxNum = document.querySelector('[pixel]'); //Pixel to Inches
const inchNum2 = document.querySelector('[in2]');
const equal2 = document.querySelector('[equal2]');

equal2.addEventListener('click', () => {
    if (pxNum.value === '' || pxNum.value === '0') {
        let pixels = inchNum2.value * 96;
        pxNum.value = pixels;
    }
    if (inchNum2.value === '' || inchNum2.value === '0') {
        let inches = pxNum.value / 96;
        inchNum2.value = inches;
    }
})

const cmNum = document.querySelector('[cm]'); //Centimeters to Inches
const inchNum3 = document.querySelector('[in3]');
const equal3 = document.querySelector('[equal3]');

equal3.addEventListener('click', () => {
    if (cmNum.value === '' || cmNum.value === '0') {
        let cent = inchNum3.value * 2.54;
        cmNum.value = cent;
    }
    if (inchNum3.value ==='' || inchNum3.value === '0') {
        let inches = cmNum.value / 2.54;
        inchNum3.value = inches;
    }
})

const miNum = document.querySelector('[mile]'); //Miles to Feet
const feetNum2 = document.querySelector('[ft2]');
const equal4 = document.querySelector('[equal4]');

equal4.addEventListener('click', () => {
    if (feetNum2.value === '' || feetNum2.value === '0') {
        let feet = miNum.value * 5280;
        feetNum2.value = feet;
    }
    if (miNum.value === '' || miNum.value === '0') {
        let mile = feetNum2.value / 5280;
        miNum.value = mile;
    }
})

const mNum = document.querySelector('[meters]'); //Meters to Centimeters
const cmNum2 = document.querySelector('[cm2]');
const equal5 = document.querySelector('[equal5]');

equal5.addEventListener('click', () => {
    if (cmNum2.value === '' || cmNum2.value === '0') {
        let cent = mNum.value * 100;
        cmNum2.value = cent;
    }
    if (mNum.value === '' || mNum.value === '0') {
        let meter = cmNum2.value / 100;
        mNum.value = meter;
    }
})

const miNum2 = document.querySelector('[mile2]'); //Miles to Meters
const mNum2 = document.querySelector('[meters2]');
const equal6 = document.querySelector('[equal6]');

equal6.addEventListener('click', () => {
    if (mNum2.value === '' || mNum2.value === '0') {
        let meter = miNum2.value * 1609.344;
        mNum2.value = meter;
    }
    if (miNum2.value === '' || miNum2.value === '0') {
        let mile = mNum2.value / 1609.344;
        miNum2.value = mile;
    }
});

const fareNum = document.querySelector('[f]'); //Fahrenheit to Celsius
const celNum = document.querySelector('[c]');
const equal7 = document.querySelector('[equal7]');

equal7.addEventListener('click', () =>{ //This is not as simple as the others, this uses an actual formula
    if (fareNum.value === '' || fareNum.value === '0') {
        let fare = (celNum.value * 9/5) + 32;
        fareNum.value = fare;
    }
    if (celNum.value === '' || celNum.value === '0') {
        let cel = (fareNum.value - 32) * 5/9;
        celNum.value = cel;
    }
})


const revealOne = document.querySelector('[button1]');
const showOne = document.querySelector('[show1]');
const revealTwo = document.querySelector('[button2]');
const showTwo = document.querySelector('[show2]');
const revealThree = document.querySelector('[button3]');
const showThree = document.querySelector('[show3]');

let button = 1; //button value for button functions to use

revealOne.addEventListener('click', () => {
    show(showOne)
})
revealTwo.addEventListener('click', () => {
    show(showTwo)
})
revealThree.addEventListener('click', () => {
    show(showThree)
})

function show(x) { //Button function that can be used by anything really
    if (button === 1) {
        x.removeAttribute('class');
        button = 0;
    } else if (button === 0) {
        x.setAttribute('class', 'hide');
        button = 1;
    }
}

const dataNum = document.querySelectorAll('[dataNum]'); //use this for the button to reset values for easier use
const reset = document.querySelector('[reset]');

reset.addEventListener('click', () => {
    dataNum.forEach(value => {
        value.value = '';   
    })
})

