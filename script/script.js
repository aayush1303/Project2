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

var swiperTestimonial = new Swiper(".testimonial-carousel .mySwiper", {
    slidesPerView: 2,
    spaceBetween: 28,
    centeredSlides: false,
    loop: true,
    pagination: {
        el: ".testimonial-carousel .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".testimonial-carousel .swiper-button-next",
        prevEl: ".testimonial-carousel .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 28,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
    },
});

//FAQ
function toggleFaq(id) {
    // Get all FAQ contents, containers, and spans
    const allFaqContents = document.querySelectorAll('.faq-content');
    const allFaqContainers = document.querySelectorAll('.faq-container');
    const allIcons = document.querySelectorAll('.faq-icon i');
    const allIconSpans = document.querySelectorAll('[id^="span-"]');

    // Get specific elements by ID for the clicked FAQ
    const faqContent = document.getElementById(`faq-${id}`);
    const icon = document.getElementById(`icon-${id}`).querySelector('i');
    const iconSpan = document.getElementById(`span-${id}`);
    const faqContainer = document.getElementById(`faq-container-${id}`);

    // Check if the clicked FAQ item is currently open
    const isCurrentlyOpen = !faqContent.classList.contains('max-h-0');

    // Close all FAQ items and reset styles
    allFaqContents.forEach(content => {
        content.classList.add('max-h-0');
        content.classList.remove('max-h-screen', 'pb-4');
    });

    allFaqContainers.forEach(container => {
        container.classList.remove('bg-[var(--color-secondary)]', 'text-[#fff]');
    });

    allIcons.forEach(icon => {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
        icon.classList.remove('text-black');
    });

    allIconSpans.forEach(span => {
        span.classList.remove('bg-white');
        span.classList.add('bg-[var(--color-secondary)]');
    });

    // Toggle the current FAQ item only if it was not open
    if (!isCurrentlyOpen) {
        faqContent.classList.remove('max-h-0');
        faqContent.classList.add('max-h-screen', 'pb-4'); // Opens FAQ item
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
        icon.classList.remove('text-white');
        icon.classList.add('text-black');
        faqContainer.classList.add('bg-[var(--color-secondary)]', 'text-[#fff]');
        iconSpan.classList.add('bg-white'); // Sets background to white for active span
    }
}
