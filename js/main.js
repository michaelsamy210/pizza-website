window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");

    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Show button
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// Scroll to top
topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

    let scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {

            navLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + section.id) {
                    link.classList.add("active");
                }
            });

        }
    });

});

window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});



let animatedElements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", function () {

    animatedElements.forEach(el => {
        let position = el.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });

});