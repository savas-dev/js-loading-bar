

const counter = document.querySelector('.counter');
const loadingBarFront = document.querySelector('.loadingBarFront');

let number = 0;

UpdateNumber();

function UpdateNumber(){
    counter.textContent = number + '%';
    loadingBarFront.style.width = number + '%';
    number++

    if(number < 101){
        setTimeout(UpdateNumber, 15);
    }
}