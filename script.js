
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
