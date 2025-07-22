const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.remove('dot_selected');
    });
    dots[index].classList.add('dot_selected');
}


function renderSlide(index) {
    const imagePath = `assets/images/slideshow/${slides[index].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${index + 1}`;
    document.querySelector('p').innerHTML = slides[index].tagLine;
    updateDots(index);
}

function changeSlide(direction) {
    if (direction === 'left') {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    } else if (direction === 'right') {
        currentIndex = (currentIndex + 1) % slides.length;
    }
    renderSlide(currentIndex);
    console.log(`Clic sur la flèche ${direction}`);
}

arrowLeft.addEventListener('click', () => changeSlide('left'));
arrowRight.addEventListener('click', () => changeSlide('right'));

renderSlide(currentIndex);
