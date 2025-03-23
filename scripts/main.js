function subscribe() {
    alert("Thank you for subscribing to Beauty Buddies!");
}
let currentIndex = 0;

function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel img');
    const imageWidth = images[0].clientWidth + 5;  // Including margin
    const maxIndex = images.length - 3;  // Adjust according to visible images

    // Calculate the new index
    currentIndex += direction;

    // Loop the carousel
    if (currentIndex < 0) currentIndex = maxIndex;
    if (currentIndex > maxIndex) currentIndex = 0;

    // Move the carousel track
    track.style.transform = `translateX(${-imageWidth * currentIndex}px)`;
}
setInterval(() => {
    moveCarousel(1);
}, 3000);  // Slides every 3 seconds
