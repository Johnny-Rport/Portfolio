const des0 = document.querySelector('[valueAsDes0]');
/*const des1 = document.querySelector('[valueAsDes1]');
const des2 = document.querySelector('[valueAsDes2]');
const des3 = document.querySelector('[valueAsDes3]'); *///Original values for each of the seperate paragraphs, but arrays scared me at the time.
const button = document.querySelector('[valueAsButton]');


button.addEventListener('click', showy);
//let des = [des0, des1, des2, des3,] //My array that I did not know how to implement at the time maybe I can return to this and overengineer this to oblivion.
let buttonMode = 1;
function showy () {
        if (buttonMode === 1) {
                des0.setAttribute('class', (''));
                buttonMode = 0;
        } else if (buttonMode === 0) {
                des0.setAttribute('class' , ('hide'));
                buttonMode = 1;
        }
}
