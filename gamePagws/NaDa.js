const images = ["../NaDaGame/cat snapshot.png", "../NaDaGame/house.png", "../NaDaGame/portal sightline.png", "../NaDaGame/example.png"]; // Add your image paths here
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
