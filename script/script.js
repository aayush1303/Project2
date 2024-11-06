window.addEventListener("scroll", function() {
    const topBar = document.getElementById("topBar");
    const mainHeader = document.getElementById("mainHeader");

    if (window.scrollY > 10) {
        topBar.style.display = "none";
        mainHeader.style.top = "0";
        mainHeader.classList.add("scrolled-header");
    } else {
        topBar.style.display = "flex";
        mainHeader.style.top = "40px";
        mainHeader.classList.remove("scrolled-header"); 
    }
});


const menuIcon = document.getElementById("menuIcon");
const menuContainer = document.getElementById("menuContainer");
const closeIcon = document.getElementById("closeIcon");

menuIcon.addEventListener("click", function() {
    menuContainer.classList.remove("translate-x-full");  
});

closeIcon.addEventListener("click", function() {
    menuContainer.classList.add("translate-x-full");  
});


document.getElementById("arrowToggle").addEventListener("click", function() {
    const options = document.getElementById("options");
    const icon = this.querySelector("i");

    options.classList.toggle("hidden");

    if (options.classList.contains("hidden")) {
        icon.classList.replace("fa-chevron-down", "fa-chevron-right");
    } else {
        icon.classList.replace("fa-chevron-right", "fa-chevron-down");
    }
});

var swiper = new Swiper(".default-carousel", {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

