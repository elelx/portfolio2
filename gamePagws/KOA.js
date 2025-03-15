const images = ["../work/KoA2.png", "../work/KoA3.png", "../work/KoA4.png", "../work/KoA1.png"]; // Add your image paths here
let currentIndex = 0;

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById("slider").src = images[currentIndex];
}
