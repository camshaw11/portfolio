const scrollTop = document.querySelector('.to-top');
// add smooth scrolling to webpage
scrollTop.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

const divGroup = document.querySelectorAll('.small-btn');
const defaultImg = document.getElementById('default');
const btnGroup = document.querySelector('.gallery');

const opacity = "rgba(255, 127, 80, 1)";

// set main images button opacity to full
divGroup[0].style.backgroundColor = opacity;

// click event for the buttons wrapper div
btnGroup.addEventListener('click', imageChanger);

// runs on click of image buttons
function imageChanger(e) {

    divGroup.forEach(div => (div.style.backgroundColor = "rgba(255, 127, 80, 0.5)"))

    if(e.target.classList.contains("btn1")) {
        defaultImg.src = "img/stash/stash-one.png";
    } else if (e.target.classList.contains("btn2")) {
        defaultImg.src = "img/stash/stash-two.png";
    } else if (e.target.classList.contains("btn3")) {
        defaultImg.src = "img/stash/stash-three.png";
    } else if (e.target.classList.contains("btn4")) {
        defaultImg.src = "img/stash/stash-four.png";
    }

    if(e.target.classList.contains("small-btn")) {
        e.target.style.backgroundColor = opacity;
    };
}