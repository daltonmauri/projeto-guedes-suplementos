
let interval = 0;
let maxSlider = document.querySelectorAll('.box-image').length - 1;
let imageSlide = document.querySelectorAll('.box-image img');

slideHide();

function slideHide() {
    imageSlide;
    imageSlide[1].style.display = 'none';
    imageSlide[2].style.display = 'none'
    
}


slideAction();

function slideAction() {
    imageSlide;

    setInterval(function () {
        imageSlide[interval].style.display = "none";
        interval++;
        if (interval > maxSlider) {
            interval = 0;
        }
        imageSlide[interval].style.display = "block";

    }, 4000)

}



