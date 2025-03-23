function subscribe() {
    alert("Thank you for subscribing to Beauty Buddies!");
}

let currentIndex = 0;

function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel img');
    const imageWidth = images[0].clientWidth + 5;
    const maxIndex = images.length - 3;

    // Calculate the new index and loop the carousel
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = maxIndex;
    if (currentIndex > maxIndex) currentIndex = 0;

    // Smoothly move the carousel track
    track.style.transform = `translateX(${-imageWidth * currentIndex}px)`;
}
setInterval(() => {
    moveCarousel(1);
}, 3000);  // Slides every 3 seconds

