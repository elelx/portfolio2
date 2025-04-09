

function opentab(event, tabname) {
    const tablinks = document.querySelectorAll(".tab-links");
    const tabcontents = document.querySelectorAll(".tab-contents");

    tablinks.forEach(link => link.classList.remove("active-link"));
    tabcontents.forEach(content => content.classList.remove("active-tab"));

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

    window.addEventListener("scroll", function() {
        const textElements = document.querySelectorAll(".text-below");
        textElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add("visible");
            }
        });
    });


const images = [" 2025Work/Ps2.png","2025Work/ATrain.png ", "2025Work/policestation2.png", "2025Work/Ps3.png", "2025Work/Ps4.png"]; // Add your image paths here
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
