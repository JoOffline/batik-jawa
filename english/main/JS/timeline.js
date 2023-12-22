let slides = document.querySelectorAll('.slide-timeline');
let dots = document.querySelectorAll('.dot-timeline');
let currentSlideIndex = 0;
let slideInterval;

function updateSlidePosition() {
    for (let slide of slides) {
        slide.style.display = 'none';
    }
    slides[currentSlideIndex].style.display = 'block';
}

function updateDots() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[currentSlideIndex].classList.add('active');
}

function moveToNextSlide() {
    if (currentSlideIndex === slides.length - 1) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
    }
    updateSlidePosition();
    updateDots();
}

function moveToPreviousSlide() {
    if (currentSlideIndex === 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex--;
    }
    updateSlidePosition();
    updateDots();
}

function setSlide(n) {
    currentSlideIndex = n;
    updateSlidePosition();
    updateDots();
}

function startSlideShow() {
    slideInterval = setInterval(moveToNextSlide, 5000); // Change slides every 5 seconds
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Add click event listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        setSlide(index);
        stopSlideShow(); // Stop automatic sliding when a dot is clicked
        startSlideShow(); // Restart the slideshow
    });
});

// Event listeners for left and right arrows
document.querySelector('.arrow-timeline.l').addEventListener('click', () => {
    moveToPreviousSlide();
    stopSlideShow(); // Stop automatic sliding when arrow is clicked
    startSlideShow(); // Restart the slideshow
});
document.querySelector('.arrow-timeline.right-arrow-timeline').addEventListener('click', () => {
    moveToNextSlide();
    stopSlideShow(); // Stop automatic sliding when arrow is clicked
    startSlideShow(); // Restart the slideshow
});

// Initial setup
updateSlidePosition();
updateDots();
startSlideShow();
