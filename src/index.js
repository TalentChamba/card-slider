import "./bootstrap.min.css";
import "./style.scss";


//set a constant for the image path to allow for images to be build
const imagePath = require.context('./assets/images/', true);

let container = document.getElementById('container')
let slider = document.getElementById('slider');
let slides = document.getElementsByClassName('slide').length;
let arrow = document.getElementsByClassName('ArrowDirection');


let currentPosition = 0;
let currentMargin = 0;
let slidesPerPage = 0;
let slidesCount = slides - slidesPerPage;
let containerWidth = container.offsetWidth;
let prevKeyActive = false;
let nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}


//setting slider parameters based on the returned width of 'container'
function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        arrow[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        arrow[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        arrow[1].classList.add('inactive');
    }
}

//run the setParam Function
setParams();

window.onload=function(){
  document.getElementById("rightClick").addEventListener("click", slideRight);
  document.getElementById("LeftClick").addEventListener("click", slideLeft);
}

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        arrow[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        arrow[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        arrow[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        arrow[0].classList.remove('inactive');
    }
};
