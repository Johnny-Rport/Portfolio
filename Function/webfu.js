const des = document.querySelector('[valueAsDes0]');
const des1 = document.querySelector('[valueAsDes1]');
const des2 = document.querySelector('[valueAsDes2]');
const des3 = document.querySelector('[valueAsDes3]');
const des4 = document.querySelector('[valueAsDes4]');
const des5 = document.querySelector('[valueAsDes5]');
const des6 = document.querySelector('[valueAsDes6]');
const des7 = document.querySelector('[valueAsDes7]');

let buttonMode = 1;
function showy(x) {
        if (buttonMode === 1) {
                x.setAttribute('class', (''));
                buttonMode = 0;
        } else if (buttonMode === 0) {
                x.setAttribute('class' , ('hide'));
                buttonMode = 1;
        }
}

