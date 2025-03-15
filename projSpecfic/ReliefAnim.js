// // Function to open pop-up with the clicked image
// function openPopup(imageSrc) {
//     document.getElementById("popup-img").src = imageSrc;
//     document.getElementById("popup").style.display = "flex";
// }

// // Function to close pop-up
// function closePopup() {
//     document.getElementById("popup").style.display = "none";
// }

// Function to open pop-up with an image, title, and description
function openPopup(imageSrc, title, text) {
    document.getElementById("popup-img").src = imageSrc;
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-text").textContent = text;
    document.getElementById("popup").style.display = "flex";
}

// Function to close pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
