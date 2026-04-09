
// first image Shadow

const img = document.getElementById("dali-img")

img.style.boxShadow = "0 0 25px var(--primary2-color)"

img.addEventListener("mouseenter", () => {
    img.style.boxShadow = "0 0 40px var(--trird-color), 0 0 70px var(--primary2-color)"
    img.style.transform = "scale(1.03)"
})

img.addEventListener("mouseleave", () => {
    img.style.boxShadow = "0 0 25px var(--primary3-color)"
    img.style.transform = "scale(1)"
})

//-------------------------------------------------------

const menuOpenButton = document.querySelector("#menu-open-button")

const menuCloseButton = document.querySelector("#menu-close-button")


menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
})

menuCloseButton.addEventListener("click", () => menuOpenButton.click())


//--------------------------------------------------------


const eventDate = new Date("May 11, 2026 00:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const timerElement = document.getElementById("timer");
    
    if (timeLeft > 0) {
        timerElement.innerHTML = `${days} dienas ${hours} stundas ${minutes} minūtes ${seconds} sekundes`;
    } else {
        timerElement.innerHTML = "Dzimšanas diena!";
    }
}

setInterval(updateTimer, 1000);
updateTimer();