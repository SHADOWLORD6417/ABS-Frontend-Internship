const slider = document.querySelector('.room-container');
const items = document.querySelectorAll('.room-item');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currIdx = 0;

function updateSlider() {
    const translateX = -currIdx * (100 / items.length);
    slider.style.transform = `translateX(${translateX}%)`;
}

prevButton.addEventListener('click', () => {
    currIdx = (currIdx > 0) ? currIdx - 1 : items.length - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currIdx = (currIdx < items.length - 1) ? currIdx + 1 : 0;
    updateSlider();
});


const sliderImages = document.querySelectorAll('.image-slider .slides img');
let imgIdx = 0;

function showNextImage() {
    sliderImages[imgIdx].classList.remove('active');
    imgIdx = (imgIdx + 1) % sliderImages.length;
    sliderImages[imgIdx].classList.add('active');
}

sliderImages[imgIdx].classList.add('active');
setInterval(showNextImage, 3000);
