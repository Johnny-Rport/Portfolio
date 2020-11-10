const des = document.querySelector('[valueAsDes0]');
const des1 = document.querySelector('[valueAsDes1]');
const des2 = document.querySelector('[valueAsDes2]');
const des3 = document.querySelector('[valueAsDes3]');


const showDes = [des, des1, des2, des3] //* I know I don't need this array anymore, but as an example on how to use arrays I'll keep it, and this is my website

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
//Next try to get the banner to start moving depending on mouse position
