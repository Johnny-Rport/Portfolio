const des = document.querySelector('[valueAsDes0]');
const des1 = document.querySelector('[valueAsDes1]');
const des2 = document.querySelector('[valueAsDes2]');
const des3 = document.querySelector('[valueAsDes3]');
const des4 = document.querySelector('[valueAsDes4]');
const des5 = document.querySelector('[valueAsDes5]');


const showDes = [des, des1, des2, des3, des4, des5] //An array containing all the variables above.

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


